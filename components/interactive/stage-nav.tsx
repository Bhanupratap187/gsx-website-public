"use client";

import { createContext, useContext, type ReactNode } from "react";

// The member screens are server-rendered and handed to ExperienceMap as props,
// so a control inside the mockup reaches the stage state through context rather
// than a prop drilled across the server/client boundary.
const StageNavContext = createContext<() => void>(() => {});

export function useStageAdvance() {
  return useContext(StageNavContext);
}

interface StageNavProviderProps {
  advance: () => void;
  children: ReactNode;
}

export function StageNavProvider({ advance, children }: StageNavProviderProps) {
  return (
    <StageNavContext.Provider value={advance}>
      {children}
    </StageNavContext.Provider>
  );
}
