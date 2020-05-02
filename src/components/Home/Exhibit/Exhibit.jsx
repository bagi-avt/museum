import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let url = "/car/scene.gltf";
const Exhibit = () => {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} dispose={null} />;
};

export default Exhibit;
