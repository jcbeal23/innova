import { MetadataRoute } from 'next'

const URL = 'https://www.innovaciontech.com'; // Placeholder domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${URL}/`,
      lastModified: new Date(), // Or a specific important date
      changeFrequency: 'weekly', // Or as appropriate
      priority: 1,
    },
    // If there were other actual pages like /about or /blog/[id], they would be added here.
    // For example:
    // {
    //   url: `${URL}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
