"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { NAV } from "@/content/site";

// Native <dialog> gives focus trapping, Esc and the top layer for free; the
// only manual work is locking body scroll and marking the page inert.
export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="border-line hover:border-blue rounded-pill desktop:hidden flex size-11 items-center justify-center border transition-colors"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      {/* Full-bleed, so there is no backdrop to click — Esc and the close button dismiss it. */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        className="bg-sand text-ink m-0 h-full max-h-none w-full max-w-none p-0"
      >
        <div className="flex h-full flex-col">
          <div className="border-line px-gutter flex items-center justify-between border-b py-3">
            <Logo className="h-9" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="border-line rounded-pill flex size-11 items-center justify-center border"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="px-gutter flex flex-col py-6">
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-line-soft text-h4 flex min-h-14 items-center border-b font-normal"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
