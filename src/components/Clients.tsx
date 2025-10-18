const Clients = () => {
  const clients = [
    "Netflix",
    "Amazon Prime",
    "Disney+",
    "HBO Max",
    "Sony Pictures",
    "Warner Bros",
    "Universal",
    "Paramount",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We've had the privilege to work with some of the biggest names in
            the entertainment industry
          </p>
        </div>

        {/* Infinite Scrolling Slider */}
        <div className="relative overflow-hidden">
          <div className="flex clients-scroll space-x-8">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  {client}
                </span>
              </div>
            ))}

            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
