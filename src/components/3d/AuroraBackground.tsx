"use client";

/**
 * @component AuroraBackground
 * @description A performant, responsive WebGL2 shader background component featuring smooth, ambient liquid aurora waves.
 * Includes automatic fallbacks for prefers-reduced-motion and non-WebGL environments, with viewport-gated rendering via IntersectionObserver.
 * 
 * @param {AuroraBackgroundProps} props
 * @param {AuroraPalette} [props.palette] - Color palette for shader rendering (RGB normalized vectors [0..1]).
 * @param {number[]} [props.palette.baseNavy=[0.039, 0.067, 0.122]] - Base dark canvas color (#0A111F).
 * @param {number[]} [props.palette.deepNavy=[0.086, 0.137, 0.247]] - Deep gradient background color (#16233F).
 * @param {number[]} [props.palette.tealGlow=[0.059, 0.431, 0.416]] - Primary teal wave glow color (#0F6E6A).
 * @param {number[]} [props.palette.amberPeak=[0.710, 0.459, 0.039]] - Secondary amber peak highlight color (#B5750A).
 * @param {number} [props.speed=0.12] - Speed multiplier for liquid wave rotation and noise morphing.
 * @param {number} [props.intensity=1.0] - Brightness and glow intensity scaling factor.
 * @param {string} [props.className=""] - Optional additional Tailwind/CSS container classes.
 * 
 * @example
 * ```tsx
 * // Default brand aurora
 * <AuroraBackground />
 * 
 * // Custom speed & intensity
 * <AuroraBackground speed={0.18} intensity={1.2} className="opacity-90" />
 * ```
 */

import React, { useEffect, useRef, useState } from "react";

export interface AuroraPalette {
  baseNavy?: [number, number, number];
  deepNavy?: [number, number, number];
  tealGlow?: [number, number, number];
  amberPeak?: [number, number, number];
}

export interface AuroraBackgroundProps {
  palette?: AuroraPalette;
  speed?: number;
  intensity?: number;
  className?: string;
}

const VS_SOURCE = `#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FS_SOURCE = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_speed;
uniform float u_intensity;
uniform vec3 u_baseNavy;
uniform vec3 u_deepNavy;
uniform vec3 u_tealGlow;
uniform vec3 u_amberPeak;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  
  float t = u_time * u_speed;
  
  float angle = t * 0.18;
  mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 rSt = rot * st;

  float n1 = snoise(rSt * 1.4 + vec2(t * 0.32, t * 0.18));
  float n2 = snoise(rSt * 2.2 - vec2(t * 0.24, n1 * 0.4));
  float swirl = snoise(uv * 1.8 + vec2(n2 * 0.6, t * 0.18));

  float wave = sin(uv.x * 3.14159 + n1 * 1.1) * 0.25 + 0.45;
  float glow = smoothstep(0.0, 0.65, 1.0 - abs(uv.y - wave - swirl * 0.2)) * u_intensity;

  vec3 col = mix(u_baseNavy, u_deepNavy, uv.y);
  col = mix(col, u_tealGlow, glow * (0.65 + 0.35 * n1));
  
  float amberMix = smoothstep(0.45, 0.85, n2 * glow);
  col = mix(col, u_amberPeak, amberMix * 0.4);

  fragColor = vec4(col, 0.9);
}
`;

const DEFAULT_BASE_NAVY: [number, number, number] = [0.039, 0.067, 0.122];
const DEFAULT_DEEP_NAVY: [number, number, number] = [0.086, 0.137, 0.247];
const DEFAULT_TEAL_GLOW: [number, number, number] = [0.059, 0.431, 0.416];
const DEFAULT_AMBER_PEAK: [number, number, number] = [0.710, 0.459, 0.039];

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  palette,
  speed = 0.32,
  intensity = 1.0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  const baseNavy = palette?.baseNavy ?? DEFAULT_BASE_NAVY;
  const deepNavy = palette?.deepNavy ?? DEFAULT_DEEP_NAVY;
  const tealGlow = palette?.tealGlow ?? DEFAULT_TEAL_GLOW;
  const amberPeak = palette?.amberPeak ?? DEFAULT_AMBER_PEAK;

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // WebGL2 Context initialization
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl")) as WebGL2RenderingContext | null;

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Compile Shader helper
    const createShader = (
      type: number,
      source: string
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile log:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglSupported(false);
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link log:", gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    // Quad geometry (2 triangles covering -1..1 clip space)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "position");
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const speedLoc = gl.getUniformLocation(program, "u_speed");
    const intensityLoc = gl.getUniformLocation(program, "u_intensity");
    const baseNavyLoc = gl.getUniformLocation(program, "u_baseNavy");
    const deepNavyLoc = gl.getUniformLocation(program, "u_deepNavy");
    const tealGlowLoc = gl.getUniformLocation(program, "u_tealGlow");
    const amberPeakLoc = gl.getUniformLocation(program, "u_amberPeak");

    let animationFrameId: number;
    let startTime = performance.now();
    let isVisible = true;
    let isTabActive = true;

    const render = (now: number) => {
      if (!isVisible || !isTabActive) return;

      const elapsed = (now - startTime) / 1000;

      // Handle dpr cap (1.5 on mobile viewports < 768px, 2.0 on desktop)
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const maxDpr = isMobile ? 1.5 : 2.0;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const width = Math.floor(container.clientWidth * dpr);
      const height = Math.floor(container.clientHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resLoc, width, height);
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform1f(speedLoc, speed);
      gl.uniform1f(intensityLoc, intensity);
      gl.uniform3fv(baseNavyLoc, baseNavy);
      gl.uniform3fv(deepNavyLoc, deepNavy);
      gl.uniform3fv(tealGlowLoc, tealGlow);
      gl.uniform3fv(amberPeakLoc, amberPeak);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause loop when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // VisibilityChange to pause loop when tab is backgrounded
    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Initial trigger
    animationFrameId = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [reducedMotion, speed, intensity, baseNavy, deepNavy, tealGlow, amberPeak]);

  if (reducedMotion || !webglSupported) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      >
        <img
          src="/omnigrc-aurora-static.png"
          alt="OMNiGRC Aurora Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default AuroraBackground;
