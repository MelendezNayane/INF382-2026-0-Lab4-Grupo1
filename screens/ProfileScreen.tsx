
import React from 'react';
import { Screen } from '../types';

interface ProfileScreenProps {
  user: { name: string, dni: string };
  onNavigate: (s: Screen) => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onNavigate, onLogout }) => {
  // Usamos el nombre del usuario logueado o el de la imagen de referencia
  const fullName = user.name === 'Diego' ? 'Juan Carlos Perez' : user.name;
  const email = "j.perez@email.com";

  return (
    <div className="flex-1 flex flex-col bg-[#0b111e] overflow-hidden relative text-white">
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Header */}
        <div className="p-6 pt-10 flex items-center justify-between">
          <button onClick={() => onNavigate(Screen.HOME)} className="p-2 text-white active:scale-90 transition-transform">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
          <h1 className="text-xl font-bold">Mi Perfil</h1>
          <div className="w-10"></div>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col items-center mt-10 mb-12">
          <div className="relative mb-6">
            <div className="w-36 h-36 rounded-full border-4 border-[#1c2b4d] p-1">
              <div className="w-full h-full rounded-full bg-[#fce4d4] overflow-hidden flex items-center justify-center">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juan" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-110 translate-y-2"
                />
              </div>
            </div>
            <button className="absolute bottom-1 right-1 w-9 h-9 bg-blue-600 rounded-full border-4 border-[#0b111e] flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          <h2 className="text-3xl font-black tracking-tight">{fullName}</h2>
          <p className="text-gray-500 font-medium mt-1">Cliente Premium</p>
        </div>

        {/* Form Info Card */}
        <div className="px-6 mb-6">
          <div className="bg-[#161d2b]/60 border border-gray-800 rounded-[28px] overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <div className="flex-1">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">NOMBRE</p>
                <p className="font-bold text-gray-200 text-lg">{fullName}</p>
              </div>
              <button className="text-blue-500 font-bold text-sm">Editar</button>
            </div>
            <div className="p-6 flex justify-between items-center">
              <div className="flex-1">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">CORREO ELECTRÓNICO</p>
                <p className="font-bold text-gray-200 text-lg">{email}</p>
              </div>
              <button className="text-blue-500 font-bold text-sm">Editar</button>
            </div>
          </div>
        </div>

        {/* Security Alert Card */}
        <div className="px-6 mb-12">
          <div className="bg-[#0e1a33] border border-blue-900/30 rounded-[28px] p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-[#16274d] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-500 font-bold mb-1">Seguridad</h3>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Por tu seguridad, nunca compartas tus datos personales, claves o códigos SMS con terceros. El banco nunca te los pedirá.
              </p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-6 mb-10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 py-4 text-red-500 font-bold active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Navigation */}
      <BottomNav active={Screen.PROFILE} onNavigate={onNavigate} />
    </div>
  );
};

const BottomNav: React.FC<{ active: Screen, onNavigate: (s: Screen) => void }> = ({ active, onNavigate }) => (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0b111e]/95 backdrop-blur-xl border-t border-gray-800 flex items-center justify-around px-2 z-10">
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

export default ProfileScreen;
