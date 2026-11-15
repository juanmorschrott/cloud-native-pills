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

function startAnalytics(id: string) {
  if (analyticsStarted) return;
  analyticsStarted = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

function pageView(id: string) {
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
  if (!root || !prompt || !settings || !id) return;

  const consent = storedConsent();
  prompt.hidden = consent === "accept" || consent === "reject";
  if (consent === "accept") {
    startAnalytics(id);
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
          startAnalytics(id);
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
