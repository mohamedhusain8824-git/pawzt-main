import { useEffect } from "react";
import {
  DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  pageMetadata,
} from "../data/seoMetadata.js";

function getCanonicalUrl(meta) {
  if (meta.canonicalUrl) return meta.canonicalUrl;
  if (!meta.path || meta.path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${meta.path}`;
}

function getOgUrl(meta, canonicalUrl) {
  if (meta.ogUrl) return meta.ogUrl;
  return canonicalUrl;
}

function setMetaAttribute(attribute, key, content) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLinkAttribute(rel, href) {
  if (!href) return;

  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let tag = document.getElementById(id);
  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

function buildStructuredData(meta, canonicalUrl) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        "Pawzy connects pet parents with verified pet care professionals for walking, sitting, grooming, training, veterinary care and boarding.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ];

  if (meta.path === "/") {
    graph.push({
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#mobile-application`,
      name: SITE_NAME,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      url: SITE_URL,
      description: meta.description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "60000",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export default function MetaManager({ path = "/" }) {
  useEffect(() => {
    const normalizedPath = pageMetadata[path] ? path : "/";
    const meta = pageMetadata[normalizedPath];
    const canonicalUrl = getCanonicalUrl(meta);
    const ogUrl = getOgUrl(meta, canonicalUrl);
    const ogDescription = meta.ogDescription || meta.description;
    const twitterDescription = meta.twitterDescription || ogDescription;

    document.documentElement.setAttribute("lang", "en-IN");
    document.title = meta.title;

    setMetaAttribute("name", "description", meta.description);
    setMetaAttribute("name", "keywords", meta.keywords);
    setMetaAttribute("name", "author", "Pawzy Technologies Pvt. Ltd.");
    setMetaAttribute("name", "robots", meta.robots || "index, follow");
    setMetaAttribute("name", "theme-color", "#32D1B6");
    setMetaAttribute("name", "application-name", SITE_NAME);

    setMetaAttribute("property", "og:site_name", SITE_NAME);
    setMetaAttribute("property", "og:type", meta.type || "website");
    setMetaAttribute("property", "og:title", meta.title);
    setMetaAttribute("property", "og:description", ogDescription);
    setMetaAttribute("property", "og:url", ogUrl);
    setMetaAttribute("property", "og:image", DEFAULT_IMAGE);
    setMetaAttribute("property", "og:image:width", "1200");
    setMetaAttribute("property", "og:image:height", "630");
    setMetaAttribute("property", "og:image:alt", "Pawzy app logo — trusted pet care booking");
    setMetaAttribute("property", "og:locale", "en_IN");

    setMetaAttribute("name", "twitter:card", "summary_large_image");
    setMetaAttribute("name", "twitter:title", meta.title);
    setMetaAttribute("name", "twitter:description", twitterDescription);
    setMetaAttribute("name", "twitter:image", DEFAULT_IMAGE);
    setMetaAttribute("name", "twitter:image:alt", "Pawzy app logo — trusted pet care booking");

    setLinkAttribute("canonical", canonicalUrl);
    setJsonLd("pawzy-structured-data", buildStructuredData(meta, canonicalUrl));
  }, [path]);

  return null;
}
