import { Game } from '2djs'
import GameState from './states/GameState.ts'

const game = new Game({
  title: 'My Game',
  width: 256,
  height: 240,
  fps: 60
})

game.start(new GameState())
