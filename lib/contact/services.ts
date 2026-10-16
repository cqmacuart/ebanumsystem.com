/** Shared by the client form and the API validator — one list, no drift. */
export const SERVICE_OPTIONS = [
  { value: "new-website", label: "New Website" },
  { value: "redesign", label: "Redesign" },
  { value: "landing-page", label: "Landing Page" },
  { value: "site-audit", label: "Site Audit" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export const serviceLabel = (value: ServiceValue) =>
  SERVICE_OPTIONS.find((o) => o.value === value)?.label ?? value;
