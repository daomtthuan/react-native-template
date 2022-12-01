import I18next, { LanguageDetectorAsyncModule } from 'i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { initReactI18next } from 'react-i18next';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { hookStatus, HookStatus } from '@/common/hook';
import { executeAction } from '@/common/logic';
import { i18nStorage } from '@/utils/storage';

import i18nConfig from './i18n.config';

/**
 * Create language detector.
 *
 * @returns The language detector.
 */
function useLanguageDetector() {
  /** Init language detector. */
  const initDetector = useCallback<LanguageDetectorAsyncModule['init']>(() => {
    // Do nothing.
  }, []);

  /** Detect language. */
  const detectLanguage = useCallback<LanguageDetectorAsyncModule['detect']>(async (setLanguage) => {
    await executeAction(
      async () => {
        const language = (await AsyncStorage.getItem(i18nStorage.language)) ?? i18nConfig.defaultLocale;

        setLanguage(language);
      },
      {
        errorMessage: "Couldn't detect language.",
      },
    );
  }, []);

  /** Cache language when changed. */
  const cacheLanguage = useCallback<LanguageDetectorAsyncModule['cacheUserLanguage']>(async (language) => {
    await executeAction(
      async () => {
        await AsyncStorage.setItem(i18nStorage.language, language);
      },
      { errorMessage: "Couldn't detect language." },
    );
  }, []);

  /** Language detector. */
  const languageDetector = useMemo<LanguageDetectorAsyncModule>(
    () => ({
      type: 'languageDetector',
      async: true,
      init: initDetector,
      detect: detectLanguage,
      cacheUserLanguage: cacheLanguage,
    }),
    [initDetector, detectLanguage, cacheLanguage],
  );

  return languageDetector;
}

/**
 * Init i18n.
 *
 * @returns The I18n status.
 */
function useI18n() {
  const [status, setStatus] = useState<HookStatus>(hookStatus.idle);

  const languageDetector = useLanguageDetector();

  // Init i18n.
  useEffect(() => {
    executeAction(
      async () => {
        await I18next
          // Use language detector.
          .use(languageDetector)

          // Use react-i18next.
          .use(initReactI18next)

          // Init i18n.
          .init({
            compatibilityJSON: 'v4',
            ns: i18nConfig.namespaces,
            defaultNS: i18nConfig.defaultNamespace,
            resources: i18nConfig.resources,
            react: {
              useSuspense: false,
            },
          });
      },
      { errorMessage: "Couldn't init I18n." },
    )
      .then(() => setStatus(hookStatus.success))
      .catch(() => setStatus(hookStatus.error));
  }, [languageDetector]);

  return status;
}

export default useI18n;
