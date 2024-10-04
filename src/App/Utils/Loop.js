export default class Loop {
  constructor(app) {
    this.app = app
    this.camera = this.app.camera
    this.renderer = this.app.renderer
    this.world = this.app.world
  }

  start() {
    this.loop()
  }

  loop() {
    this.world.update()
    this.camera.update()
    this.renderer.update()
    window.requestAnimationFrame(() => this.loop())
  }
}
