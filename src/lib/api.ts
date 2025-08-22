export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

type FetchOptions = RequestInit & { json?: any };

export async function apiFetch<T = any>(path: string, opts: FetchOptions = {}) {
  const { json, headers, ...rest } = opts;
  const res = await fetch(`${API_BASE}${path}`, {
    method: json ? "POST" : (opts.method ?? "GET"),
    headers: {
      ...(json ? { "Content-Type": "application/json" } : {}),
      ...(headers || {}),
    },
    body: json ? JSON.stringify(json) : opts.body,
    credentials: "include", // send/receive cookies
    ...rest,
  });

  // Try parse JSON safely
  const text = await res.text();
  const data = text ? (() => { try { return JSON.parse(text); } catch { return text; } })() : null;

  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || `HTTP ${res.status}`;
    throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
  }
  return data as T;
}