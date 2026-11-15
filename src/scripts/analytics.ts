const consentKey = "analytics-consent";
let analyticsStarted = false;
let previousPage = document.referrer;

function storedConsent(): string | null {
  try {
    return localStorage.getItem(consentKey);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to read analytics consent", error);
    return null;
  }
}

function startAnalytics(id: string | undefined, tagManagerId: string) {
  if (analyticsStarted) return;
  analyticsStarted = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  if (id) {
    window.gtag("config", id, { send_page_view: false });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
  }
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const tagManagerScript = document.createElement("script");
  tagManagerScript.async = true;
  tagManagerScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagManagerId)}`;
  document.head.appendChild(tagManagerScript);
}

function pageView(id: string | undefined) {
  if (!id) {
    previousPage = location.href;
    return;
  }
  window.gtag?.("event", "page_view", {
    send_to: id,
    page_location: location.href,
    page_title: document.title,
    page_referrer: previousPage,
  });
  previousPage = location.href;
}

function setupPage() {
  const root = document.querySelector<HTMLElement>("#analytics-consent");
  const prompt = document.querySelector<HTMLElement>("#analytics-prompt");
  const settings = document.querySelector<HTMLButtonElement>(
    "#analytics-settings"
  );
  const id = root?.dataset.measurementId;
  const tagManagerId = root?.dataset.tagManagerId;
  if (!root || !prompt || !settings || !tagManagerId) return;

  const consent = storedConsent();
  prompt.hidden = consent === "accept" || consent === "reject";
  if (consent === "accept") {
    startAnalytics(id, tagManagerId);
    pageView(id);
  }
  settings.addEventListener("click", () => {
    prompt.hidden = false;
  });
  root
    .querySelectorAll<HTMLButtonElement>("[data-analytics-choice]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const choice = button.dataset.analyticsChoice;
        if (choice !== "accept" && choice !== "reject") return;
        try {
          localStorage.setItem(consentKey, choice);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Unable to save analytics consent", error);
          return;
        }
        if (choice === "reject" && analyticsStarted) {
          location.reload();
          return;
        }
        prompt.hidden = true;
        if (choice === "accept" && !analyticsStarted) {
          startAnalytics(id, tagManagerId);
          pageView(id);
        }
      });
    });
}

document.addEventListener("astro:page-load", setupPage);

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
