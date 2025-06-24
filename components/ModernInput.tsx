"use client";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ModernInput({ label, type = "text", value, onChange }: Props) {
  return (
    <div className="w-full relative mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
      <label className="absolute left-4 top-3 text-white/60 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 transition-all">
        {label}
      </label>
    </div>
  );
}
