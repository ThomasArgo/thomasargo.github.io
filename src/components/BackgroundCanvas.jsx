import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    let animationId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.documentElement.scrollHeight,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.3,
      depth: Math.random() * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight,
      );
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const render = () => {
      resize();
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        const offsetX = (mouseX - canvas.width / 2) * 0.0005 * particle.depth;
        const offsetY = (mouseY - canvas.height / 2) * 0.0005 * particle.depth;

        context.beginPath();
        context.arc(
          particle.x + offsetX,
          particle.y + offsetY,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fillStyle = "rgba(255,255,255,0.35)";
        context.fill();
      });

      animationId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);
    document.addEventListener("mousemove", handleMouseMove);
    animationId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("load", resize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas aria-hidden="true" className="background-canvas" ref={canvasRef} />;
}
