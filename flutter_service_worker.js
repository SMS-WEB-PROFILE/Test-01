'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8fe67866594feab0750e15eed06257a",
".git/config": "f5b6a676e99185bd89c33a26c26e66d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e8fa7ad42a186b80b79dabce6b1a48ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/2a31becd4f4abd5afcb86724cdf620eb9f528e": "bd01f54d1a00c8528df3722aa5f68447",
".git/objects/00/55ee1447fc649818c32f157f1ff7130d9174f7": "b7cedfff5c21c6ced156d82ca5b4d0c3",
".git/objects/02/4d91c582301884740dac0021938bbdd235c5d0": "142b645edf419d1af59108f5d416d8ca",
".git/objects/06/ea7ff00667a89e147cdb9e3bb637c5e233ee99": "ec859d16dc44515f875c110a79b5b75e",
".git/objects/0c/9cf850d0627aee2a0b8b0d53d849dbc7227ab1": "132469c97fe5bd9a6d84eddc5e685a60",
".git/objects/0e/37eb5ab279413df1c3d1fe57392a70d2a1658d": "dae65faf61d40f701caef0299b7030f5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/c2bf4096c96f712138d916de4af2c98a3f18c7": "05254ddfd7ffcfef89a9222b90a64e1d",
".git/objects/14/09a7cbc29578a5158c992067e587435b8ec9c3": "58a8da8ef24114be357534f4d7e2b6c9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/6c9944536bea0375b4e2061bf922bab7a87dab": "e758cff0aa12ff1bf5b8178c265114cd",
".git/objects/1e/4f13a90c0236dfdd8aa971cc3c60578347de8c": "ec24675e49b82fb3310b3e8ad34102cb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/25bab5b46f0f121554ae13f6411ac7b8d17ce9": "226eb9e16284a88c4c06c46e954b377f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/891844afbcf71a76c36903baf94c10b4176082": "c79c444343d3825bc240a54e83ceef7e",
".git/objects/27/3f0e08527d8aa7b372879a32daa56a1268f65e": "675be17e67abd234cef7e312bbcb6ff7",
".git/objects/29/fd0de625d7b322374f2b00ff0dea3acd24e7a5": "f7b41d09a470654253754e7df117c692",
".git/objects/2b/3b29036fef47a81fe4f838eeefa00cc76c6f81": "623e8b67fdf4a1ee1dd196de0d7864e0",
".git/objects/2b/ce98028aeba7406e01957f5231c24cb538f8f8": "6dbf0dd7ac5e2fc155d96d0eec82ee05",
".git/objects/2e/dc5895d7fb19b5ff18b6354de4b617d2238a78": "78a24aab3308c337d374b1ef22ae40a5",
".git/objects/2f/3ba37978c8751ef1bf5f9e08b235988dba9fab": "d1358ee5e42bf282ddea089a06416fa3",
".git/objects/31/f51b730195810e1c1fd3abb1f9ad8a7f272e69": "1d92543b9534cfafceff3778aa9cab47",
".git/objects/32/0007275378693948564b861dc48f7b09d5f18b": "d644d4aeec314aa57c6c8d64373bc500",
".git/objects/32/368386ddc8e9d8558348d968e5bf19cfb8fcd7": "28de728502c06a0d58d0908b0ec4b5ff",
".git/objects/35/67cd9e20b256c05d92c22875bd386d5a3578b6": "cee65594006747176d9078a04cbe2094",
".git/objects/37/8d2f252d1b2c8cf0bb645a4f11c5db9b0645cc": "b93fbf52855fd0e72ab1a104ad68f4e0",
".git/objects/3e/6ba8e481d873afad3586f3f37498bfcb4fd04c": "0a8ccbb29c3f8a88fb407daf945bc868",
".git/objects/41/c327a330ac4e34c5f797049a9653223b1a3d0f": "cb4b0c3c76295087d800f4bfa53bd88f",
".git/objects/42/c8f1d0c59b87a9fb87b01607e5b2ce7c39109a": "01d4df1c7e68eebfe54fa54b7ae50010",
".git/objects/45/fbf1bcf6deef6532dbbcb38369ec400e0405d9": "53f674dfb75bbc1c4d1e145f100a3995",
".git/objects/47/2243e5201c474e1b064e27863ff3de6712a3be": "633396d1479f3abc11b0d258ea59c8b1",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/4d170e64b32ade5adbe050dae1a27ad25e74a0": "68bbeecd78677e8fd04d31d8e445aba2",
".git/objects/53/aaeac6a9a768a3dbc7df460e0c9e37d90e4da6": "7b0ed7d57fc7a6dd7f3fe2de49dafbd0",
".git/objects/56/43195543f7643c2abd337524524677e7c7ae00": "a92853221790f4076bbd00c5e683e9d4",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/ecf7dc414ec9b807d93f6a5b8d676f5d1f0279": "4e97acc1070bb29f90711c9d09febe79",
".git/objects/5b/e9472a8be5e083140fc14fe4cf9dfcc6a83a71": "0eb87bc1a287867a4655a5ce7aa55305",
".git/objects/5c/b3b830d8207bc3fbd1d78ddf597f77a2600024": "a080f36ca52e3e90a34d7b46104c3284",
".git/objects/5e/145b73946c38924dae9cdb8be171da7c8dc9ac": "361a88d77a353a610a717390ce13cd95",
".git/objects/60/80b4b8e653082da64f045b8fb32ca729683e7a": "be706ddd9a48707519489a586126ae7f",
".git/objects/60/b29424cc6f506b1ab7796433c92bee3cf266b1": "e5f2c03fd142dc1e8aead47a0f8c8301",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/82735a64a7ff62a5ab7aa8201ae29b45b82272": "7e157baafd3934ebf143e2fc88dae3f9",
".git/objects/66/e9fe3ba6c7a4877aa7f3498896cadab3ab82f1": "bdb5ecf371c2eea3b097765eeac90ec1",
".git/objects/68/fe39a7a21e4df054ef3c4066037fdfd7e025fe": "869893548542aa81df1517385c3fc72f",
".git/objects/6a/5d8ceefe49285755e6a22903fd9619f318bb62": "0eb0beeffbdf12481e80c3f9923c3b0d",
".git/objects/6c/ae41b5eebd1627f16799d59108074bf47a132e": "81072e27e9ab623ce8c4f566d859dfac",
".git/objects/6d/93b54b1b33bfd4fd058709e696f13e18aa98de": "ebbff76c0661b172c036cb22bb16987c",
".git/objects/6e/fe4876985cb06de56ecc46456178591adbb0d3": "c1f775df9698fac93864f4bd6fa5bd6e",
".git/objects/70/e46501928df8abc8fda9e0fc71aedebb67d938": "53fa4b3689a880b02b375440e034e94a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/3ebe36e702e94eb984073ce08bd7326512d936": "ad7faad9efd076bfd3fe7b0e4bd40b96",
".git/objects/73/f905a195a2abc6df43636aaae0a0380009601d": "a8528d835145c966b80d7feabdc3ffdd",
".git/objects/76/19ad222abe93127ea06b8255e66408c327520b": "36e3168a4f7ae0d8cf3a52ab74110835",
".git/objects/76/9ff4090b715ae7e4902cf0ab01a1dd1957b4dc": "06e81216f07f14c9fe7bad3623b67879",
".git/objects/79/be76562f668e7f1245b9b26903b560a12fca1c": "07c0ca953415a2ec59d7d6382e72e952",
".git/objects/7b/2dcc1159e14ef150379e55748e8af5e339694b": "3e9277901f36e519740d7042c36514e0",
".git/objects/7b/ee2aff65e0cb2d5dbe4fb353bb9921b4fad535": "42c24b7828c74405ec0fd7148216dedd",
".git/objects/7e/aa9f2865a9ed4eb1fe6ee37230d328f697e738": "32c348082f9d0d2b4bc9a87877584fa6",
".git/objects/7f/582b92616ef1ca05e0b3e6cb87dd290e897028": "dcf0da6dcd11bce1c154dcdcdc8af9f8",
".git/objects/82/13bcd7ddde45374d007c80975e4e69b0a79699": "188eef3b5a9ab42960e006fb65464063",
".git/objects/82/2a9764d3a98c01a5d9f2e805ac94b9867c7af2": "1f58ce5c86d422513faf07d865a119a1",
".git/objects/83/31f2a5446e53aa9b74026daca21b126314bb80": "5d136f80e1705b11db58429accc91b00",
".git/objects/84/5b45ee6902ee51d676e8a664d7ced93fa81db8": "c98a3d57cd7c1cc4e3e8eaef92290527",
".git/objects/86/0e261176261e8724d5f22b1c08021815f9e953": "8696788472d346277c222f9158a036a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4eebf20665d5ae746c622a2bd42274b54d2bf1": "1af37619c66ce985101983d9c8fa0fe3",
".git/objects/91/1b3b67b6da4e65fd1bedb0a7a87bb37e246e2a": "883fc28b47f06a5500681575cc5a87ae",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/4a1cd268a63fb7345e897deb69d92fe217d73b": "4582fc54d4d11f3271ab8651b72b1893",
".git/objects/9a/8c94386a81f5241fa9b444c50aaed0ce1c3e29": "66f440e6f88f15dd6d4fb9c80ad493e5",
".git/objects/9b/871fb2c698a838912179a2ed9ff1b6c3652ab8": "5e09cdcc756144972faebe523173f16a",
".git/objects/9e/265d8905dd0ab93e4830a461453e1dbdadaa56": "53b92ce8b63b3076d93152d5fa5f4349",
".git/objects/a7/0f19a889c46503510842d7aa0bd0ab8588db76": "2f865d83f8a0b806696e3834eef1f072",
".git/objects/a7/f31c0c478046ecdb077cef80af2c04e51520ca": "1e902802f6cbb9633bc77acb02b1f34b",
".git/objects/a8/390b222d1c8a683662d54f97fc625e6994e37c": "9176e3407aee1a98121c67763500d5da",
".git/objects/a8/d6f4451351a50e9516d3468e553b75c4008d93": "5fdc4f20d9350c2d572cc633b0e1f965",
".git/objects/a8/f7883880f8fd2d618c27c0fd89db794b893b05": "f77301e008f6daa411918df19c5d8334",
".git/objects/aa/b551a9cd99beae7d1aadb2d42f249694effbb8": "084ec61295d6c3c7aa3dcc4f6c191360",
".git/objects/ae/e7a3f68a048efdb84682dda0399df0789cbec9": "51e4e03d489f3b30e2d3daff7b053a2e",
".git/objects/b2/107ef9d2191d423f1c8522a5fff7b5c5faeaf4": "4ddbc861fe2dde8893d3264a8d1cb96f",
".git/objects/b2/d815e741567bafddc9c4cf1d918474e7cbdb4b": "aeea7b2617c7743f981a4ff0a653270f",
".git/objects/b3/b97ec1b34714ae6b7fdea334b984d3af0b9881": "65f281791140e8ca0838b258077e7cfb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/1d6cef47901daee6bdf094d0fbc396de7b59c6": "bd91a4f1a02268f154cf05e3cf1b819d",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b5/430c334d29430d7d038117afff87f75ee39176": "32bad0122bbfe22d85364af4e8bb86a5",
".git/objects/b7/1dac6b76bd7657da4871cfe2aa3244158e5563": "664431d38a0d7b52991e5e30cebee285",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e7bf00bd28f656c71fb3f57b0218b6cd69996e": "1cc711742e56c216c761dcd19a8fc623",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a03325cd5f97a210d02ad2e8ecc4e90ed22ef6": "7b0eb9642ec173007dffe40bd19d726c",
".git/objects/ba/7307f5b0568bfbfc591f643c15f82eeb1774d8": "0da1b724d9b617344a4dc9183fa7c20f",
".git/objects/ba/7defef7faf7b3d6fd1be7483a266b3450db868": "6ef8f309c781928de9b7f8d3576173e7",
".git/objects/bc/7d43307ee254641dd0087a56ff0ad4a207b24f": "4757bcdc7dc858116a98f479f351683b",
".git/objects/bd/39040f781b309560f7347b7e97b10f394442c1": "91fb50d6ad32846d51900ef0075ebfb4",
".git/objects/bd/e0e9abf15921d929c4fe94191b4773d6e2af06": "09291d46b62082423ae338d522996389",
".git/objects/c1/6567485c367e3362670b5f0e5f9d4765bcac71": "24b85366ee9dd8c4fea0ba2d361f4b2f",
".git/objects/c3/38765c5cf0912efafb777a32bb45a438fad5cc": "7b901c293e6a3908edb7ae62abb33aa1",
".git/objects/c4/411d219eef117a9f39ace7b9fd5f0db5da9f1c": "10ad2e5527d26496761a9e15c2aeb2c2",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/c9/7d66ee2a9cca7e5d2ea57d427f27fdc2c8373a": "75e1c1ca3dff3165257af81e77d4b053",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/5792f41cfb7c4cb2b02c238bf8f482a3e729e9": "29ae7f550883729540f7726f28c968eb",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/ca4e267bf8cbfb641b166a8c6358392f10b3c2": "27fc85bd09837c47191e7846ff8d5eed",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8cfd23d93354c8e72d9cab3c462eff1965b808": "cd1ede3f06b879eadd4a52f5543d7374",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d950aa4333aed4e8c0cb8f1f833718f7cdc6d9": "bda5277dbbe1d78f14ec93728f4d1c67",
".git/objects/d7/29b8b8f53dbc8d9630681f46fae321d3d88702": "436cef8a7aff07506d729bf514fe9124",
".git/objects/d8/2a08394cbfe49d1690b97237a2a822df20a3a8": "6b104ea43b891cbd1e564359d28ee22a",
".git/objects/d8/8ec7f8b18f7ab223b09f4279225fb91f3b0930": "170590fef6ea41ab50b0d5a3894fcf4b",
".git/objects/d9/3113f36f6330042b10978a40b6683fd3891b0e": "7c0d3031c7f4372544b0afe245169b29",
".git/objects/d9/826504bba416b21c2f5a91b84e7859076b3f44": "b9f243270d7e13503d893193c4a72aab",
".git/objects/da/b4f3ee30e71997ce352718d3c79c0014058224": "3231744526bbce01b48a77fb7f4f97ec",
".git/objects/dd/c19816db19b566e05511193fe7751e26bf94e6": "5b28dad4aab3729973470113cad3dfc8",
".git/objects/e1/6a77516f79497732b0d1529098c88f38c65c22": "c1e3a3fdbc73bec724fde18a729bb6b8",
".git/objects/e3/e5f2c3c2bf1fbaf97ca47fd9bdb3da95e7a6a0": "df5846b8d03683587b4bb02fe0166c44",
".git/objects/e4/cfc6724bea515f2aaddbf15628a4a3436379da": "eb529e84ee63d0e003526e0b7c3327ea",
".git/objects/e6/199550b4a188d4a3d0dbdbc74fa34ef86f8db1": "7a9b7d5a0c02756d40096fd237bc4be2",
".git/objects/e8/9111cce449a8af643e70ebe3c7071855719414": "3ebcf66a5b4b8e4a3f0a91f8613b28da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/691cdab422c66ef346ba020b3211a134ed1e0c": "81b362202c8dd20f9e8692506b6c82f5",
".git/objects/ee/dca7a0784d61bd516700a176293dac1ec13dc2": "dcb3e31ecce57c51cc31c69f048db38d",
".git/objects/f0/ac431276f4e290e420c98ed45ee1fc91d8dc67": "efb3b9916647e98c0e15a3bf0f875179",
".git/objects/f1/c5d1511e233054a519c2c4691a7e38d36cb90a": "ce7e4936b51d9241729d2a3f1226e9b6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/23f6fce50c6be751f7ab9e4704029e82c0da92": "ecb1004cb3175eefe6bd86f03ff28a9e",
".git/objects/f7/b681e6cbd6e66620fc0db9543b65a2f2dd4332": "a2d7e3c3b8bcf8230d4778c274d62c89",
".git/objects/f8/6f16121ea076633d961d75e0eb05c48a88139b": "d3f10e6269907ecd19f3065346a16b4b",
".git/objects/fa/5af4dc8eef2e4332cc1c1118c9bb13e76d2766": "e7c4af8cbeed4f3f10a3788fa1f8abd3",
".git/objects/fb/ddfabaeba61c2300c46f99f70efd857827f65d": "849ce6cf8ed92cdd87b20d9dc451f8f8",
".git/objects/fc/9629267bcf3d61f88df46813abdaf80d441ccf": "4af0f15c8d93af32c16c985c131c6e75",
"assets/AssetManifest.bin": "1f6d63ace78759ef2c2923c47a360353",
"assets/AssetManifest.bin.json": "ba2aa6568860342d816ef00b0eee83ba",
"assets/AssetManifest.json": "ddfe3f16bde116b0fbe76bdef532856b",
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
"assets/NOTICES": "42b13fe24dc97bbeecc0b221dd9c4db2",
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
"flutter_bootstrap.js": "f1653570554d460520c233e12c2b5cdd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c6a8e5c03125b0a174a8a5530b1b5d06",
"/": "c6a8e5c03125b0a174a8a5530b1b5d06",
"main.dart.js": "0a440a7e261b06b50926b2831a0540e1",
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
