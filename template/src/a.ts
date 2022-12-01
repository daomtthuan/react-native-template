import { PartialDeep } from 'type-fest';

type ABC = {
  doSomething: (arg1: number, arg2: string) => { result1: number; result2: string; result3: boolean };
};

type PartialDeepABC = PartialDeep<
  ABC,
  {
    recurseIntoFunctions: true;
  }
>;

const xyz: PartialDeepABC = {
  doSomething: (arg1, arg2) => {
    if (arg1 === 1 && arg2 === 'bar') {
      return {
        result3: true,
      };
    }

    if (arg1 === 1) {
      return {
        result1: 123,
        result3: false,
      };
    }

    if (arg2 === 'bar') {
      return {
        result2: 'foo',
        result3: false,
      };
    }

    return { result3: false };
  },
};
