export default function Test() {

  class animal {
    constructor (name) {
      this.name = name
    }
    sound() {
      return 'dzwiek zwierzecia'
    }
  }

  class dog extends animal {
    sound(){
      return <span>{this.name} szczeka: Hau Hau!<br/></span>
    }
  }

  class owczarek extends dog {
    constructor(name, rasa) {
      super(name)
      this.rasa = rasa
    }
  }

  class cat extends animal {
    sound(){
      return <span>{this.name} miauczy: Miau Miau!<br/></span>
    }
  }

  const burek = new dog ('Burek')
  const mruczek = new cat ('Mruczek')
  const azor = new owczarek ('Azor', 'owczarek')

  return <span>{burek.sound()}{mruczek.sound()}{azor.sound()}</span>
}

