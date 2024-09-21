export default function Test() {
  class auto {
    constructor(mark, year, model) {
      this.mark = mark
      this.year = year
      this.model = model
    }

    Opis () {
      return <span>{this.model} {this.mark} {this.year}<br/></span>
    }
  }

  class truck extends auto {
    constructor(mark, year, model, type) {
      super(mark, year, model)
      this.type = type
    }
    Opis () {
      return <span>{this.type} {this.model} {this.mark} {this.year}<br/></span>
    }
  }

  const newAuto = new auto ('Toyota', '2022', 'corolla')
  const newTruck = new truck('motobike', 'x', '2020', 'y')
   
  return (
  <div>
    {newAuto.Opis()}{newTruck.Opis()}
  </div>
  )
}
