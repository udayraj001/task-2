import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GalaxyParticles = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Helper to resize renderer and camera
    const resizeRenderer = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    // ResizeObserver (more reliable than window.resize)
    const observer = new ResizeObserver(resizeRenderer);
    observer.observe(container);

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

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

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

    // Floor Particles
    const floorParticles = createParticles(12000, 800, { min: -5, max: 5 }, 0.3, 0.9);
    scene.add(floorParticles);

    // Sky Particles
    const skyParticles = createParticles(3000, 800, { min: 80, max: 400 }, 0.2, 0.7);
    scene.add(skyParticles);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / container.clientWidth) * 2 - 1;
      mouseY = -(event.clientY / container.clientHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
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

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[100dvh] bg-black"
      style={{ overflow: "hidden" }}
    />
  );
};

export default GalaxyParticles;
