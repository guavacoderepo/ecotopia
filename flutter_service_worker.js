'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dc4f59674a0772db10d9269c574e5f5f",
"index.html": "d4a0f4064413322b28c012a9c739397b",
"/": "d4a0f4064413322b28c012a9c739397b",
"main.dart.js": "c3ffa12bc1e8e969ba2cb57c5c916c9a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d9ec9cd2f8ac9401e0208a27ed9183ad",
"assets/AssetManifest.json": "9b07eff481b4e1058e7a7955985afac3",
"assets/NOTICES": "2fb04ba33fdee528d7380391074550a6",
"assets/FontManifest.json": "15fa59a2ce67c84106dfeeccc87513e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"assets/fonts/oxygen/Oxygen-Light.ttf": "62cc7c6fde12ce03ce75ef71e62fd099",
"assets/fonts/oxygen/Oxygen-Bold.ttf": "2b6ff5a30fd43b8bfff30401b84a17a3",
"assets/fonts/robot/RobotoMono-Regular.ttf": "7e173cf37bb8221ac504ceab2acfb195",
"assets/fonts/robot/RobotoMono-Bold.ttf": "0339b745f10bb01da181af1cdc33c361",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/news.png": "779c9b5c0e9cf99d24d928a70e4427ef",
"assets/assets/background.svg": "55749068c454f936f3b753778e356799",
"assets/assets/bgbg.png": "2d1b4cd8c16ad93d52112dd8d0bef802",
"assets/assets/card.png": "0b06086571747ba0629f02e938aa85d3",
"assets/assets/icon.png": "e75af279d78fda241820e5387c9ddae9",
"assets/assets/new4.png": "638c84b9a3baa0df86fa75ac22f2f25d",
"assets/assets/cart.png": "11cbed44f070176ee4fbdbc28a1dbcd6",
"assets/assets/cli.jpeg": "fd88a846980c946355394b78179b89cb",
"assets/assets/bgimg.svg": "d15247126017461d63558c59000de1cf",
"assets/assets/bgimage.svg": "da0ec6cf55613b354fcde30635bf0127",
"assets/assets/shop.png": "4bf0b6ffbdd22aabb4241f33703b65f3",
"assets/assets/weather.png": "bdb29204d80ba2fa43053c975f56ca15",
"assets/assets/moon.png": "715899a7dac11e185cfbf710d9b390d8",
"assets/assets/weather3.png": "23ae1a2fa6a6b81150901d4c1baedef9",
"assets/assets/news1.png": "ae2db69656cef3f60c5de97e9661eae2",
"assets/assets/newweather.png": "540bdac8dee3cfb8d43de0b50b788357",
"assets/assets/cardimg.svg": "05dcb45bbfe0e3a9f7c5e42487829710",
"assets/assets/enter.png": "887962e9aedc519bf5b95694df889595",
"assets/assets/shop3.png": "a04fca118f8801b7ad39633dd00fdba4",
"assets/assets/topimg.png": "aaf7cdb0ae625b9445ad4f1dcc93fd1f",
"assets/assets/logo.png": "014b6fc1e52c4e7f42cc7a055d74fbb2",
"assets/assets/benter.png": "00ece354c02aed21391c390eee55dca0",
"assets/assets/cloud.png": "01c2567bae0ad75feea9068e9bacb3a7",
"assets/assets/bnews.png": "64f4b283afeea42caee8ad59b55cef4e",
"assets/assets/bg2.svg": "63bd6e6f501f7a1f4e8d5e5a6a97ca9d",
"assets/assets/news11.png": "1e929721103190cca99e02b51ce1f5d3",
"assets/assets/vr.png": "209a41a1deea3e005a22922d625e0713",
"assets/assets/bshop.png": "16a6c8c51951d59e68f2cc2ee7ecbf60",
"assets/assets/bg4.svg": "3e079bdb0bf2fe34f864930ac6efd9e5",
"assets/assets/img.jpeg": "369713e31d8e1d25bad510ed3f6c3491",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
