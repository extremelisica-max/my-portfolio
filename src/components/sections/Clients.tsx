const CLIENTS = [
  "Gmini",
  "OnePix",
  "Control Systems",
  "Zadel.rf",
  "Элита",
];

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <div
      aria-label="Клиенты и проекты"
      data-testid="section-clients-ticker"
      className="w-full overflow-hidden bg-near-black py-5"
    >
      <div className="ticker-track" aria-hidden="true">
        {doubled.map((name, i) => (
          <div key={`${name}-${i}`} className="flex items-center">
            <span className="px-10 text-base font-semibold text-white/90 whitespace-nowrap">
              {name}
            </span>
            <span className="text-white/20 select-none text-lg">—</span>
          </div>
        ))}
      </div>

      <ul className="sr-only">
        {CLIENTS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
