abstract class Uncompress {
  protected file: Blob;

  constructor(file: Blob) {
    this.file = file;
  }

  // eslint-disable-next-line class-methods-use-this
  async extract(): Promise<Blob[]> {
    throw new Error('method to be defined');
  }
}

export default Uncompress;
