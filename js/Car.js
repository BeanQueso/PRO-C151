AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 5, y: 40, z: 205 };
    const rotation = { x: 0, y: -400, z: 0 };
    const scale = {x:0.13, y:0.13, z:0.13}
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
    this.el.setAttribute("scale", scale)
  }
});
