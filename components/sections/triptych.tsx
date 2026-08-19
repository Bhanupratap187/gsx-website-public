import { TRIPTYCH } from "@/content/hero";

export function Triptych() {
  return (
    <section
      data-tone="dark"
      className="bg-ground text-content grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]"
    >
      {TRIPTYCH.map((item) => (
        <div
          key={item.title}
          className="border-ink-line px-[clamp(24px,3vw,56px)] py-[clamp(40px,4.5vw,72px)] not-last:border-r"
        >
          <h2 className="text-blue text-[clamp(24px,2.1vw,30px)] font-bold tracking-[-0.02em]">
            {item.title}
          </h2>
          <p className="text-content-muted mt-4 max-w-[420px] text-base leading-[1.6]">
            {item.body}
          </p>
        </div>
      ))}
    </section>
  );
}
