import { OrbitControls } from "../controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xdbd2af);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Camera Controls
const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 0, 35);
controls.update();

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
  pointLight.position.set(0, -1, -12);
  scene.add(pointLight);
}

fog();
lighting();

camera.position.z = 35;

//initializing textures
const seaTexture = new THREE.TextureLoader().load('assets/textures/water_texture.jpg');
const sandTexture = new THREE.TextureLoader().load('assets/textures/beach_sand_texture.jpg');
const rockTexture = new THREE.TextureLoader().load('assets/textures/rocky_texture.jpg');
const cloudTexture = new THREE.TextureLoader().load('assets/images/clouds.jpg');

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

//Rock Geometries and Material
const rockMat = new THREE.MeshLambertMaterial({ map: rockTexture });

const rockGeo1 = new THREE.CylinderGeometry(2, 5, 11, 15, 6);

const verticesOfCube = [
  -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
  -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

const indicesOfFaces = [
  2, 1, 0, 0, 3, 2,
  0, 4, 7, 7, 3, 0,
  0, 1, 5, 5, 4, 0,
  1, 2, 6, 6, 5, 1,
  2, 3, 7, 7, 6, 2,
  4, 5, 6, 6, 7, 4
];

const rockGeo2 = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2);

const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, width);
shape.lineTo(length, width);
shape.lineTo(length, 0);
shape.lineTo(0, 0);

const extrudeSettings = {
  steps: 5,
  depth: 8,
  bevelEnabled: true,
  bevelThickness: 3,
  bevelSize: 2,
  bevelOffset: 1,
  bevelSegments: 3
};

const rockGeo3 = new THREE.ExtrudeGeometry(shape, extrudeSettings);

//So many rocks
rockMesh1 = new THREE.Mesh(rockGeo1, rockMat);
rockMesh2 = new THREE.Mesh(rockGeo1, rockMat);
rockMesh3 = new THREE.Mesh(rockGeo1, rockMat);

rockMesh4 = new THREE.Mesh(rockGeo2, rockMat);
rockMesh5 = new THREE.Mesh(rockGeo2, rockMat);
rockMesh6 = new THREE.Mesh(rockGeo2, rockMat);

rockMesh7 = new THREE.Mesh(rockGeo3, rockMat);
rockMesh8 = new THREE.Mesh(rockGeo3, rockMat);
rockMesh9 = new THREE.Mesh(rockGeo2, rockMat);
rockMesh10 = new THREE.Mesh(rockGeo1, rockMat);


//Really many sea rocks
scene.add(rockMesh1);
scene.add(rockMesh2);
scene.add(rockMesh3);

scene.add(rockMesh4);
scene.add(rockMesh5);
scene.add(rockMesh6);

scene.add(rockMesh7);
scene.add(rockMesh8);
scene.add(rockMesh9);
scene.add(rockMesh10);

//sky
const skyGeo = new THREE.PlaneGeometry(320, 140);
const skyMat = new THREE.MeshPhongMaterial({ map: cloudTexture, side: THREE.DoubleSide });

const skyMesh = new THREE.Mesh(skyGeo, skyMat);

scene.add(skyMesh);


function animate() {
  requestAnimationFrame(animate);

  //Sea Position
  seaMesh.position.x = 5;
  seaMesh.position.y = -5;
  seaMesh.position.z = -30;

  seaMesh.rotation.x = 1.6;
  seaMesh.rotation.z = -0.29;

  //Shore Position
  shoreMesh.position.x = 22;
  shoreMesh.position.y = -6;

  shoreMesh.rotation.x = 1.6;

  //Rocks
  rockMesh1.position.x = -11.6;
  rockMesh1.position.y = -1.7;
  rockMesh1.position.z = 6.2;

  rockMesh4.position.x = -45.3;
  rockMesh4.position.y = -8;
  rockMesh4.position.z = 1.7;

  rockMesh5.position.x = -15.7;
  rockMesh5.position.y = -6.7;
  rockMesh5.position.z = 6.3;

  rockMesh2.position.x = 3.2;
  rockMesh2.position.y = -1.5;
  rockMesh2.position.z = 14;

  rockMesh6.position.x = 6.5;
  rockMesh6.position.y = -8.9;
  rockMesh6.position.z = 12.7;

  rockMesh3.position.x = 22.4;
  rockMesh3.position.y = -1;
  rockMesh3.position.z = -2;

  rockMesh7.position.x = 56.8;
  rockMesh7.position.y = -11.4;
  rockMesh7.position.z = -29.8;

  rockMesh7.rotation.y = -1.9;

  rockMesh8.position.x = 96.9;
  rockMesh8.position.y = -2.35;
  rockMesh8.position.z = -48.9;

  rockMesh8.rotation.y = 1.9;

  rockMesh9.position.x = 86.7;
  rockMesh9.position.y = -5.7;
  rockMesh9.position.z = -27.6;

  rockMesh10.position.x = 65.4;
  rockMesh10.position.y = -1.4;
  rockMesh10.position.z = -48.9;

  //Sky
  skyMesh.position.x = 5;
  skyMesh.position.y = 12;
  skyMesh.position.z = -30;

  skyMesh.rotation.x = 1.6;
  skyMesh.rotation.z = -0.29;

  //Camera
  controls.update();

  renderer.render(scene, camera);
}
animate();