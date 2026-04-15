"use client";

import { useEffect, useRef } from "react";

// Animated network visualization — nodes connected by data pulses
export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
    }

    interface Pulse {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }

    const nodes: Node[] = [];
    const pulses: Pulse[] = [];
    const NODE_COUNT = 40;
    const CONNECTION_DIST = 180;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
    }

    function init() {
      resize();
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    }

    function spawnPulse() {
      if (pulses.length > 8) return;
      const i = Math.floor(Math.random() * nodes.length);
      const j = Math.floor(Math.random() * nodes.length);
      if (i === j) return;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DIST) {
        pulses.push({ fromIdx: i, toIdx: j, progress: 0, speed: 0.008 + Math.random() * 0.012 });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const glow = Math.sin(node.pulse) * 0.3 + 0.5;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${glow * 0.6})`;
        ctx!.fill();

        // Subtle glow
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${glow * 0.05})`;
        ctx!.fill();
      }

      // Draw & update pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) {
          pulses.splice(p, 1);
          continue;
        }
        const from = nodes[pulse.fromIdx];
        const to = nodes[pulse.toIdx];
        const px = from.x + (to.x - from.x) * pulse.progress;
        const py = from.y + (to.y - from.y) * pulse.progress;

        ctx!.beginPath();
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${0.8 - pulse.progress * 0.6})`;
        ctx!.fill();

        // Trail
        ctx!.beginPath();
        ctx!.arc(px, py, 6, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${0.15 - pulse.progress * 0.1})`;
        ctx!.fill();
      }

      // Randomly spawn pulses
      if (Math.random() < 0.03) spawnPulse();

      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();

    const handleResize = () => { resize(); };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
