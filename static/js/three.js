// Import Three.js
import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add multiple small spheres scattered around
const sphereCount = 100;
const spheres = [];
const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 }); // Green color

for (let i = 0; i < sphereCount; i++) {
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // Random position within bounds
    sphere.position.set(
        (Math.random() - 0.5) * 50, // X-axis
        (Math.random() - 0.5) * 30, // Y-axis
        (Math.random() - 0.5) * 50  // Z-axis
    );

    spheres.push(sphere);
    scene.add(sphere);
}

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Camera positioning
camera.position.z = 20;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate spheres for a dynamic effect
    spheres.forEach((sphere) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
