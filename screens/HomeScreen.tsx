
import React, { useState } from 'react';
import { Screen, Account } from '../types';

interface HomeScreenProps {
  user: { name: string } | null;
  accounts: Account[];
  onNavigate: (screen: Screen) => void;
  onTransferSelect: () => void;
  onPayMobile: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ user, accounts, onNavigate, onTransferSelect, onPayMobile }) => {
  const [showBalance, setShowBalance] = useState(true);
  const mainAccount = accounts[0];

  return (
    <div className="flex-1 flex flex-col bg-dark-app overflow-hidden relative">
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Header */}
        <div className="p-6 pt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden border-2 border-orange-300">
              <img src="https://picsum.photos/seed/diego/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold">¡Hola, {user?.name}!</h1>
          </div>
          <button className="relative p-2 bg-gray-800 rounded-full">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-gray-800"></span>
          </button>
        </div>

        {/* Quick Send */}
        <div className="px-6 mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">ENVIAR DINERO</p>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
            <div onClick={onPayMobile} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group active:scale-95 transition-transform">
              <div className="w-14 h-14 bg-dark-app border-2 border-dashed border-blue-600 rounded-full flex items-center justify-center p-3">
                <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center">
                   <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                   </svg>
                </div>
              </div>
              <span className="text-[10px] font-bold text-blue-500 text-center leading-tight uppercase tracking-tighter">Pagar por<br/>celular</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
              <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nuevo</span>
            </div>
          </div>
        </div>

        {/* Account Card */}
        <div className="px-6 mb-8">
          <div className="bg-card-blue rounded-[32px] p-7 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none -translate-y-4 translate-x-4">
               <svg className="w-40 h-40" viewBox="0 0 200 200" fill="currentColor"><circle cx="100" cy="100" r="100" /></svg>
            </div>
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-blue-100 text-sm mb-1 font-medium">{mainAccount.name}</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-black">
                    S/ {showBalance ? mainAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '• • • •'}
                  </h2>
                </div>
                <p className="text-blue-200 text-xs mt-1 font-bold opacity-80 uppercase tracking-widest">Saldo disponible</p>
              </div>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="p-3 bg-white/20 rounded-2xl hover:bg-white/30 active:scale-90 transition-all backdrop-blur-md"
              >
                {showBalance ? (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
               <div className="flex -space-x-2">
                 <div className="w-9 h-9 rounded-full border-2 border-blue-500 bg-orange-100 flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/seed/1/40/40" alt="u1" />
                 </div>
                 <div className="w-9 h-9 rounded-full border-2 border-blue-500 bg-blue-100 flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/seed/2/40/40" alt="u2" />
                 </div>
               </div>
               <button className="bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-2xl active:scale-95 transition-all shadow-lg">
                 Ver movimientos
               </button>
            </div>
          </div>
        </div>

        {/* Quick Operations */}
        <div className="px-6 mb-10">
           <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">OPERACIONES RÁPIDAS</p>
           <div className="grid grid-cols-2 gap-4">
             <div onClick={onTransferSelect} className="bg-gray-900 border border-gray-800 rounded-[28px] p-6 flex flex-col items-center gap-4 cursor-pointer active:bg-gray-800 active:scale-95 transition-all shadow-lg">
               <div className="w-14 h-14 bg-blue-900/20 rounded-2xl flex items-center justify-center border border-blue-500/10">
                 <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                 </svg>
               </div>
               <span className="font-bold text-sm">Transferencias</span>
             </div>
             <div className="bg-gray-900 border border-gray-800 rounded-[28px] p-6 flex flex-col items-center gap-4 cursor-pointer active:bg-gray-800 active:scale-95 transition-all shadow-lg">
               <div className="w-14 h-14 bg-green-900/20 rounded-2xl flex items-center justify-center border border-green-500/10">
                 <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
               </div>
               <span className="font-bold text-sm text-center">Pago de servicios</span>
             </div>
           </div>
        </div>

        {/* Promo Banner - Navigates to Benefits */}
        <div className="px-6">
           <div 
             onClick={() => onNavigate(Screen.BENEFITS)}
             className="bg-card-purple rounded-[32px] p-7 relative overflow-hidden active:scale-95 transition-all cursor-pointer shadow-2xl"
           >
             <div className="absolute top-4 left-7 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Exclusivo Premium</span>
             </div>
             <div className="mt-10 mb-6">
               <h3 className="text-2xl font-black text-white leading-tight">¡Tus Beneficios te esperan!</h3>
               <p className="text-blue-100 text-xs mt-2 font-medium opacity-80 leading-relaxed">Aprovecha descuentos de hasta 50% en restaurantes y tiendas seleccionadas.</p>
             </div>
             <button className="bg-white text-blue-700 font-black text-sm px-8 py-3 rounded-2xl shadow-xl active:scale-90 transition-transform">
               Ver promociones
             </button>
             <div className="absolute bottom-4 right-4 opacity-10 scale-[2.5] rotate-[15deg] pointer-events-none">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,6H17.82A3.91,3.91,0,0,0,18,5a4,4,0,0,0-8,0,3.91,3.91,0,0,0,.18,1H2V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6ZM14,3a2,2,0,0,1,2,2,2.46,2.46,0,0,1-.1,0,2,2,0,0,1-3.9,0A2.46,2.46,0,0,1,12,5,2,2,0,0,1,14,3ZM8,5a2,2,0,0,1,3.9,0A2.46,2.46,0,0,1,12,5a2,2,0,0,1-2,2,2,2,0,0,1-2-2,2.46,2.46,0,0,1,.1-0A2,2,0,0,1,8,5ZM4,8H11v2H4V8Zm0,10V12H11v6H4Zm16,0H13V12h7v6Zm0-8H13V8h7v2Z" />
                </svg>
             </div>
           </div>
        </div>
      </div>

      {/* Navigation */}
      <BottomNav active={Screen.HOME} onNavigate={onNavigate} />
    </div>
  );
};

interface BottomNavProps {
  active: Screen;
  onNavigate: (s: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ active, onNavigate }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800 flex items-center justify-around px-2 z-10">
      <NavItem icon="home" label="Inicio" active={active === Screen.HOME} onClick={() => onNavigate(Screen.HOME)} />
      <NavItem icon="operations" label="Operaciones" active={active === Screen.TRANSFER_SELECT} onClick={() => onNavigate(Screen.TRANSFER_SELECT)} />
      
      <div className="relative -top-8 flex flex-col items-center">
        <div className="p-1.5 bg-dark-app rounded-full">
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
};

const NavItem: React.FC<{ icon: string, label: string, active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => {
  const getIcon = () => {
    switch(icon) {
      case 'home': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
      case 'operations': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />;
      case 'benefits': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0v4m0 0h2a2 2 0 10-2-2v2zm0 0h-2a2 2 0 102-2v2z" />;
      case 'profile': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
      default: return null;
    }
  }

  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 ${active ? 'text-blue-500' : 'text-gray-500'} active:scale-90 transition-all`}>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {getIcon()}
      </svg>
      <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
    </button>
  );
};

export default HomeScreen;
