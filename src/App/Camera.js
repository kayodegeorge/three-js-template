import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { sizesStore } from './Utils/Store'

export default class Camera {
  constructor(app) {
    this.app = app
    this.sizesStore = sizesStore
    this.sizes = sizesStore.getState()
    this.setInstance()
    this.setControls()
    this.setResizeListener()
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      200
    )
    this.instance.position.z = 5
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.app.canvas)
    this.controls.enableDamping = true
  }

  setResizeListener() {
    this.sizesStore.subscribe(() => {
      this.instance.aspect = window.innerWidth / window.innerHeight
      this.instance.updateProjectionMatrix()
    })
  }

  // resize() {
  //   this.instance.aspect = window.innerWidth / window.innerHeight
  //   this.instance.updateProjectionMatrix()
  // }

  update() {
    this.controls.update()
  }
}
