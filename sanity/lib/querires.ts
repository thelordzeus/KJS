import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
    _id, title, "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{title, "slug": slug.current}, publishedAt, description, author->
  } | order(publishedAt desc) | order(featured asc)`;

// Get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true]{
  _id, title, "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{title, "slug": slug.current}, description, publishedAt, author->
} | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id, "slug": slug.current, title, "image": mainImage.asset->url, "alt": mainImage.alt, body, author->{"image": image.asset->url, "alt": image.alt, name, "slug": slug.current}, categories[]->{title, "slug": slug.current}, publishedAt, description
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all stories
export const storiesQuery = groq`*[_type == "story"]{
  _id, name, story, "image": image.asset->url, "alt": image.alt, role, instagram, twitter, linkedin, website, email, youtube
}`;

// Get all impacts
export const impactsQuery = groq`*[_type == "impact"]{
  _id, title, number, description, "category": category->{title, description, "slug": slug.current, _id}
}`;

// Get all programs
export const programsQuery = groq`*[_type == "program"]{
  _id, title, description, "image": image.asset->url, "alt": image.alt
}`;

// Get all gallelry images
export const galleryImagesQuery = groq`*[_type == "gallery"]{
  _id, caption, "image": image.asset->url, "alt": image.alt
}`;

// Get parul khanna document
export const parulKhannaDocument = groq`*[_type == "team" && slug.current == "parul-khanna"][0]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, bio, currentlyWorking, startDate, endDate, role, languages, instagram, twitter, linkedin, website, email, youtube, qualifications
}`;

// Get all team members
export const teamMembersQuery = groq`*[_type == "team" && slug.current != "parul-khanna"]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, bio, currentlyWorking, startDate, endDate, role, languages, instagram, twitter, linkedin, website, email, youtube, qualifications
}`;
