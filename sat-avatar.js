import * as THREE from 'three';

let activeAvatar = null;

function addMesh(parent, geometry, material, position, scale) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  if (scale) mesh.scale.set(...scale);
  parent.add(mesh);
  return mesh;
}

function createSatAvatar(host) {
  if (activeAvatar) activeAvatar.dispose();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.set(0, 1.7, 7.3);
  camera.lookAt(0, 1.45, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power', preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.setAttribute('aria-label', 'Animated three-dimensional character Sat');
  host.replaceChildren(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xeafcff, 0x536575, 2.2));
  const keyLight = new THREE.DirectionalLight(0xfff3de, 3.1);
  keyLight.position.set(-3, 5, 5);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x69d8cf, 1.8);
  rimLight.position.set(3, 2, -3);
  scene.add(rimLight);

  const singlet = new THREE.MeshStandardMaterial({ color: 0x087e79, roughness: 0.48 });
  const shorts = new THREE.MeshStandardMaterial({ color: 0x183b55, roughness: 0.62 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xa96343, roughness: 0.72 });
  const skinLight = new THREE.MeshStandardMaterial({ color: 0xc98462, roughness: 0.68 });
  const glove = new THREE.MeshStandardMaterial({ color: 0xe65f4b, roughness: 0.4 });
  const gloveLight = new THREE.MeshStandardMaterial({ color: 0xff8769, roughness: 0.38 });
  const white = new THREE.MeshStandardMaterial({ color: 0xfff8ea, roughness: 0.42 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xf4c76b, roughness: 0.4, metalness: 0.15 });
  const ink = new THREE.MeshStandardMaterial({ color: 0x202831, roughness: 0.38 });
  const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });

  const character = new THREE.Group();
  scene.add(character);

  const torso = addMesh(character, new THREE.CapsuleGeometry(0.5, 0.62, 5, 16), singlet, [0, 1.36, 0]);
  torso.rotation.z = -0.025;
  addMesh(character, new THREE.CylinderGeometry(0.16, 0.16, 0.2, 24), skin, [0, 1.98, 0]);
  addMesh(character, new THREE.SphereGeometry(0.55, 32, 24), skinLight, [0, 2.48, 0]);
  addMesh(character, new THREE.SphereGeometry(0.57, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2.25), ink, [0, 2.51, 0.02], [1.03, 0.9, 1.02]);
  const headband = addMesh(character, new THREE.TorusGeometry(0.54, 0.055, 10, 48), white, [0, 2.67, 0.015]);
  headband.rotation.x = Math.PI / 2;

  [-1, 1].forEach((side) => {
    addMesh(character, new THREE.SphereGeometry(0.1, 20, 16), skin, [side * 0.53, 2.43, 0.01], [0.7, 1, 0.55]);
    const brow = addMesh(character, new THREE.CapsuleGeometry(0.026, 0.11, 3, 8), ink, [side * 0.2, 2.58, 0.48]);
    brow.rotation.z = side * -0.1;
    addMesh(character, new THREE.SphereGeometry(0.08, 20, 16), eyeWhite, [side * 0.2, 2.48, 0.48], [0.82, 1, 0.5]);
    addMesh(character, new THREE.SphereGeometry(0.04, 18, 14), ink, [side * 0.195, 2.475, 0.515], [0.85, 1, 0.65]);
    addMesh(character, new THREE.SphereGeometry(0.013, 10, 8), eyeWhite, [side * 0.18, 2.495, 0.542]);
  });

  const mouth = addMesh(character, new THREE.SphereGeometry(0.08, 20, 14), ink, [0, 2.29, 0.51], [0.95, 0.32, 0.3]);
  addMesh(character, new THREE.SphereGeometry(0.23, 22, 18), skin, [0, 1.45, 0.43], [0.78, 0.76, 0.32]);
  addMesh(character, new THREE.CylinderGeometry(0.45, 0.46, 0.13, 32), gold, [0, 0.98, 0]);
  addMesh(character, new THREE.CapsuleGeometry(0.47, 0.3, 4, 12), shorts, [0, 0.78, 0]);

  const leftArm = addMesh(character, new THREE.CapsuleGeometry(0.17, 0.48, 4, 12), skin, [-0.59, 1.56, 0.03]);
  const rightArm = addMesh(character, new THREE.CapsuleGeometry(0.17, 0.48, 4, 12), skin, [0.59, 1.56, 0.03]);
  leftArm.rotation.z = 0.48;
  rightArm.rotation.z = -0.48;
  const leftGlove = addMesh(character, new THREE.SphereGeometry(0.27, 24, 18), glove, [-0.72, 1.35, 0.31], [0.85, 1.15, 1.12]);
  const rightGlove = addMesh(character, new THREE.SphereGeometry(0.27, 24, 18), glove, [0.72, 1.35, 0.31], [0.85, 1.15, 1.12]);
  leftGlove.rotation.z = 0.28;
  rightGlove.rotation.z = -0.28;
  addMesh(character, new THREE.SphereGeometry(0.13, 18, 14), gloveLight, [-0.74, 1.47, 0.48], [0.95, 0.62, 0.5]);
  addMesh(character, new THREE.SphereGeometry(0.13, 18, 14), gloveLight, [0.74, 1.47, 0.48], [0.95, 0.62, 0.5]);
  addMesh(character, new THREE.CylinderGeometry(0.18, 0.18, 0.09, 22), white, [-0.72, 1.12, 0.25]);
  addMesh(character, new THREE.CylinderGeometry(0.18, 0.18, 0.09, 22), white, [0.72, 1.12, 0.25]);

  [-1, 1].forEach((side) => {
    const leg = addMesh(character, new THREE.CapsuleGeometry(0.16, 0.38, 4, 10), skin, [side * 0.2, 0.37, 0]);
    leg.rotation.z = side * -0.04;
    addMesh(character, new THREE.SphereGeometry(0.23, 20, 14), glove, [side * 0.2, 0.09, 0.12], [1.15, 0.55, 1.45]);
  });

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(0.92, 48),
    new THREE.MeshBasicMaterial({ color: 0x79c8bc, transparent: true, opacity: 0.2 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.015;
  scene.add(ground);

  let frameId = 0;
  let mood = 'idle';
  const clock = new THREE.Clock();
  const resizeObserver = new ResizeObserver(() => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
  resizeObserver.observe(host);

  function animate() {
    frameId = window.requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    character.position.y = Math.sin(time * 1.5) * 0.055;
    character.rotation.y = Math.sin(time * 0.55) * 0.1;
    character.rotation.z = mood === 'thinking' ? Math.sin(time * 2.2) * 0.045 - 0.08 : Math.sin(time * 1.1) * 0.018;
    mouth.scale.y = mood === 'talking' ? 0.38 + Math.abs(Math.sin(time * 12)) * 1.15 : mood === 'happy' ? 0.65 : 0.38;
    rightArm.rotation.z = mood === 'happy' ? -0.85 + Math.sin(time * 5) * 0.12 : -0.48;
    leftArm.rotation.z = mood === 'talking' ? 0.72 : 0.48;
    if (mood === 'happy') rightGlove.position.y = 1.75 + Math.sin(time * 5) * 0.08;
    else rightGlove.position.y = 1.35;
    renderer.render(scene, camera);
  }
  animate();

  activeAvatar = {
    setMood(nextMood) {
      mood = nextMood;
    },
    dispose() {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
      activeAvatar = null;
    }
  };

  return activeAvatar;
}

window.SatAvatar = { mount: createSatAvatar };
window.dispatchEvent(new Event('sat-avatar-ready'));
