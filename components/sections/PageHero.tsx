import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="hero-gradient relative pt-32 pb-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-white/40 mb-8">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i === breadcrumb.length - 1 ? (
                <span className="text-white/60">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-green)" }}
          >
            {eyebrow}
          </p>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {title}{" "}
            {titleAccent && (
              <span style={{ color: "var(--brand-cyan)" }}>{titleAccent}</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
