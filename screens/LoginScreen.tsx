
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: (dni: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [dni, setDni] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex-1 flex flex-col p-8 pt-20 bg-dark-app overflow-y-auto">
      {/* Header Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h1 className="text-xl font-bold tracking-wider">BANCA <span className="font-normal opacity-70">MOVIL</span></h1>
        <div className="ml-auto bg-gray-800 p-2 rounded-full cursor-pointer">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">¡Hola de nuevo!</h2>
        <p className="text-gray-400">Ingresa tus datos para continuar de forma segura</p>
      </div>

      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6 text-center">OPERACIONES RÁPIDAS</p>
        <div className="flex justify-center gap-6">
          <QuickAction icon="transfer" label="Transferencias" />
          <QuickAction icon="payments" label="Pagos" />
          <QuickAction icon="lock" label="Bloqueo" />
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Número de Documento</label>
          <input 
            type="text" 
            placeholder="Ingresa tu DNI"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-600 focus:border-blue-500 transition-colors"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Clave</label>
          <div className="relative">
            <input 
              type={showPass ? "text" : "password"} 
              placeholder="••••••"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-600 focus:border-blue-500 transition-colors"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button 
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPass ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button 
          onClick={() => onLogin(dni)}
          disabled={!dni || !pass}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all active:scale-[0.98]"
        >
          Iniciar sesión
        </button>

        <div className="flex flex-col items-center gap-4 py-4">
          <button className="text-blue-400 text-sm font-medium">Olvidé mi clave</button>
          <div className="w-1/3 h-[1px] bg-gray-800"></div>
          <p className="text-gray-400 text-sm">¿No tienes cuenta? <button className="text-blue-400 font-bold">Ábrela aquí</button></p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-center gap-2 text-gray-600 text-[10px] pb-4 uppercase tracking-wider">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        Conexión Segura TLS 1.3
      </div>
    </div>
  );
};

const QuickAction: React.FC<{ icon: string, label: string }> = ({ icon, label }) => {
  const getIcon = () => {
    switch(icon) {
      case 'transfer': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />;
      case 'payments': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
      case 'lock': return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 group-hover:bg-blue-600/20 group-hover:border-blue-600 transition-all">
        <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {getIcon()}
        </svg>
      </div>
      <span className="text-[10px] text-gray-500 font-medium">{label}</span>
    </div>
  );
}

export default LoginScreen;
