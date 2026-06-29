export default async function sitemap() {
  const baseUrl = "https://bastienandredev.fr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
