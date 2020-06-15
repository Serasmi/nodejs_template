interface ISuccess {
  data: any;
}

interface IError {
  error: any;
}

export const ResHelper = {
  success: (data: any): ISuccess => {
    return {
      data,
    };
  },
  error: (error: any): IError => {
    return {
      error,
    };
  },
};
