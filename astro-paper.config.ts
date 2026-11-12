import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://juanmorschrott.github.io",
    title: "cloud-native-pills",
    description:
      "Bite-sized pills (≤5 min) on AWS, Terraform, Python, observability and system design.",
    author: "Juan Andrés Moreno Schrott",
    profile: "https://github.com/juanmorschrott",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Madrid",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/juanmorschrott/cloud-native-pills/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/juanmorschrott" },
    { name: "linkedin", url: "https://www.linkedin.com/in/juan-andres-moreno-schrott/" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});