import { cn } from "@/lib/cn";

interface WalletCardProps {
  label: string;
  amount: string;
  digits: string;
  className?: string;
}

export function WalletCard({
  label,
  amount,
  digits,
  className,
}: WalletCardProps) {
  return (
    <div
      className={cn(
        "bg-ink flex min-h-[150px] flex-col rounded-[18px] p-[22px] text-white",
        className,
      )}
    >
      <span className="text-blue self-end text-sm font-extrabold">GSX</span>
      <p className="text-2xs text-muted-4 mt-3.5 font-bold tracking-[0.09em]">
        {label}
      </p>
      <p className="mt-2 text-[29px] font-extrabold tracking-[-0.035em]">
        {amount}
      </p>
      <p className="text-muted-4 mt-3.5 text-xs">•••• {digits}</p>
    </div>
  );
}
