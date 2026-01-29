const SkillCard = ({
  icon,
  title,
  percent,
}: {
  icon: React.ReactNode;
  title: string;
  percent: string;
}) => {
  return (
    <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
      {/* Icon */}
      <div className="flex justify-center mb-4 text-orange-500">{icon}</div>

      {/* Title */}
      <h3 className="text-center font-semibold mb-3">{title}</h3>

      {/* Progress Bar */}
      <div className="w-full bg-[#1b1f3a] rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-orange-500 rounded-full"
          style={{ width: percent }}
        />
      </div>

      {/* Percentage */}
      <p className="text-center text-sm mt-2 text-orange-500">{percent}</p>
    </div>
  );
};
