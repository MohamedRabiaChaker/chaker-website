import Link from "next/link";

export default function LinkIconButton({
  href,
  icon: Icon,
  label,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-4 py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 transition-all gap-2 ${className}`}
      aria-label={label}
    >
      <Icon className="w-8 h-8" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
