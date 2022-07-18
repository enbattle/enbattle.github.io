import React from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const randomSpeed = (speed) => {
  return Math.random() < 0.5 ? -speed : speed;
}

const createCube = (size) => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshStandardMaterial({color: "#FF0051"});
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = 20;
  cube.position.y = -20;
  cube.position.z = 0;

  return cube;
}

const createSphere = (radius) => {
  const geometry = new THREE.SphereGeometry(radius, 32, 16);
  const material = new THREE.MeshStandardMaterial({ color: "#33cc33" });
  const sphere = new THREE.Mesh(geometry, material);

  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 0;

  return sphere;
}

const createDodecahedron = (radius) => {
  const geometry = new THREE.DodecahedronGeometry(radius);
  const material = new THREE.MeshStandardMaterial({ color: "#00ccff" });
  const dodecahedron = new THREE.Mesh(geometry, material);

  dodecahedron.position.x = -20;
  dodecahedron.position.y = 20;
  dodecahedron.position.z = 0;

  return dodecahedron;
}

const BouncingField = () => {
  const refContainer = React.useRef();
  const [camera, setCamera] = React.useState();
  const [renderer, setRenderer] = React.useState();
  const scene = React.useRef();

  const handleWindowResize = React.useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer && camera) {
      const scW = container.clientWidth;
      const scH = 500;

      console.log(scW, scH);

      // No need to change the camera configurations here (causes issues in the bouncing of objects)
      // camera.aspect = scW / scH;
      // camera.updateProjectionMatrix();
      renderer.setSize(scW, scH);
    }
  }, [renderer, camera]);

  React.useEffect(() => {
    const { current: container } = refContainer;
    
    if (container && !renderer) {
      const scW = container.clientWidth - 17;
      const scH = 500;

      const _renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      _renderer.setPixelRatio(window.devicePixelRatio);
      _renderer.setSize(scW, scH);
      _renderer.outputEncoding = THREE.sRGBEncoding;

      container.appendChild(_renderer.domElement);
      setRenderer(_renderer);

      const boxSize = 10;
      const cube = createCube(boxSize);

      const sphereRadius = 10;
      const sphere = createSphere(sphereRadius);

      const dodecahedronRadius = 10;
      const dodecahedron = createDodecahedron(dodecahedronRadius);

      // AmbientLight(color: string, intensity: float)
      // Omnipresent and applied to everything equally, does not cast shadows because it does not have direction
      // Wil change how other colors appear
      const ambientLight = new THREE.AmbientLight("#FFFFFF", 0.5);

      // PointLight(color: string, intensity: float)
      // Since there is a direction, we need to give it a position
      const pointLight = new THREE.PointLight ("#FFFFFF", 1);
      pointLight.position.set(25, 50, 25);

      // Add to scene
      const _scene = new THREE.Scene();
      _scene.add(cube);
      _scene.add(sphere);
      _scene.add(dodecahedron);
      _scene.add(ambientLight);
      _scene.add(pointLight);
      scene.current = _scene;

      // Set up camera
      const _camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
      _camera.position.z = 100;
      setCamera(_camera);

      let cubeXSpeed = randomSpeed(1);
      let cubeYSpeed = randomSpeed(1);

      let sphereXSpeed = randomSpeed(1);
      let sphereYSpeed = randomSpeed(1);

      let dodecahedronXSpeed = randomSpeed(1);
      let dodecahedronYSpeed = randomSpeed(1);

      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        cube.position.x += cubeXSpeed;
        cube.position.y += cubeYSpeed;

        sphere.position.x += sphereXSpeed;
        sphere.position.y += sphereYSpeed;

        dodecahedron.position.x += dodecahedronXSpeed;
        dodecahedron.position.y += dodecahedronYSpeed;

        if(cube.position.x + boxSize >= 160 || cube.position.x - boxSize <= -160) {
          cubeXSpeed = -cubeXSpeed;
        }
        if(cube.position.y + boxSize >= 100 || cube.position.y - boxSize <= -100) {
          cubeYSpeed = -cubeYSpeed;
        }

        if(sphere.position.x + sphereRadius >= 160 || sphere.position.x - sphereRadius <= -160) {
          sphereXSpeed = -sphereXSpeed;
        }
        if(sphere.position.y + sphereRadius >= 100 || sphere.position.y - sphereRadius <= -100) {
          sphereYSpeed = -sphereYSpeed;
        }

        if(dodecahedron.position.x + dodecahedronRadius >= 160 || dodecahedron.position.x - dodecahedronRadius <= -160) {
          dodecahedronXSpeed = -dodecahedronXSpeed;
        }
        if(dodecahedron.position.y + dodecahedronRadius >= 100 || dodecahedron.position.y - dodecahedronRadius <= -100) {
          dodecahedronYSpeed = -dodecahedronYSpeed;
        }

        _renderer.render(_scene, _camera);
      };

      animate();

      return () => {
        // cancelAnimationFrame(req);
        _renderer.dispose();
      };
    }
  }, [renderer]);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    }
  }, [renderer, handleWindowResize]);

  return (
    <Box ref={refContainer}></Box>
  );
}

export default BouncingField;