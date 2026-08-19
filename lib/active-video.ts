// Which player currently owns playback. A module store rather than context so
// each facade stays an independent leaf and the Videos section stays a server
// component — a provider would drag the whole section into the client bundle.
let activeId: string | null = null;
const listeners = new Set<() => void>();

export function setActiveVideo(id: string) {
  if (activeId === id) return;
  activeId = id;
  for (const listener of listeners) listener();
}

export function subscribeActiveVideo(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getActiveVideo() {
  return activeId;
}

// Nothing is playing during SSR, and the snapshot has to be referentially stable.
export function getActiveVideoOnServer() {
  return null;
}
