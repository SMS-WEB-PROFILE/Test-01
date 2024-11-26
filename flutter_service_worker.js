'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cb088c41d90adea024bbd8166c3b93af",
"assets/AssetManifest.bin.json": "abb3f807422a701427902c75bc911713",
"assets/AssetManifest.json": "653bb3740d30613637b2cbe2c5c86cee",
"assets/assets/fonts/inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/opensans/OpenSans-Bold.ttf": "2febb6f94bce387fc39728d1920bc61f",
"assets/assets/fonts/opensans/OpenSans-Regular.ttf": "dd7ca4f5cf9c67d1d028da5c01d67884",
"assets/assets/icons/down.png": "f4bceeca484548b39ed182daa5080358",
"assets/assets/icons/download_csv.png": "3aa864836449eaf7b5a6e465fa12e5c8",
"assets/assets/icons/download_pdf.png": "70b092de043d5b69ddf7e22498ab5c27",
"assets/assets/icons/down_selected.png": "e6f53fe3cf2926f0bb9901df5e53af30",
"assets/assets/icons/dropdown.png": "cd34d4c3caa82527ea033363c2aa105f",
"assets/assets/icons/lendingwarning.png": "61c869e3a6006f5389697b8ecbe9e027",
"assets/assets/icons/llogo.png": "b5c8944e7b696e1a577a87e6af2b3b39",
"assets/assets/icons/logo.png": "2309f58bd5e234c55a9433bb3097bcfc",
"assets/assets/icons/logo_mini.png": "e3ad2ee5338a1925c27906c5b433d130",
"assets/assets/icons/medexpire.png": "e39670b98fb99bc47e7072664996be99",
"assets/assets/icons/menu.png": "a4c5507d5e2d6cbe067afb299491f059",
"assets/assets/icons/side_bar/account.png": "061fc35d25a6f127cdb69abc40e0186a",
"assets/assets/icons/side_bar/account_selected.png": "01ae2cc461753f1c24e1243baed7c74f",
"assets/assets/icons/side_bar/customer.png": "ff036c4bbdfecb8f00b1b85b4134f6e4",
"assets/assets/icons/side_bar/customer_selected.png": "01c6ce0ef8ad7261dd2a516a2cf5fad9",
"assets/assets/icons/side_bar/dashboard.png": "f3cd2bc292dcaa352bbbe5c171581952",
"assets/assets/icons/side_bar/dashboard_selected.png": "c780c081fad92589e0d478476f2798d8",
"assets/assets/icons/side_bar/human%2520resource.png": "83ee4a8f3678034f1764dd5e89e93873",
"assets/assets/icons/side_bar/human%2520resource_selected.png": "35ceacc0614a487241fad80aab20a6d3",
"assets/assets/icons/side_bar/l1.png": "d8e2464951f2be83931658e721faa687",
"assets/assets/icons/side_bar/l2.png": "607310d591caf6d3369f5e8b3c9a50f3",
"assets/assets/icons/side_bar/l3.png": "78129bad2d939d5060e4a80bf9584503",
"assets/assets/icons/side_bar/l4.png": "08747073ebeb0ba91c7e25f385199897",
"assets/assets/icons/side_bar/lending.png": "2ebc262b82c73edca4d41bce522d5bd0",
"assets/assets/icons/side_bar/manu.png": "4c47d10fd607b56e919e49d8b211482c",
"assets/assets/icons/side_bar/product.png": "18cf5c579d9a194d24eea336a5d284be",
"assets/assets/icons/side_bar/product_selected.png": "e7fdffef32d39b3e751fe49a1504e471",
"assets/assets/icons/side_bar/purchase.png": "957735f8e32ba9a951ec8d1cec72cd62",
"assets/assets/icons/side_bar/purchase_selected.png": "1dd2b6ad5265e786c33e4a233469c219",
"assets/assets/icons/side_bar/report.png": "c961112eccd50f557426a855a7d7781c",
"assets/assets/icons/side_bar/report_selected.png": "cd8b27657f346814c4bd9872d5005427",
"assets/assets/icons/side_bar/return.png": "1094d39f3b47d1ca5fd787ee5af1d97e",
"assets/assets/icons/side_bar/return_selected.png": "a6ef7b7d088507dcfdfb7cbb450957b2",
"assets/assets/icons/side_bar/sale.png": "d8b63a81fb709be2b5067096a59ab378",
"assets/assets/icons/side_bar/sale_selected.png": "137da74305541c054c886a0d177f1390",
"assets/assets/icons/side_bar/search.png": "e9f4e82f63a5599f25b1d129b4bf83b5",
"assets/assets/icons/side_bar/search_selected.png": "982606a353c85dbc3b4ac3ae9d653e7c",
"assets/assets/icons/side_bar/setting.png": "82f549341316d06f14a60e371fc100d5",
"assets/assets/icons/side_bar/setting_selected.png": "c26016057e481a9957b68c9ac6f167a5",
"assets/assets/icons/side_bar/stock.png": "8f2e78cf787b80bf7d51071edaeb7b42",
"assets/assets/icons/side_bar/stock_selected.png": "c72a0d02c06df1be08aa4256dc6da81d",
"assets/assets/icons/side_bar/supplier.png": "6b9607a5a93a3a0a7656e8df307b3672",
"assets/assets/icons/side_bar/supplier_selected.png": "4f1f3aacdd46b056dcb9d232e31be975",
"assets/assets/icons/stockwarning.png": "a398eb0c41bb775c036ca5219cc40e6d",
"assets/assets/icons/user_icon/icn%2520(1).png": "45f175ffe35ee90f930ca33ef0bf09a8",
"assets/assets/icons/user_icon/icn%2520(10).png": "614c70ebeb6ccbf9c1751e9a36615457",
"assets/assets/icons/user_icon/icn%2520(11).png": "d1813b276733b3bb5ba5ab93fd6024aa",
"assets/assets/icons/user_icon/icn%2520(12).png": "9bac22bc34ee3bdde1ba93501bb69ba5",
"assets/assets/icons/user_icon/icn%2520(13).png": "7bd0fd46808d83a60b7ec2e34c00165e",
"assets/assets/icons/user_icon/icn%2520(14).png": "c0440e494bcb4e0b5b1b0e31445dcf1b",
"assets/assets/icons/user_icon/icn%2520(15).png": "444c4526dd791a73855d6017b407c147",
"assets/assets/icons/user_icon/icn%2520(16).png": "716e0d1a050b64d33729b5c00dd7f2eb",
"assets/assets/icons/user_icon/icn%2520(17).png": "37bbfd684c196fdb7e25394be2786432",
"assets/assets/icons/user_icon/icn%2520(18).png": "818a2f056a85194366c054893d2ba74f",
"assets/assets/icons/user_icon/icn%2520(19).png": "11ba6cf6431c1f15dbefded33b41de18",
"assets/assets/icons/user_icon/icn%2520(2).png": "f7289d92334a543db78dec1b156a771a",
"assets/assets/icons/user_icon/icn%2520(20).png": "070f011c3aed71395ecef80ba64a6ba3",
"assets/assets/icons/user_icon/icn%2520(21).png": "79ce3e9f562bdeb1c457490f84ece22a",
"assets/assets/icons/user_icon/icn%2520(22).png": "7247b520acaa3c6bd6118dbdffb588b2",
"assets/assets/icons/user_icon/icn%2520(23).png": "8b4b42ccb666bacef0894bb05775c042",
"assets/assets/icons/user_icon/icn%2520(24).png": "4c63bd78c63216841eb214aee7a18174",
"assets/assets/icons/user_icon/icn%2520(3).png": "68f4203676d68963c1db11bb3c393c11",
"assets/assets/icons/user_icon/icn%2520(4).png": "98a9ab539ed5c214bdb309cfa27e1689",
"assets/assets/icons/user_icon/icn%2520(5).png": "61366f0891be0282433a62b871b8db27",
"assets/assets/icons/user_icon/icn%2520(6).png": "3c12508dea70db6ad529d4e9b65b2060",
"assets/assets/icons/user_icon/icn%2520(7).png": "a11452ec68b72a934468c816df8b4b18",
"assets/assets/icons/user_icon/icn%2520(8).png": "39ad4e7a1bfdc9fb142bfdc583ebed6a",
"assets/assets/icons/user_icon/icn%2520(9).png": "05987a478245230348a64d7565679c0c",
"assets/assets/images/bank.png": "2875f35b0acf616885e156f67128c257",
"assets/assets/images/cash.png": "aa63182f62ab528c7180ff0cbe9a519e",
"assets/assets/images/def_employee.jpg": "680e48df3e9e1fa83951cb336fa6658c",
"assets/assets/images/def_medicine.png": "059cfb97853862ad04268a13f6f70ef6",
"assets/assets/images/def_product.jpg": "8598cb13c4ffeb1cf345b3a4e3449164",
"assets/assets/images/error.jpg": "e4eb6c354950b9d6fcd6df912e177552",
"assets/assets/images/invoice_bg.jpg": "afda56c612fd36dc96a1dde068c4b702",
"assets/assets/images/invoice_bg.png": "591f6b83601eaaa66fff3410a0d2dc0c",
"assets/assets/images/llogo.svg": "20bd8445d147f87ef2b6974886cc0644",
"assets/assets/images/logbg.png": "0f9b365fb3c1263f511d5d92b63f2027",
"assets/assets/images/login_bg.png": "f564bcac5736b564b63b689f3747e42e",
"assets/assets/images/login_bg_mobile.png": "d7c72fbbabb874175c9a5114dcd24c8e",
"assets/assets/images/medbg.jpeg": "3c1da4b7f8d3684cacbed8a5b0a88222",
"assets/assets/images/medbg.png": "76e67564a5901d520f1037a048ab6e47",
"assets/assets/images/mobile_login_bg.png": "7900d91ac78e2e820e0fd8b9a7b3d119",
"assets/assets/images/profile.jpeg": "4c98bbedb8b86f7fc205d6742f34d16d",
"assets/assets/images/qrcode.jpg": "86b2162c59fc58b795b00728f6d58f3e",
"assets/FontManifest.json": "7fb902481459f98619610d21cb874c7c",
"assets/fonts/MaterialIcons-Regular.otf": "fc3df062130816e192f407de0b1c8473",
"assets/NOTICES": "7829d2a3f0fc2c5512bb87334dd05a83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6e035649d2347bf4e00382a29256a9ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3383c32c06fb99ccf58b00539312eb7",
"/": "e3383c32c06fb99ccf58b00539312eb7",
"main.dart.js": "6e0ae0ea9782f59a760c80e4787cfd6b",
"manifest.json": "a866b410b97337d2c9b7df53fce9b330",
"version.json": "901a923d4feb241acd10a4007caaee4b",
"vite.config.js": "913772795e0fa2fdc29fb7be8f738630"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
