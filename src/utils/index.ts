export const getIdFromUrl = (url: string) => {
  const match = url.match(/\d+/);
  if (match) {
    return match[0];
  }
  return;
};

type Func = (...args: any[]) => any;

export const debounce = <T extends Func>(fn: T, delay: number) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

export const formatNumber = (number: number) =>
  new Intl.NumberFormat().format(number);
