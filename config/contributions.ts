export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
  repo: "UGMSat-2",
  contibutionDescription: 
  "A bachelor thesis final project aimed to create CubeSat for students in Indonesia with the approach of model-based system engineering in the field of aerospace",
  repoOwner: "astralis12",
  link: "https://github.com/astralis12/UGMSat-2",
  }

  // {
  //   repo: "creativecommons",
  //   contibutionDescription:
  //     "Added section for 'Other Opportunities' on main page.",
  //   repoOwner: "Creative Commons",
  //   link: "https://github.com/creativecommons/creativecommons.github.io-source/pull/719",
  // },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
