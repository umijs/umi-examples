import { GlobalState } from "@/common/type";
import { DvaModelBuilder } from "dva-model-creator";
import { add, minus } from "@/actions/counter";

const initState: GlobalState["counter"] = {
  number: 0
};

const builder = new DvaModelBuilder(initState, "counter")
  .case(add, ({ number }) => ({ number: number + 1 }))
  .case(minus, ({ number }) => ({ number: number - 1 }));

export default builder.build();
export const actions = {
  add,
  minus
};
