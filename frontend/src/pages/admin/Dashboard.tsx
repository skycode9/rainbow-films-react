import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Film,
  Video,
  Mail,
  Users,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { authAPI } from '../../services/api';

// Import admin components
import HeroVideoManager from '../../components/admin/HeroVideoManager';
import FilmsManager from '../../components/admin/FilmsManager';
import ContactsManager from '../../components/admin/ContactsManager';
import SubscribersManager from '../../components/admin/SubscribersManager';

type Tab = 'overview' | 'hero-video' | 'films' | 'contacts' | 'subscribers';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await authAPI.checkAuth();
      if (!response.data.isAuthenticated) {
        navigate('/admin/login');
      }
    } catch (error) {
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('adminAuth');
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    { id: 'overview' as Tab, label: 'Overview', icon: LayoutDashboard },
    { id: 'hero-video' as Tab, label: 'Hero Video', icon: Video },
    { id: 'films' as Tab, label: 'Films', icon: Film },
    { id: 'contacts' as Tab, label: 'Contacts', icon: Mail },
    { id: 'subscribers' as Tab, label: 'Subscribers', icon: Users },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 flex flex-col fixed h-full z-50 lg:relative"
          >
            {/* Logo */}
            <div className="p-6 border-b border-gray-800">
              <h1 className="text-2xl font-bold text-white">Rainbow Films</h1>
              <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.innerWidth < 1024) setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-800">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-900/50 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-white"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h2 className="text-xl font-bold text-white capitalize">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'hero-video' && <HeroVideoManager />}
              {activeTab === 'films' && <FilmsManager />}
              {activeTab === 'contacts' && <ContactsManager />}
              {activeTab === 'subscribers' && <SubscribersManager />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Films"
          value="0"
          icon={Film}
          color="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Total Contacts"
          value="0"
          icon={Mail}
          color="from-green-500 to-emerald-500"
        />
        <StatsCard
          title="Subscribers"
          value="0"
          icon={Users}
          color="from-purple-500 to-pink-500"
        />
        <StatsCard
          title="Hero Videos"
          value="1"
          icon={Video}
          color="from-orange-500 to-red-500"
        />
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Welcome to Rainbow Films Admin Panel
        </h3>
        <p className="text-gray-400 mb-6">
          Manage your website content, view messages, and track analytics all in one place.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Quick Actions</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Update hero video</li>
              <li>• Add new films to portfolio</li>
              <li>• Review contact messages</li>
              <li>• Manage subscribers</li>
            </ul>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">System Status</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Backend API: <span className="text-green-500">Online</span></li>
              <li>• Database: <span className="text-green-500">Connected</span></li>
              <li>• Authentication: <span className="text-green-500">Active</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  icon: any;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-400">{title}</p>
    </motion.div>
  );
}
