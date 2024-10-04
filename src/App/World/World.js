import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Pane } from 'tweakpane'

export default class World {
  constructor(app) {
    this.app = app
    this.scene = this.app.scene
    this.camera = this.app.camera
    this.pane = new Pane()

    this.init()
  }

  async init() {
    this.setCube()
    await this.addText()
    this.createGUI()
    this.addLights()
  }

  setCube() {
    this.cubeMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        color: 'blue',
        roughness: 0.5,
        metalness: 0.5,
      })
    )
    this.cubeMesh.position.y = 0.8
    this.scene.add(this.cubeMesh)
  }

  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(1, 1, 1)
    this.scene.add(directionalLight)
  }

  addText() {
    return new Promise((resolve) => {
      const fontLoader = new FontLoader()
      fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new TextGeometry('Thank you,', {
          font: font,
          size: 0.1,
          height: 0.03,
          curveSegments: 12,
          bevelEnabled: false,
        })
        const textGeometry2 = new TextGeometry('You are awesome!', {
          font: font,
          size: 0.1,
          height: 0.03,
          curveSegments: 12,
          bevelEnabled: false,
        })
        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }) // White color
        this.textMesh = new THREE.Mesh(textGeometry, textMaterial)
        this.textMesh2 = new THREE.Mesh(textGeometry2, textMaterial)

        this.textMesh.position.set(-0.3, 0.2, -2)
        this.textMesh2.position.set(-0.6, -0.1, -2)
        this.scene.add(this.textMesh)
        this.scene.add(this.textMesh2)

        resolve()
      })
    })
  }

  update() {
    if (this.cubeMesh) {
      this.cubeMesh.rotation.y += 0.01
    }
  }

  createGUI() {
    this.pane.addBinding(this.cubeMesh.material, 'color', {
      color: { type: 'float' },
      label: 'Cube Color',
    })
    this.pane.addBinding(this.textMesh.material, 'color', {
      color: { type: 'float' },
      label: 'Text Color',
    })
    this.pane.addBinding(this.cubeMesh.material, 'roughness', {
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Cube Roughness',
    })
    this.pane.addBinding(this.cubeMesh.material, 'metalness', {
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Cube Metalness',
    })
  }
}
