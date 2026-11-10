/*
  schema.org markup for the person behind this site. It tells search
  engines and AI assistants that brandonfreitag.com, LinkedIn, the Work
  That Holds essays, the research site, the book, and the Worth That
  Holds practice are one person. (The practice joined 2026-11-10, after
  its public launch.)
*/
const site = 'https://brandonfreitag.com';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site}/#person`,
      name: 'Brandon Freitag',
      url: `${site}/`,
      image: `${site}/brandon.jpg`,
      jobTitle: 'Strategy and execution executive',
      description:
        'Brandon Freitag is a strategy and execution executive, the author of Built to Be Replaced: How Solution Engineers Outlast AI, and the writer of Work That Holds, essays on why organizational change holds or doesn’t.',
      knowsAbout: [
        'Organizational change',
        'Enterprise transformation',
        'AI adoption',
        'Solution engineering',
      ],
      sameAs: [
        'https://www.linkedin.com/in/brfreitag/',
        'https://www.workthatholds.com',
        'https://research.workthatholds.com',
        'https://builttobereplaced.com',
        'https://worththatholds.com',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Worth That Holds LLC',
        url: 'https://worththatholds.com',
      },
    },
    {
      '@type': 'Book',
      '@id': 'https://builttobereplaced.com/#book',
      name: 'Built to Be Replaced',
      alternativeHeadline: 'How Solution Engineers Outlast AI',
      url: 'https://builttobereplaced.com',
      author: { '@id': `${site}/#person` },
      publisher: { '@type': 'Organization', name: 'Illumify Media Global' },
      inLanguage: 'en',
    },
  ],
};
