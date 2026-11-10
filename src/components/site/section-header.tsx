import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <span
        className={cn(
          "inline-block rounded-full border px-4 py-1.5 text-sm font-semibold uppercase tracking-widest",
          dark
            ? "border-gold-400/40 bg-gold-400/10 text-gold-400"
            : "border-gold-500/40 bg-gold-100/60 text-gold-700"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold md:text-4xl lg:text-[2.6rem] lg:leading-tight",
          dark ? "text-white" : "text-brand-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-brand-100/80" : "text-slate-600",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
