import { GameObject, Graphics } from "2djs";

class Char extends GameObject {
  async start () {

  }

  render (g: Graphics) {
    g.on('goLayer').drawRect(0, 0, 56, 56, '#F00')
  }
}

export default Char
