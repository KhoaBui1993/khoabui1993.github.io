import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RoboticCore = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all rotating robotic elements
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Color palette based on theme
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const primaryColor = isDark ? 0x38bdf8 : 0x2563eb; // Cyan-blue
    const secondaryColor = isDark ? 0x818cf8 : 0x4f46e5; // Indigo-purple
    const coreGlowColor = isDark ? 0x06b6d4 : 0x0284c7;

    // 1. Central Quantum / CPU Core (Icosahedron with wireframe + glowing points)
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // Inner glowing solid kernel
    const innerGeo = new THREE.OctahedronGeometry(0.55, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: coreGlowColor,
      wireframe: false,
      transparent: true,
      opacity: 0.65
    });
    const innerKernel = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerKernel);

    // 2. Outer Gyroscope Robotic Rings (Gimbal assembly)
    const createRing = (radius, tube, radialSegments, tubularSegments, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.55
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(1.5, 0.02, 6, 64, primaryColor, Math.PI / 3, 0);
    const ring2 = createRing(1.7, 0.02, 6, 64, secondaryColor, -Math.PI / 4, Math.PI / 6);
    const ring3 = createRing(1.9, 0.025, 6, 64, 0x38bdf8, 0, Math.PI / 2);

    masterGroup.add(ring1);
    masterGroup.add(ring2);
    masterGroup.add(ring3);

    // 3. Orbiting Data Nodes / Hardware Satellites
    const satCount = 8;
    const satellites = [];
    const satGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);

    for (let i = 0; i < satCount; i++) {
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        wireframe: false
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 1.35;
      sat.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 0.4);
      sat.userData = { angle, speed: 0.015 + (i % 3) * 0.005, radius, tilt: (i % 2 === 0 ? 1 : -1) * 0.3 };
      satellites.push(sat);
      masterGroup.add(sat);
    }

    // 4. Floating Holographic Data Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: primaryColor,
      transparent: true,
      opacity: 0.7
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Tracking for Interactive 3D Parallax & Head-tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = -y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      masterGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      masterGroup.rotation.x = elapsedTime * 0.15 + mouseY;

      // Independent Gimbal Ring Rotations
      ring1.rotation.z += 0.008;
      ring1.rotation.x += 0.005;

      ring2.rotation.y -= 0.01;
      ring2.rotation.z += 0.006;

      ring3.rotation.x -= 0.007;
      ring3.rotation.y += 0.009;

      // Pulse Central Kernel
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.08;
      innerKernel.scale.set(pulse, pulse, pulse);
      innerKernel.rotation.x -= 0.02;
      innerKernel.rotation.y += 0.03;

      // Rotate Satellites in elliptical orbits
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.y = Math.sin(sat.userData.angle) * sat.userData.radius;
        sat.position.z = Math.sin(sat.userData.angle * 2) * sat.userData.tilt;
        sat.rotation.x += 0.04;
        sat.rotation.y += 0.04;
      });

      // Slowly rotate background cloud
      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 340;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="robotic-3d-wrapper">
      <div ref={mountRef} className="robotic-3d-canvas" />
      <div className="robotic-3d-hud">
        <span className="hud-line">STATUS: ACTIVE</span>
        <span className="hud-line">CORE FREQ: 3.84 GHz</span>
        <span className="hud-line">SENSORS: ONLINE</span>
      </div>
    </div>
  );
};

export default RoboticCore;
