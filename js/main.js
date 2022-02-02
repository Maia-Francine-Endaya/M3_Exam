const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xdbd2af);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Fog
function fog() {
  const color = 0xdbd2af;
  const near = 10;
  const far = 100;
  scene.fog = new THREE.Fog(color, near, far);
}

//Lighting
function lighting() {
  const directionalLight = new THREE.DirectionalLight(0xdec487, 0.6);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xf5b158, 3.5, 100);
  pointLight.position.set(0, 2, -13);
  scene.add(pointLight);
}

fog();
lighting();

camera.position.z = 35;

//initializing textures
const seaTexture = new THREE.TextureLoader().load('assets/textures/water_texture.jpg');
const sandTexture = new THREE.TextureLoader().load('assets/textures/beach_sand_texture.jpg');

//Shore
const shoreGeo = new THREE.PlaneGeometry(320, 140);
const shoreMat = new THREE.MeshLambertMaterial({ map: sandTexture, side: THREE.DoubleSide });

const shoreMesh = new THREE.Mesh(shoreGeo, shoreMat);

scene.add(shoreMesh);

//Sea
const seaGeo = new THREE.PlaneGeometry(231, 80);
const seaMat = new THREE.MeshPhongMaterial({ map: seaTexture, side: THREE.DoubleSide });

const seaMesh = new THREE.Mesh(seaGeo, seaMat);

scene.add(seaMesh);


function animate() {
  requestAnimationFrame(animate);


  //Sea Position
  seaMesh.position.x = 5;
  seaMesh.position.y = -5;
  seaMesh.position.z = -29;

  seaMesh.rotation.x = 1.6;
  seaMesh.rotation.z = -0.32;

  //Shore Position
  shoreMesh.position.x = 22;
  shoreMesh.position.y = -10;

  shoreMesh.rotation.x = 1.6;



  renderer.render(scene, camera);
}
animate();