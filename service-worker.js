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
    "revision": "b02220167ca739595bf42b22068e4edf"
  },
  {
    "url": "assets/css/0.styles.8c46daec.css",
    "revision": "1a839e94f78484750db3b5faadb3e2ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7840874b.js",
    "revision": "25985270293dd57e5e560c7544461bf2"
  },
  {
    "url": "assets/js/100.121c62f5.js",
    "revision": "6967b4f519c3f8d51f34b52818690177"
  },
  {
    "url": "assets/js/101.dbbe1f43.js",
    "revision": "31f885cde21dd72184977a1d3a47d613"
  },
  {
    "url": "assets/js/102.ce51633a.js",
    "revision": "5625e4a646a3ca34999909c46de4c013"
  },
  {
    "url": "assets/js/103.0e02c3cb.js",
    "revision": "1a8f43c354902ab7bb1f98045605c21f"
  },
  {
    "url": "assets/js/104.64230d4e.js",
    "revision": "a189238d4ffcd3b35ccd078e4c11fc9d"
  },
  {
    "url": "assets/js/105.660f4777.js",
    "revision": "0071267bbbeaa389edc4507a465122d4"
  },
  {
    "url": "assets/js/106.067d4e80.js",
    "revision": "352994d855c0212aa5fe4de27f30cdeb"
  },
  {
    "url": "assets/js/107.914e5858.js",
    "revision": "b9883265ae5c2451434b5343aa1a1aff"
  },
  {
    "url": "assets/js/108.c9772201.js",
    "revision": "e852b407a2dceaddc60fad807230a630"
  },
  {
    "url": "assets/js/109.aee93860.js",
    "revision": "1fb407d49a4f90e0af566ee8bbeaeb88"
  },
  {
    "url": "assets/js/11.ac257d6e.js",
    "revision": "4f45513070d7efdea4f8848dda22d0e9"
  },
  {
    "url": "assets/js/110.e8e5b0ab.js",
    "revision": "2d7685e09bbebf737e04cf38bf46d1f7"
  },
  {
    "url": "assets/js/111.4ceea09b.js",
    "revision": "563f2384ed88e2594a0fe3baa7157d46"
  },
  {
    "url": "assets/js/112.c95d0a0c.js",
    "revision": "a4d5aa33250cc83feb911b8b46b9c40e"
  },
  {
    "url": "assets/js/113.65c07251.js",
    "revision": "2cf5f6b38b2d44c43168540fc910f2e4"
  },
  {
    "url": "assets/js/114.7a944add.js",
    "revision": "37f3445fc90e8093ba563c4f37996af7"
  },
  {
    "url": "assets/js/115.75f2b807.js",
    "revision": "80dc847d647e1f64068544f3d8e54050"
  },
  {
    "url": "assets/js/116.b82c0bfb.js",
    "revision": "25e1b42225c924593ab61fd952c97478"
  },
  {
    "url": "assets/js/117.63a95674.js",
    "revision": "aed1db67c74e81e65fa44a198587eca8"
  },
  {
    "url": "assets/js/118.534a2a0f.js",
    "revision": "ae66aabcab04024815f2bc1b66df4fdc"
  },
  {
    "url": "assets/js/119.ba157d6a.js",
    "revision": "965610d98ce913965bf9c3cfaefa62c2"
  },
  {
    "url": "assets/js/12.a6e07cb1.js",
    "revision": "4757000bf80676ece6be7e115418b888"
  },
  {
    "url": "assets/js/120.239ffe8b.js",
    "revision": "08d88bb2b9efefd3833035e1154a115a"
  },
  {
    "url": "assets/js/121.e57511e4.js",
    "revision": "8f8245124e935b4c8e7b7d24726c1d4d"
  },
  {
    "url": "assets/js/122.3766e467.js",
    "revision": "0fdd90932e6faa53cc746d67a556fd6c"
  },
  {
    "url": "assets/js/123.82549f32.js",
    "revision": "fc933396027fe0fe1517ac88d300147f"
  },
  {
    "url": "assets/js/124.837b645f.js",
    "revision": "c301591d3b446439e75ba4195c8fbf17"
  },
  {
    "url": "assets/js/125.231759ac.js",
    "revision": "ce6e6554c0ef382c621a604d04b9bad3"
  },
  {
    "url": "assets/js/126.2ff2e107.js",
    "revision": "700ec5bf9275d643866538bfc8152c86"
  },
  {
    "url": "assets/js/127.d4904459.js",
    "revision": "e4ff96d9f561650d2905ee13ab6d7902"
  },
  {
    "url": "assets/js/128.9fdcdd2c.js",
    "revision": "ad0f262ba96d484f91ca2c42b5807c72"
  },
  {
    "url": "assets/js/129.b9834086.js",
    "revision": "68e9534b74bd75c06bb9fb92bf55965c"
  },
  {
    "url": "assets/js/13.a8c6b11b.js",
    "revision": "5fb5f113d3d695eb2fd5d7d4629bb40a"
  },
  {
    "url": "assets/js/130.74689f33.js",
    "revision": "0e576777051c9a532b7c3876e04b99c9"
  },
  {
    "url": "assets/js/131.7deb2d07.js",
    "revision": "252a23dfee37e98e9ac8886a7fcc6454"
  },
  {
    "url": "assets/js/132.47c4545e.js",
    "revision": "6c0c66d1d3d2ce7a301ca138c92bbb9e"
  },
  {
    "url": "assets/js/133.1c4e07be.js",
    "revision": "08bdc094b46073a32f0ff2566956cd04"
  },
  {
    "url": "assets/js/134.dcc0030c.js",
    "revision": "86cc696962616c167a0c7a841fa75ddb"
  },
  {
    "url": "assets/js/135.521389b9.js",
    "revision": "b32eb3fa51b65de95e7874d8831042b2"
  },
  {
    "url": "assets/js/136.e403e841.js",
    "revision": "692f71de00933c62549cf2e6f33984f0"
  },
  {
    "url": "assets/js/137.5103108e.js",
    "revision": "de04de58de4b8f717e0cda8b296e842d"
  },
  {
    "url": "assets/js/138.55b9107b.js",
    "revision": "69e9a65b038d5b9afbf8b1f8a9568064"
  },
  {
    "url": "assets/js/139.5d1746c5.js",
    "revision": "ba5c4bab9ea1e439e289ddec6ea2b1f0"
  },
  {
    "url": "assets/js/14.bb39005e.js",
    "revision": "30235f4a073dcda87932cfcbba9e7575"
  },
  {
    "url": "assets/js/140.8742e3eb.js",
    "revision": "6d2d0921cbd92e460a8391387c546f2a"
  },
  {
    "url": "assets/js/141.5661ec9a.js",
    "revision": "704d965c99d3f639ceaa5018eb5a5939"
  },
  {
    "url": "assets/js/142.44871095.js",
    "revision": "70cafc00d431a19de99a3589812be147"
  },
  {
    "url": "assets/js/143.3ea75964.js",
    "revision": "77d30450e0924639b577caae4c73f6b6"
  },
  {
    "url": "assets/js/144.96969688.js",
    "revision": "025c54a910798e5dd7b615ba5ecbf57f"
  },
  {
    "url": "assets/js/145.0d23ebd5.js",
    "revision": "015e05e1cf69218be17c7db96f80cc8f"
  },
  {
    "url": "assets/js/146.a0ddc91e.js",
    "revision": "2263cc170dabf4851a53febea892a195"
  },
  {
    "url": "assets/js/147.60f1e4dd.js",
    "revision": "0b7a1beb40a99adea7dacc70d73b0119"
  },
  {
    "url": "assets/js/148.15dd1885.js",
    "revision": "b72bbed27bb73e82560e451b000d39d6"
  },
  {
    "url": "assets/js/149.38af1de0.js",
    "revision": "eed42dc99234ba17abb1d1808f6a6761"
  },
  {
    "url": "assets/js/15.7113ef47.js",
    "revision": "47838ae8f4651d8f8db89223eaa82bc5"
  },
  {
    "url": "assets/js/150.80fe0c27.js",
    "revision": "bee7312a833575580692a844b40a9bf0"
  },
  {
    "url": "assets/js/151.7d84e079.js",
    "revision": "c463561c77615a5f32778e348d1b7360"
  },
  {
    "url": "assets/js/152.7e2eba95.js",
    "revision": "7c34e8dda8bf710943e104641e5c94c8"
  },
  {
    "url": "assets/js/153.b98584ac.js",
    "revision": "abb2a14e659e6b8817d17eaccef420d0"
  },
  {
    "url": "assets/js/154.ba751953.js",
    "revision": "1ea7e45edc8d053742d15101553c21b5"
  },
  {
    "url": "assets/js/155.e56b983e.js",
    "revision": "2b3dc7f70eaeb8f35440f557bc71eadf"
  },
  {
    "url": "assets/js/156.2aa0d95f.js",
    "revision": "ac793f6c054182961fa6b3921586b749"
  },
  {
    "url": "assets/js/157.97a16159.js",
    "revision": "53068b1430b25f5d17d0f771a6442518"
  },
  {
    "url": "assets/js/158.eb78a787.js",
    "revision": "1b4acd49451e435f1ea4370358c8d3f4"
  },
  {
    "url": "assets/js/159.aff9c8a5.js",
    "revision": "f546037fdcf1db1e0b52f762024cd6ad"
  },
  {
    "url": "assets/js/16.ac258be7.js",
    "revision": "fbfe40bce0236181ad3803f0bba4553b"
  },
  {
    "url": "assets/js/160.28b01ab5.js",
    "revision": "0b6eec9cca8a95f24a35b1a3be8a5eed"
  },
  {
    "url": "assets/js/161.5b62deb8.js",
    "revision": "96b5701cb0e1ab13900531454ecb8abf"
  },
  {
    "url": "assets/js/162.0ce0ed1a.js",
    "revision": "d25bef1a2e804fb8a9d7c4693c5a6936"
  },
  {
    "url": "assets/js/163.c87c5933.js",
    "revision": "72f51242ffe180146608c30dee383cc4"
  },
  {
    "url": "assets/js/164.76aa812b.js",
    "revision": "c8d09513de0345cbfec4163ab90c3535"
  },
  {
    "url": "assets/js/165.ac747d8f.js",
    "revision": "fdaf2b3873857e08d0c72c69278969e0"
  },
  {
    "url": "assets/js/166.6c1a4f8e.js",
    "revision": "141210ede337c4feaf5aead03e5cd2f7"
  },
  {
    "url": "assets/js/167.3b31b961.js",
    "revision": "6c8feb14a0220ccb86f4cf014a47cc72"
  },
  {
    "url": "assets/js/168.fc648a6a.js",
    "revision": "b1e828fd53743fce9a225057eb20762d"
  },
  {
    "url": "assets/js/169.1462974c.js",
    "revision": "0813a4c7502bbbb6b5e5e6e84f452595"
  },
  {
    "url": "assets/js/17.8cc762de.js",
    "revision": "190d2f0f32619498f3c2c0c054d281a3"
  },
  {
    "url": "assets/js/170.161fae48.js",
    "revision": "85e3e5d4f018d408b5f0cf7e1a3b45e2"
  },
  {
    "url": "assets/js/171.2c89e0fd.js",
    "revision": "04c09712d06fe3ef85d3c6cba134d853"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.485b4cdf.js",
    "revision": "86dbcb016e52af83bda10b44ef4eca19"
  },
  {
    "url": "assets/js/19.43a703c5.js",
    "revision": "5550640137fd8cfb655aca86c261417e"
  },
  {
    "url": "assets/js/2.e1e0c7d5.js",
    "revision": "0a0821711c19c3f33297f843b7d3a5a4"
  },
  {
    "url": "assets/js/20.2913a4af.js",
    "revision": "eb2905917f3fba7c072c220e440ae789"
  },
  {
    "url": "assets/js/21.8d68d911.js",
    "revision": "3a00dd5a2126aaecee35218a67a4b28d"
  },
  {
    "url": "assets/js/22.e05a1394.js",
    "revision": "2617e1c06c3b061420b107fb0371615a"
  },
  {
    "url": "assets/js/23.68e82a67.js",
    "revision": "6eaebac377f6b95cd754208d4d3b55a8"
  },
  {
    "url": "assets/js/24.41d656e2.js",
    "revision": "02f4a8da9bf7d7b6c7287396c006a0ee"
  },
  {
    "url": "assets/js/25.315f9fc2.js",
    "revision": "cd9c2d27f95e3b410bc6efe0ed20aec6"
  },
  {
    "url": "assets/js/26.4da73a77.js",
    "revision": "67f6d7c6adbadb16ec9a4570d0652451"
  },
  {
    "url": "assets/js/27.1ad7543a.js",
    "revision": "bd3249effec3d1a34d4577520d4c516d"
  },
  {
    "url": "assets/js/28.28dc36e8.js",
    "revision": "ba0165f1e4c3e8170a1dea6a7449f3c6"
  },
  {
    "url": "assets/js/29.d542a18d.js",
    "revision": "41d0858a525d16e72819892630650936"
  },
  {
    "url": "assets/js/3.facfa05b.js",
    "revision": "7f178ff83c54387e92a4b150217366e9"
  },
  {
    "url": "assets/js/30.5913ee80.js",
    "revision": "3af5d8ba12421c584ffb86a97ce4778e"
  },
  {
    "url": "assets/js/31.96c515bc.js",
    "revision": "ca296dac712a3ebf8d24ec0ead8bd90a"
  },
  {
    "url": "assets/js/32.832d2769.js",
    "revision": "fd8e5bd59a5e1511ca8ec4772423872f"
  },
  {
    "url": "assets/js/33.0b5f2b6c.js",
    "revision": "0b29f0701883789ce91766f72dfe8cbc"
  },
  {
    "url": "assets/js/34.f0a43b54.js",
    "revision": "10a764da0fe5b7a81eb85f217dc174c6"
  },
  {
    "url": "assets/js/35.393f5115.js",
    "revision": "38fd1f0d8a27ab9fa2ff4a39683fbaea"
  },
  {
    "url": "assets/js/36.6931f3d3.js",
    "revision": "58991f60ee4a5e7a152ad0ce2b074bbb"
  },
  {
    "url": "assets/js/37.3af59799.js",
    "revision": "8a180a8f07356f406026ef25f4c29be1"
  },
  {
    "url": "assets/js/38.187b03ec.js",
    "revision": "feed8f48896839fb93baaac1f678936a"
  },
  {
    "url": "assets/js/39.ef86e799.js",
    "revision": "40e56a33d86d7469262be478808c31e5"
  },
  {
    "url": "assets/js/4.2c2796bf.js",
    "revision": "a36fefe026dc7f65d42b067760d00e79"
  },
  {
    "url": "assets/js/40.cb569c3b.js",
    "revision": "599cd1de2838d82a8d577191f572a971"
  },
  {
    "url": "assets/js/41.6a2b99f8.js",
    "revision": "4c8b96a72b47c7875e30c30e8d008bf1"
  },
  {
    "url": "assets/js/42.687b56eb.js",
    "revision": "5bdb68e3d9c2043ee4b363317ea58760"
  },
  {
    "url": "assets/js/43.05284af3.js",
    "revision": "1547a125fcf55449f69463e039c2c304"
  },
  {
    "url": "assets/js/44.0b67307e.js",
    "revision": "c33a2664765ccfb743494c030a6dcff0"
  },
  {
    "url": "assets/js/45.7f6ef1f3.js",
    "revision": "74659d864543ea0ab8e0b70527a86fb1"
  },
  {
    "url": "assets/js/46.8249bf7e.js",
    "revision": "f1a51a0f0b35f279d8e21bae5cb3c3bf"
  },
  {
    "url": "assets/js/47.ec5f420e.js",
    "revision": "216c53e070e0b2853d7905c640dfc6ed"
  },
  {
    "url": "assets/js/48.d11a6c13.js",
    "revision": "438edf646305bb7680b3b2b1a8ba6df3"
  },
  {
    "url": "assets/js/49.e6449fe8.js",
    "revision": "5c163733e1a3f5a58c69e4e09e299ad0"
  },
  {
    "url": "assets/js/5.937ae87d.js",
    "revision": "2574ebcd0756ead4d864a97a7ead7328"
  },
  {
    "url": "assets/js/50.915ae3af.js",
    "revision": "3c7fab90f3eecae33f051a5be3d3c0f6"
  },
  {
    "url": "assets/js/51.f88017be.js",
    "revision": "85fddd30098cf76f5ff6092c51b7b8bb"
  },
  {
    "url": "assets/js/52.19883d30.js",
    "revision": "dc158f2c9d3ba961da54e3f57166e527"
  },
  {
    "url": "assets/js/53.fae82d2a.js",
    "revision": "74e644ba44a7eed03d1474341d27ca0c"
  },
  {
    "url": "assets/js/54.45609db2.js",
    "revision": "ceab0df9ef2bb237ff847c4adc1a3db3"
  },
  {
    "url": "assets/js/55.559cd477.js",
    "revision": "a5283721d1ae2f1477a559077092e10c"
  },
  {
    "url": "assets/js/56.9ae55596.js",
    "revision": "8ad3eccf32a0b1e083c3749eba070985"
  },
  {
    "url": "assets/js/57.4792fb8d.js",
    "revision": "256362c69c7a77fd00b8b804617da58e"
  },
  {
    "url": "assets/js/58.c787abec.js",
    "revision": "ad1b84b12b170b366f920b2946af8086"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.c085291d.js",
    "revision": "8fd2f43355787c4cc592097ce6a361a7"
  },
  {
    "url": "assets/js/60.2bcf90df.js",
    "revision": "377f1f41563f7cc7a0eef232ad035f74"
  },
  {
    "url": "assets/js/61.9de5ce4c.js",
    "revision": "98d0ff867ccc8cfbbc18885c6304a4b2"
  },
  {
    "url": "assets/js/62.6f5dbe75.js",
    "revision": "18da2e07f4776b0645a9511600b950e6"
  },
  {
    "url": "assets/js/63.4e662f41.js",
    "revision": "6037182c890586ca2f86329ad7657bba"
  },
  {
    "url": "assets/js/64.4befdf87.js",
    "revision": "a15c4ac32c59ad193eaaefb2dcdd6c36"
  },
  {
    "url": "assets/js/65.0df2e097.js",
    "revision": "8c689e05a6089d501e1b95faf691661b"
  },
  {
    "url": "assets/js/66.194207b7.js",
    "revision": "c34520e6fde0aac563dd62d39b5ac123"
  },
  {
    "url": "assets/js/67.2f017eb6.js",
    "revision": "ff0cbf9294451dcf1d2b261864b8d0ad"
  },
  {
    "url": "assets/js/68.d7c1c8c6.js",
    "revision": "e6a2b2901acb58ba627122c124464cf9"
  },
  {
    "url": "assets/js/69.0197aa54.js",
    "revision": "9fc4a3e5aa0ff5b07db01d7fe7505d3a"
  },
  {
    "url": "assets/js/7.33994ffb.js",
    "revision": "376b10dadbbe368ef8bc8be12cb9c49e"
  },
  {
    "url": "assets/js/70.c5bd7f06.js",
    "revision": "ecd5e2e6c56ad38e36933fc5c96e328a"
  },
  {
    "url": "assets/js/71.0bb79493.js",
    "revision": "1baeffc518e0ed49e12391047f449a29"
  },
  {
    "url": "assets/js/72.305e2f8e.js",
    "revision": "f91aa0641b8d3feeb16ba628b301a0bc"
  },
  {
    "url": "assets/js/73.cf049b79.js",
    "revision": "b0522fdbf1a7ba14cde7f18ecb0c8338"
  },
  {
    "url": "assets/js/74.e6a8dc79.js",
    "revision": "b9f3b7ec22aa95674cb41a156ce26d1d"
  },
  {
    "url": "assets/js/75.09c99a8b.js",
    "revision": "2cda7fe4ea278b597a4745bd89e0e9ef"
  },
  {
    "url": "assets/js/76.03391a48.js",
    "revision": "813d8ea601fc10b54c996aeddf5488f6"
  },
  {
    "url": "assets/js/77.b6b1f159.js",
    "revision": "aa82ad647ca3e7e74d81e90d6b06e523"
  },
  {
    "url": "assets/js/78.68290187.js",
    "revision": "b6345bcb3e722a42cb610d2dc3dba085"
  },
  {
    "url": "assets/js/79.3f3a989b.js",
    "revision": "963007b4a36b1601e7e13e1b8e90ebf3"
  },
  {
    "url": "assets/js/8.8d486067.js",
    "revision": "ad7e531f577d0b498f01d48a06661e39"
  },
  {
    "url": "assets/js/80.a9997b21.js",
    "revision": "c0b7ab3c71b7000b284e2d98c78e7928"
  },
  {
    "url": "assets/js/81.16b25dd6.js",
    "revision": "240b73ed3dc7102583738abfc0653e2d"
  },
  {
    "url": "assets/js/82.0d4b5429.js",
    "revision": "52551a5c884d15e7aa2fafdcd99958e7"
  },
  {
    "url": "assets/js/83.dd1d56ff.js",
    "revision": "c8bd4e6f2be293ab91fd538bf389430c"
  },
  {
    "url": "assets/js/84.647ed736.js",
    "revision": "7d343630c78c7d0fc0b6b43771fb7d81"
  },
  {
    "url": "assets/js/85.42beef75.js",
    "revision": "bdbd2d1c57ce160f041134abdbff0f19"
  },
  {
    "url": "assets/js/86.71a0ec17.js",
    "revision": "be8b3b228d6bf2f49909298331d9588c"
  },
  {
    "url": "assets/js/87.bfe0afb3.js",
    "revision": "3cea51ad0b349b088c147f933a90cac3"
  },
  {
    "url": "assets/js/88.47b7669f.js",
    "revision": "6fb705b969c6f8e384d5c64102f99537"
  },
  {
    "url": "assets/js/89.728d0788.js",
    "revision": "ca2627a03b515bd975143c5f2d08701c"
  },
  {
    "url": "assets/js/9.34339a8e.js",
    "revision": "3fa549d8ef9a3d70037344584b5e5da0"
  },
  {
    "url": "assets/js/90.6d89e6aa.js",
    "revision": "5ed9ce4819cab7bd36896a7b350071cf"
  },
  {
    "url": "assets/js/91.6a344cf8.js",
    "revision": "03f1347a4e9478821d37c2bc26c0373a"
  },
  {
    "url": "assets/js/92.dfa3fa12.js",
    "revision": "aef76b8d8c65fd95a58efb40650fd1ba"
  },
  {
    "url": "assets/js/93.03d110a3.js",
    "revision": "9b40b9fea799ca816971523c543398de"
  },
  {
    "url": "assets/js/94.5fe424b6.js",
    "revision": "bd6c3cdcbe09acde9804b9691a37092d"
  },
  {
    "url": "assets/js/95.bceaf616.js",
    "revision": "544c3368baaa59e31456264dc168e994"
  },
  {
    "url": "assets/js/96.bd876d2a.js",
    "revision": "8a7219336cd5e4f80aeb12028eb14996"
  },
  {
    "url": "assets/js/97.2b033676.js",
    "revision": "47b8c3d3d16ba462828a35634e0a4d66"
  },
  {
    "url": "assets/js/98.eb9cfac4.js",
    "revision": "0228be8d865178ec68bc5699065d9d57"
  },
  {
    "url": "assets/js/99.d5daa6b0.js",
    "revision": "bfd16f02da9c9aa5d0dc8c6c2648cab8"
  },
  {
    "url": "assets/js/app.f70bde8f.js",
    "revision": "2559f39b852550422feba2dae4856120"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "ee589b7d501887e62d42ffd9bccabbed"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "cf321ed99a47cff57af308af4884932b"
  },
  {
    "url": "guide/index.html",
    "revision": "71696c1c4257258c315462f8541a55c8"
  },
  {
    "url": "index.html",
    "revision": "e8ded1dc19db9c76276f9997ad543594"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "11c79c7fc2572112e6329594e6c55d9b"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "9b10ada2074a530ebe26839218eb93dc"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "908db65d5be67a99ad69eba47b52e191"
  },
  {
    "url": "notes/待整理.html",
    "revision": "f92d4358a0211debfd0705515019159e"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "c8726e421d3190fb25b1a17c594f80f4"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "1db6f591ceb46db9623696d7f267d730"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "f65f0d52010418029c37dc5003ae34f5"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "6c4296db59a6fc0768dc93c6b55e2008"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "b9c4400e302b84918e68f826adc32967"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "1ffb5f9f17bddf6e63a9ff5710df87e0"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "ff3e2c0357dd6b738acba756a0841c38"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "2a05c36f2d69d784042bd35f0704a444"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "f4d8f049df4a1a7a8310ad9d6c96d648"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "1b071420906af16af0376bb9004ac3b3"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "5703f7511597524efa1491b3c7691ba6"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "60427ba4e65b1cdfb2711d532cd10c9f"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "1d21c6a1391a142dc2355248c8fc189b"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "216651444a64f117dee1569f68e1dda3"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "9780975f72b4d7bbdaab5d373567bd1a"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "0302bfa8037af249c37490553bbc3c6f"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "ef0f21a1dd5a448e83bdcbe6a03f0dae"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "c35742740defff6dc38dda298aceeb42"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "b430ec510ef9b024f9f694a4e13a4056"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "22ccee589828f6fc85b2f835328ba3dc"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "2784ebd0b9b177c64df710477851e9df"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "26a0b83b8a348c808df1db0b6103d14d"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "e0725b95d73d5dab746d6a9c4bb319cc"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "6f7c20df73117445205dff5916065edd"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "18a7c117ec09e8450b569bb793029c18"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "e1554f61804847a4467dfd0e353ca422"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "2806789f5217349198ea9b86ba1de804"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "f645135bd575ada0a262233a6e26e001"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "651aa7671d9b9fa160e4eb16b8ff796c"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "777e73f8cfb39d074e8b9c0b006fb7c5"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "babc057d6c2900b2ca9cacf09f19dea5"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "ed8cee0f3f4db81baea2f6797ff3f6b9"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "f6809b992f4a4a4c3e418b73a1dd2ad5"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "35be829713d8a0bc4f55923c8bd247b1"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "985291c34755c6b3e4720fda9af22b6c"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "d783e0ebcc6e763268b7d971af9586a5"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "c8fcc7a02cbde9909583bcdcbc00e40a"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "9f3142fdcbf3c75d7c2dbc6a2b8f6b4f"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "f3db4e9214e6eb03aedbeb806c8c1643"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "8fa48d8572904a781401e2aef8fdd1de"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "4069acc902db377b5076b6f4e0d669c6"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "3afca6f4d5fde47d27851548cce209d7"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "414a1136ecfe4a7e0fb705641b98268a"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "9bde1445c4f6a9d5fb1dbc6855db8c7a"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "f2536888e84b26c6c53d0687ba7b3c16"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "8e27df18cff0fec2a67e7431baacd2cb"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "22847179b8a4edd453415d41afcbd45c"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "87fed187bda33fa2158159fe43c3b1ed"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "309fba7e014961be22f2d694674e3fc4"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "083b80e79621c8504ccfc4d1cdf40a13"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "795161345cc7440e57c89aa141492186"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "2eac72ed39cf9ca7efcc50a28e677dbc"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "cec003cbc642e5fac4ee82756f6ee36e"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "d20eba2803fe4b0c6c01136402493c81"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "e0336c311b6b71c9ddff16bf9f4eddbb"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "2e52679236d029ad19d31146223ab92a"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "c7c05a8e91aca19ec2fb93a35be4650b"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "2d8cf3634784653d1b1fd27b65694e27"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "09f1365c715ecb6c2c166c7dfbe2fa80"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "a2669ba0e04c18f1e6d8c909d5091405"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "7e9963a72a66a9f6530a0c2c87a63230"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "976d44c2b2d4bb6196208f9ece67d2f3"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "4f25e3a7819c939036688dc31ac8dff3"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "e9a01dfd615054547abd4128feb0bdee"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "57245b3bcfbb226e6fdea7f3a0490902"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "736e1cfb368c11a254ce51622547b3d5"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "91fe41ad2b3b6d20493875e64910c311"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "fe0b986113b7fc2a1b968bc667a13597"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "fd3286b5334a2120fbe88030ccf32b5f"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "1e3c0bf0d601d073793e42088eda8462"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "0ffc025c811923d23893addd5d92f7a3"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "d8ce777c499698501e37a07b2a02c3d6"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "3adacf54e20fd84021b03ab664b7ce02"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "5a874a90a59a5f246d222c9c3a0e19a9"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "dc5b52b8a8a5f05ec7d45be66925ee1e"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "52aadd286f3b8e739cc21775a5dfb72e"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "ac44d90093800f583b5786c9ec4d5201"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "3621eb02cd521c061887aec00712960f"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "928b95b5ebfd6247a9bab8957dc31dce"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "b6cd0b2c88ca9ece8fd7c7866af33f39"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "435de82e4f8796496b29e8195dab59d9"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "87b8a358d30a805b1d9d9a26e11f0e07"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "01b3a3effed2d2c061ce5db8e2490a08"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "0a9374b27a1ff5e456cd86ab4b6649d6"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "b73fc7f63fa79615439a58a73100f105"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "0b7b333b269872734af929ebe826dfb1"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "91f4f24660ea00c90ee3aa58b8df2611"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "0c29e140d6c17bc760b2630c2c4cc58b"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "027494e0149b2e775ae852834b087fd3"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "3b2479a944143d5fbaea880988af7049"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "2f94de739d9224dd35f94d37edf4b20f"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "8149629a8ed31c6586f9c512737371d7"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "1489c97043efbeb0dc9b1dba9615d692"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "9d64b25ba555d41eeb0d7720b6261bf2"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "256da4c1d6bfb1a57c13865e11279ce2"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "b464ecb1440108858d4f048d8303d098"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "6303f39c16b29c9a4c81cd141f5382f8"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "7a3399fcc41de22753463bdf92067e01"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "e6add3ddf22549ccafd3cb05c7f08cad"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "31401cb19ee3be68c64ac49ced985f7b"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "6920ba91ecdd9689fb9f070429c753fa"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "2b32dbfdf00d2742ee4e259942b25fcf"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "a702b326697981101c6aa381e0e70bd5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "464cd8e42bd36a64e0efff0515bb4435"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "e0c88cddd95703cf705f7ffc890a163a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "dd0d1dff239bd92e6e7453cf8a38c4f3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "ec41107ea0128d8a25cdf89e62e9d08c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "00c08320330164bda193f7edb5c78c19"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "6e194af643767da0b12a79cbfe9d72be"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "d4b39e26aef31f3483eaf33cfbc21169"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "9ad4dce9f6a518184fcd8dbc82329558"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "19075678d89d448e9c3478279f581ae9"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "9c881ebc4fe2272a3d4ee8ed46fe62f1"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "19a173ecdf396c17095b434e16863235"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "a88d16204ab1e3da398c1fbb738c61d6"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "a3062de9892d81ed0c196309da6f507c"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "d821eab51d089d1c13518e60459abfe6"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "432d9f9cdb972f3d3ed9e32a8b34decf"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "c00f7e1646c0353bab999448aed4feb3"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "6f04dc5d87928b0525dcbdba1a9d4fd3"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "b6058710f16917d4d8f5123422d5ce99"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "bac4ec06755e47081c07513854b3107d"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "09c1a60305cc7ea80a5fc8362500aab1"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "7f65b4c62b3d05f14ff61027ff36c9e8"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "2f1dfaf4cd7d51acede6c09b13850354"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "41541330a622da105136ad959eff3f9a"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "69a194d8a4b955db360724ea4af22193"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "fc0471f9316cec10dd1935e634bcf01c"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "53773158c761e244a01a19831c84f846"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "d5d3c12f5c86872dc02118a6541d0e33"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "bf1931560f7a9216dd8b2fdf7bc63216"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "759a96779dff2d2d1bff8b11b77d9405"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "e3090d4acf4d08e3f9b85d48b32a876c"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "ba23615b5840ff19482002e8025ce330"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "dd06214d74e779af0db39bdd39f469ab"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "a2aa6a7a1b77bdfbdb2ba51861b104f0"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "74e8504f81c6726d2e541bc52bee4528"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "94f6700f56514c9e7b5ae5e983d2646c"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "97f8f777b73c343aeb3dc1858b8f9b20"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "57fa947f1b8ebac581d88abecc95f88f"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "4cb2d68711aeeb84f8ef01378f0f5a5c"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "e6ad056e6b9e985642a2c6454698c395"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "883267c3146c01a23a0e2e9261ecde77"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "7f6bb7935e21e335b748cca027532ed1"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "616054cf573fd80efd3f759a2a8cb049"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "b9b27cc5c103300e89f54afcd6b71a8f"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "c81ad9cbbb2941f2275eafe3ed4a9bf6"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "21e421ac71373e59416d5da68a40a135"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "b0253cb9bb2559680e8299ab27fe8dc4"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "73fe4b823c5db382d274ea49c555d31c"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "83298c578acc0a8a8cdf811795733fe2"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "ed33fc95425db1693f1c47d09d62e558"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "5ca41b7f20b16cd779d72a8c72192968"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "2fa9f15a261b89572ab93dab32864caa"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "b0d4edaaf89ae137345b208333950651"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "8bf152a7574a85c578ab31503f870e16"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "75ea3526475641f13cbb65dcd4ae9d52"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
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
