import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/layout/Navbar';
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { authClient } from './lib/auth';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/auth/:pathname" element={<Auth />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </NeonAuthUIProvider>
  );
}

export default App;
