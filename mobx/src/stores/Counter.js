import { observable, action } from 'mobx';

class Counter {
  @observable count = 0;

  @action handleInc = () => {
    this.count++;
  };

  @action handleDec = () => {
    this.count--;
  };
}

export default new Counter();
