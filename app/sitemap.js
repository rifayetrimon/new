export default function sitemap() {
const baseUrl = "https://e-mosjid-blog-page-hnuy.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/soalan-lazim`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/carian-masjid`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/info-emasjid`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/semakan-permohonan`,
      lastModified: new Date(),
    },
  ];
}
