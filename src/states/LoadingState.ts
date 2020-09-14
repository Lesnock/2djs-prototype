import { State, Graphics } from '2djs'
import GameState from './GameState'

class LoadingState extends State {
  nextLevel!: string

  async start({ nextLevel }: any = {}) {
    console.log('start Loading')
    this.nextLevel = nextLevel
    this.loadAssets()
  }

  async loadAssets() {
    await new Promise(resolve => {
      setTimeout(resolve, 5000)
    })

    this.changeState(new GameState(), {
      nextLevel: '2'
    })
  }

  update() {

  }

  render(g: Graphics) {
    g.context.font = '48px sans-serif'
    g.context.fillText('Loading...', 100, 100)
  }
}

export default LoadingState
