'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "213efb428aa583600ff520479ef0c8f8",
".git/config": "02bf79243450717bdb0fec79f90d61da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b5d0332d5eb5592f873770f23bf9cb2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d962be3d4dd9e38f7ab6602dcbeb438",
".git/logs/refs/heads/master": "7d962be3d4dd9e38f7ab6602dcbeb438",
".git/logs/refs/remotes/origin/master": "6624f44cb4f8f5dd49aafd1eff003e0c",
".git/objects/05/e84cd375672db4d6b080805d0048c9a8159ba5": "30c64664874f33eca3b9663e6a8dc9e2",
".git/objects/06/b3a385a6ede1f17b00527c741c5b734d7a5d24": "335038d45f9b6b1a8c1f9200ca20f072",
".git/objects/0c/f50045c75b1aff2a235c9d2212123c8e14148a": "f0defa793e04f9d24c89db731c7f45de",
".git/objects/0d/52b9d8694f4b84c130cb6019c773c440c93b6f": "6adf9b3db6eba5a3f3fd5f57fa962d2e",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/7b9f71579acb655a7945e3650ed33efd002e60": "5be1d802f14d259a488a5d8e5d1c730a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5aa8cc0d344e1a2379fe2f359f010847f4d3ac": "6e7abf63305d7d3ac7267e8094d3cf16",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3d/a74c4cdbc884336fdf76373ad1a7eccd733aa5": "a6b67efbb50e311e15a2e5c9a40c543c",
".git/objects/3e/5b60a24715fed1dbe6f30b1ba082fc389f9785": "7b6e3bd71952ff9d17ad4eb3aeab22a7",
".git/objects/41/12c321ad0cc3b776278750e8c16eb40da47cd7": "6fe0ca2f9f7bae792a5e616234228049",
".git/objects/45/1e681ce586edb3bf12259230f5a284e7a5b0a6": "1417e783dc12d9f1cde042fbfe707f0a",
".git/objects/4b/5543e1118f137d69d0088a45f88aaba646ce2a": "0cac44cfbfdababaa4ed8c4e23386f5d",
".git/objects/4b/8b1be0ab018c7f80a1f801938240cb8709569d": "88b9be5a57685e87f2ed96831f73a57f",
".git/objects/56/48dd10142aebb608c5ca9063dfc8c3ded4583f": "ff828849c217f2e43049f2612c856f42",
".git/objects/5e/1ee0c551f2f6f4c2d197e64ec717784e82020e": "23fc33650f1a9ceadbd5fb842b92104f",
".git/objects/5e/e2a4c83a84c8d608df03098ca27f62590f98c7": "392a7d80e9e0165d1f83bb911fd70342",
".git/objects/5f/0da8823b6fdae1f6fad7e8aeb5a754c2c11e99": "d2e17dac821b99b1ecc29e78f82f2312",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/63/a9b2719d22699307eb5f4a65e2e1dbb22d82d1": "56f5b0257b041a019680ff7ade66fb23",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/75/eacd59742f688107eebf426e91dd2cd20a7837": "279428c3beb59287e11fa89fa6ab6d36",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/80/a8b89556876a748f2982acfff90ae9514b52d0": "b8c8533ebc392146b3bcd5d594690ea5",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/81db839fa376186ef86cb941bc455323926079": "0f2dc2cbe991d1ae7356f96d7eeb4b08",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/7afdaec0a1d4384e87d32f99bef87b7fe571d7": "63ae4243eb8421934ec4d411df23ce27",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/8d1877529281bef0e77f779d11be48adbf8565": "ab1337b68b437ccb272b8e26e2a133fe",
".git/objects/9c/5d5d5ad3d95788b2f113f5fd09f2e976247d14": "95caef0aa77974f18d101335dde4209f",
".git/objects/9e/b09702fc8406b76fc723b2dce7d8b610467533": "2666f4fc52cf1b3d49ed6915287f01f1",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a8/0dbb4ad0b512e8d8dc13cb96675b3203fdcab2": "8a75e0d52b8efb24386bd1e16e1c2730",
".git/objects/ad/5c0bcef15bbaddf767fbe069d413a8b078e5ae": "8ae881245d59d687dee5c1f66c9f6cc3",
".git/objects/b7/271551dde2ef37370d2317dbc8a31c7b344c0a": "8488bca6f6b0c1cb74302c842af1169a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/96a3feb6fea38a2ed0ab2bfcae4524e7ce02be": "8ab135a099239205a8fe7e1dbe9562ba",
".git/objects/bc/602c3d10ffc855043e373e93fb7117f1299ebf": "d4435fb4b4c04875b0a48b3612d377c1",
".git/objects/c5/69b4c499607991692420ed2b96d2ae3042314e": "9d610ca9592671195231e6734d402f4a",
".git/objects/c7/31229806afd2c9707fd3133550cfa8e9c7e262": "3d4175646383d8da226b67413c81c360",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/ca/712ed668123b7ed0a6da89b5c8f62321739252": "2aaa5c4674566652664343e942116c9a",
".git/objects/cc/7f9511c58bdd958b1974a7296a0949a01bb2d3": "12ee82acf42ea96dd4e7a72b2e7c2f1a",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/da/2f1e9512993412fb18cf1822a267f879f92b8f": "036d4354cba85cc30ee4ce0d46d91eb4",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/c3095a54c5dfc1d777098524339c5e73b0c7dd": "833cf69d9af681b5e403b2108fa121ff",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f8/ab9d13de6ff29ebb342d4e32518363b7573b0b": "cc734988a09204dad91d669aa314cd44",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/ff/f2ebec0dbb4ecbb0cf6a01c9472dd77d775746": "4c28c3f5f8bd1c9916806b73aa4c7d40",
".git/refs/heads/master": "2cb45ad5a5717f57c146300878af952a",
".git/refs/remotes/origin/master": "2cb45ad5a5717f57c146300878af952a",
"assets/AssetManifest.json": "51f700aa450b698ddf4a7f9db1247e76",
"assets/assets/profile.png": "6580ab688f9106dd57ff6a4481dfa7a3",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "7e0a83306f9b15382d89c9a7299e1c86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "dae847364d1f8abc8a72ed1594f84121",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "672524d1553f9f84d2cb7e4b1901ae29",
"/": "672524d1553f9f84d2cb7e4b1901ae29",
"main.dart.js": "86ef248fbaae40ef21d9fd8c86bd0ccd",
"manifest.json": "13f06354845a371e19e653e38df6b4bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
