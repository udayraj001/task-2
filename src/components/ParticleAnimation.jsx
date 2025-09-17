import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleAnimation = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { clientWidth, clientHeight } = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 40, 120);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(clientWidth, clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Particle group
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);

    // Grid setup
    const gridSizeX = 100;
    const gridSizeZ = 60;
    const spacingX = 3.5;
    const spacingZ = 5;
    const particles = [];

    for (let x = 0; x < gridSizeX; x++) {
      for (let z = 0; z < gridSizeZ; z++) {
        const geometry = new THREE.CircleGeometry(0.6, 8);
        const material = new THREE.MeshBasicMaterial({
          color: 0x22c55e,
          transparent: true,
          opacity: 0.8,
        });

        const particle = new THREE.Mesh(geometry, material);

        particle.position.x = (x - gridSizeX / 2) * spacingX;
        particle.position.z = (z - gridSizeZ / 2) * spacingZ;
        particle.position.y = 0;

        particle.userData = {
          originalX: particle.position.x,
          originalZ: particle.position.z,
          gridX: x,
          gridZ: z,
        };

        particleGroup.add(particle);
        particles.push(particle);
      }
    }

    // Animation loop (smooth wave)
    let time = 0;
    const animate = () => {
      time += 0.03;

      particles.forEach((particle) => {
        const { originalX, originalZ, gridX, gridZ } = particle.userData;

        // Continuous wave formula (like ocean ripples)
        const waveSpeed = 0.2;
        const waveLength = 0.3;
        const amplitude = 12;

        particle.position.y =
          Math.sin(gridX * waveLength + time * 2) * amplitude +
          Math.cos(gridZ * waveLength + time * 1.5) * amplitude * 0.5;

        // Keep X & Z fixed (remove chaotic motion)
        particle.position.x = originalX;
        particle.position.z = originalZ;

        // Subtle opacity based on height
        const material = particle.material;
        const heightFactor = (particle.position.y + amplitude) / (2 * amplitude);
        material.opacity = 0.4 + heightFactor * 0.5;
      });

      // Gentle camera float
      camera.position.x = Math.sin(time * 0.1) * 10;
      camera.position.y = 40 + Math.sin(time * 0.05) * 5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.forEach((particle) => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full pointer-events-none"
      style={{ height: "350px" }}
    />
  );
};

export default ParticleAnimation;
