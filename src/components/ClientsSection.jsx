export const ClientsSection = () => {
  // Array of clients/collaborators - you can add more or modify
  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: "/clients/edutic.png",
    },
    {
      id: 2,
      name: "Client 2",
      logo: "/clients/ptpn.png",
    },
  ];

  return (
    <section id="clients" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Clients & <span className="text-primary">Collaborations</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Proud to work with amazing brands and partners</p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-4">
              <img src={client.logo} alt={client.name} className="max-h-20 md:max-h-24 w-auto object-contain transition-all duration-300 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
