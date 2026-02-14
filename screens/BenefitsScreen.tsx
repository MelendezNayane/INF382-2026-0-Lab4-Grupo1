
import React from 'react';
import { Screen } from '../types';

interface BenefitsScreenProps {
  onNavigate: (s: Screen) => void;
}

const BenefitsScreen: React.FC<BenefitsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b111e] overflow-hidden relative text-white">
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Header */}
        <div className="p-6 pt-10 flex items-center justify-between">
          <button onClick={() => onNavigate(Screen.HOME)} className="p-2 text-blue-500 active:scale-90 transition-transform">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
          <h1 className="text-lg font-bold">Beneficios</h1>
          <div className="w-10"></div>
        </div>

        <div className="px-6 mb-8 mt-2">
          <h2 className="text-3xl font-black mb-3 leading-tight tracking-tight">Disfruta de tus beneficios exclusivos</h2>
          <p className="text-gray-400 text-sm font-medium leading-relaxed opacity-80">
            Aprovecha las promociones que tenemos preparadas para ti por ser cliente Premium.
          </p>
        </div>

        {/* Promo Cards */}
        <div className="px-6 space-y-6">
          <PromoCard 
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
            tag="Explora el mundo"
            icon="plane"
            title="Viajes & Destinos"
            promo="Hasta 30% OFF"
            subPromo="Vuelos nacionales e internacionales"
          />

          <PromoCard 
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
            tag="Gastronomía Peruana"
            icon="fork"
            title="Restaurantes & Bares"
            promo="2x1 en Platos"
            subPromo="Selección de los mejores chefs"
          />

          {/* Tarjeta de Crédito Card - Estilo Visual Requerido */}
          <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-900/40 to-black border border-gray-800 shadow-2xl">
             <div className="p-8 bg-gradient-to-br from-[#1a4ecf] via-[#1034a6] to-[#0a1e6e] relative overflow-hidden m-1 rounded-[28px]">
                {/* Microchip */}
                <div className="w-10 h-8 bg-yellow-400/80 rounded-sm mb-12 relative shadow-inner">
                   <div className="absolute inset-0 border border-black/10 grid grid-cols-3 grid-rows-3 opacity-20"></div>
                </div>
                
                <div className="absolute top-8 right-8">
                    <svg className="w-8 h-8 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1 flex items-center gap-2">
                    <div className="w-5 h-5 bg-black/40 rounded flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2z" strokeWidth="2"/></svg>
                    </div>
                    Uso Inteligente
                </p>
                <h3 className="text-2xl font-black text-white mb-1">Tarjeta de Crédito</h3>
                <p className="text-white/40 text-sm font-medium tracking-[0.3em]">**** 4432</p>
             </div>
             <div className="p-6 flex items-center justify-between bg-gray-900/30">
                <div>
                   <p className="text-blue-400 font-black text-lg">5% Cashback</p>
                   <p className="text-gray-500 text-xs font-bold">Y acumula triple de puntos</p>
                </div>
                <button className="px-5 py-2 bg-blue-600/10 text-blue-500 font-bold text-xs rounded-full border border-blue-500/20 active:scale-95 transition-transform">Ver más ›</button>
             </div>
          </div>
        </div>

        {/* Otros Beneficios */}
        <div className="px-6 mt-12 mb-12">
           <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">OTROS BENEFICIOS</h3>
           <div className="grid grid-cols-3 gap-4">
              <OtherBenefit icon="🎬" label="Cine" />
              <OtherBenefit icon="🛍️" label="Retail" />
              <OtherBenefit icon="💪" label="Salud" />
           </div>
        </div>
      </div>

      {/* Navigation */}
      <BottomNav active={Screen.BENEFITS} onNavigate={onNavigate} />
    </div>
  );
};

const PromoCard: React.FC<{ image: string, tag: string, icon: string, title: string, promo: string, subPromo: string }> = ({ image, tag, icon, title, promo, subPromo }) => (
    <div className="rounded-[32px] overflow-hidden bg-gray-900/40 shadow-xl border border-gray-800/50">
       <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
             <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${icon === 'plane' ? 'bg-blue-600' : 'bg-orange-600'}`}>
                   {icon === 'plane' ? '✈️' : '🍴'}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/90">{tag}</span>
             </div>
             <h3 className="text-2xl font-black text-white">{title}</h3>
          </div>
       </div>
       <div className="p-6 flex items-center justify-between bg-gray-900/50">
          <div>
             <p className="text-blue-500 font-black text-lg">{promo}</p>
             <p className="text-gray-500 text-xs font-bold">{subPromo}</p>
          </div>
          <button className="px-5 py-2 bg-blue-600/10 text-blue-500 font-bold text-xs rounded-full border border-blue-500/20 active:scale-95 transition-transform">Ver más ›</button>
       </div>
    </div>
);

const OtherBenefit: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
    <div className="bg-gray-900/40 rounded-3xl p-6 flex flex-col items-center gap-4 border border-gray-800/50 active:scale-95 transition-all hover:bg-gray-800/40">
        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
            {icon}
        </div>
        <span className="text-xs font-bold text-gray-500">{label}</span>
    </div>
);

const BottomNav: React.FC<{ active: Screen, onNavigate: (s: Screen) => void }> = ({ active, onNavigate }) => (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0b111e]/90 backdrop-blur-xl border-t border-gray-800 flex items-center justify-around px-2 z-10">
      <NavItem icon="home" label="Inicio" active={active === Screen.HOME} onClick={() => onNavigate(Screen.HOME)} />
      <NavItem icon="operations" label="Operaciones" active={active === Screen.TRANSFER_SELECT} onClick={() => onNavigate(Screen.TRANSFER_SELECT)} />
      
      <div className="relative -top-8 flex flex-col items-center">
        <div className="p-1.5 bg-[#0b111e] rounded-full">
            <button 
                onClick={() => onNavigate(Screen.PAY_MOBILE)}
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.4)] active:scale-90 transition-transform"
            >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
            </button>
        </div>
        <span className="text-[10px] font-bold text-blue-500 mt-1 uppercase tracking-tighter">Pagar</span>
      </div>

      <NavItem icon="benefits" label="Beneficios" active={active === Screen.BENEFITS} onClick={() => onNavigate(Screen.BENEFITS)} />
      <NavItem icon="profile" label="Perfil" active={active === Screen.PROFILE} onClick={() => onNavigate(Screen.PROFILE)} />
    </div>
);

const NavItem: React.FC<{ icon: string, label: string, active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => {
    const getIcon = () => {
        switch(icon) {
            case 'home': return <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
            case 'operations': return <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />;
            case 'benefits': return <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0v4m0 0h2a2 2 0 10-2-2v2zm0 0h-2a2 2 0 102-2v2z" />;
            case 'profile': return <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
            default: return null;
        }
    }
    return (
        <button onClick={onClick} className={`flex flex-col items-center gap-1 ${active ? 'text-blue-500' : 'text-gray-500'} active:scale-95 transition-all`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{getIcon()}</svg>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
        </button>
    );
};

export default BenefitsScreen;
