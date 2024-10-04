import './style.css'
import App from './App/App'

const canvas = document.querySelector('canvas.threejs')
const app = new App(canvas)
app.start()
