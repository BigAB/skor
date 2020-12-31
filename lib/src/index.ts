export class Skor {
  subscribed = false;
  otherProp = [];

  subscribe() {
    this.subscribed = true;
    return () => {
      this.subscribed = false;
    };
  }
}

export default Skor;
