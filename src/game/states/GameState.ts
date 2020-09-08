import {
  State,
  Graphics,
  Sprite,
  Tile,
  Animation,
  SpriteSheet,
} from '2djs'
import LoadingState from './LoadingState'

class GameState extends State {
  blockX!: number
  blockY!: number
  blockVelocity!: number;
  sprite!: Sprite
  tile!: Tile
  bgLayer!: number
  animation!: Animation;
  spritesheet!: SpriteSheet;

  canUpdate = false
  canRender = false

  async start() {
    setTimeout(() => {
      this.canUpdate = true
      this.canRender = true
    }, 1000)

    this.blockX = 100
    this.blockY = 100
    this.blockVelocity = 100
    // this.layers.add('background1', new BackgroundLayer))

    const image = await this.loader.loadImage('game/images/test.jpg')

    this.sprite = new Sprite(image)
    this.tile = new Tile(image)

    const image2 = await this.loader.loadImage('game/images/mario.jpg')
    const image3 = await this.loader.loadImage('game/images/mario.png')

    this.animation = new Animation([
      { frame: this.sprite, speed: 500 },
      { frame: image2, speed: 500 },
    ], true)

    this.spritesheet = new SpriteSheet(image)
    this.spritesheet.defineSprite('primeiro', 0, 0, 100, 100)
    this.spritesheet.defineSprite('segundo', 200, 200, 20, 20)
    this.spritesheet.defineTile(0, 100, 100, 20, 20)

    this.spritesheet.defineAnimation('test', [
      {
        frame: 'primeiro',
        speed: 500
      },
      {
        frame: 'segundo',
        speed: 500
      }
    ], true)

    // Layer 0 - Background
    this.layers.add({ isVisible: true })

    // Layer 1 - Foreground
    this.layers.add({ isVisible: true, transparency: 1 })

    // this.layers.get(0).canRender = false
  }

  update(dt: number) {
    if (this.input.get('KeyA')) {
      this.blockX -= this.blockVelocity * dt
    }

    if (this.input.get('KeyD')) {
      this.changeToState(new LoadingState(), {
        nextLevel: '2'
      })
    }
  }

  render(g: Graphics) {
    // g.drawSprite(this.sprite, 0, 0, 100, 100)
    // g.drawTile(this.tile, 100, 0, 100, 100)

    // g.drawAnimation(this.animation, 200, 0, 100, 100)

    this.onLayer(1).drawRect(this.blockX, this.blockY, 100, 100, '#550000')

    // this.spritesheet.drawSprite(g, 'primeiro', 500, 0)
    // this.spritesheet.drawTile(g, 0, 400, 0)
    // // this.spritesheet.drawAnimation(g, 'test', 400, 400)
    // g.drawAnimation(<Animation>this.spritesheet.animations.get('test'), 400, 400)

    this.onLayer(0).drawRect(0, 0, 300, 800, '#555500')
    this.onLayer(0).drawSprite(this.sprite, 0, 0)
    this.onLayer(1).drawRect(0, 0, 300, 300, '#0000FF')

    // this.onLayer(1).drawRect()
    // this.layers.get(1).g.drawRect

    // g.drawSprite
    // g.drawTile
    // g.drawImage
    // g.drawRect
    // g.drawTriangle

    // Advanced ----
    // g.light.render('simple-light')

    // this.layers.renderAll()
    // this.layer[0].render()
    // this.layer['background'].render()
  }
}

export default GameState
