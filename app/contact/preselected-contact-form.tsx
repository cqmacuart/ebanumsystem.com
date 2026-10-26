"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/sections/contact-form";
import { isServiceValue } from "@/lib/contact/services";

/** Preselects the service from `?service=` (e.g. from a prototype CTA); invalid values are ignored. */
export default function PreselectedContactForm() {
  const service = useSearchParams().get("service");
  return <ContactForm defaultService={isServiceValue(service) ? service : undefined} />;
}
