import { Game } from '2djs'
import GameState from './states/GameState.ts'

const game = new Game({
  title: 'My Game',
  width: 800,
  height: 600,
  fps: 60
})

game.start(new GameState())
