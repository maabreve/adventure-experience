/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('workbox-sw.dev.v2.0.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([
  {
    "url": "img/e-commerce/blog-narrow-01.png",
    "revision": "76b56d6779cc5aabf1ea3529da3e86a7"
  },
  {
    "url": "img/e-commerce/blog-narrow-02.png",
    "revision": "0a2f3e825ce850f148ec9977fff87f8b"
  },
  {
    "url": "img/e-commerce/blog-narrow-03.png",
    "revision": "c3b50ad19d11592fdb685288a79d2ce1"
  },
  {
    "url": "img/e-commerce/blog-narrow-04.png",
    "revision": "6bf9f973316add88b9f4f7e366259cc1"
  },
  {
    "url": "img/e-commerce/blog-narrow-05.png",
    "revision": "1eb80245f5c3220ef8e304c5a6d0054c"
  },
  {
    "url": "img/e-commerce/blog-narrow-06.png",
    "revision": "dd2b69a1eefd1e2e2c2ef0a9b6036acb"
  },
  {
    "url": "img/e-commerce/blog-wide-01.png",
    "revision": "81150e72ed2fa22f9a6f1d4f50a77931"
  },
  {
    "url": "img/e-commerce/blog-wide-02.png",
    "revision": "68babf26b50eaa2a5ee04f6bd13072a7"
  },
  {
    "url": "img/e-commerce/blog-wide-03.png",
    "revision": "38c37451e8996a8b7dd5cdab62d6ad94"
  },
  {
    "url": "img/e-commerce/blog-wide-04.png",
    "revision": "5e2d49c6473ba331d48f0ec4c8837b4b"
  },
  {
    "url": "img/e-commerce/blog-wide-05.png",
    "revision": "a0dddab744597e07f4833a2d92e02540"
  },
  {
    "url": "img/e-commerce/blog-wide-06.png",
    "revision": "4cbc8a7c52f592314ab1e225d10f5085"
  },
  {
    "url": "img/e-commerce/logo-nav.png",
    "revision": "16595840ffbdc0d6342d187ec1d98a31"
  },
  {
    "url": "img/e-commerce/logo.png",
    "revision": "cfb618d1176449318a32f91c4b1874ff"
  },
  {
    "url": "img/e-commerce/narrow-landing-01.jpg",
    "revision": "2b6dce7bc5451a3e27662649859367c2"
  },
  {
    "url": "img/e-commerce/narrow-landing-02.jpg",
    "revision": "4a6718d0078e0ebd2fe116be14e3f073"
  },
  {
    "url": "img/e-commerce/narrow-landing-03.jpg",
    "revision": "752321142f568e28882481e5e6266aa9"
  },
  {
    "url": "img/e-commerce/narrow-landing-04.jpg",
    "revision": "51b5cf6e67e08307de59e757662558cf"
  },
  {
    "url": "img/e-commerce/wide-landing-01.jpg",
    "revision": "26b72dacd09f48c199a6b8ae1bfc6356"
  },
  {
    "url": "img/e-commerce/wide-landing-02.jpg",
    "revision": "b691c56825c6262708a3ae6ce2e423f9"
  },
  {
    "url": "img/e-commerce/wide-landing-03.jpg",
    "revision": "127d7c0eb909d8137b9fe1de2d959eb9"
  },
  {
    "url": "img/e-commerce/wide-landing-04.jpg",
    "revision": "a2c951435ae3e67eceff1294477772d2"
  },
  {
    "url": "img/e-commerce/wide-listings-hero.jpg",
    "revision": "e15f176ecdbc9faeaaec4c0efa0f2973"
  },
  {
    "url": "offline.html",
    "revision": "3e28b869ae538e661b92cca465ec525a"
  }
]);

workboxSW.router.registerRoute('/*', args => {

    if (args.event.request.mode !== 'navigate') {
    return workboxSW.strategies.cacheFirst().handle(args);
  }

  return workboxSW.strategies.networkFirst().handle(args).then(response => {
    if (!response) {
      return caches.match('offline.html');
    }
    return response;
  });
});

workboxSW.router.registerRoute(/(.*)cdn\.ampproject\.org(.*)/,
  workboxSW.strategies.staleWhileRevalidate()
);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute('https://fonts.gstatic.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googlestatics',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);