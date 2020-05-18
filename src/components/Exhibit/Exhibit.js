import React, { Component } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper.js";
import HdrFile from "./textures/royal_esplanade_1k.hdr";

class Exhibit extends Component {
    componentDidMount() {
        let container, controls, camera;
        let scene, renderer;
        init();

        function init() {
            container = document.createElement("div");
            document.getElementById("anchor").appendChild(container);
            camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                0.25,
                20
            );
            camera.position.set(-1.8, 0.6, 2.7);

            scene = new THREE.Scene();
            new RGBELoader()
                .setDataType(THREE.UnsignedByteType)
                .load(HdrFile, function (texture) {
                    console.log(texture);
                    const envMap = pmremGenerator.fromEquirectangular(texture)
                        .texture;
                    //scene.background = new THREE.Color(0xdddddd);
                    scene.background = envMap;
                    scene.environment = envMap;

                    texture.dispose();
                    pmremGenerator.dispose();

                    rendeR();

                    let roughnessMipmapper = new RoughnessMipmapper(renderer);
                    const loaderModel = new GLTFLoader();
                    loaderModel.load("./model/DamagedHelmet.gltf", function (
                        gltf
                    ) {
                        console.log(gltf);
                        // gltf.scene.traverse(function (child) {
                        //     if (child.isMesh) {
                        //         roughnessMipmapper.generateMipmaps(
                        //             child.material
                        //         );
                        //     }
                        // });

                        // scene.add(gltf.scene);

                        // roughnessMipmapper.dispose();

                        // rendeR();
                    });
                });

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 0.8;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            pmremGenerator.compileEquirectangularShader();

            controls = new OrbitControls(camera, renderer.domElement);
            controls.addEventListener("change", rendeR); // use if there is no animation loop
            controls.minDistance = 2;
            controls.maxDistance = 10;
            controls.target.set(0, 0, -0.2);
            controls.update();

            window.addEventListener("resize", onWindowResize, false);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth / window.innerHeight);

            rendeR();
        }
        function rendeR() {
            renderer.render(scene, camera);
        }
    }
    render() {
        return (
            <div
                id="anchor"
                style={{
                    overflow: "hidden",
                    width: "900px",
                    height: "600px",
                    margin: "0 auto",
                }}
            />
        );
    }
}
export default Exhibit;
