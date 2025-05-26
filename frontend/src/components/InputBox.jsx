export function InputBox({ label, placeholder ,onChange}) {
  return (
    <div>
      <div className="text-sm font-medium text-slate-200 text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded text-slate-200 border-slate-300 placeholder:text-slate-200"
        onChange={onChange}
      />
    </div>
  );
}
