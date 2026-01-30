
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Cake, Sun, MapPin, Check, X, HelpCircle, Heart, Star, Sparkles, Wind, ChevronDown, Lock, Unlock, ShieldAlert, Fingerprint, ArrowBigDownDash } from 'lucide-react';
import { generateBirthdayWish } from './services/geminiService';
import { BirthdayMessage, RSVPStatus } from './types';
import ConfettiEffect from './components/ConfettiEffect';

// Fixed type errors by casting motion to any
const M: any = motion;

const SECRET_CODE = "ABCDEE0012";
const SECRET_IMAGE = "https://boombo.biz/en/uploads/posts/2022-08/1659610692_10-boombo-biz-p-top-beautiful-porn-stars-porno-vkontakte-10.jpg";

const FloatingGlow = ({ color, size, top, left, delay }: { color: string, size: string, top: string, left: string, delay: number }) => (
  <M.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      x: [0, 30, 0],
      y: [0, -30, 0]
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    className={`fixed pointer-events-none rounded-full blur-[80px] md:blur-[140px] ${color} ${size} z-0`}
    style={{ top, left }}
  />
);

const FireworkBurst = ({ x, y, color }: { x: number, y: number, color: string }) => {
  const particles = useMemo(() => Array.from({ length: 12 }), []);
  return (
    <div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * (Math.PI * 2);
        const distance = 40 + Math.random() * 60;
        return (
          <M.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ 
              x: Math.cos(angle) * distance, 
              y: Math.sin(angle) * distance, 
              opacity: [0, 1, 1, 0], 
              scale: [0, 1.2, 0.6, 0] 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`absolute w-1 h-1 rounded-full ${color} shadow-[0_0_8px_currentColor] blur-[0.2px]`}
          />
        );
      })}
    </div>
  );
};

const ContinuousFireworks = () => {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  useEffect(() => {
    const colors = [
      'bg-amber-400', 'bg-cyan-400', 'bg-orange-500', 
      'bg-pink-400', 'bg-lime-400', 'bg-white'
    ];
    const interval = setInterval(() => {
      const newBurst = {
        id: Math.random(),
        x: Math.random() * 90 + 5,
        y: Math.random() * 70 + 10,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      setBursts(prev => [...prev.slice(-8), newBurst]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 md:opacity-60">
      <AnimatePresence>
        {bursts.map(burst => (
          <FireworkBurst key={burst.id} x={burst.x} y={burst.y} color={burst.color} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const SparkleRain = () => {
  const sparkles = useMemo(() => Array.from({ length: 15 }), []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((_, i) => (
        <M.div
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: ['0vh', '100vh'],
            x: [Math.random() * 100 + 'vw', (Math.random() * 100 - 10) + 'vw'],
            rotate: 360
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute text-amber-500/20"
        >
          <Sparkles size={Math.random() * 15 + 5} />
        </M.div>
      ))}
    </div>
  );
};

const AnimatedCake = () => (
  <M.div 
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: [1, 1.05, 1], opacity: 1 }}
    transition={{ duration: 2, repeat: Infinity }}
    className="relative w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-end mb-8 md:mb-12"
  >
    <M.div 
      animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full" 
    />
    
    <M.div 
      animate={{ 
        scale: [1, 1.2, 0.9, 1.1],
        opacity: [0.8, 1, 0.8, 1],
        y: [0, -5, 2, -3],
        rotate: [-3, 3, -1, 1]
      }}
      transition={{ duration: 0.5, repeat: Infinity }}
      className="w-4 h-8 md:w-6 md:h-10 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full blur-[0.5px] shadow-[0_0_20px_#fbbf24] z-20"
    />
    
    <div className="w-2 md:w-3 h-8 md:h-12 bg-gradient-to-b from-rose-200 to-rose-500 rounded-t-md mb-[-2px] relative z-10 shadow-lg" />
    <div className="w-24 md:w-30 h-4 md:h-6 bg-white rounded-t-2xl shadow-inner border-b border-amber-100 relative z-10" />
    <div className="w-28 md:w-34 h-12 md:h-16 bg-white rounded-t-xl relative overflow-hidden border-b-4 md:border-b-8 border-rose-100 shadow-2xl">
       <div className="absolute top-0 w-full h-2 md:h-4 bg-amber-500/10" />
       <div className="flex justify-around mt-4 md:mt-8">
          {[1,2,3,4,5].map(i => (
            <M.div 
              key={i} 
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
              transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-rose-400" 
            />
          ))}
       </div>
    </div>
  </M.div>
);

const App: React.FC = () => {
  const [message, setMessage] = useState<BirthdayMessage | null>(null);
  const [loading, setLoading] = useState(true);
  const [rsvp, setRsvp] = useState<RSVPStatus>('pending');
  const [showInvitation, setShowInvitation] = useState(false);
  
  // Secret Vault State
  const [showVault, setShowVault] = useState(false);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  
  const fetchWish = useCallback(async () => {
    try {
      setLoading(true);
      const data = await generateBirthdayWish("Daniel Hamzeh");
      setMessage(data);
    } catch (error) {
      console.error("Failed to fetch wish:", error);
      setMessage({
        arabic: "يا دانييل! العشرين طرقت الباب وصار وقت تودع المراهقة. صداقتنا لساها جديدة بس مفعولها قوي! العاصفة رح تمرّ والقهوة ناطرتنا، وهالمرة القهوة على حساب صاحب العيد!",
        french: "Daniel, 20 piges ! Adieu l'adolescence. Notre amitié est toute fraîche mais déjà forte. Dès que le ciel se calme, direction le café. C'est ton tour de payer !",
        vibe: "Legendary"
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWish();
  }, [fetchWish]);

  const handleUnlock = () => {
    if (password === SECRET_CODE) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 selection:bg-amber-500/40 overflow-x-hidden relative flex flex-col">
      <ConfettiEffect />
      <SparkleRain />
      
      {/* Background Orbs - Responsive sizes */}
      <FloatingGlow color="bg-amber-500" size="w-[200px] h-[200px] md:w-[500px] md:h-[500px]" top="-5%" left="-5%" delay={0} />
      <FloatingGlow color="bg-rose-700" size="w-[250px] h-[250px] md:w-[600px] md:h-[600px]" top="30%" left="40%" delay={1} />
      <FloatingGlow color="bg-blue-900" size="w-[180px] h-[180px] md:w-[450px] md:h-[450px]" top="60%" left="5%" delay={2} />

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10 flex flex-col items-center flex-grow">
        
        {/* Animated Age Tag */}
        <M.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 md:mb-8 px-4 md:px-8 py-2 rounded-full border-2 border-amber-500/20 bg-amber-500/5 backdrop-blur-xl flex items-center gap-3 md:gap-4 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
          <span className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-amber-400 whitespace-nowrap">
             Level 20 Unlocked • 2026
          </span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
        </M.div>

        {/* Name Section */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20 w-full"
        >
          <div className="flex justify-center">
            <AnimatedCake />
          </div>
          <M.h1 
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl sm:text-7xl md:text-9xl font-amiri font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-amber-100 to-amber-600 drop-shadow-2xl px-2"
          >
            دانييل حمزة
          </M.h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.2em] md:tracking-[0.4em] text-white/40 font-sans uppercase">
            Big Daniel's Day
          </p>
        </M.div>

        {/* Fun Message Card */}
        <M.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl w-full relative"
        >
          <div className="bg-neutral-900/40 backdrop-blur-[40px] border border-white/10 p-6 sm:p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_0_60px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/5">
            <ContinuousFireworks />
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            {loading ? (
              <div className="flex flex-col items-center py-12 md:py-20 relative z-10">
                <M.div 
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full mb-6" 
                />
                <p className="text-amber-400 font-amiri text-2xl animate-pulse tracking-widest">تحضير المفاجأة...</p>
              </div>
            ) : (
              <div className="space-y-8 md:space-y-12 text-center relative z-10">
                <M.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  dir="rtl"
                  className="text-2xl sm:text-4xl md:text-6xl font-amiri font-extrabold leading-[1.6] md:leading-[1.7] text-white"
                >
                  {message?.arabic}
                </M.h2>
                
                <div className="flex items-center justify-center gap-4 md:gap-10">
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-amber-500/50 to-transparent" />
                  <Heart size={24} className="fill-amber-500 text-amber-500 filter drop-shadow-[0_0_8px_#f59e0b]" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                </div>

                <M.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg sm:text-2xl md:text-3xl text-neutral-400 font-medium italic leading-snug max-w-2xl mx-auto font-sans"
                >
                  "{message?.french}"
                </M.p>
                
                <M.div className="pt-8 md:pt-12">
                  <M.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInvitation(!showInvitation)}
                    className="group bg-amber-500 text-black px-8 md:px-16 py-4 md:py-6 rounded-2xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm flex items-center gap-3 md:gap-4 mx-auto transition-colors hover:bg-amber-400"
                  >
                    <span>{showInvitation ? 'إغلاق الدعوة' : 'كشف الدعوة'}</span>
                    <ChevronDown className={`transition-transform duration-500 ${showInvitation ? 'rotate-180' : ''}`} size={20} />
                  </M.button>
                </M.div>
              </div>
            )}
          </div>
        </M.div>

        {/* Fun Invitation Card */}
        <AnimatePresence>
          {showInvitation && (
            <M.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-8 md:mt-16 max-w-2xl w-full"
            >
              <div className="bg-amber-400 text-neutral-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden ring-4 md:ring-8 ring-amber-500/10">
                <div className="absolute -right-12 -bottom-12 text-black/5 rotate-12 pointer-events-none"><Coffee size={200} /></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <M.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-6 md:mb-10 p-4 md:p-6 bg-black rounded-2xl md:rounded-[2.5rem] text-amber-400 shadow-xl"
                  >
                    <Coffee size={32} />
                  </M.div>
                  
                  <h3 className="text-3xl md:text-5xl font-amiri font-black mb-2 md:mb-4">موعد الكافيتيريا! ☕</h3>
                  <p className="text-black/50 text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-12 text-center">Celebration in the Calm</p>

                  <div className="w-full space-y-4 md:space-y-6 mb-12 md:mb-16" dir="rtl">
                    <div className="flex items-center gap-4 md:gap-8 bg-black/5 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-black/5">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-black flex items-center justify-center rounded-2xl text-amber-400 flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-[10px] font-black text-black/30 uppercase tracking-widest mb-1">المكان</span>
                        <p className="text-lg md:text-2xl font-black truncate">المقهى المعتاد (ع حساب العريس! 😉)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8 bg-black/5 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-black/5">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center rounded-2xl text-blue-600 shadow-md flex-shrink-0">
                        <Sun size={24} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black text-black/30 uppercase tracking-widest mb-1">الزمان</span>
                        <p className="text-lg md:text-2xl font-black">عندما تهدأ العواصف وتستقر الأجواء</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full text-center">
                    <p className="font-amiri text-2xl md:text-3xl font-bold mb-8 md:mb-10">هل ستنضم إلينا؟</p>
                    
                    <div className="grid grid-cols-3 gap-3 md:gap-6">
                      {[
                        { id: 'attending', icon: Check, label: 'أكيد', color: 'bg-green-600' },
                        { id: 'maybe', icon: HelpCircle, label: 'ممكن', color: 'bg-blue-600' },
                        { id: 'declined', icon: X, label: 'صعبة', color: 'bg-red-600' }
                      ].map((btn) => (
                        <M.button
                          key={btn.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setRsvp(btn.id as RSVPStatus)}
                          className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all shadow-lg ${
                            rsvp === btn.id 
                              ? `${btn.color} text-white scale-105 ring-4 ring-white/20` 
                              : 'bg-black/80 text-white'
                          }`}
                        >
                          <btn.icon size={20} className="mb-2" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{btn.label}</span>
                        </M.button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      {rsvp !== 'pending' && (
                        <M.p
                          key={rsvp}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 md:mt-12 text-black font-amiri text-xl md:text-2xl font-black bg-white/20 py-3 md:py-4 px-6 md:px-8 rounded-full inline-block"
                        >
                          {rsvp === 'attending' && "يا ويلي! رح نكسر الكافيتيريا تكسير! 🔥"}
                          {rsvp === 'maybe' && "لا تتأخر، القهوة عم تبرد! 🧊"}
                          {rsvp === 'declined' && "خسرت أحلى قعدة، منشوفك بالـ 21! 😂"}
                        </M.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </M.div>
          )}
        </AnimatePresence>

        {/* Big Bold Secret Vault Trigger Section */}
        <M.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-24 md:mt-32 w-full max-w-2xl px-2 flex flex-col items-center mb-12"
        >
          <M.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-4 flex flex-col items-center text-red-500/60"
          >
            <p className="font-black text-[10px] uppercase tracking-[0.4em] mb-1">إضغط هنا يا دانييل</p>
            <ArrowBigDownDash size={32} />
          </M.div>

          <M.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowVault(true)}
            className="w-full relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 p-6 md:p-8 rounded-3xl md:rounded-[3rem] shadow-2xl border-2 md:border-4 border-white/10"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between gap-4 relative z-10">
              <div className="p-3 md:p-5 bg-black/20 rounded-xl md:rounded-2xl text-white">
                <Fingerprint size={28} className="md:w-10 md:h-10" />
              </div>
              <div className="flex-1 text-center" dir="rtl">
                <h2 className="text-xl md:text-3xl font-amiri font-black text-white mb-1">خزنة الأسرار المحظورة ⚠️</h2>
                <p className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">RESTRICTED TO DANIEL HAMZEH</p>
              </div>
              <div className="p-3 md:p-5 bg-white/10 rounded-xl md:rounded-2xl text-white">
                <Lock size={28} className="md:w-10 md:h-10" />
              </div>
            </div>
          </M.button>
        </M.div>

        {/* Secret Vault Overlay */}
        <AnimatePresence>
          {showVault && (
            <M.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 overflow-y-auto"
            >
              <M.button 
                onClick={() => { setShowVault(false); setIsUnlocked(false); setPassword(''); }}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white z-[110]"
              >
                {/* Fixed invalid 'md:size' prop by using Tailwind classes for responsive sizing */}
                <X className="w-8 h-8 md:w-10 md:h-10" />
              </M.button>

              <div className="max-w-xl w-full my-auto py-10 md:py-20">
                {!isUnlocked ? (
                  <M.div 
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8 inline-block p-8 bg-red-600/10 rounded-full text-red-500 border-2 border-red-600/20">
                      {/* Fixed invalid 'md:size' prop by using Tailwind classes for responsive sizing */}
                      <ShieldAlert className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-amiri font-black text-white mb-4">منطقة محظورة!</h2>
                    <p className="text-red-500/80 mb-10 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">أثبت أنك دانييل يا بطل</p>
                    
                    <div className="relative group max-w-sm mx-auto">
                      <input 
                        type="password"
                        placeholder="كلمة السر..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                        className={`w-full bg-neutral-900 border-2 ${error ? 'border-red-600' : 'border-white/10'} px-6 py-5 rounded-2xl text-center text-2xl font-mono focus:outline-none focus:border-red-600 transition-all text-white`}
                      />
                      <M.button
                        whileTap={{ scale: 0.95 }}
                        onClick={handleUnlock}
                        className="mt-6 w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg"
                      >
                        إختراق الخزنة
                      </M.button>
                    </div>
                  </M.div>
                ) : (
                  <M.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-neutral-900 rounded-3xl md:rounded-[3rem] border-2 border-red-600/40 overflow-hidden shadow-2xl"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                        <img 
                          src={SECRET_IMAGE} 
                          alt="Secret Surprise" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full font-black text-[8px] uppercase tracking-widest">
                          DANIEL ONLY
                        </div>
                    </div>

                    <div className="p-6 md:p-12 text-center">
                      <div className="mb-6 md:mb-8 flex justify-center">
                        <M.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="p-5 bg-red-600 rounded-2xl text-white shadow-xl"
                        >
                          {/* Fixed invalid 'md:size' prop by using Tailwind classes for responsive sizing */}
                          <Unlock className="w-8 h-8 md:w-10 md:h-10" />
                        </M.div>
                      </div>
                      
                      <div className="space-y-6 text-right bg-black/20 p-6 md:p-8 rounded-2xl border border-white/5" dir="rtl">
                        <p className="text-xl sm:text-2xl md:text-4xl font-amiri font-black text-white leading-relaxed">
                          يا عرص يا بخشي بدي نيكك جهز طيزك ووسعها منيح مشان ما تتألم يا عمري 
                        </p>
                        <div className="pt-6 border-t border-red-600/20">
                          <p className="text-lg md:text-2xl font-amiri text-red-500 font-black">قبلاتي الحارة.. بحبك يا وحش ❤️</p>
                        </div>
                      </div>
                    </div>
                  </M.div>
                )}
              </div>
            </M.div>
          )}
        </AnimatePresence>

        {/* Fun Footer */}
        <footer className="mt-auto py-12 text-center relative w-full border-t border-white/5">
          <div className="flex items-center justify-center gap-6 mb-8 opacity-20">
            <div className="h-px w-12 bg-amber-500" />
            <Star size={20} className="text-amber-500" />
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <p className="text-[10px] font-black tracking-[0.5em] md:tracking-[1em] uppercase text-amber-500/30 font-sans px-4">
            LEGENDARY DANIEL • 2006-2026
          </p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@200;400;700;900&display=swap');
        
        body { background-color: #030303; }
        .font-amiri { font-family: 'Amiri', serif; }
        
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #030303; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>
  );
};

export default App;
