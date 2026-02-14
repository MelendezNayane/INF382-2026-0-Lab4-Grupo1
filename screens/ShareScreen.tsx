
import React from 'react';
import { TransactionData } from '../types';

interface ShareScreenProps {
  transaction: TransactionData;
  onBack: () => void;
  onFinish: () => void;
}

const ShareScreen: React.FC<ShareScreenProps> = ({ transaction, onBack, onFinish }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b111e] h-full relative overflow-hidden text-white">
      {/* Fondo de éxito (estático detrás del bottom sheet) */}
      <div className="flex-1 flex flex-col items-center pt-24 px-8 opacity-20 transition-opacity">
        <div className="w-24 h-24 bg-blue-900/20 rounded-full flex items-center justify-center mb-8 border border-blue-500/20">
          <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-center mb-2">¡Listo! Tu pago fue enviado</h2>
        <p className="text-gray-500 text-center font-medium">Transacción realizada con éxito</p>
        
        <div className="mt-12 w-full bg-gray-900/50 rounded-3xl p-8 border border-gray-800 flex flex-col items-center">
            <p className="text-xl font-bold text-gray-400">Maria Alva</p>
            <p className="text-sm text-gray-600 font-medium">+51 987 654 321</p>
        </div>
      </div>

      {/* Backdrop oscuro para simular el bottom sheet modal */}
      <div className="absolute inset-0 bg-black/60 z-20 backdrop-blur-sm" onClick={onBack}></div>

      {/* Bottom Sheet - Estilo nativo */}
      <div className="absolute inset-x-0 bottom-0 bg-[#121212] rounded-t-[48px] shadow-[0_-15px_50px_rgba(0,0,0,0.8)] flex flex-col z-30 animate-in slide-in-from-bottom duration-500 ease-out">
        {/* Handle */}
        <div className="w-12 h-1.5 bg-gray-700/60 rounded-full mx-auto mt-5 mb-8"></div>
        
        <div className="px-8 pb-14">
          <h3 className="text-2xl font-bold mb-10 tracking-tight">Compartir por</h3>
          
          {/* Contactos Horizontales con Insignia WhatsApp */}
          <div className="flex gap-7 overflow-x-auto hide-scrollbar mb-12">
            <ShareContact name="Maria A." img="https://i.pravatar.cc/150?u=maria" />
            <ShareContact name="Carlos P." img="https://i.pravatar.cc/150?u=carlos" />
            <ShareContact name="Lucia M." img="https://i.pravatar.cc/150?u=lucia" />
            <ShareContact name="Jorge V." img="https://i.pravatar.cc/150?u=jorge" />
            <ShareContact name="Sofia R." img="https://i.pravatar.cc/150?u=sofia" />
          </div>

          <div className="h-[1px] bg-gray-800/80 w-full mb-8"></div>

          {/* Opciones de Lista - Coincidiendo con Screenshot */}
          <div className="space-y-4">
            <ShareListItem icon="mail" label="Correo" onClick={onFinish} />
            <ShareListItem icon="chat" label="Mensaje" onClick={onFinish} />
            <ShareListItem icon="download" label="Descargar" onClick={onFinish} />
          </div>
          
          {/* Indicador de home nativo (opcional para estética) */}
          <div className="w-32 h-1 bg-gray-800 rounded-full mx-auto mt-12 mb-[-20px] opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

const ShareContact: React.FC<{ name: string, img: string }> = ({ name, img }) => (
  <div className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-pointer active:scale-90 transition-transform">
    <div className="relative">
      <div className="w-[68px] h-[68px] rounded-full overflow-hidden border-2 border-transparent group-active:border-blue-500 transition-colors">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#25D366] rounded-full border-[3px] border-[#121212] flex items-center justify-center p-1 shadow-lg">
        <svg fill="white" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.284l-.542 2.317 2.134-.549c.954.592 1.939.955 3.138.956 3.182 0 5.768-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.767m4.103 8.02c-.171.479-.835.87-1.353.934-.351.043-.812.062-2.317-.549-1.928-.781-3.137-2.755-3.235-2.885-.099-.131-.813-1.084-.813-2.064 0-.98.512-1.46.693-1.656.18-.195.408-.244.544-.244s.272.001.391.007c.124.005.29-.047.453.346.166.396.566 1.39.616 1.489.049.098.083.213.017.346-.067.131-.1.213-.198.329-.1.115-.208.256-.296.345-.098.1-.202.209-.087.407.113.198.503.829 1.083 1.346.749.668 1.379.876 1.577.973.198.098.314.081.43-.05.116-.131.503-.585.637-.781.132-.198.264-.165.446-.098.181.066 1.157.545 1.355.644.198.098.33.148.379.23.049.083.049.479-.122.958zM12.029 3c-4.968 0-9 4.032-9 9 0 1.587.414 3.13 1.2 4.48L3 21l4.642-1.22c1.314.717 2.798 1.095 4.387 1.095 4.968 0 9-4.032 9-9s-4.032-9-9-9z" />
        </svg>
      </div>
    </div>
    <span className="text-[13px] font-bold text-gray-300 opacity-90">{name}</span>
  </div>
);

const ShareListItem: React.FC<{ icon: string, label: string, onClick: () => void }> = ({ icon, label, onClick }) => {
  const getIcon = () => {
    switch(icon) {
      case 'mail': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
      case 'chat': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />;
      case 'download': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />;
      default: return null;
    }
  };

  return (
    <div onClick={onClick} className="flex items-center justify-between py-3 px-2 group cursor-pointer active:bg-white/5 rounded-2xl transition-all">
      <div className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] bg-[#1e1e1e] rounded-2xl flex items-center justify-center shadow-inner">
          <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {getIcon()}
          </svg>
        </div>
        <span className="text-[17px] font-bold text-gray-100 group-hover:text-white transition-colors">{label}</span>
      </div>
      <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default ShareScreen;
