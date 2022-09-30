import React from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const randomSpeed = (speed: number): number => {
  return Math.random() < 0.5 ? -speed : speed;
}

const createCube = (size: number): THREE.Mesh => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshStandardMaterial({color: "#FF0051"});
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = 20;
  cube.position.y = -20;
  cube.position.z = 0;

  return cube;
}

const createSphere = (radius: number): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(radius, 32, 16);
  const material = new THREE.MeshStandardMaterial({ color: "#33CC33" });
  const sphere = new THREE.Mesh(geometry, material);

  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 0;

  return sphere;
}

const createDodecahedron = (radius: number): THREE.Mesh => {
  const geometry = new THREE.DodecahedronGeometry(radius);
  const material = new THREE.MeshStandardMaterial({ color: "#00CCFF" });
  const dodecahedron = new THREE.Mesh(geometry, material);

  dodecahedron.position.x = -20;
  dodecahedron.position.y = 20;
  dodecahedron.position.z = 0;

  return dodecahedron;
}

const createIcosahedron = (radius: number): THREE.Mesh => {
  const geometry = new THREE.IcosahedronGeometry(radius);
  const material = new THREE.MeshStandardMaterial({ color: "#FF6C00" });
  const icosahedron = new THREE.Mesh(geometry, material);

  icosahedron.position.x = -10;
  icosahedron.position.y = -10;
  icosahedron.position.z = 0;

  return icosahedron;
}

const createCapsule = (radius: number, length: number): THREE.Mesh => {
  const geometry = new THREE.CapsuleGeometry( radius, length, 4, 8 );
  const material = new THREE.MeshBasicMaterial({ color: "#29009F" });
  const capsule = new THREE.Mesh( geometry, material );

  capsule.position.x = 10;
  capsule.position.y = 10;
  capsule.position.z = 0;

  return capsule;
}

const BouncingField = () => {
  const refContainer = React.useRef<HTMLDivElement>(null);
  const [camera, setCamera] = React.useState<THREE.Camera>();
  const [renderer, setRenderer] = React.useState<THREE.Renderer>();
  const scene = React.useRef<THREE.Scene>();

  const handleWindowResize = React.useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer && camera) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

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
      const scH = container.clientHeight;

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

      const capsuleRadius = 10;
      const capsuleLength = 5;
      const capsule = createCapsule(capsuleRadius, capsuleLength);

      const icosahedronRadius = 10;
      const icosahedron = createIcosahedron(icosahedronRadius);

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
      _scene.add(icosahedron);
      _scene.add(capsule);
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

      let capsuleXSpeed = randomSpeed(1);
      let capsuleYSpeed = randomSpeed(1);

      let icosahedronXSpeed = randomSpeed(1);
      let icosahedronYSpeed = randomSpeed(1);

      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        capsule.rotation.x += 0.01;
        capsule.rotation.y += 0.01;

        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y += 0.01;

        cube.position.x += cubeXSpeed;
        cube.position.y += cubeYSpeed;

        sphere.position.x += sphereXSpeed;
        sphere.position.y += sphereYSpeed;

        dodecahedron.position.x += dodecahedronXSpeed;
        dodecahedron.position.y += dodecahedronYSpeed;

        capsule.position.x += capsuleXSpeed;
        capsule.position.y += capsuleYSpeed;

        icosahedron.position.x += icosahedronXSpeed;
        icosahedron.position.y += icosahedronYSpeed;

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

        if(capsule.position.x + capsuleRadius + capsuleLength >= 160 || capsule.position.x - capsuleRadius - capsuleLength <= -160) {
          capsuleXSpeed = -capsuleXSpeed;
        }
        if(capsule.position.y + capsuleRadius + capsuleLength >= 100 || capsule.position.y - capsuleRadius - capsuleLength <= -100) {
          capsuleYSpeed = -capsuleYSpeed;
        }

        if(icosahedron.position.x + icosahedronRadius >= 160 || icosahedron.position.x - icosahedronRadius <= -160) {
          icosahedronXSpeed = -icosahedronXSpeed;
        }
        if(icosahedron.position.y + icosahedronRadius >= 100 || icosahedron.position.y - icosahedronRadius <= -100) {
          icosahedronYSpeed = -icosahedronYSpeed;
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
    <Box ref={refContainer} style={{position: "absolute"}} w={"100%"} h={"100%"} minH={"90vh"} minW={"90vw"} zIndex={-1}></Box>
  );
}

export default BouncingField;