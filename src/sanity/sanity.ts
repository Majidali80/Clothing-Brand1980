// sanity/sanity.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ilhf9wt8',  // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name
  useCdn: true                   // Optional: true for faster response (use cached data)
});
