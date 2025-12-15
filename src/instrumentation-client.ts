'use client';

/**
 * Next.js 16 looks for this module via the private-next-instrumentation-client alias.
 * We do not have any client-side instrumentation yet, so we expose a noop register hook.
 */
export function register() {
  // Intentionally left blank
}
