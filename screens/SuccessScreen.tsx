
import React from 'react';
import { TransactionData } from '../types';

interface SuccessScreenProps {
  transaction: TransactionData;
  onClose: () => void;
  onShare: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ transaction, onClose, onShare }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b111e] h-full relative overflow-hidden">
      {/* Botón de cierre superior (Pantalla 11 -> Pantalla 2) */}
      <div className="absolute top-10 right-6 z-20">
         <button 
           onClick={onClose} 
           className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all shadow-lg"
         >
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
      </div>

      {/* Confetti / Fondo visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-16 z-10 overflow-y-auto hide-scrollbar">
        {/* Checkmark Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)] animate-in zoom-in spin-in duration-700">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute -inset-4 bg-green-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
        </div>

        <h2 className="text-3xl font-black text-center mb-2 tracking-tight">¡Operación Exitosa!</h2>
        <p className="text-gray-400 text-center text-sm mb-8 font-medium">Tu dinero ha sido enviado correctamente.</p>

        {/* Comprobante Digital */}
        <div className="w-full bg-white rounded-[32px] p-8 shadow-2xl relative overflow-hidden mb-8">
          {/* Mock Perforación de Ticket */}
          <div className="absolute top-1/2 left-[-12px] w-6 h-6 bg-[#0b111e] rounded-full -translate-y-1/2 shadow-inner"></div>
          <div className="absolute top-1/2 right-[-12px] w-6 h-6 bg-[#0b111e] rounded-full -translate-y-1/2 shadow-inner"></div>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">COMPROBANTE ELECTRÓNICO</span>
            <h3 className="text-xl font-bold text-gray-900">{transaction.contact?.name || transaction.accountDest || "Destinatario"}</h3>
            <p className="text-gray-500 text-sm font-medium">{transaction.contact?.phone || "**** **** ****"}</p>
          </div>
          
          <div className="w-full border-t border-dashed border-gray-200 my-6"></div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
               <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">MONTO</span>
               <span className="text-2xl font-black text-blue-600">{transaction.amount}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">FECHA</span>
               <span className="text-gray-700 font-bold text-sm">{transaction.date}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">OPERACIÓN</span>
               <span className="text-gray-700 font-bold text-sm">#{transaction.operationId}</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
               <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M3 11h2v2H3v-2zm8 5h2v2h-2v-2zm-4 0h2v2H7v-2zm8-5h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2zm8-5h2v2h-2V6zm-4 0h2v2h-2V6zm-4 0h2v2H7V6zM3 14h2v2H3v-2zm18-3h-2v2h2v-2zm0-3h-2v2h2V8zm0-3h-2v2h2V5zm-8 11h2v2h-2v-2zm-4 0h2v2H7v-2zm8-5h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2zm8-5h2v2h-2V6zm-4 0h2v2h-2V6zm-4 0h2v2H7V6zM3 14h2v2H3v-2zm18-3h-2v2h2v-2zm0-3h-2v2h2V8zm0-3h-2v2h2V5z" />
               </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-4">
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 h-16 rounded-[20px] font-bold text-white shadow-[0_15px_30px_rgba(37,99,235,0.3)] active:scale-[0.97] transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            IR AL INICIO
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={onShare}
              className="flex-1 h-14 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest active:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Compartir
            </button>
            <button className="flex-1 h-14 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest active:bg-white/10 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Guardar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
