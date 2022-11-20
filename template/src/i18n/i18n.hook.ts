import I18next, { LanguageDetectorAsyncModule } from 'i18next';
import { useCallback, useMemo } from 'react';
import { initReactI18next } from 'react-i18next';
import { useAsync } from 'react-util-hooks';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { executeActionAsync } from '@/common/logic';
import { I18nStorage } from '@/utils/storage';

import i18nConfig from './i18n.config';

/**
 * Create language detector.
 *
 * @returns The language detector.
 */
function useLanguageDetector() {
  // Init language detector.
  const initDetector = useCallback<LanguageDetectorAsyncModule['init']>(() => {
    // Do nothing.
  }, []);

  // Detect language.
  const detectLanguage = useCallback<LanguageDetectorAsyncModule['detect']>(async (setLanguage) => {
    await executeActionAsync(
      async () => {
        const language = (await AsyncStorage.getItem(I18nStorage.LANGUAGE)) ?? i18nConfig.defaultLocale;

        setLanguage(language);
      },
      {
        errorMessage: "Couldn't detect language.",
      },
    );
  }, []);

  // Cache language when changed.
  const cacheLanguage = useCallback<LanguageDetectorAsyncModule['cacheUserLanguage']>(async (language) => {
    await executeActionAsync(
      async () => {
        await AsyncStorage.setItem(I18nStorage.LANGUAGE, language);
      },
      { errorMessage: "Couldn't detect language." },
    );
  }, []);

  // Language detector.
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
export default function useI18n() {
  const languageDetector = useLanguageDetector();

  // Init i18n
  const initI18n = useCallback(async () => {
    await executeActionAsync(
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
    );
  }, [languageDetector]);

  const { status } = useAsync(initI18n);

  return status;
}
