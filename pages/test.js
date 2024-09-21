export default function Test() {
  class auto {
    constructor(mark, year, model) {
      this.mark = mark
      this.year = year
      this.model = model
    }

    Opis () {
      return <span>{this.model} {this.mark} {this.year}</span>
    }
  }

  const newAuto = new auto ('Toyota', '2022', 'corolla')
   
  return <div>{newAuto.Opis()}</div>;
}
