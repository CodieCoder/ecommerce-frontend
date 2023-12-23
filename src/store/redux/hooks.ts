import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxDispatchType, ReduxRootStateType } from "./store";

interface IuseAppSelector<TSelected> {
  value: (state: ReduxRootStateType) => TSelected;
}

type IselectorFn<T> = (state: ReduxRootStateType) => T;

export const useAppDispatcher = () => useDispatch<ReduxDispatchType>();
export const useAppSelector: TypedUseSelectorHook<ReduxRootStateType> = <
  Tselected
>(
  selectorFn: (state: ReduxRootStateType) => Tselected
) => useSelector((state: ReduxRootStateType) => selectorFn(state));
// : TypedUseSelectorHook<ReduxRootStateType>
// useSelector((state: ReduxRootStateType) )

// export const useAppDispatcher = () => useDispatch<ReduxDispatchType>();
// export const useAppSelector: TypedUseSelectorHook<ReduxRootStateType> =
//   useSelector;
