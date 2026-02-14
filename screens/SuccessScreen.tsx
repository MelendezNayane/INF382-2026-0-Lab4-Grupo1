
import React from 'react';
import { TransactionData } from '../types';

interface SuccessScreenProps {
  transaction: TransactionData;
  onClose: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ transaction, onClose }) => {
  return (
    <div className="flex-1 flex flex-col bg-dark-app items-center justify-center p-8 animate-in fade-in zoom-in duration-500">
      <div className="w-full flex justify-end absolute top-10 left-0 px-8">
         <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
      </div>

      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 mb-8 animate-bounce">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2">¡Operación exitosa!</h2>
        <p className="text-gray-400">Tu dinero se envió correctamente</p>
      </div>

      <div className="w-full bg-gray-900 border border-gray-800 rounded-3xl p-6 mb-10 relative">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h3 className="font-bold text-xl text-white">{transaction.contact?.name || transaction.accountDest || "Beneficiario"}</h3>
          <p className="text-gray-500 text-sm">{transaction.contact?.phone || "Transf. Bancaria"}</p>
        </div>
        
        <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">MONTO</span>
             <span className="text-2xl font-bold text-white">{transaction.amount}</span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">MÉTODO</span>
             <div className="flex items-center gap-2">
               <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${transaction.method === 'Yape' ? 'bg-purple-600' : 'bg-cyan-400 text-black'}`}>
                 {transaction.method === 'Yape' ? 'Y' : 'P'}
               </div>
               <span className="font-bold">{transaction.method || 'Banca Móvil'}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center mb-10">
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1">CÓDIGO: {transaction.operationId}</p>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{transaction.date}</p>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={onClose}
          className="w-full bg-blue-600 py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/40 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          IR AL INICIO
        </button>
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-900 text-gray-400 font-medium active:bg-gray-800 rounded-2xl transition-colors text-xs uppercase font-bold tracking-widest">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Compartir
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-900 text-gray-400 font-medium active:bg-gray-800 rounded-2xl transition-colors text-xs uppercase font-bold tracking-widest">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
