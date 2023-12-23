import { ToastType, createToast } from "@/store/redux/reducers/toast";
import { ReduxStore } from "@/store/redux/store";

const makeToast = (values: ToastType) => {
  ReduxStore.dispatch(createToast(values));
};

export default makeToast;
