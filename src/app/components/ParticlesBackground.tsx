"use client"; // Ensure it's a Client Component

import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticlesJS = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 50 },
          color: { value: '#f20212' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1, bounce: false },
          line_linked: { enable: true, distance: 200, color: '#f20212', opacity: 0.4, width: 1 },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
              // Log when hover is detected
              callback: () => console.log('Hover detected on particles!'),
            },
            onclick: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 300 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => loadParticlesJS();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (window.particlesJS) window.particlesJS.destroy();
    };
  }, []);

  return <div ref={particlesRef} id="particles-js" className="absolute top-0 left-0 w-full h-full z-0" />;

};

export default ParticlesBackground;
