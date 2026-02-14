
import React, { useState } from 'react';
import { Contact } from '../types';

interface PayMobileScreenProps {
  onBack: () => void;
  onSelectContact: (contact: Contact) => void;
}

const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Juan Delgado', phone: '987 654 321' },
  { id: '2', name: 'Maria Alva', phone: '912 345 678' },
  { id: '3', name: 'Ricardo Torres', phone: '954 112 334' },
  { id: '4', name: 'Sofia Paredes', phone: '922 445 112' },
  { id: '5', name: 'Carlos Mendoza', phone: '945 889 221' },
  { id: '6', name: 'Elena Rojas', phone: '933 121 445' },
  { id: '7', name: 'Fernando Paz', phone: '911 223 344' },
  { id: '8', name: 'Gisella Ortiz', phone: '990 445 332' },
];

const PayMobileScreen: React.FC<PayMobileScreenProps> = ({ onBack, onSelectContact }) => {
  const [search, setSearch] = useState('');

  const filteredContacts = MOCK_CONTACTS.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.phone.replace(/\s/g, '').includes(search.replace(/\s/g, ''))
  );

  return (
    <div className="flex-1 flex flex-col bg-dark-app">
      {/* Header */}
      <div className="p-6 pt-10 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack} className="p-2">
           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
        </button>
        <h1 className="text-lg font-bold">Pago por Celular</h1>
        <button className="p-2 text-blue-500">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
           </svg>
        </button>
      </div>

      {/* Search */}
      <div className="p-6 pb-2">
        <div className="bg-gray-900 border border-gray-700 rounded-xl flex items-center p-4">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Buscar contacto o ingresar celular"
            className="bg-transparent flex-1 text-white placeholder-gray-500 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch('')}>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
          {search ? 'CONTACTOS ENCONTRADOS' : 'CONTACTOS'}
        </p>
        <div className="space-y-1">
          {filteredContacts.map(contact => (
            <div 
              key={contact.id}
              onClick={() => onSelectContact(contact)}
              className="flex items-center justify-between py-4 border-b border-gray-800 active:bg-gray-800 transition-colors cursor-pointer rounded-lg px-2"
            >
              <div>
                <h3 className="font-bold text-white">{contact.name}</h3>
                <p className="text-sm text-gray-500">{contact.phone}</p>
              </div>
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
          {filteredContacts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 opacity-30">
               <svg className="w-20 h-20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
               <p className="text-center font-medium">No se encontraron contactos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayMobileScreen;
