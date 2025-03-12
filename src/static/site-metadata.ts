interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "曾第一's Running Page",
  siteUrl: 'https://adongtt.github.io/oaska',
  logo: 'https://uk.weika.live/oaska.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/oaska',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/oaska',
    },
  ],
};

export default data;
