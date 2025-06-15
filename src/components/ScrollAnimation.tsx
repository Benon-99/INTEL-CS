"use client";

import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  hue: number;
  life: number;
}

export default function ScrollTriggeredRainbow({
  children,
}: {
  children: React.ReactNode;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const scrollDelta = Math.abs(newScrollY - scrollY);

      // Create particles when scrolling
      if (scrollDelta > 10) {
        const newParticles: Particle[] = [];
        const particleCount = Math.min(Math.floor(scrollDelta / 20), 8);

        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: particleIdRef.current++,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            hue: (newScrollY + i * 45) % 360,
            life: 100,
          });
        }

        setParticles((prev) => [...prev, ...newParticles]);
      }

      setScrollY(newScrollY);
    };

    // Update particles life
    const updateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => ({ ...p, life: p.life - 1 })).filter((p) => p.life > 0)
      );
    };

    const interval = setInterval(updateParticles, 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="relative">
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: particle.x,
            top: particle.y,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(${particle.hue}, 80%, 60%) 0%, transparent 70%)`,
            opacity: particle.life / 100,
            transform: `scale(${particle.life / 50})`,
            animation: "particle-float 2s ease-out",
            boxShadow: `0 0 ${particle.life / 10}px hsl(${
              particle.hue
            }, 80%, 60%)`,
          }}
        />
      ))}

      {/* Background static rainbow circles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `hsl(${i * 7.2}, 70%, 60%)`,
              animation: `float-${i % 3} ${
                3 + Math.random() * 2
              }s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center animate-bounce bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-sm font-medium text-gray-700 mb-2 tracking-wider">
            SCROLL
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current text-gray-700"
            fill="none"
            strokeWidth="2"
          >
            <line x1="12" y1="1" x2="12" y2="22.5" />
            <line x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
            <line x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
          </svg>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes particle-float {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateX(10px) rotate(-180deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(-5px, -5px) rotate(120deg);
          }
          66% {
            transform: translate(5px, -5px) rotate(240deg);
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
