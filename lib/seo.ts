export const generateMeta = ({
  title = "Aquazone WaterPark",
  description = "El parque acuático inflable más espectacular de Europa",
  image = "/images/cover.jpg",
  url = "https://aquazone.com"
} = {}) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images: [{ url: image }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image]
  }
});
