import { Dispatch } from "redux";
import { History } from "history";

interface CounterModel {
  number: number;
}

export interface GlobalState {
  counter: CounterModel;
}

export interface UmiComponentProps {
  history: History;
  dispatch: Dispatch<any>;
}
