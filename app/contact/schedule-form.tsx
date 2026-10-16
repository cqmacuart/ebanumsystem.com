"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { SITE } from "@/lib/site";

const NAMESPACE = "30min";

export default function ScheduleForm() {
  useEffect(() => {
    getCalApi({ namespace: NAMESPACE })
      .then((cal) => cal("ui", { hideEventTypeDetails: false, layout: "month_view" }))
      .catch((err) => console.error("Cal.com embed failed to load", err));
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={SITE.calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
