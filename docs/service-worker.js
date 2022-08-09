/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "92b1a9a13245fab220092ca42dbf86e4"
  },
  {
    "url": "assets/css/0.styles.d4934f68.css",
    "revision": "a075c2f4301811917302f3a7be765d4e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f419655b.js",
    "revision": "c9f59097163ffb4dca87d4f4abf29b8e"
  },
  {
    "url": "assets/js/11.20d87d9b.js",
    "revision": "c40da23cfa35aacc0294059b71d7eaf9"
  },
  {
    "url": "assets/js/2.1340232b.js",
    "revision": "8f0d0062b1578567d9c2a66420145a73"
  },
  {
    "url": "assets/js/3.06a4639c.js",
    "revision": "64a0de81b9ed485ec8c0722fe0560f64"
  },
  {
    "url": "assets/js/4.1b137b3f.js",
    "revision": "8bdeb290b79a59eab331fb946078de96"
  },
  {
    "url": "assets/js/5.3303caa8.js",
    "revision": "ad95eafe982e3c24adccccc357a0409a"
  },
  {
    "url": "assets/js/6.454c123d.js",
    "revision": "802b5b7c3b6fbb3aae84b6ff00d1426d"
  },
  {
    "url": "assets/js/7.db05d4b4.js",
    "revision": "a01b491f2ad961c07afc6dc99550858d"
  },
  {
    "url": "assets/js/8.6028b21f.js",
    "revision": "c9907f71b4a3cc05bd7fb55229a52054"
  },
  {
    "url": "assets/js/9.2d5b4dcd.js",
    "revision": "875eadd93d821c532ebba970a3fe18d4"
  },
  {
    "url": "assets/js/app.b148d1f9.js",
    "revision": "a523d5a3269d4b05c13cd5eb141da598"
  },
  {
    "url": "index.html",
    "revision": "73255ad7b5a0dd411c103d65f797105f"
  },
  {
    "url": "logo.svg",
    "revision": "c8e972f60adb51818a2bc9566837026f"
  },
  {
    "url": "logox144.png",
    "revision": "dbc61aa4ff14990e5c6b7bab89c7aca3"
  },
  {
    "url": "logox152.png",
    "revision": "c0d7d16979c72345ad178aac19e6422d"
  },
  {
    "url": "logox16.png",
    "revision": "a8aba0e2b3e1c025d9b6b66fa1fdc06b"
  },
  {
    "url": "logox168.png",
    "revision": "53977cdc9a46be2aecd0afc33fe27fe7"
  },
  {
    "url": "logox192.png",
    "revision": "a07bfad91ff0f74aef09060c67009c53"
  },
  {
    "url": "logox32.png",
    "revision": "05afb6caa04e5fee0e984374383be50e"
  },
  {
    "url": "logox48.png",
    "revision": "bd0cfcce1338313b5cdcc9b39f727c1e"
  },
  {
    "url": "logox72.png",
    "revision": "36efd7020499a927d56cd9c1da9ac92e"
  },
  {
    "url": "logox96.png",
    "revision": "0c2169f8578573ed7aed38ba72340f71"
  },
  {
    "url": "QQ.png",
    "revision": "e609dd6116ea8b6e8c8983e546358d66"
  },
  {
    "url": "README1.html",
    "revision": "7899da19acb13e5078d62de9c74b8f73"
  },
  {
    "url": "README2.html",
    "revision": "39f09949f63dd45df171798677b554f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
