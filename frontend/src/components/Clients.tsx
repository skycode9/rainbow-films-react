import { motion } from "framer-motion";
import { memo, useState, useEffect } from "react";
import { clientsAPI } from "../services/api";

interface Client {
  _id: string;
  name: string;
  logo: string;
}

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const fallbackClients = [
    "Netflix",
    "Amazon Prime",
    "Disney+",
    "HBO Max",
    "Sony Pictures",
    "Warner Bros",
    "Universal",
    "Paramount",
  ];

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientsAPI.getAll();
        console.log("Clients API Response:", response.data);
        if (response.data && response.data.length > 0) {
          setClients(response.data);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const displayClients =
    clients.length > 0
      ? clients
      : fallbackClients.map((name, i) => ({
          _id: `fallback-${i}`,
          name,
          logo: "",
        }));

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <motion.div
            className="relative w-64 h-0.5 mx-auto mb-6 overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <div className="absolute inset-0 bg-rainbow-gradient" />
          </motion.div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We've had the privilege to work with some of the biggest names in
            the entertainment industry
          </p>
        </div>

        {/* Infinite Scrolling Slider */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-400">Loading clients...</p>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="flex clients-scroll space-x-8">
              {/* First set */}
              {displayClients.map((client, index) => (
                <div
                  key={`first-${client._id || index}`}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain p-4"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}

              {/* Second set for seamless loop */}
              {displayClients.map((client, index) => (
                <div
                  key={`second-${client._id || index}`}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain p-4"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Clients);
