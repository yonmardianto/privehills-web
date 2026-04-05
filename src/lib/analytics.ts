// Type declarations for gtag
interface Window {
  gtag?: (
    command: "event" | "config" | "js" | "set",
    eventName: string,
    params?: Record<string, unknown>,
  ) => void;
  dataLayer?: unknown[];
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

/**
 * Track a page view event
 * @param pagePath - The page path to track
 * @param pageTitle - The page title to track
 */
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  });
};
