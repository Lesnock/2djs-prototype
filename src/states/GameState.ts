import {
  State,
  Graphics,
  Sprite,
  Tile,
  Animation,
  SpriteSheet,
  Tileset
} from '2djs'
import LoadingState from './LoadingState'

class GameState extends State {
  blockX!: number
  blockY!: number
  blockVelocity!: number;
  sprite!: Sprite
  tile!: Tile
  animation!: Animation;
  spritesheet!: SpriteSheet;

  // Layers
  bgLayer!: number
  fgLayer!: number

  async start() {

    this.blockX = 100
    this.blockY = 100
    this.blockVelocity = 100
    // this.layers.add('background1', new BackgroundLayer))

    const image = await this.loader.loadImage('images/mario4k.jpg')

    this.sprite = new Sprite(image, {
      opacity: .5
    })
    // this.tile = new Tile(image)

    // const image2 = await this.loader.loadImage('images/mario.jpg')
    // const image3 = await this.loader.loadImage('images/mario.png')

    // this.animation = new Animation([
    //   { frame: this.sprite, speed: 500 },
    //   { frame: image2, speed: 500 },
    // ], true)

    // this.spritesheet = new SpriteSheet(image)
    // this.spritesheet.defineSprite('primeiro', 0, 0, 100, 100)
    // this.spritesheet.defineSprite('segundo', 200, 200, 20, 20)
    // this.spritesheet.defineTile(0, 100, 100, 20, 20)

    // this.spritesheet.defineAnimation('test', [
    //   {
    //     frame: 'primeiro',
    //     speed: 500
    //   },
    //   {
    //     frame: 'segundo',
    //     speed: 500
    //   }
    // ], true)

    // Layer 0 - Background
    this.bgLayer = this.layers.add()

    // Layer 1 - Foreground
    this.fgLayer = this.layers.add(/*{ opacity: .5 }*/)

    this.input.mouse.onScrollDown(() => {
      console.log('scrolling down')
    })

    // const tileset = new Tileset('images/tiles/test.png', 32, 32, 10, 10)
    const tileset = new Tileset('images/tileset16.png', 16, 16, 9, 9)

    // const tilemap = new TileMap(tileset)

    // this.loader.loadTileset('tilesets/world1.tset')
    // -> image: images/tiles/test.png
    // mapWidth: 10
    // mapHeight: 10
    // tileWidth: 32
    // tileHeight: 32
    // regular: false
    // map: [
    //   [ 0, 0, 32, 32 ],
    //   [ 0, 0, 32, 32 ],
    //   [ 0, 0, 32, 32 ],
    //   [ 0, 0, 32, 32 ]
    // ]

    //tileset.tiles[0].draw()
    // MAPS:
    // ---
    // rows: 4
    // columns: 5
    // 00 01 01 01 01
    // 02 02 02 02 03
    // 02 02 02 02 03
    // 001 002 004 002

    // ---
    // rows: 5
    // columns: 5
    // 00 01 01 01 01
    // 02 02 02 02 03
    // 02 02 02 02 03
    // 001 002 004 002
    // 001 002 004 002

    // [0] = Tile({ x: 0, y: 0, width: 32, height: 32 })
    // [1] = Tile({ x: 32, y: 0, width: 32, height: 32 })

    // const tilemap = new TileMap(tileset)
    // const tilemap = this.loader.loadTileMap('tilemaps/level1.tmap')
    // tilemap.drawOnlyOfType(01)
  }

  update(dt: number) {
    if (this.input.keyboard.get('KeyA')) {
      this.blockX -= this.blockVelocity * dt
    }

    if (this.input.keyboard.get('KeyD')) {
      this.changeState(new LoadingState(), {
        nextLevel: '2'
      })
    }
  }

  async render(g: Graphics) {
    // g.drawSprite(this.sprite, 0, 0, 100, 100)
    // g.drawTile(this.tile, 100, 0, 100, 100)

    // g.drawAnimation(this.animation, 200, 0, 100, 100)

    // this.spritesheet.drawSprite(g, 'primeiro', 500, 0)
    // this.spritesheet.drawTile(g, 0, 400, 0)
    // // this.spritesheet.drawAnimation(g, 'test', 400, 400)
    // g.drawAnimation(<Animation>this.spritesheet.animations.get('test'), 400, 400)

    // g.layer()
    g.on(this.fgLayer).drawRect(0, 0, 800, 200)

    this.onLayer(0).drawSprite(this.sprite, 0, 0)
    this.onLayer(0).drawRect(200, 0, 200, 400, '#0000FF')
    this.onLayer(0).drawRect(0, 0, 300, 800, '#FF0000', .2)
    // this.onLayer(1).drawRect(0, 0, 300, 300, '#0000FF')
    // this.onLayer(1).drawRect(this.blockX, this.blockY, 100, 100, '#550000')

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
