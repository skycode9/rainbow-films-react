import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Trash2,
  CheckCircle,
  Circle,
  Loader,
  Calendar,
  Building2,
} from 'lucide-react';
import { contactAPI } from '../../services/api';

interface Contact {
  _id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await contactAPI.getAll();
      setContacts(response.data.data || []);
      setStats(response.data.stats || { total: 0, unread: 0, read: 0 });
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await contactAPI.markAsRead(id);
      setContacts(
        contacts.map((c) => (c._id === id ? { ...c, isRead: true } : c))
      );
      setStats({
        ...stats,
        unread: stats.unread - 1,
        read: stats.read + 1,
      });
    } catch (error) {
      alert('Failed to mark as read');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      await contactAPI.delete(id);
      const deletedContact = contacts.find((c) => c._id === id);
      setContacts(contacts.filter((c) => c._id !== id));
      if (deletedContact) {
        setStats({
          total: stats.total - 1,
          unread: deletedContact.isRead ? stats.unread : stats.unread - 1,
          read: deletedContact.isRead ? stats.read - 1 : stats.read,
        });
      }
    } catch (error) {
      alert('Failed to delete contact');
    }
  };

  const filteredContacts = contacts.filter((c) => {
    if (filter === 'read') return c.isRead;
    if (filter === 'unread') return !c.isRead;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
          <p className="text-gray-400 text-sm">
            {stats.total} total • {stats.unread} unread
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard
          title="Total Messages"
          value={stats.total}
          color="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Unread"
          value={stats.unread}
          color="from-orange-500 to-red-500"
        />
        <StatsCard
          title="Read"
          value={stats.read}
          color="from-green-500 to-emerald-500"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(['all', 'unread', 'read'] as const).map((tab) => (
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

      {/* Messages List */}
      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No messages found
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <motion.div
              key={contact._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-br from-gray-900 to-black border rounded-xl p-6 ${
                contact.isRead ? 'border-gray-800' : 'border-green-500/50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-white text-lg">
                      {contact.name}
                    </h3>
                    {!contact.isRead && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {contact.email}
                    </span>
                    {contact.company && (
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {contact.company}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!contact.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(contact._id)}
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      title="Mark as read"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <p className="text-gray-300 whitespace-pre-wrap">
                  {contact.message}
                </p>
              </div>
            </motion.div>
          ))
        )}
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
