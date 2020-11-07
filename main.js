// copyright (c) Moritz Mockenhaupt 2020
function main() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webgl").appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function generateBox(){
    var geo = new THREE.BoxGeometry
}
main();
