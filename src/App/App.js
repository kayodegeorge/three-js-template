import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import Loop from './Utils/Loop'
import World from './World/World'
import Resize from './Utils/Resize'
import AssetLoader from './Utils/AssetLoader'
import Preloader from './UI/Preloader'

export default class App {
  constructor(canvas) {
    if (App.instance) return App.instance
    App.instance = this

    this.canvas = canvas
    this.scene = new THREE.Scene()

    this.assetLoader = new AssetLoader()
    this.preloader = new Preloader()
    this.camera = new Camera(this)
    this.renderer = new Renderer(this)
    this.world = new World(this)
    this.loop = new Loop(this)
    this.resize = new Resize(this)
  }

  start() {
    this.loop.start()
  }
}
