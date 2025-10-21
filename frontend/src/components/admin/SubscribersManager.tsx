import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Trash2,
  Loader,
  Calendar,
  Mail,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { subscribeAPI } from '../../services/api';

interface Subscriber {
  _id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export default function SubscribersManager() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await subscribeAPI.getAll();
      setSubscribers(response.data.data || []);
      setStats(response.data.stats || { total: 0, active: 0, inactive: 0 });
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await subscribeAPI.toggle(id);
      setSubscribers(
        subscribers.map((s) =>
          s._id === id ? { ...s, isActive: !s.isActive } : s
        )
      );
      const subscriber = subscribers.find((s) => s._id === id);
      if (subscriber) {
        setStats({
          ...stats,
          active: subscriber.isActive ? stats.active - 1 : stats.active + 1,
          inactive: subscriber.isActive
            ? stats.inactive + 1
            : stats.inactive - 1,
        });
      }
    } catch (error) {
      alert('Failed to toggle status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    try {
      await subscribeAPI.delete(id);
      const deletedSubscriber = subscribers.find((s) => s._id === id);
      setSubscribers(subscribers.filter((s) => s._id !== id));
      if (deletedSubscriber) {
        setStats({
          total: stats.total - 1,
          active: deletedSubscriber.isActive ? stats.active - 1 : stats.active,
          inactive: deletedSubscriber.isActive
            ? stats.inactive
            : stats.inactive - 1,
        });
      }
    } catch (error) {
      alert('Failed to delete subscriber');
    }
  };

  const filteredSubscribers = subscribers.filter((s) => {
    if (filter === 'active') return s.isActive;
    if (filter === 'inactive') return !s.isActive;
    return true;
  });

  const handleExportCSV = () => {
    const csv = [
      ['Email', 'Status', 'Subscribed Date'].join(','),
      ...filteredSubscribers.map((s) =>
        [
          s.email,
          s.isActive ? 'Active' : 'Inactive',
          new Date(s.createdAt).toLocaleDateString(),
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Newsletter Subscribers
            </h2>
            <p className="text-gray-400 text-sm">
              {stats.total} total • {stats.active} active
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExportCSV}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Export CSV
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard
          title="Total Subscribers"
          value={stats.total}
          color="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Active"
          value={stats.active}
          color="from-green-500 to-emerald-500"
        />
        <StatsCard
          title="Inactive"
          value={stats.inactive}
          color="from-gray-600 to-gray-700"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(['all', 'active', 'inactive'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition ${
              filter === tab
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subscribers Table */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Email
                </th>
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Subscribed Date
                </th>
                <th className="text-right p-4 text-sm font-semibold text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-500">
                    No subscribers found
                  </td>
                </tr>
              ) : (
                filteredSubscribers.map((subscriber, index) => (
                  <motion.tr
                    key={subscriber._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Mail className="w-4 h-4 text-gray-500" />
                        {subscriber.email}
                      </div>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleStatus(subscriber._id)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold transition ${
                          subscriber.isActive
                            ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                            : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {subscriber.isActive ? (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            Active
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" />
                            Inactive
                          </>
                        )}
                      </button>
                    </td>
                    <td className="p-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(subscriber.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleDelete(subscriber._id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
      <div
        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} mb-3`}
      />
      <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
}
