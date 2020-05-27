import React, { Component } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper.js";
import Stats from "stats.js";
import HdrFile from "./textures/royal_esplanade_1k.hdr";

class Model extends Component {
    componentDidMount() {
        (function () {
            var script = document.createElement("script");
            script.onload = function () {
                var stats = new Stats();
                document.body.appendChild(stats.dom);

                requestAnimationFrame(function loop() {
                    stats.update();
                    requestAnimationFrame(loop);
                });
            };
            script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
            document.head.appendChild(script);
        })(); // это временно в конце нужно удалить
        let container, controls, camera;
        let scene, renderer;
        const { width, height } = this.props;
        init();
        function init() {
            container = document.createElement("div");
            document.getElementById("anchor").appendChild(container);
            camera = new THREE.PerspectiveCamera(45, width / height, 0.25, 400);
            camera.position.set(1, 1, 80);

            scene = new THREE.Scene();
            new RGBELoader().load(HdrFile, function (texture) {
                const envMap = pmremGenerator.fromEquirectangular(texture)
                    .texture;
                scene.background = new THREE.Color(0xdddddd);
                scene.environment = envMap;

                let roughnessMipmapper = new RoughnessMipmapper(renderer);

                const loaderModel = new GLTFLoader().setPath(
                    "http://192.168.0.21:5000/static/modelCat/"
                );
                loaderModel.load("scene.gltf", function (gltf) {
                    scene.add(gltf.scene);
                    gltf.scene.traverse(function (child) {
                        if (child.isMesh) {
                            roughnessMipmapper.generateMipmaps(child.material);
                        }
                    });

                    scene.add(gltf.scene);
                    roughnessMipmapper.dispose();
                    rendeR();
                });
            });

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 0.8;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            pmremGenerator.compileEquirectangularShader();

            controls = new OrbitControls(camera, renderer.domElement);
            controls.addEventListener("change", rendeR); // use if there is no animation loop
            controls.minDistance = 2;
            controls.maxDistance = 100; // зумирование модели
            controls.target.set(1, 1, 1);
            controls.update();

            window.addEventListener("resize", onWindowResize, false);
        }
        function onWindowResize() {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width / height);

            rendeR();
        }
        function rendeR() {
            renderer.render(scene, camera);
        }
    }
    render() {
        return <div id="anchor" />;
    }
}
export default Model;
