import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.164/examples/jsm/loaders/GLTFLoader.js";

export function loadChibi() {
  const canvas = document.getElementById("chibi-canvas");

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 1.6, 3);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load("/model.glb", (gltf) => {
    const model = gltf.scene;
    model.scale.set(1.4, 1.4, 1.4);
    model.position.y = -1;
    scene.add(model);

    function animate() {
      requestAnimationFrame(animate);
      model.rotation.y += 0.006; // xoay nhẹ dễ thương
      renderer.render(scene, camera);
    }
    animate();
  });
}