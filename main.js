// copyright (c) Moritz Mockenhaupt 2020
function main() {
  var scene = new THREE.Scene();
  var box=generateBox(1,1,1);
  box.translateZ(-5);
  box.translateY(-1.25);
  scene.add(box);
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

function generateBox(w,h,d){
    var geo = new THREE.BoxGeometry(w,h,d);
    var mat = new THREE.MeshBasicMaterial({
        color: 0xffffff
    });
    var mesh = new THREE.Mesh(geo,mat);
    return mesh;


}
main();
