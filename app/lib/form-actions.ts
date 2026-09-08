"use client";

export interface ReservationPayload {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  notes?: string;
}

export interface ReservationResponse {
  success: boolean;
  provider?: string;
  recipient?: string;
  message?: string;
  error?: string;
  reservation?: {
    name: string;
    guests: string;
    date: string;
    time: string;
    occasion: string;
  };
}

export interface InquiryPayload {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  eventType?: string;
  guests?: string;
  eventDate?: string;
  notes?: string;
}

export interface InquiryResponse {
  success: boolean;
  provider?: string;
  recipient?: string;
  message?: string;
  error?: string;
}

const RESTAURANT_EMAIL = "Dino@taginebeverlyhills.com";

export async function submitReservation(
  payload: ReservationPayload
): Promise<ReservationResponse> {
  try {
    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "Network error occurred";
    return {
      success: false,
      error: errorMsg,
    };
  }
}

export async function submitInquiry(
  payload: InquiryPayload
): Promise<InquiryResponse> {
  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "Network error occurred";
    return {
      success: false,
      error: errorMsg,
    };
  }
}

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
