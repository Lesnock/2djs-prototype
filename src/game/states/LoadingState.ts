import { State, Graphics } from '2djs'
import GameState from './GameState'

class LoadingState extends State {
  canUpdate: boolean = false

  async start({ nextLevel }: any) {
    setTimeout(() => {
      this.canUpdate = true
    }, 1000)
  }

  update() {
    if (this.input.get('KeyD')) {
      this.changeToState(new GameState(), {
        nextLevel: '2'
      })
    }
  }

  render(g: Graphics) {
    g.drawRect(0, 0, 200, 200)
  }
}

export default LoadingState
