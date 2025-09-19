import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SEPARATION3 = 60;
const AMOUNTX3 = 80;
const AMOUNTY3 = 70;

let camera3, scene3, renderer3;
let particles3 = null;
let count = 0;

const CommWave = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    if (!containerRef.current || !canvasRef.current) return;

    const sizes = {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    };

    // Camera
    camera3 = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 1, 10000);
    camera3.position.set(0, 100, 100);
    camera3.rotation.x = 0.5;

    // Scene
    scene3 = new THREE.Scene();

    // Particles setup
    const numParticles = AMOUNTX3 * AMOUNTY3;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const shapeTypes = new Float32Array(numParticles);

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX3; ix++) {
      for (let iy = 0; iy < AMOUNTY3; iy++) {
        positions[i] = ix * SEPARATION3 - (AMOUNTX3 * SEPARATION3) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION3 - (AMOUNTY3 * SEPARATION3) / 2;
        scales[j] = 1;
        shapeTypes[j] = Math.random() < 0.5 ? 0.0 : 1.0;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("shapeType", new THREE.BufferAttribute(shapeTypes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xb5ff5e) },
        opacity: { value: 1.0 },
      },
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float scale;
        attribute float shapeType;
        varying float vShapeType;
        varying vec2 vPointScale;

        void main() {
          vShapeType = shapeType;
          vPointScale = (shapeType < 0.5) ? vec2(1.0, 1.0) : vec2(1.0, 2.0);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying float vShapeType;
        varying vec2 vPointScale;

        void main() {
          vec2 coord = (gl_PointCoord - vec2(0.5)) * vPointScale + vec2(0.5);
          float dist = length(coord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.43, 0.5, dist);

          if (vShapeType < 0.5) {
            if (dist > 0.5) discard;
            gl_FragColor = vec4(color, alpha * opacity);
          } else {
            if (coord.y < 0.0 || coord.y > 1.0 || coord.x < 0.0 || coord.x > 1.0) discard;
            gl_FragColor = vec4(color, opacity);
          }
        }
      `,
      transparent: true,
    });

    material.uniforms.opacity.value = 0.5;

    particles3 = new THREE.Points(geometry, material);
    scene3.add(particles3);

    scene3.rotation.x = 0.6;
    scene3.scale.set(1.5, 1.5, 1.5);

    // Renderer
    renderer3 = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer3.setSize(sizes.width, sizes.height);

    // GSAP ScrollTrigger animation for containerRef
    const cameraTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "0% 50%",
        end: "0% 0%",
        scrub: 1,
      },
    });

    cameraTimeline
      .to(camera3.position, { y: 900 }, 0)
      .to(containerRef.current, { opacity: 1 }, 0);

    // Optional GSAP animation for `.pre-footer-wrap` (only if it exists)
    const preFooter = document.querySelector(".pre-footer-wrap");
    if (preFooter) {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0% 50%",
          end: "0% 50%",
          toggleActions: "play none none reverse",
          preventOverlaps: true,
        },
      }).to(preFooter, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
      });
    }

    // Animation loop
    const animate3 = () => {
      if (!isMounted) return;

      if (particles3) {
        const positions = particles3.geometry.attributes.position.array;
        const scales = particles3.geometry.attributes.scale.array;

        let i = 0, j = 0;
        for (let ix = 0; ix < AMOUNTX3; ix++) {
          for (let iy = 0; iy < AMOUNTY3; iy++) {
            positions[i + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;

            scales[j] =
              (Math.sin((ix + count) * 0.3) + 1) * 20 +
              (Math.sin((iy + count) * 0.5) + 1) * 20;

            i += 3;
            j++;
          }
        }
        particles3.geometry.attributes.position.needsUpdate = true;
        particles3.geometry.attributes.scale.needsUpdate = true;
        particles3.material.uniforms.opacity.value = Math.abs(Math.sin(count * 0.1));
      }

      renderer3.render(scene3, camera3);
      count += 0.08;
      requestAnimationFrame(animate3);
    };
    animate3();

    // Cleanup
    return () => {
      isMounted = false;
      if (renderer3) {
        renderer3.dispose();
      }
      // Properly kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="comm-wave relative w-full h-[600px] bg-transparent opacity-0"
    >
      <canvas ref={canvasRef} id="comm-wave" />
    </div>
  );
};

export default CommWave;
