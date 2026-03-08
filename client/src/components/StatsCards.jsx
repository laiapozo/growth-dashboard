function StatsCards({ getTotal }) {
  const cards = [
    { label: "Page visits", value: getTotal("page_visits"), icon: "fa-eye" },
    { label: "Signups", value: getTotal("signups"), icon: "fa-user-plus" },
    {
      label: "Conversions",
      value: getTotal("conversions"),
      icon: "fa-handshake",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-xl border border-border-gray p-5"
        >
          <div className="flex items-center gap-2 mb-2">
            <i className={`fa-solid ${card.icon} text-brand-red`}></i>
            <span className="text-xs font-medium text-mid-gray">
              {card.label}
            </span>
          </div>
          <p className="text-2xl font-bold text-almost-black">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
