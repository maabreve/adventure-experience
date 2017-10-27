module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "img/e-commerce/**.*",
    "offline.html"
  ],
  "swSrc": "src/sw.js",
  "swDest": "service-worker.js",
  "globIgnores": [
    "./workbox-cli-config.js"
  ]
};