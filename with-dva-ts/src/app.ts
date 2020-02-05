
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message); // tslint:disable-line no-console
    },
    namespacePrefixWarning: false,
  },
};
