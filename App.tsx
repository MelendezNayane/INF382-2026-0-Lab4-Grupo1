
import React, { useState, useEffect } from 'react';
import { Screen, Contact, Account, TransactionData } from './types';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PayMobileScreen from './screens/PayMobileScreen';
import PayAmountScreen from './screens/PayAmountScreen';
import SuccessScreen from './screens/SuccessScreen';
import TransferSelectScreen from './screens/TransferSelectScreen';
import TransferFormScreen from './screens/TransferFormScreen';
import TransferConfirmScreen from './screens/TransferConfirmScreen';
import BenefitsScreen from './screens/BenefitsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShareScreen from './screens/ShareScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [user, setUser] = useState<{ name: string, dni: string } | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [lastTransaction, setLastTransaction] = useState<TransactionData | null>(null);
  const [transferType, setTransferType] = useState<'third' | 'interbank' | 'own' | null>(null);

  const accounts: Account[] = [
    { id: '1', name: 'Cuentas en Soles', type: 'soles', balance: 12450.00, number: '123456789012' },
    { id: '2', name: 'Ahorro Soles', type: 'soles', balance: 1250.00, number: '112233445566' }
  ];

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleLogin = (dni: string) => {
    setUser({ name: 'Diego', dni: dni });
    navigateTo(Screen.HOME);
  };

  const handleLogout = () => {
    setUser(null);
    setLastTransaction(null);
    setSelectedContact(null);
    navigateTo(Screen.LOGIN);
  };

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    navigateTo(Screen.PAY_AMOUNT);
  };

  const handleFinishTransaction = (data: TransactionData) => {
    setLastTransaction(data);
    navigateTo(Screen.TRANSFER_CONFIRM);
  };

  const handleTransferInit = (type: 'third' | 'interbank' | 'own') => {
    setTransferType(type);
    navigateTo(Screen.TRANSFER_FORM);
  };

  const handleCloseSuccess = () => {
    setLastTransaction(null);
    setSelectedContact(null);
    setTransferType(null);
    navigateTo(Screen.HOME);
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto overflow-hidden relative shadow-2xl bg-dark-app">
      {currentScreen === Screen.LOGIN && (
        <LoginScreen onLogin={handleLogin} />
      )}
      {currentScreen === Screen.HOME && (
        <HomeScreen 
          user={user} 
          accounts={accounts}
          onNavigate={navigateTo} 
          onTransferSelect={() => navigateTo(Screen.TRANSFER_SELECT)}
          onPayMobile={() => navigateTo(Screen.PAY_MOBILE)}
        />
      )}
      {currentScreen === Screen.PAY_MOBILE && (
        <PayMobileScreen 
          onBack={() => navigateTo(Screen.HOME)} 
          onSelectContact={handleSelectContact} 
        />
      )}
      {currentScreen === Screen.PAY_AMOUNT && selectedContact && (
        <PayAmountScreen 
          contact={selectedContact} 
          onBack={() => navigateTo(Screen.PAY_MOBILE)} 
          onFinish={handleFinishTransaction}
        />
      )}
      {currentScreen === Screen.TRANSFER_SELECT && (
        <TransferSelectScreen 
          onClose={() => navigateTo(Screen.HOME)}
          onSelectType={handleTransferInit}
          onNavigate={navigateTo}
        />
      )}
      {currentScreen === Screen.TRANSFER_FORM && (
        <TransferFormScreen 
          type={transferType || 'third'}
          accounts={accounts}
          onBack={() => navigateTo(Screen.TRANSFER_SELECT)}
          onNext={(data) => {
            setLastTransaction(data);
            navigateTo(Screen.TRANSFER_CONFIRM);
          }}
        />
      )}
      {currentScreen === Screen.TRANSFER_CONFIRM && lastTransaction && (
        <TransferConfirmScreen 
          transaction={lastTransaction}
          onBack={() => {
            if (lastTransaction.type === 'payment') {
              navigateTo(Screen.PAY_AMOUNT);
            } else {
              navigateTo(Screen.TRANSFER_FORM);
            }
          }}
          onConfirm={() => navigateTo(Screen.SUCCESS)}
        />
      )}
      {currentScreen === Screen.SUCCESS && lastTransaction && (
        <SuccessScreen 
          transaction={lastTransaction} 
          onClose={handleCloseSuccess} 
          onShare={() => navigateTo(Screen.SHARE)}
        />
      )}
      {currentScreen === Screen.SHARE && lastTransaction && (
        <ShareScreen 
          transaction={lastTransaction}
          onBack={() => navigateTo(Screen.SUCCESS)}
          onFinish={() => navigateTo(Screen.HOME)}
        />
      )}
      {currentScreen === Screen.BENEFITS && (
        <BenefitsScreen onNavigate={navigateTo} />
      )}
      {currentScreen === Screen.PROFILE && user && (
        <ProfileScreen 
          user={user} 
          onNavigate={navigateTo} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
};

export default App;
