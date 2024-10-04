import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as Tweakpane from 'tweakpane'

// init scene
const scene = new THREE.Scene()

const pane = new Tweakpane.Pane()

// Create the cube geometry and material
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const sphereGeometry = new THREE.SphereGeometry(0.75, 32, 32)
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16)
const circleGeometry = new THREE.CircleGeometry(0.5, 32)

//initialize material
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.5,
})

// Create the mesh (combining geometry and material)
const box = new THREE.Mesh(boxGeometry, material)
box.position.x = -2
box.castShadow = true
const box2 = new THREE.Mesh(boxGeometry, material)

const sphere = new THREE.Mesh(sphereGeometry, material)
sphere.position.x = 0

const sphere2 = new THREE.Mesh(sphereGeometry, material)

const torusKnot = new THREE.Mesh(torusKnotGeometry, material)
torusKnot.position.x = 2
torusKnot.castShadow = true

const torusKnot2 = new THREE.Mesh(torusKnotGeometry, material)

const circle = new THREE.Mesh(circleGeometry, material)
circle.scale.setScalar(20)
circle.position.y = -2
circle.rotation.x = -Math.PI / 2
// Add the mesh to the scene
scene.add(box, sphere, torusKnot, circle)
scene.add(box2, sphere2, torusKnot2)

//initialize the light

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

const hemisphereLight = new THREE.HemisphereLight('red', 'blue', 0.5)
scene.add(hemisphereLight)

const directionalLight = new THREE.DirectionalLight('white', 0.5)
scene.add(directionalLight)
directionalLight.castShadow = true

const pointLight = new THREE.PointLight('white', 0.5)
scene.add(pointLight)

const spotLight = new THREE.SpotLight(0x59ffe9, 3)
scene.add(spotLight)
spotLight.castShadow = true

const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
scene.add(spotLightCameraHelper)

const rectAreaLight = new THREE.RectAreaLight(0x0e0aff, 0.5, 2, 2)
scene.add(rectAreaLight)

pane.addBinding(rectAreaLight, 'color', {
  color: { type: 'float' },
})

pane.addBinding(rectAreaLight, 'intensity', {
  min: 0,
  max: 1,
  step: 0.01,
})

// const planeFolder = pane.addFolder({
//   title: 'Plane',
// })

// planeFolder
//   .addBinding(planeParameters, 'width', {
//     min: 0,
//     max: 10,
//     step: 0.1,
//     label: 'width',
//   })
//   .on('change', () => {
//     geometry = new THREE.PlaneGeometry(
//       planeParameters.width,
//       planeParameters.height
//     )
//     cubeMesh.geometry = geometry
//   })

// planeFolder
//   .addBinding(planeParameters, 'height', {
//     min: 0,
//     max: 10,
//     step: 0.1,
//     label: 'height',
//   })
//   .on('change', () => {
//     geometry = new THREE.PlaneGeometry(
//       planeParameters.width,
//       planeParameters.height
//     )
//     cubeMesh.geometry = geometry
//   })

// Initialize camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
)
camera.position.z = 10
camera.position.y = 5

// Initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
const maxPixelRatio = Math.min(window.devicePixelRatio, 2)
renderer.setPixelRatio(maxPixelRatio)
renderer.shadowMap.enabled = true

// Initialize controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.autoRotate = true

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Render the scene
const renderloop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}

renderloop()
