import { actionCreatorFactory } from "dva-model-creator";

const actionCreator = actionCreatorFactory("counter");

export const add = actionCreator("add");
export const minus = actionCreator("minus");
