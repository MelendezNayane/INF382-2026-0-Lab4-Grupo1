
import React from 'react';

interface TransferSelectScreenProps {
  onClose: () => void;
  onSelectType: (type: 'third' | 'interbank' | 'own') => void;
}

const TransferSelectScreen: React.FC<TransferSelectScreenProps> = ({ onClose, onSelectType }) => {
  return (
    <div className="flex-1 flex flex-col bg-dark-app p-6 pt-10 relative h-full">
      <div className="flex items-center justify-between mb-12">
        <div className="w-6"></div>
        <h1 className="text-xl font-bold">Transferir dinero</h1>
        <button onClick={onClose} className="p-2 text-blue-500 hover:bg-blue-900/20 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Elige un tipo de transferencia</h2>
        <div className="flex justify-between gap-4">
           <TransferTypeBtn icon="third" label="A terceros" onClick={() => onSelectType('third')} />
           <TransferTypeBtn icon="inter" label="Interbancario" onClick={() => onSelectType('interbank')} />
           <TransferTypeBtn icon="own" label="Entre mis cuentas" onClick={() => onSelectType('own')} />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold mb-6">Favoritos</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex items-center mb-6">
           <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
           <input 
             type="text" 
             placeholder="Buscar favoritos"
             className="bg-transparent flex-1 text-sm text-white placeholder-gray-600"
           />
        </div>
        
        {/* Empty state for favorites */}
        <div className="flex flex-col items-center justify-center py-10 opacity-20">
          <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <p className="text-xs font-bold">Aún no tienes favoritos</p>
        </div>
      </div>
      
      {/* Footer Nav Bar Funcional */}
      <div className="h-24 flex items-center justify-around absolute bottom-0 left-0 right-0 border-t border-gray-800 bg-gray-900/80 backdrop-blur-lg z-50 px-2 pb-4">
        <button 
          onClick={onClose}
          className="flex-1 flex flex-col items-center gap-1 text-gray-500 active:scale-90 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span className="text-[10px] font-bold">INICIO</span>
        </button>

        <button className="flex-1 flex flex-col items-center gap-1 text-blue-500">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
           </svg>
           <span className="text-[10px] font-bold">OPERACIONES</span>
        </button>

        {/* Hueco para el botón central de Pagar si fuera necesario, o simplemente espaciado */}
        <div className="w-16"></div>

        <button className="flex-1 flex flex-col items-center gap-1 text-gray-500 opacity-50 cursor-not-allowed">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0v4m0 0h2a2 2 0 10-2-2v2zm0 0h-2a2 2 0 102-2v2z"/>
           </svg>
           <span className="text-[10px] font-bold">BENEFICIOS</span>
        </button>

        <button className="flex-1 flex flex-col items-center gap-1 text-gray-500 opacity-50 cursor-not-allowed">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
           </svg>
           <span className="text-[10px] font-bold">PERFIL</span>
        </button>
      </div>
    </div>
  );
};

const TransferTypeBtn: React.FC<{ icon: string, label: string, onClick: () => void }> = ({ icon, label, onClick }) => {
  const getIcon = () => {
    switch(icon) {
      case 'third': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
      case 'inter': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />;
      case 'own': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />;
      default: return null;
    }
  }

  return (
    <button onClick={onClick} className="flex-1 flex flex-col items-center gap-3 active:scale-95 transition-transform group">
      <div className="w-16 h-16 bg-blue-900/20 border border-blue-900/30 rounded-2xl flex items-center justify-center group-active:bg-blue-600 group-active:border-blue-400 transition-colors">
        <svg className="w-8 h-8 text-blue-500 group-active:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {getIcon()}
        </svg>
      </div>
      <span className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-tight">{label}</span>
    </button>
  );
}

export default TransferSelectScreen;
