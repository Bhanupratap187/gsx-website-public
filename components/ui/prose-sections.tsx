import type { ProseBlock, ProseSection } from "@/content/types";
import { Prose } from "./prose";
import { isExternalHref } from "@/lib/href";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

interface ProseSectionsProps {
  sections: readonly ProseSection[];
  className?: string;
}

function ContactLink({ href, value }: { href: string; value: string }) {
  const external = isExternalHref(href);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {value}
      {external ? <span className="sr-only"> {SITE.newTabHint}</span> : null}
    </a>
  );
}

// Blocks are keyed by position: a clause is authored once and never reorders.
function Block({ block }: { block: ProseBlock }) {
  if (typeof block === "string") return <p>{block}</p>;

  if ("strong" in block) {
    // Disclaimers and waivers have to stay conspicuous, which is why the
    // source keeps them in caps — the weight carries that through.
    return <p className="text-content font-bold">{block.strong}</p>;
  }

  if ("heading" in block) return <h3>{block.heading}</h3>;

  if ("list" in block) {
    return (
      <ul>
        {block.list.map((point) => (
          <li key={point.detail}>
            {point.term ? (
              <strong className="text-content font-bold">{point.term} </strong>
            ) : null}
            {point.detail}
          </li>
        ))}
      </ul>
    );
  }

  if ("ordered" in block) {
    return (
      <ol>
        {block.ordered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  if ("contacts" in block) {
    return (
      <dl className="mb-4 grid gap-1">
        {block.contacts.map((contact) => (
          <div key={contact.label} className="flex flex-wrap gap-x-2">
            <dt className="text-content font-bold">{contact.label}</dt>
            <dd>
              {contact.href ? (
                <ContactLink href={contact.href} value={contact.value} />
              ) : (
                contact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <>
      <p>{block.address.label}</p>
      <address className="mb-4 not-italic">
        {block.address.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </>
  );
}

export function ProseSections({ sections, className }: ProseSectionsProps) {
  return (
    <Prose className={cn("[&>section:first-child_h2]:mt-0", className)}>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>
      ))}
    </Prose>
  );
}
