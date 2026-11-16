import type { UIStrings } from "../types";

export default {
  analytics: {
    title: "Analytics privacy",
    description:
      "May we use Google Analytics cookies to understand how this blog is used? Your choice applies only to analytics and can be changed at any time.",
    accept: "Accept analytics",
    reject: "Reject analytics",
    settings: "Analytics settings",
  },
  nav: {
    home: "Home",
    posts: "Pills",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    tableOfContents: "Table of contents",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
    minRead: "min read",
    levels: {
      intro: "Intro",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    categories: {
      go: "Go",
      kubernetes: "Kubernetes",
      observability: "Observability",
    },
    discussOnLinkedin: "Discuss on LinkedIn",
    readInOtherLanguage: "Leer en español",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Latest pills",
    allPosts: "All pills",
    heroTitle: "$ learn --cloud-native",
    heroIntro:
      "Bite-sized pills (5 minutes or less) on Go, Kubernetes and observability, especially OpenTelemetry.",
    heroSub:
      "Focused ideas from the cloud-native ecosystem, served in small doses.",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Pills",
    postsDesc: "All the pills published so far.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    skipTableOfContents: "Skip table of contents",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
