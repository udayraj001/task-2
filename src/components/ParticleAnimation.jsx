import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
    camera.position.set(0, 40, 100);
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

    // Create dense particle grid
    const gridSizeX = 120;
    const gridSizeZ = 60;
    const spacingX = 4;
    const spacingZ = 6;
    const particles = [];

    for (let x = 0; x < gridSizeX; x++) {
      for (let z = 0; z < gridSizeZ; z++) {
        const isCircle = Math.random() > 0.5;

        let geometry;
        if (isCircle) {
          geometry = new THREE.CircleGeometry(0.6, 8);
        } else {
          geometry = new THREE.PlaneGeometry(1.0, 0.6);
        }

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

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.03;

      particles.forEach((particle) => {
        const { originalX, originalZ, gridX, gridZ } = particle.userData;

        const waveFreq1 = 0.08;
        const waveFreq2 = 0.12;
        const waveFreq3 = 0.05;

        const wave1 = Math.sin(time * 2 + gridX * waveFreq1) * 10;
        const wave2 = Math.sin(time * 1.5 + gridZ * waveFreq2) * 6;
        const wave3 = Math.sin(time * 0.8 + (gridX + gridZ) * waveFreq3) * 4;

        const waveHeight = wave1 + wave2 + wave3;

        particle.position.y = waveHeight;
        particle.position.x = originalX + Math.sin(time * 0.5 + gridX * 0.1) * 1;
        particle.position.z = originalZ + Math.cos(time * 0.3 + gridZ * 0.1) * 0.5;

        const material = particle.material;
        const heightFactor = (waveHeight + 18) / 36;
        material.opacity = 0.4 + heightFactor * 0.5;
      });

      camera.position.x = Math.sin(time * 0.1) * 8;
      camera.position.y = 40 + Math.sin(time * 0.08) * 3;
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

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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
      style={{ height: '350px' }}
    />
  );
};

export default ParticleAnimation;
