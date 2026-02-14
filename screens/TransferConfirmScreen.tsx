
import React, { useState } from 'react';
import { TransactionData } from '../types';

interface TransferConfirmScreenProps {
  transaction: TransactionData;
  onBack: () => void;
  onConfirm: () => void;
}

const TransferConfirmScreen: React.FC<TransferConfirmScreenProps> = ({ transaction, onBack, onConfirm }) => {
  const [saveFavorite, setSaveFavorite] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulación de carga para mejor UX antes de ir al comprobante
    setTimeout(() => {
      onConfirm();
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col bg-dark-app">
      <div className="p-6 pt-10 flex items-center justify-between border-b border-gray-800">
        {!isProcessing && (
          <button onClick={onBack} className="p-2 text-white hover:bg-gray-800 rounded-full transition-colors">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
        )}
        <h1 className="text-lg font-bold flex-1 text-center">Confirmación</h1>
        {!isProcessing && <div className="w-10"></div>}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="space-y-6 bg-gray-900/30 p-4 rounded-3xl border border-gray-800">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">MONTO A ENVIAR</span>
             <span className="text-3xl font-bold text-white">{transaction.amount}</span>
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">COSTO DE OPERACIÓN</span>
             <span className="text-sm font-bold text-green-500">GRATIS</span>
          </div>
        </div>

        <div className="space-y-6 px-2">
           <DetailRow 
             label="CUENTA DE ORIGEN" 
             title="Mi Cuenta Principal" 
             subtitle="Ahorros Soles **** 1234" 
           />
           <DetailRow 
             label="DESTINATARIO" 
             title={transaction.contact?.name || "Cuenta Externa"} 
             subtitle={transaction.contact?.phone || transaction.accountDest || "No especificado"} 
           />
           <DetailRow 
             label="MÉTODO" 
             title={transaction.type === 'payment' ? `Pago con ${transaction.method}` : "Transferencia Bancaria"} 
           />
        </div>

        {!isProcessing && (
          <div className="pt-4 border-t border-gray-800">
             <div className="flex items-center justify-between mb-4">
               <span className="text-sm font-medium">Guardar como favorito</span>
               <button 
                 onClick={() => setSaveFavorite(!saveFavorite)}
                 className={`w-12 h-6 rounded-full transition-all relative ${saveFavorite ? 'bg-blue-600' : 'bg-gray-700'}`}
               >
                 <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${saveFavorite ? 'right-1' : 'left-1'}`}></div>
               </button>
             </div>
             {saveFavorite && (
               <input 
                 type="text" 
                 placeholder="Ej. Alquiler Departamento"
                 className="w-full bg-gray-900 border border-gray-800 rounded-xl p-4 text-sm text-white focus:border-blue-500 transition-colors"
               />
             )}
          </div>
        )}
      </div>

      <div className="p-6 pb-12 bg-dark-app/80 backdrop-blur-sm">
        <button 
          onClick={handleConfirm}
          disabled={isProcessing}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 ${isProcessing ? 'bg-gray-800 text-gray-500' : 'bg-blue-600 shadow-blue-900/40'}`}
        >
          {isProcessing ? (
            <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              CONFIRMAR Y PAGAR
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const DetailRow: React.FC<{ label: string, title: string, subtitle?: string }> = ({ label, title, subtitle }) => (
  <div className="space-y-1">
    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="font-bold text-sm text-white">{title}</p>
    {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
  </div>
);

export default TransferConfirmScreen;
