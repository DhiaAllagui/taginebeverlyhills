"use client";

const RESTAURANT_EMAIL = "Dino@taginebeverlyhills.com";

export function buildMailto(subject: string, body: string): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${RESTAURANT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}

export function openMailto(subject: string, body: string): void {
  if (typeof window !== "undefined") {
    window.location.href = buildMailto(subject, body);
  }
}
