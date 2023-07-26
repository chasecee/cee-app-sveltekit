// sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'lgevplo8',
  dataset: 'production',
  useCdn: true, // Set to false during development if needed
});

export default client;
