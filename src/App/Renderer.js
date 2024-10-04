import * as THREE from 'three'
import { sizesStore } from './Utils/Store'

export default class Renderer {
  constructor(app) {
    this.app = app
    this.canvas = this.app.canvas
    this.camera = this.app.camera
    this.scene = this.app.scene
    this.sizes = sizesStore.getState()
    this.setInstance()
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }

  update() {
    this.instance.render(this.scene, this.camera.instance)
  }
}
