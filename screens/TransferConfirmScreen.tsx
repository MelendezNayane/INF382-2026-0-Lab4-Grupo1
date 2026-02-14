
import React, { useState } from 'react';
import { TransactionData } from '../types';

interface TransferConfirmScreenProps {
  transaction: TransactionData;
  onBack: () => void;
  onConfirm: () => void;
}

const TransferConfirmScreen: React.FC<TransferConfirmScreenProps> = ({ transaction, onBack, onConfirm }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [authStep, setAuthStep] = useState<'idle' | 'scanning' | 'success'>('idle');

  const handleConfirm = () => {
    setIsProcessing(true);
    setAuthStep('scanning');
    
    // Simulación de autenticación biométrica (FaceID/Huella)
    setTimeout(() => {
      setAuthStep('success');
      setTimeout(() => {
        onConfirm(); // Navega a Pantalla 11: Comprobante
      }, 800);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col bg-dark-app h-full">
      {/* Header */}
      <div className="p-6 pt-10 flex items-center justify-between border-b border-gray-800 bg-dark-app/50 backdrop-blur-md">
        {!isProcessing && (
          <button onClick={onBack} className="p-2 text-white hover:bg-gray-800 rounded-full transition-colors">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
        )}
        <h1 className="text-lg font-bold flex-1 text-center">Confirmar Operación</h1>
        {!isProcessing && <div className="w-10"></div>}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Resumen de Monto */}
        <div className="bg-gradient-to-br from-blue-900/40 to-black p-8 rounded-[32px] border border-blue-500/30 shadow-2xl text-center">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">TOTAL A ENVIAR</p>
          <h2 className="text-5xl font-black text-white mb-2">{transaction.amount}</h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Transferencia Inmediata</span>
          </div>
        </div>

        {/* Detalles de la Transacción */}
        <div className="bg-gray-900/40 rounded-[24px] p-6 space-y-6 border border-gray-800">
           <DetailRow 
             label="Desde" 
             title={transaction.accountSource?.name || "Cuenta Principal"} 
             subtitle={`Soles • **** ${transaction.accountSource?.number.slice(-4) || '1234'}`} 
             icon="bank"
           />
           <div className="h-[1px] bg-gray-800 w-full"></div>
           <DetailRow 
             label="Para" 
             title={transaction.contact?.name || "Cuenta Externa"} 
             subtitle={transaction.contact?.phone || transaction.accountDest || "No especificado"} 
             icon="user"
           />
           <div className="h-[1px] bg-gray-800 w-full"></div>
           <DetailRow 
             label="Mensaje" 
             title={transaction.message || "Sin mensaje"} 
             icon="msg"
           />
        </div>

        {/* Seguridad */}
        <div className="p-4 bg-gray-900/60 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-white mb-0.5">Operación Protegida</p>
            <p className="text-[10px] text-gray-500">Se validará tu identidad mediante token digital.</p>
          </div>
        </div>
      </div>

      {/* FOOTER - BOTÓN DE CONFIRMACIÓN */}
      <div className="p-6 pb-12 bg-gray-900/80 backdrop-blur-xl border-t border-gray-800">
        <button 
          onClick={handleConfirm}
          disabled={isProcessing}
          className={`group relative w-full h-16 rounded-[20px] font-black text-lg flex items-center justify-center transition-all active:scale-[0.98] ${
            authStep === 'success' ? 'bg-green-600 shadow-green-900/40' : 
            isProcessing ? 'bg-gray-800' : 
            'bg-blue-600 shadow-xl shadow-blue-500/30 hover:bg-blue-500'
          }`}
        >
          {authStep === 'idle' && (
            <div className="flex items-center gap-3">
              <span>CONFIRMAR OPERACIÓN</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          )}

          {authStep === 'scanning' && (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="tracking-widest text-sm font-bold animate-pulse">VALIDANDO...</span>
            </div>
          )}

          {authStep === 'success' && (
            <div className="flex items-center gap-3 animate-in zoom-in duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>¡LISTO!</span>
            </div>
          )}
        </button>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

const DetailRow: React.FC<{ label: string, title: string, subtitle?: string, icon: 'bank' | 'user' | 'msg' }> = ({ label, title, subtitle, icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'bank': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />;
      case 'user': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
      case 'msg': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />;
    }
  }

  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {getIcon()}
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="font-bold text-white text-sm">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
};

export default TransferConfirmScreen;
