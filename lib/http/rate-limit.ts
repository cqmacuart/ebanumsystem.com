/**
 * Minimal fixed-window, in-memory rate limiter.
 * Limitation: state is per server instance and resets on restart/redeploy.
 * Good enough to stop casual form spam on a single-instance host; for
 * serverless / multi-instance, swap for a shared store (e.g. Upstash Redis).
 */
export function createRateLimiter({ limit, windowMs }: { limit: number; windowMs: number }) {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return function check(key: string): { allowed: boolean; retryAfterSec: number } {
    const now = Date.now();
    if (hits.size > 5_000) {
      for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
    }
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterSec: 0 };
    }
    entry.count += 1;
    return {
      allowed: entry.count <= limit,
      retryAfterSec: Math.ceil((entry.resetAt - now) / 1000),
    };
  };
}

export function clientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}
