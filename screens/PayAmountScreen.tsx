
import React, { useState } from 'react';
import { Contact, TransactionData } from '../types';

interface PayAmountScreenProps {
  contact: Contact;
  onBack: () => void;
  onFinish: (data: TransactionData) => void;
}

const PayAmountScreen: React.FC<PayAmountScreenProps> = ({ contact, onBack, onFinish }) => {
  const [amount, setAmount] = useState('0.00');
  const [method, setMethod] = useState<'Yape' | 'Plin'>('Plin');
  const [message, setMessage] = useState('');

  const appendDigit = (digit: string) => {
    if (amount === '0.00') {
      setAmount(digit + '.00');
      return;
    }
    const current = amount.split('.')[0];
    setAmount(current + digit + '.00');
  };

  const removeDigit = () => {
    const current = amount.split('.')[0];
    if (current.length <= 1) {
      setAmount('0.00');
    } else {
      setAmount(current.slice(0, -1) + '.00');
    }
  };

  const handleSubmit = () => {
    if (parseFloat(amount) <= 0) return;
    onFinish({
      contact,
      amount: `S/ ${amount}`,
      method,
      message,
      operationId: Math.floor(Math.random() * 100000000).toString(),
      date: new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }),
      type: 'payment'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-dark-app overflow-hidden">
      {/* Header */}
      <div className="p-6 pt-10 flex items-center justify-between">
        <button onClick={onBack} className="p-2">
           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
        </button>
        <h1 className="text-lg font-bold">Enviar a {contact.name.split(' ')[0]}</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-10">
        <div className="flex items-baseline mb-8">
           <span className="text-2xl font-medium text-gray-500 mr-2">S/</span>
           <span className={`text-6xl font-bold ${method === 'Yape' ? 'text-purple-400' : 'text-blue-400'}`}>
             {amount}
           </span>
           <span className="w-1 h-12 bg-blue-500 ml-1 animate-pulse"></span>
        </div>

        {/* Toggle Yape/Plin */}
        <div className="bg-gray-900/50 p-1 rounded-2xl flex w-full max-w-[240px] mb-8 border border-gray-800">
           <button 
             onClick={() => setMethod('Yape')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${method === 'Yape' ? 'bg-purple-900/40 border border-purple-500 text-white' : 'text-gray-500'}`}
           >
             <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center font-bold text-[10px]">Y</div>
             <span className="text-sm font-bold">Yape</span>
           </button>
           <button 
             onClick={() => setMethod('Plin')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${method === 'Plin' ? 'bg-blue-600 border border-blue-400 text-white' : 'text-gray-500'}`}
           >
             <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center font-bold text-[10px] text-black">P</div>
             <span className="text-sm font-bold">Plin</span>
           </button>
        </div>

        {/* Message */}
        <button className="flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-full border border-gray-800 mb-10 active:bg-gray-800">
          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-sm text-gray-400">Agregar un mensaje</span>
        </button>

        {/* Keypad */}
        <div className="w-full grid grid-cols-3 gap-y-4 gap-x-8 mb-8">
           {[1,2,3,4,5,6,7,8,9,'.',0,'del'].map(k => (
             <button 
               key={k}
               onClick={() => k === 'del' ? removeDigit() : k !== '.' ? appendDigit(k.toString()) : null}
               className="h-16 flex items-center justify-center text-2xl font-bold bg-gray-900/30 rounded-2xl active:bg-gray-800"
             >
               {k === 'del' ? (
                 <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                 </svg>
               ) : k}
             </button>
           ))}
        </div>

        {/* Action Button */}
        <button 
          onClick={handleSubmit}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 ${method === 'Yape' ? 'bg-purple-700 shadow-purple-900/40' : 'bg-blue-600 shadow-blue-900/40'}`}
        >
          {method === 'Yape' ? 'YAPEAR' : 'PLINEAR'}
          <svg className="w-5 h-5 rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PayAmountScreen;
