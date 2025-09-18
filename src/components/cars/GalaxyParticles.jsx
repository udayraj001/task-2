import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GalaxyParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // -----------------------------
    // Create Particles with Random Sizes
    // -----------------------------
    const createParticles = (count, area, yRange, sizeMin, sizeMax) => {
      const group = new THREE.Group();

      for (let i = 0; i < 4; i++) {
        const geometry = new THREE.BufferGeometry();
        const localCount = count / 4;
        const positions = new Float32Array(localCount * 3);

        for (let j = 0; j < localCount; j++) {
          const x = (Math.random() - 0.5) * area;
          const y = Math.random() * (yRange.max - yRange.min) + yRange.min;
          const z = (Math.random() - 0.5) * area;

          positions.set([x, y, z], j * 3);
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );

        const size = Math.random() * (sizeMax - sizeMin) + sizeMin;
        const material = new THREE.PointsMaterial({
          color: 0x00ff40,
          size,
        });

        const points = new THREE.Points(geometry, material);
        group.add(points);
      }

      return group;
    };

    // Floor (dense, smaller)
    const floorParticles = createParticles(
      12000,
      800,
      { min: -5, max: 5 },
      0.3,
      0.9
    );
    scene.add(floorParticles);

    // Sky (sparse, tiny)
    const skyParticles = createParticles(
      3000,
      800,
      { min: 80, max: 400 },
      0.2,
      0.7
    );
    scene.add(skyParticles);

    // -----------------------------
    // Mouse Parallax
    // -----------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // -----------------------------
    // Animation Loop
    // -----------------------------
    const animate = () => {
      requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 100;
      camera.position.y = targetY * 50;
      camera.lookAt(scene.position);

      floorParticles.rotation.y += 0.0005;
      skyParticles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // -----------------------------
    // Resize Handling
    // -----------------------------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{ backgroundColor: "black" }}
    />
  );
};

export default GalaxyParticles;
