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
    "revision": "dc7958a4ba994ba6636e6794fa1d295e"
  },
  {
    "url": "assets/css/0.styles.69bfb77b.css",
    "revision": "a70b0f5738d21adc86443bc36bc3a57d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb8ea1bf.js",
    "revision": "addd6e36b758330cb50e7df0e974d62b"
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
    "url": "assets/js/5.f340a9f0.js",
    "revision": "55f503f31dd5bd8e111067ef55ea45d9"
  },
  {
    "url": "assets/js/6.0cd252cb.js",
    "revision": "f069a780ea7ee557a5be66d3c055d4c1"
  },
  {
    "url": "assets/js/7.db05d4b4.js",
    "revision": "a01b491f2ad961c07afc6dc99550858d"
  },
  {
    "url": "assets/js/8.dda3af75.js",
    "revision": "a2910ac7223ebe95dd70906c8a1c696b"
  },
  {
    "url": "assets/js/9.f2d51c82.js",
    "revision": "6196976e66d97bfed41a3e63c12c6d91"
  },
  {
    "url": "assets/js/app.19c7fb44.js",
    "revision": "312db0d860d89b1e315088498fc99ded"
  },
  {
    "url": "index.html",
    "revision": "cdf3493e99d680d0bb1bae74ca1016c4"
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
    "revision": "5663271322fe2ff06bdd9d2a97d9482d"
  },
  {
    "url": "README2.html",
    "revision": "d11a483610d226c32b3a6b6722e0c141"
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
