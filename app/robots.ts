export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mentions-legales", "/politique-de-confidentialite"],
    },
    sitemap: "https://bastienandredev.fr/sitemap.xml",
  };
}
