module.exports = {
  name: "bradley-burgess.com", // optional, falls back to object key
  description: "Bradley's personal website",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: false,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://bradley-burgess.com",
    "https://bradley-burgess.com/about/",
    "https://bradley-burgess.com/music/",
    "https://bradley-burgess.com/dev/",
    "https://bradley-burgess.com/services/",
    "https://bradley-burgess.com/contact/",
    "https://bradley-burgess.com/shop/",
    "https://bradley-burgess.com/services/teaching-piano",
  ],
};
