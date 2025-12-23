
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  AlertTriangle, 
  CheckCircle2, 
  History, 
  Zap, 
  ArrowRight, 
  Star,
  PlayCircle,
  Instagram,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';
import { slidesData } from './slidesData';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slidesData.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const slide = slidesData[currentSlide];
  const isTitleSlide = slide.type === 'title';
  const isCTASlide = slide.type === 'cta';
  
  const hasVisual = !!slide.visual || !!slide.visualDescription;
  const hasVideo = !!slide.video;
  const isCentered = isTitleSlide || isCTASlide || !hasVisual;
  const isReel = slide.visualDescription?.toUpperCase().includes('INSTAGRAM');
  const isComparison = slide.type === 'comparison' && slide.visual?.includes('|');

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#CF1F25]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#7A0C10]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full gradient-red shadow-[0_0_20px_rgba(207,31,37,0.6)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      <div className="absolute top-0 left-10 flex flex-col z-50 select-none">
        <img src="https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ab000147f51ea33d56ce7.png" alt="FIX & FLIP SYSTEM US" className="w-32 h-32 object-contain" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center px-6 md:px-20 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -20 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="w-full max-w-7xl h-full flex flex-col justify-center"
          >
            <div className={`grid h-full w-full gap-12 lg:gap-24 items-center ${
              isCentered ? 'grid-cols-1 text-center' : 'lg:grid-cols-2 grid-cols-1'
            }`}>
              
              <div className={`flex flex-col ${isCentered ? 'items-center max-w-5xl mx-auto' : 'items-start'}`}>
                {!hasVisual && slide.icon === 'attention' && (
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12, delay: 0.1 }}
                    className="mb-10"
                  >
                    <AlertTriangle size={120} className="text-[#CF1F25] drop-shadow-[0_0_30px_rgba(207,31,37,0.5)]" />
                  </motion.div>
                )}

                {slide.section && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-8 bg-[#CF1F25]/10 border border-[#CF1F25]/20 px-6 py-2 rounded-full shadow-lg"
                  >
                    <Star size={12} className="text-[#CF1F25] fill-[#CF1F25]" />
                    <span className="text-[#CF1F25] font-black tracking-[0.2em] text-[11px] uppercase">
                      {slide.section}
                    </span>
                  </motion.div>
                )}

                <motion.h1 
                  className={`font-black leading-[1.05] mb-10 text-white tracking-tighter ${
                    isTitleSlide ? 'text-6xl md:text-9xl' : 'text-4xl md:text-6xl'
                  }`}
                >
                  {slide.title?.split(' ').map((word, i) => {
                          const isAccent = ['USA', 'PROFITS', 'FLIP', 'SYSTEM', '50', '100', 'CASH', 'LIBERTÉ', 'MÉTHODE', 'CLEAN', 'RÉSULTATS', 'PAS', 'VIDÉO', 'BRUNHILDA', 'MÉTAMORPHOSE', 'AVANT/APRÈS'].includes(word.toUpperCase().replace(/[^A-Z0-9]/g, ''));
                          return (
                            <span key={i} className={isAccent ? 'text-[#CF1F25] text-glow' : ''}>
                              {word}{' '}
                            </span>
                          );
                        })}
                </motion.h1>

                {slide.subtitle && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`text-xl md:text-3xl text-zinc-400 font-light mb-14 leading-relaxed ${isCentered ? 'max-w-4xl mx-auto' : ''}`}
                  >
                    {slide.subtitle}
                  </motion.p>
                )}

                <div className="space-y-6 w-full">
                  {Array.isArray(slide.content) ? (
                    <div className="grid gap-4 w-full">
                      {slide.content.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: isCentered ? 0 : -15, y: isCentered ? 15 : 0 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className={`flex items-center gap-6 glass-panel p-6 rounded-[28px] border border-white/5 hover:bg-white/10 transition-all group ${isCentered ? 'justify-center text-center' : ''}`}
                        >
                          <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#CF1F25] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform group-hover:rotate-6">
                            <CheckCircle2 size={28} strokeWidth={3} />
                          </div>
                          <span className="text-xl md:text-2xl text-zinc-100 font-bold tracking-tight">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className={`text-xl md:text-3xl text-zinc-300 leading-relaxed p-12 rounded-[40px] glass-panel border border-white/10 shadow-2xl ${isCentered ? 'mx-auto' : ''}`}
                    >
                      {slide.content}
                    </motion.div>
                  )}
                </div>

                {slide.script && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1 }}
                    className="mt-14 flex items-center gap-5 py-5 px-8 border-l-4 border-[#CF1F25] bg-white/5 rounded-r-3xl"
                  >
                    <History size={20} className="text-[#CF1F25]" />
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 italic">
                      Live Notes : {slide.script}
                    </p>
                  </motion.div>
                )}
              </div>

              {!isCentered && (slide.visual || slide.visualDescription) && (
                <motion.div 
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring', damping: 20 }}
                  className={`relative w-full flex items-center justify-center ${isReel ? 'h-full' : 'h-[550px] lg:h-[800px]'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr from-[#CF1F25]/30 to-transparent rounded-[56px] blur-[100px] -z-10 translate-x-12 translate-y-12 ${isReel ? 'opacity-50' : ''}`} />
                  
                  <div className={`overflow-hidden border relative group bg-zinc-900/50 ${
                    isReel 
                      ? 'w-[360px] h-[640px] rounded-[60px] border-[14px] border-zinc-800 shadow-[0_0_120px_rgba(207,31,37,0.4)] ring-4 ring-zinc-700/30' 
                      : 'w-full h-full rounded-[56px] border-white/10 slide-shadow ring-1 ring-white/20'
                  }`}>
                    {isComparison ? (
                      <div className=" h-full w-full">
                        {slide.visual?.split('|').map((imgUrl, idx) => (
                          <div key={idx} className="relative h-1/2 h-full border-r border-white/20 overflow-hidden last:border-0 group/img">
                            <img 
                              src={imgUrl.trim()} 
                              className="w-full h-full object-cover grayscale-[30%] group-hover/img:grayscale-0 transition-all duration-700" 
                              alt="Comparison"
                            />
                            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white font-black uppercase text-xs tracking-widest">
                              {idx === 0 ? 'AVANT' : 'APRÈS'}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : slide.video ? (
                      <video
                        src={slide.video}
                        // poster={slide.visual}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        playsInline
                      />
                    ) : slide.visual ? (
                      <img 
                        src={slide.visual}
                        alt={slide.visualDescription || "Slide Visual"}
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                      />
                    ) : (
                      <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center ${isReel ? 'bg-black' : 'bg-zinc-950/80'}`}>
                         <motion.div
                          animate={isReel ? { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] } : { scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mb-8"
                        >
                          {isReel ? (
                            <Instagram size={80} className="text-[#CF1F25]" />
                          ) : (
                            <PlayCircle size={100} className="text-[#CF1F25] opacity-50" />
                          )}
                        </motion.div>
                        <div className={`border-4 border-dashed border-[#CF1F25]/20 p-8 rounded-[40px] w-full h-full flex flex-col items-center justify-center gap-6`}>
                           <p className="text-zinc-500 text-2xl font-black uppercase tracking-tighter leading-tight max-w-[200px]">
                            {slide.visualDescription || "CADRE VIDÉO"}
                          </p>
                          {isReel && (
                            <div className="absolute bottom-10 left-6 right-6 flex flex-col items-start gap-4">
                                <div className="flex gap-4">
                                  <Heart size={24} className="text-white/40" />
                                  <MessageCircle size={24} className="text-white/40" />
                                  <Send size={24} className="text-white/40" />
                                </div>
                                <div className="w-3/4 h-3 bg-white/5 rounded-full" />
                                <div className="w-1/2 h-3 bg-white/5 rounded-full" />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {slide.visual && slide.visualDescription && !isComparison && (
                      <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-black/60 backdrop-blur-[3px] group-hover:bg-black/40 transition-colors duration-500">
                        <div className="border-4 border-dashed border-[#CF1F25]/40 p-10 rounded-[40px] transform group-hover:scale-105 transition-transform duration-500">
                          <p className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight max-w-md drop-shadow-2xl">
                            {slide.visualDescription}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {slide.type === 'myth' && (
                      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center p-20 text-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="mb-14"
                        >
                          <AlertTriangle size={160} className="text-[#CF1F25] drop-shadow-[0_0_50px_rgba(207,31,37,0.8)]" />
                        </motion.div>
                        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">MYTHE RÉVÉLÉ</h2>
                        <p className="text-zinc-400 text-3xl font-light tracking-tight max-w-xl">Détruisons les croyances qui limitent votre succès.</p>
                      </div>
                    )}

                    {slide.type === 'pillar' && !isReel && (
                      <div className="absolute bottom-14 left-14">
                        <div className="inline-flex items-center gap-5 bg-white text-black px-10 py-5 rounded-[24px] font-black text-xl tracking-widest uppercase shadow-[0_30px_70px_rgba(255,255,255,0.3)] transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                          <Zap size={28} className="text-[#CF1F25] fill-[#CF1F25]" /> SECRET STRATÉGIQUE
                        </div>
                      </div>
                    )}

                    {isReel && (
                      <>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-zinc-800 rounded-b-[24px] z-20 flex items-center justify-center gap-2">
                           <div className="w-10 h-2 bg-zinc-700 rounded-full" />
                           <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                        </div>
                        <div className="absolute top-10 left-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                               <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                  <span className="text-[10px] font-bold">JT</span>
                               </div>
                            </div>
                            <span className="text-sm font-bold text-white">jt_mugabo</span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}

              {isCTASlide && slide.visual && (
                <motion.div 
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="relative mx-auto mt-2 w-20 h-20 md:w-[300px] md:h-[300px]"
                >
                  <div className="absolute inset-0 bg-[#CF1F25] rounded-[70px] blur-[150px] opacity-30 animate-pulse" />
                  <div className="relative glass-panel p-4 rounded-[30px] border-4 border-white/20 shadow-2xl flex items-center justify-center bg-white overflow-hidden transform hover:rotate-2 transition-transform duration-700">
                    <img src={slide.visual} alt="QR Code" className="w-full h-full object-contain mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
                  </div>
                  <a href="https://fixandflipsystem.com/calendrier" target="_blank" rel="noopener noreferrer">
                    <motion.div 
                    animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-14 -right-14 bg-[#CF1F25] text-white px-8 py-4 rounded-[20px] font-black text-3xl shadow-[0_30px_60px_rgba(207,31,37,0.6)] flex items-center gap-2 border-4 border-[#050505]"
                  >
                    POSTULER <ArrowRight size={40} strokeWidth={4} />
                  </motion.div>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-12 right-12 flex items-center justify-between z-50">
        <div className="flex items-center gap-10">
          <div className="px-10 py-5 rounded-[30px] bg-white/5 border border-white/10 flex items-center gap-10 shadow-2xl backdrop-blur-md">
            <span className="text-zinc-500 font-black text-lg tabular-nums tracking-widest">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <div className="w-24 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#CF1F25]"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-zinc-200 font-black text-lg tabular-nums tracking-widest">
              {String(slidesData.length).padStart(2, '0')}
            </span>
          </div>
          <span className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em] hidden lg:block opacity-60">
            {slide.section || 'FIX & FLIP US OPERATING SYSTEM'}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            className="w-24 h-24 rounded-[36px] glass-panel hover:bg-white/10 transition-all text-white flex items-center justify-center disabled:opacity-5 active:scale-90 border border-white/10 shadow-2xl"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={42} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-24 h-24 rounded-[36px] gradient-red shadow-[0_30px_70px_rgba(207,31,37,0.5)] hover:scale-110 transition-all text-white flex items-center justify-center disabled:opacity-5 active:scale-90 border-4 border-white/30"
            disabled={currentSlide === slidesData.length - 1}
          >
            <ChevronRight size={42} />
          </button>
          
          <div className="w-[2px] h-14 bg-white/10 mx-8 hidden md:block" />
          
          <button 
            onClick={toggleFullscreen}
            className="w-16 h-16 rounded-[24px] glass-panel hover:bg-white/10 transition-all text-zinc-500 flex items-center justify-center hidden md:flex active:scale-75"
          >
            {isFullscreen ? <Minimize size={28} /> : <Maximize size={28} />}
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-soft-light" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
      {/* Fixed: Wrapped radial-gradient value in quotes to fix syntax error in style object */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
    </div>
  );
};

export default App;
