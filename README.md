
# Three.js Starter Template

This is a starter template for building Three.js applications from scratch, created by me. It uses Vite for fast development, npm for package management, and is designed to work seamlessly with modern browsers like Chrome.

## Features
- **Vite**: Super-fast build tool optimized for modern web development.
- **Three.js**: 3D graphics library for creating interactive 3D content in the browser.
- **OrbitControls**: Easy navigation and camera controls in 3D scenes.
- **Chrome Optimized**: Works best with modern browsers like Chrome.

## Getting Started

### Prerequisites
Ensure you have **Node.js** installed. You can check this by running:
```bash
node -v
npm -v
```
If not installed, download from [Node.js Official Website](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server
To start the development server:
```bash
npm run dev
```
The application will be available at: `http://localhost:3000/`

### Building for Production
To create an optimized production build:
```bash
npm run build
```

## Usage

- **src/main.js**: The entry point for your Three.js application.
- **src/App.js**: Contains the initialization logic for Three.js, the scene, and the renderer.
- **src/World.js**: Handles the setup for objects (like meshes), the camera, and controls.

### Browser Support
This template is optimized for Chrome, but it should work in any modern browser that supports WebGL.

## Customization
You can add custom objects, lights, or other Three.js features by editing the **World.js** or adding new modules as needed.

## Resources
- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
