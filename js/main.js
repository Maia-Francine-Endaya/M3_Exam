const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xa4d4eb);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//lighting
const hemiLight = new THREE.HemisphereLight(0xffefba, 0x1d2754, 1);
scene.add(hemiLight);

const pointLight = new THREE.PointLight(0xffefba, 5, 100);
pointLight.position.set(5, 6, -15);
scene.add(pointLight);


camera.position.z = 35;

//initializing textures
const seaTexture = new THREE.TextureLoader().load('assets/textures/water_texture.jpg');
const rockTexture = new THREE.TextureLoader().load('assets/textures/rock_texture.jpg');
const sandTexture = new THREE.TextureLoader().load('assets/textures/sand_texture.jpg');

//Seaside Geometries
const seaGeometry = new THREE.PlaneGeometry(170, 30);
const seaMaterial = new THREE.MeshPhongMaterial({ color: 0x6ec0ff, side: THREE.DoubleSide });
const sea = new THREE.Mesh(seaGeometry, seaMaterial);
scene.add(sea);

const shoreGeometry = new THREE.PlaneGeometry(170, 30);
const shoreMaterial = new THREE.MeshLambertMaterial({ color: 0xa39b74, side: THREE.DoubleSide });
const shore = new THREE.Mesh(shoreGeometry, shoreMaterial);
scene.add(shore);

//Rocks
//Cylinder
const rockGeo1 = new THREE.CylinderGeometry(2, 7, 13, 8);

//Icosahedron
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

const rockGeo2 = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 1);


const rockMat = new THREE.MeshLambertMaterial({ color: 0x756349 });

const rockShape1 = new THREE.Mesh(rockGeo1, rockMat);
const rockShape2 = new THREE.Mesh(rockGeo1, rockMat);
const rockShape3 = new THREE.Mesh(rockGeo1, rockMat);
const rockShape4 = new THREE.Mesh(rockGeo2, rockMat);
const rockShape5 = new THREE.Mesh(rockGeo2, rockMat)
scene.add(rockShape1);
scene.add(rockShape2);
scene.add(rockShape3);
scene.add(rockShape4);
scene.add(rockShape5);

//please end my suffering


function animate() {
  requestAnimationFrame(animate);

  sea.rotation.x = 11.25;

  shore.rotation.x = 11.25;
  shore.position.y = -5;
  shore.position.z = 15;

  rockShape1.position.x = -2;
  rockShape1.position.y = 2;

  rockShape2.position.x = 8;
  rockShape2.position.y = 2;
  rockShape2.position.z = 5;

  rockShape3.position.x = 21;
  rockShape3.position.y = 2;

  rockShape4.position.x = -5;
  rockShape4.position.y = -3;
  rockShape4.position.z = 1;

  rockShape5.position.x = 11;
  rockShape5.position.y = -5;
  rockShape5.position.z = 6;



  renderer.render(scene, camera);
}
animate();