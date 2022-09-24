module.exports = {
  name: "thisblogisaboutyou.com", // optional, falls back to object key
  description: "This Blog Is About You",
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
    "https://thisblogisaboutyou.com",
    "https://thisblogisaboutyou.com/about/",
    "https://thisblogisaboutyou.com/posts/",
    "https://thisblogisaboutyou.com/posts/millennialdeconstructsfamily/",
  ],
};
