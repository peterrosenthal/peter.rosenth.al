import { error } from '@sveltejs/kit';
import portfolio from '$data/portfolio.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const project = portfolio.find((project) => project.slug === params.slug);

  if (!project) {
    error(404, `Project not found: ${params.slug}`);
  }

  return { ...project.entry };
}
