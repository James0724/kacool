"use client";

import { useEffect, useRef, useCallback } from "react";
import type * as THREE from "three";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const MARKERS: [number, number][] = [
  [-1.29, 36.82], // Nairobi    — East Africa
  [6.52, 3.38], // Lagos      — West Africa
  [51.51, -0.13], // London     — Western Europe
  [25.2, 55.27], // Dubai      — Middle East
  [19.08, 72.88], // Mumbai     — South Asia
  [1.35, 103.82], // Singapore  — SE Asia
  [35.68, 139.65], // Tokyo      — East Asia
  [40.71, -74.01], // New York   — North America
  [-23.55, -46.63], // São Paulo  — South America
  [-33.87, 151.21], // Sydney     — Oceania
];

const LEGEND = [
  { label: "Nairobi, Kenya", delay: "0s" },
  { label: "London, UK", delay: "0.6s" },
  { label: "Dubai, UAE", delay: "1.2s" },
  { label: "Mumbai, India", delay: "1.8s" },
];

function latLngToVec3(
  lat: number,
  lng: number,
  r: number,
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

export function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef({ y: 0.6, x: 0.25 });
  const dragRef = useRef<{
    x: number;
    y: number;
    ry: number;
    rx: number;
  } | null>(null);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      ry: rotRef.current.y,
      rx: rotRef.current.x,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    rotRef.current.y = dragRef.current.ry + dx * 0.006;
    rotRef.current.x = Math.max(
      -0.55,
      Math.min(0.55, dragRef.current.rx + dy * 0.006),
    );
  }, []);

  const stopDrag = useCallback(() => {
    dragRef.current = null;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf: number;
    let mounted = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (!mounted) return;

      const w = container.offsetWidth;
      const h = container.offsetHeight;

      /* ── Renderer ── */
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      Object.assign(renderer.domElement.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
      });
      container.appendChild(renderer.domElement);

      /* ── Scene / Camera ── */
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 100);
      camera.position.set(0, 0, 3.2);

      /* ── Globe mesh ── */
      const globe = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 32),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.99 }),
      );
      globe.rotation.y = rotRef.current.y;
      globe.rotation.x = rotRef.current.x;
      scene.add(globe);

      new THREE.TextureLoader().load(
        "https://i.ibb.co/gZRRfzN/globe-map.png",
        (tex) => {
          (globe.material as THREE.MeshBasicMaterial).map = tex;
          (globe.material as THREE.MeshBasicMaterial).needsUpdate = true;
        },
      );

      /* ── Pings: dots + rings as children of globe (rotate with it) ── */
      const rings: {
        mesh: THREE.Mesh;
        mat: THREE.MeshBasicMaterial;
        offset: number;
      }[] = [];

      MARKERS.forEach(([lat, lng], i) => {
        const [x, y, z] = latLngToVec3(lat, lng, 1.005);
        const normal = new THREE.Vector3(x, y, z).normalize();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          normal,
        );

        // Core dot — transparent so it renders after the globe and is occluded by it
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.007, 8, 8),
          new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 1,
          }),
        );
        dot.renderOrder = 1;
        dot.position.set(x, y, z);
        globe.add(dot);

        // Single expanding ring per marker
        const mat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(
          new THREE.RingGeometry(0.007, 0.009, 48),
          mat,
        );
        mesh.renderOrder = 1;
        mesh.position.set(x, y, z);
        mesh.quaternion.copy(quat);
        globe.add(mesh);
        rings.push({ mesh, mat, offset: i / MARKERS.length });
      });

      /* ── Resize ── */
      const ro = new ResizeObserver(() => {
        const nw = container.offsetWidth;
        const nh = container.offsetHeight;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      });
      ro.observe(container);

      /* ── Render loop ── */
      const frame = () => {
        raf = requestAnimationFrame(frame);
        const t = performance.now() / 1000;

        if (!dragRef.current) rotRef.current.y += 0.003;
        globe.rotation.y = rotRef.current.y;
        globe.rotation.x = rotRef.current.x;

        rings.forEach(({ mesh, mat, offset }) => {
          const phase = (t * 0.52 + offset) % 1;
          mesh.scale.setScalar(1 + phase * 1.5);
          mat.opacity = (1 - phase) * 0.55;
        });

        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <section className="container-x py-[clamp(4rem,9vw,7rem)]">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* ── Text side ── */}
        <div className="flex-1 md:order-1">
          <SectionHeader
            cap="Global reach"
            heading="Connecting across continents"
            description="I've partnered with clients across the globe, bringing the same precision and commitment to every timezone."
          />

          <Reveal
            as="p"
            delay={2}
            className="mt-5 max-w-[44ch] text-[0.92rem] leading-[1.65] text-text-dim"
          >
            Distance doesn&apos;t dilute quality. I&apos;ve partnered with
            clients across continents — bringing the same precision,
            communication, and commitment to every timezone.
          </Reveal>

          {/* Pin legend */}
          <Reveal delay={3} className="mt-8 flex flex-col gap-[0.7rem]">
            {LEGEND.map((pin) => (
              <div key={pin.label} className="flex items-center gap-3">
                <span className="relative flex h-[10px] w-[10px] shrink-0 items-center justify-center">
                  <span
                    className="absolute h-full w-full animate-ping2 rounded-full bg-accent opacity-40"
                    style={{ animationDelay: pin.delay }}
                  />
                  <span className="relative h-[6px] w-[6px] rounded-full bg-accent" />
                </span>
                <span className="text-[0.85rem] text-text-dim">
                  {pin.label}
                </span>
              </div>
            ))}
            <p className="mt-1 text-[0.78rem] text-text-faint">
              + 15 more locations worldwide
            </p>
          </Reveal>
        </div>

        {/* ── Globe side ── */}
        <Reveal delay={2} className="shrink-0 md:order-2">
          <div
            ref={containerRef}
            className="relative h-[340px] w-[340px] cursor-grab active:cursor-grabbing sm:h-[440px] sm:w-[440px]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerLeave={stopDrag}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-10 rounded-full blur-3xl"
              style={{ background: "rgba(56,189,248,0.04)" }}
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
