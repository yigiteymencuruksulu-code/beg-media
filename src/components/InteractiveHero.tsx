import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, RotateCw, Sun, Sliders, Code, Check, Sparkles, Move } from 'lucide-react';

export default function InteractiveHero() {
  const [lightColor, setLightColor] = useState<'indigo' | 'emerald' | 'amber'>('indigo');
  const [rotationSpeed, setRotationSpeed] = useState<number>(15);
  const [scale, setScale] = useState<number>(1);
  const [showCode, setShowCode] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSphere, setActiveSphere] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    // Normalize coordinates from -100 to 100 for a futuristic HUD feel
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 200 - 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 200 - 100);
    setMousePos({ x, y });
  };

  const getLightColorClass = () => {
    switch (lightColor) {
      case 'emerald': return 'from-emerald-500/20 to-emerald-950/40 border-emerald-500/30 text-emerald-400';
      case 'amber': return 'from-amber-500/20 to-amber-950/40 border-amber-500/30 text-amber-400';
      default: return 'from-indigo-500/20 to-indigo-950/40 border-indigo-500/30 text-indigo-400';
    }
  };

  const getGlowColorClass = () => {
    switch (lightColor) {
      case 'emerald': return 'bg-emerald-500/30 shadow-[0_0_80px_rgba(16,185,129,0.35)]';
      case 'amber': return 'bg-amber-500/30 shadow-[0_0_80px_rgba(245,158,11,0.35)]';
      default: return 'bg-indigo-500/30 shadow-[0_0_80px_rgba(99,102,241,0.35)]';
    }
  };

  const threeJsCodeTemplate = `// 3D Varlığınızı Entegre Edin
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ rotationSpeed, scale }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/your-custom-asset.gltf');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (rotationSpeed / 10);
    }
  });

  return <primitive ref={meshRef} object={scene} scale={scale} />;
}

export default function ThreeDStage() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Model rotationSpeed={${rotationSpeed}} scale={${scale}} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}`;

  return (
    <section id="hero" className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-600/5 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] rounded-full bg-amber-600/5 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Agency Display Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/60 border border-stone-300 text-stone-700 text-xs font-mono w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Web Design, Branding & SEO Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-stone-900 leading-[1.1]"
          >
            Web Tasarım, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600">
              Markalama, SEO:
            </span><br />
            Dijital Başarınız İçin <br />
            Üçlü Güç.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-600 text-base md:text-lg max-w-xl font-sans font-light leading-relaxed"
          >
            BEG-Media olarak, estetik ve işlevselliği bir araya getirerek markanızı geleceğe taşıyoruz. 
            Sınırları zorlayan dijital çözümlerimizle rakiplerinizden sıyrılın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-indigo-500/25 flex items-center gap-2"
              id="hero-cta-contact"
            >
              Proje Başlatın
              <span className="text-xs">→</span>
            </a>
            <a
              href="#services"
              className="px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm transition-all duration-300 border border-stone-200 flex items-center gap-2"
              id="hero-cta-services"
            >
              Hizmetlerimiz
            </a>
          </motion.div>

          {/* Micro stats counter with neat glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-stone-200"
          >
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-stone-900">45+</p>
              <p className="text-xs text-stone-500 font-mono mt-1">Tamamlanan Proje</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-indigo-600">%400+</p>
              <p className="text-xs text-stone-500 font-mono mt-1">SEO Trafik Artışı</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-amber-700">12+</p>
              <p className="text-xs text-stone-500 font-mono mt-1">Tasarım Ödülü</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Empty Hero Area for 3D Asset (Beautifully Styled with Interactive Controls) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full max-w-lg aspect-square rounded-3xl glass-panel relative p-6 flex flex-col justify-between overflow-hidden group"
            onMouseMove={handleMouseMove}
            ref={stageRef}
          >
            {/* Top Interactive Bar */}
            <div className="flex items-center justify-between z-20">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-semibold">3D Sahne Laboratuvarı</span>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className={`p-1.5 rounded-lg border text-stone-500 transition-colors cursor-pointer ${showCode ? 'bg-indigo-600/10 border-indigo-500/50 text-indigo-600 font-semibold' : 'bg-stone-100 border-stone-200 hover:text-stone-900'}`}
                  title="3D Entegrasyon Kodunu Gör"
                  id="btn-toggle-3d-code"
                >
                  <Code className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stage Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#1a19160d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-80" />

            {/* Floating Environment Light Effect */}
            <div className={`absolute w-36 h-36 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl transition-all duration-700 pointer-events-none ${getGlowColorClass()}`}
              style={{ left: `${mousePos.x + 100}%`, top: `${mousePos.y + 100}%` }}
            />

            {/* Render 3D Model Placeholder or the actual Interactive Spheres */}
            <div className="relative w-full flex-1 flex items-center justify-center min-h-[220px]">
              
              <AnimatePresence mode="wait">
                {showCode ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-30 p-4 bg-[#FAF8F5]/98 border border-stone-200 rounded-2xl overflow-y-auto no-scrollbar font-mono text-[9px] text-stone-800 text-left select-all leading-normal shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-2 pb-2 border-b border-stone-200">
                      <span className="text-[10px] text-stone-500 font-semibold">ThreeDStage.tsx</span>
                      <span className="text-[9px] text-amber-700 uppercase font-bold">Kopyalamak için tıklayın</span>
                    </div>
                    <pre className="whitespace-pre-wrap">{threeJsCodeTemplate}</pre>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Sphere Area (Just like the user's screen balls with drag-and-drop feedback) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* 1. Large Main Drag Sphere */}
                <motion.div
                  drag
                  dragConstraints={stageRef}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                  onDragStart={() => setActiveSphere('main')}
                  onDragEnd={() => setActiveSphere(null)}
                  className="w-32 h-32 rounded-full absolute cursor-grab active:cursor-grabbing pointer-events-auto flex flex-col items-center justify-center p-4 text-center transition-shadow"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(244,239,234,0.6) 45%, rgba(197,160,43,0.35) 100%)',
                    boxShadow: activeSphere === 'main' 
                      ? '0 20px 40px rgba(197,160,43,0.25), inset 0 2px 10px rgba(255,255,255,0.9)' 
                      : '0 10px 25px rgba(26,25,22,0.08), inset 0 2px 5px rgba(255,255,255,0.8)',
                    scale: scale,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: activeSphere === 'main' ? 45 : [0, rotationSpeed * 0.5, 0],
                  }}
                  transition={{
                    y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                    rotate: { repeat: Infinity, duration: 15, ease: 'linear' },
                  }}
                  id="drag-sphere-main"
                >
                  <div className="flex flex-col items-center">
                    <Move className="w-4 h-4 text-stone-600 mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-stone-800">Sürükle</span>
                  </div>
                </motion.div>

                {/* 2. Secondary Sphere Left */}
                <motion.div
                  drag
                  dragConstraints={stageRef}
                  dragElastic={0.2}
                  onDragStart={() => setActiveSphere('left')}
                  onDragEnd={() => setActiveSphere(null)}
                  className="w-16 h-16 rounded-full absolute cursor-grab active:cursor-grabbing pointer-events-auto left-8 top-12"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(16,185,129,0.3) 100%)',
                    boxShadow: activeSphere === 'left' ? '0 15px 30px rgba(16,185,129,0.2)' : '0 8px 20px rgba(16,185,129,0.08), inset 0 1px 4px rgba(255,255,255,0.8)',
                  }}
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -4, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut'
                  }}
                  id="drag-sphere-left"
                />

                {/* 3. Secondary Sphere Right */}
                <motion.div
                  drag
                  dragConstraints={stageRef}
                  dragElastic={0.2}
                  onDragStart={() => setActiveSphere('right')}
                  onDragEnd={() => setActiveSphere(null)}
                  className="w-20 h-20 rounded-full absolute cursor-grab active:cursor-grabbing pointer-events-auto right-12 bottom-12"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(79,70,229,0.25) 100%)',
                    boxShadow: activeSphere === 'right' ? '0 15px 30px rgba(79,70,229,0.2)' : '0 8px 20px rgba(79,70,229,0.08), inset 0 1px 4px rgba(255,255,255,0.8)',
                  }}
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'easeInOut'
                  }}
                  id="drag-sphere-right"
                />

                {/* Empty Indicator label to demonstrate code insertion */}
                <div className="absolute inset-x-0 bottom-6 text-center select-none opacity-50 hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 rounded bg-stone-100 border border-stone-200 text-[9px] font-mono text-stone-500">
                    &lt;!-- 3D Modeliniz Burada Yüklenecek --&gt;
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Floating Interactive Controller HUD */}
            <div className="glass-panel-light rounded-2xl p-4 space-y-3 z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-stone-700">
                  <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="font-semibold">3D Parametreleri</span>
                </div>
                <div className="text-[10px] font-mono text-stone-500">
                  X: {mousePos.x} Y: {mousePos.y}
                </div>
              </div>

              {/* Sliders and Quick Lights */}
              <div className="grid grid-cols-2 gap-4 text-[10px]">
                {/* 1. Scale Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-stone-500">
                    <span>Boyut</span>
                    <span>{scale.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1 bg-stone-200 rounded-lg appearance-none"
                    id="slider-3d-scale"
                  />
                </div>

                {/* 2. Rot Speed Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-stone-500">
                    <span>Dönüş Hızı</span>
                    <span>{rotationSpeed} rpm</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    step="2"
                    value={rotationSpeed}
                    onChange={(e) => setRotationSpeed(parseInt(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1 bg-stone-200 rounded-lg appearance-none"
                    id="slider-3d-speed"
                  />
                </div>
              </div>

              {/* Quick Environmental Light Buttons */}
              <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 text-[10px]">
                <span className="text-stone-500">Ortam Işığı Rengi:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightColor('indigo')}
                    className={`w-4 h-4 rounded-full bg-indigo-500 cursor-pointer transition-transform ${lightColor === 'indigo' ? 'ring-2 ring-white ring-offset-2 ring-offset-stone-100 scale-110' : 'hover:scale-105'}`}
                    id="btn-light-indigo"
                  />
                  <button
                    onClick={() => setLightColor('emerald')}
                    className={`w-4 h-4 rounded-full bg-emerald-500 cursor-pointer transition-transform ${lightColor === 'emerald' ? 'ring-2 ring-white ring-offset-2 ring-offset-stone-100 scale-110' : 'hover:scale-105'}`}
                    id="btn-light-emerald"
                  />
                  <button
                    onClick={() => setLightColor('amber')}
                    className={`w-4 h-4 rounded-full bg-amber-500 cursor-pointer transition-transform ${lightColor === 'amber' ? 'ring-2 ring-white ring-offset-2 ring-offset-stone-100 scale-110' : 'hover:scale-105'}`}
                    id="btn-light-amber"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
