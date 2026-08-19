import { cn } from "@/lib/cn";

interface StatTileProps {
  kicker: string;
  value: string;
  sub?: string;
  // The prototype inverts the first tile in each owner-panel row.
  dark?: boolean;
  className?: string;
}

export function StatTile({
  kicker,
  value,
  sub,
  dark = false,
  className,
}: StatTileProps) {
  return (
    <div
      className={cn(
        "rounded-2xl px-[22px] pt-5 pb-[22px]",
        dark
          ? "bg-ink text-white"
          : "border-line-tile bg-surface text-ink border",
        className,
      )}
    >
      <p
        className={cn(
          "text-2xs font-bold tracking-[0.09em]",
          dark ? "text-muted-4" : "text-muted-2",
        )}
      >
        {kicker}
      </p>
      <p className="text-h4 mt-2.5 leading-none font-bold">{value}</p>
      {sub ? (
        <p
          className={cn(
            "mt-2.5 text-sm",
            dark ? "text-muted-4" : "text-muted-2",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
