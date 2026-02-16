import Dashboard from './containers/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import logoBig from '@/app/images/logo-big.png';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${logoBig})` }}
      />
      <div className="relative z-10">
        <Navbar />

        <Dashboard />

        <Footer />
      </div>
    </div>
  );
}
