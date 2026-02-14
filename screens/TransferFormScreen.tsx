
import React, { useState } from 'react';
import { Account, TransactionData } from '../types';

interface TransferFormScreenProps {
  type: 'third' | 'interbank' | 'own';
  accounts: Account[];
  onBack: () => void;
  onNext: (data: TransactionData) => void;
}

const TransferFormScreen: React.FC<TransferFormScreenProps> = ({ type, accounts, onBack, onNext }) => {
  const [step, setStep] = useState(1);
  const [sourceAcc, setSourceAcc] = useState(accounts[0]);
  const [destAcc, setDestAcc] = useState(type === 'own' ? accounts[1] : '');
  const [amount, setAmount] = useState('0.00');

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onNext({
        amount: `S/ ${amount}`,
        method: 'Plin',
        operationId: Math.floor(Math.random() * 100000000).toString(),
        date: new Date().toLocaleDateString('es-PE'),
        type: 'transfer',
        accountSource: sourceAcc,
        accountDest: destAcc.toString()
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-dark-app">
      <div className="p-6 pt-10 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack} className="p-2">
           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
        </button>
        <h1 className="text-lg font-bold">Transferencias</h1>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <Tab label="Entre mis cuentas" active={type === 'own'} />
        <Tab label="A terceros" active={type === 'third'} />
        <Tab label="Interbancario" active={type === 'interbank'} />
      </div>

      <div className="flex-1 p-6">
        {step === 1 ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {type === 'own' ? (
              <>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Cuenta de origen</p>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-900/30 rounded-xl flex items-center justify-center">
                         <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                      </div>
                      <div>
                        <p className="font-bold text-sm">{sourceAcc.name}</p>
                        <p className="text-xs text-gray-500">S/ {sourceAcc.balance.toLocaleString()} disponibles</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                     <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7"/></svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Cuenta de destino</p>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                         <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                      </div>
                      <div>
                        <p className="font-bold text-sm">{(destAcc as Account).name}</p>
                        <p className="text-xs text-gray-500">S/ {(destAcc as Account).balance.toLocaleString()} disponibles</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-10 py-10">
                 <div className="space-y-4">
                   <p className="text-gray-400 text-center px-4">Ingresa el número de cuenta de destino</p>
                   <input 
                     type="text" 
                     placeholder="000 000000000000"
                     className="w-full bg-transparent text-center text-4xl font-bold tracking-widest outline-none border-b border-gray-800 pb-4 focus:border-blue-500 transition-all"
                     onChange={(e) => setDestAcc(e.target.value)}
                   />
                   <div className="flex items-center gap-2 justify-center text-xs text-gray-500">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                     La cuenta debe tener 13 o 14 dígitos
                   </div>
                 </div>

                 <div className="flex flex-col items-center opacity-30">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                       <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                    </div>
                    <p className="text-sm">Transfiere de forma segura a cualquier contacto</p>
                 </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-10 animate-in slide-in-from-right duration-300">
            <div className="flex bg-gray-900 rounded-xl p-1 mb-8 w-fit mx-auto">
               <button className="px-6 py-2 rounded-lg bg-gray-800 text-sm font-bold text-blue-400">Soles (S/)</button>
               <button className="px-6 py-2 rounded-lg text-sm font-bold text-gray-500">Dólares ($)</button>
            </div>

            <div className="text-center">
               <p className="text-sm text-gray-500 mb-2">Monto a transferir</p>
               <div className="flex items-baseline justify-center gap-2">
                 <span className="text-4xl font-bold">S/</span>
                 <input 
                   type="number" 
                   className="bg-transparent text-center text-7xl font-bold outline-none w-48"
                   placeholder="0.00"
                   onChange={(e) => setAmount(e.target.value)}
                 />
               </div>
               <p className="text-[10px] text-gray-500 mt-4 font-bold flex items-center justify-center gap-1">
                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                 Tipo de cambio referencial: $1 = S/ 3.75
               </p>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">TRANSFERIR DESDE</p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{sourceAcc.name}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">*1234 • Saldo: S/ {sourceAcc.balance.toLocaleString()}</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-4 flex items-center gap-3">
               <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
               </div>
               <p className="text-xs font-bold leading-tight">Esta transferencia no tiene costo de comisión para cuentas del mismo banco a nivel nacional.</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 pb-12">
        <button 
          onClick={handleNext}
          disabled={(step === 1 && !destAcc)}
          className="w-full bg-blue-600 disabled:opacity-30 disabled:grayscale py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/40 active:scale-95 transition-all"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const Tab: React.FC<{ label: string, active: boolean }> = ({ label, active }) => (
  <div className={`flex-1 text-center py-4 border-b-2 transition-colors ${active ? 'border-blue-600 text-blue-500' : 'border-transparent text-gray-500'}`}>
    <span className="text-[11px] font-bold uppercase tracking-tight">{label}</span>
  </div>
);

export default TransferFormScreen;
