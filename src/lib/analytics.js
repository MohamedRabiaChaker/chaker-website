import { getSessionId } from "./session";

export const sendEvent = async (eventType, payload = {}) => {
  const sessionId = getSessionId();

  await fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventType,
      sessionId,
      timestamp: new Date().toISOString(),
      referrer: document.referrer || null,
      payload,
    }),
  });
};
