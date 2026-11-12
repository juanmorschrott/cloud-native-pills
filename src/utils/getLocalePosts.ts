import { getCollection } from "astro:content";
import { getPostLocale } from "./getPostPaths";
import config from "@/config";

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export function getLocaleStaticPaths() {
  return LOCALES.map(lang => ({ params: { lang } }));
}

export function getOtherLocale(locale: string): Locale {
  return locale === "es" ? "en" : "es";
}

/** All non-draft posts written in the given locale. */
export async function getLocalePosts(locale: string) {
  return getCollection(
    "posts",
    post => !post.data.draft && getPostLocale(post.id) === locale
  );
}

export function currentLocale(locale: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(locale ?? "")
    ? (locale as Locale)
    : (config.site.lang as Locale);
}
