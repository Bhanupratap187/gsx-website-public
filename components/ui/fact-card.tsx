import type { Fact } from "@/content/types";
import { SelectCard } from "./select-card";

interface FactCardProps {
  fact: Fact;
  // Radio name shared by the grid this card sits in.
  group: string;
}

// A term/detail pair inside a HairlineGrid cell. Shared by the home page's
// company section and the About route's facts grid.
export function FactCard({ fact, group }: FactCardProps) {
  return (
    <SelectCard group={group} label={fact.term} className="p-card block">
      <dl>
        <dt className="text-content-subtle text-sm font-bold tracking-[0.13em] transition-colors">
          {fact.term}
        </dt>
        <dd className="text-md mt-3 leading-[1.4] font-semibold">
          {fact.detail}
        </dd>
      </dl>
    </SelectCard>
  );
}
