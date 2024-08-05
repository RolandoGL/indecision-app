export const sleep = (seconst: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconst * 1000);
  });
};
