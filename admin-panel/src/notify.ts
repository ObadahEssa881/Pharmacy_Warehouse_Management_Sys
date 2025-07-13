// src/notify.ts
import { useSnackbar } from 'notistack';

export const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    notifySuccess: (msg: string) =>
      enqueueSnackbar(msg, { variant: 'success' }),
    notifyError: (msg: string) => enqueueSnackbar(msg, { variant: 'error' }),
  };
};
