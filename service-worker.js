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
    "revision": "b84aed912965f2bf98ca58a829dc1ea8"
  },
  {
    "url": "assets/css/0.styles.0b5beb82.css",
    "revision": "9ae52b3706a3a4ecabe0f7a71626e52b"
  },
  {
    "url": "assets/img/20170930163343210.a0a94def.png",
    "revision": "a0a94def1992c13a5e11705115187b10"
  },
  {
    "url": "assets/img/20170930163446046.fb8788b2.png",
    "revision": "fb8788b2db449aaf59d605a97c5b9cda"
  },
  {
    "url": "assets/img/2020-02-19_091943.8b453ce8.png",
    "revision": "8b453ce82ba513c2975708bc4c66277a"
  },
  {
    "url": "assets/img/2020-02-19_092949.6f092efb.png",
    "revision": "6f092efbcd3fb4d0063025bfe1ee5cf1"
  },
  {
    "url": "assets/img/2020-02-19_093452.64b96369.png",
    "revision": "64b963691cfdb1b0d4b0fdc361038ba4"
  },
  {
    "url": "assets/img/2020-03-07_172709-1583588920096.e44c8058.png",
    "revision": "e44c8058b6e1a96dc84afd722cfd0d95"
  },
  {
    "url": "assets/img/2020-03-07_211813-1583588925389.db92c322.png",
    "revision": "db92c3229344064c78a72e614b30e528"
  },
  {
    "url": "assets/img/awesome-deep-clone.jfif.19e1bbe1.jpg",
    "revision": "19e1bbe1a4c8e0e6c1690be3733a3501"
  },
  {
    "url": "assets/img/clip_image001.0ea16857.png",
    "revision": "0ea168570c9dbc532c550e37c29fcf85"
  },
  {
    "url": "assets/img/clip_image002.e7149db0.png",
    "revision": "e7149db06cd91591a32062640a69c1df"
  },
  {
    "url": "assets/img/clip_image003.e85b30e2.png",
    "revision": "e85b30e250bb6ca67a60fe6f5105a9d0"
  },
  {
    "url": "assets/img/clip_image004.b4e1da3d.png",
    "revision": "b4e1da3df6518771dcdb2a93e71f0cc8"
  },
  {
    "url": "assets/img/css-center-1.524a06c0.png",
    "revision": "524a06c0390f20fbde2149d45f497d88"
  },
  {
    "url": "assets/img/css-center-2.183fa9e6.png",
    "revision": "183fa9e6a7b6fa4fbcce96d725cd7741"
  },
  {
    "url": "assets/img/css-center-3.1613ff62.png",
    "revision": "1613ff6200ebe1fcd85dfe78132a5db7"
  },
  {
    "url": "assets/img/css-horizontal-center-1.f3e4433d.png",
    "revision": "f3e4433dd94d6a6b7262c3ecd468fadb"
  },
  {
    "url": "assets/img/css-horizontal-center-2.bf3f9c8e.png",
    "revision": "bf3f9c8ec6fa3d08bfdeedba260d2d25"
  },
  {
    "url": "assets/img/css-horizontal-center-3.ecad63ce.png",
    "revision": "ecad63cec5045cc01eb55d14228c4838"
  },
  {
    "url": "assets/img/css-horizontal-center-4.d4264de7.png",
    "revision": "d4264de761b9ef08000a4be5a8bac4be"
  },
  {
    "url": "assets/img/css-horizontal-center-5.f1a3fcfc.png",
    "revision": "f1a3fcfcc7499f94a35518927c846964"
  },
  {
    "url": "assets/img/css-text-length-limit.a83cc9ba.png",
    "revision": "a83cc9ba29128fe542fb507a7bd365ad"
  },
  {
    "url": "assets/img/css-vertical-center-1.b1560397.png",
    "revision": "b1560397f3ed1c1cceb0213cea30de76"
  },
  {
    "url": "assets/img/css-vertical-center-2.4a8cb199.png",
    "revision": "4a8cb1995326730155aa07040ed15d41"
  },
  {
    "url": "assets/img/css-vertical-center-3.720dcbdc.png",
    "revision": "720dcbdc84531d1dc7e254619980fd91"
  },
  {
    "url": "assets/img/deep-clone.e9c86a61.png",
    "revision": "e9c86a61f1da236f3e3b9eb966b8fc86"
  },
  {
    "url": "assets/img/em.f65c21e2.png",
    "revision": "f65c21e25d89ae4688f3612140ec3af0"
  },
  {
    "url": "assets/img/html-font-size.eb86ae19.png",
    "revision": "eb86ae19e56101c0d522bb9646353563"
  },
  {
    "url": "assets/img/image-20200307212732508.222ae9d4.png",
    "revision": "222ae9d4baeda47bf711ff68a598d7ac"
  },
  {
    "url": "assets/img/image-20200307213204195.6993564a.png",
    "revision": "6993564a5656abbc36d80172a3144605"
  },
  {
    "url": "assets/img/image-20200307213255049.4fa70ed0.png",
    "revision": "4fa70ed00da60fc9027d3ad3d2a7f3fc"
  },
  {
    "url": "assets/img/image-20200307213343166.4fbe0d28.png",
    "revision": "4fbe0d287c7594f8434bf57e67b863ad"
  },
  {
    "url": "assets/img/image-20200307213537066.62df4c57.png",
    "revision": "62df4c57aaf2a5c4418338091d55bde4"
  },
  {
    "url": "assets/img/image-20200307213833869.eb859697.png",
    "revision": "eb8596970700b1bfc1894b4304103f69"
  },
  {
    "url": "assets/img/image-20200307214031379.48d9950d.png",
    "revision": "48d9950d5e72375a319ac57e8825a134"
  },
  {
    "url": "assets/img/image-20200307214148100.0ec72f90.png",
    "revision": "0ec72f905d9781084e5ae46313268e2d"
  },
  {
    "url": "assets/img/image-20200307214510295.d7494b41.png",
    "revision": "d7494b4131d684e38906b2fe4bba4fa5"
  },
  {
    "url": "assets/img/image-20200307215150810.ba9cc6f2.png",
    "revision": "ba9cc6f2a8454b6bdfa5cb63fad2272d"
  },
  {
    "url": "assets/img/image-20200408103709602.359fc15d.png",
    "revision": "359fc15d1e8bf85c78e0e77f6af847df"
  },
  {
    "url": "assets/img/image-20200408103837251.76b7402a.png",
    "revision": "76b7402a2848b9c8796783b6799416e7"
  },
  {
    "url": "assets/img/image-20200421154419272.be4e6ac8.png",
    "revision": "be4e6ac891fe285475ad5e5c08fe9789"
  },
  {
    "url": "assets/img/image-20200601185618646.f0498a16.jpg",
    "revision": "f0498a1601eed63abee62c1ffdc75eed"
  },
  {
    "url": "assets/img/image-20200706165450303.3b40c356.png",
    "revision": "3b40c3561f6f0ead1e0e5ca1c57aff94"
  },
  {
    "url": "assets/img/image-20200707094422495.1178e136.png",
    "revision": "1178e1368153787e3df75d0feb30c1cb"
  },
  {
    "url": "assets/img/image-20200707094706700.03851a97.png",
    "revision": "03851a975bec3840ba5212ec12062490"
  },
  {
    "url": "assets/img/image-20200707094848365.a40154a4.png",
    "revision": "a40154a47a87c521904889f82af04ea4"
  },
  {
    "url": "assets/img/image-20200707095408605.dfff03fa.png",
    "revision": "dfff03fa9938637d8483adc62813b463"
  },
  {
    "url": "assets/img/image-20200707095600000.8ee115e2.png",
    "revision": "8ee115e208aeaf6c1051a111ff42c258"
  },
  {
    "url": "assets/img/image-20200805164924891.4741e9ca.png",
    "revision": "4741e9cae5b288cc7e7110ddc5c50fb2"
  },
  {
    "url": "assets/img/image-20200805165607951.ecada3b2.png",
    "revision": "ecada3b2c005379de8e13ed2ca707808"
  },
  {
    "url": "assets/img/image-20200805165612385.eb10508e.png",
    "revision": "eb10508e0c76dc0af0d5684d5e6983bc"
  },
  {
    "url": "assets/img/image-20200805165748820.4213d16c.png",
    "revision": "4213d16c9cc235e42ee6d85d2c9e8307"
  },
  {
    "url": "assets/img/image-20200805165839601.52ab2b2f.png",
    "revision": "52ab2b2fa295bc6a2826238418d19fe2"
  },
  {
    "url": "assets/img/image-20200805170553260.c81a87cb.png",
    "revision": "c81a87cb4992a85b77b274584d2f8891"
  },
  {
    "url": "assets/img/image-20200805170604434.96e87476.png",
    "revision": "96e87476d324ab181dde3bba8a02eec5"
  },
  {
    "url": "assets/img/image-20200805170616412.2ca4e75f.png",
    "revision": "2ca4e75f7895ac2808622c2b64a737ce"
  },
  {
    "url": "assets/img/image-20200805170641397.6caa66c0.png",
    "revision": "6caa66c00a08e22031ac167e40e770fb"
  },
  {
    "url": "assets/img/image-20200805170707637.a9dc9cdf.png",
    "revision": "a9dc9cdf59adf9d4ccf70f50bacb82a0"
  },
  {
    "url": "assets/img/image-20200805170814286.93935930.png",
    "revision": "939359301dab36cdad4d010cb18541f2"
  },
  {
    "url": "assets/img/image-20200805170840931.64beacf8.png",
    "revision": "64beacf8cd38d33754e6c59ab6b1f043"
  },
  {
    "url": "assets/img/image-20200805170919060.e50807e9.png",
    "revision": "e50807e98abc9ccc12bb3c732f31b33c"
  },
  {
    "url": "assets/img/image-20200805170931944.5a773b7f.png",
    "revision": "5a773b7fc250e0daf08d654605513d71"
  },
  {
    "url": "assets/img/image-20200805170953270.838daaf7.png",
    "revision": "838daaf77d4e62f81a0a94af7d526f56"
  },
  {
    "url": "assets/img/image-20200805171005432.c55ccc7f.png",
    "revision": "c55ccc7f30872b03ed2de7f1baade887"
  },
  {
    "url": "assets/img/image-20200805171010603.861ce5e8.png",
    "revision": "861ce5e80b306ec00a0051a002256578"
  },
  {
    "url": "assets/img/image-20200805171027802.419e77fe.png",
    "revision": "419e77fe60bd39ff5f5f4a05b3f22962"
  },
  {
    "url": "assets/img/image-20200805171030667.22fb7e99.png",
    "revision": "22fb7e991f63e7416980f357e1f817b8"
  },
  {
    "url": "assets/img/image-20200805171040281.d716090a.png",
    "revision": "d716090ab1ffbc8e25aa7009242479ff"
  },
  {
    "url": "assets/img/image-20200805171049756.2ac68c7b.png",
    "revision": "2ac68c7b6829ce8520b2ce0f767ffab6"
  },
  {
    "url": "assets/img/image-20200805171128176.cdbfea8b.png",
    "revision": "cdbfea8b753e27ead11fe7305d1943f4"
  },
  {
    "url": "assets/img/image-20200805171159760.d261d6b5.png",
    "revision": "d261d6b5d7543ae79715e8b34b201bb1"
  },
  {
    "url": "assets/img/image-20200805171345703.83e86bd8.png",
    "revision": "83e86bd8438c631620693e403f2ae22e"
  },
  {
    "url": "assets/img/image-20200805171358771.c5c44288.png",
    "revision": "c5c44288e6017923ec25e388714bb35b"
  },
  {
    "url": "assets/img/image-20200805171408012.83edc7ef.png",
    "revision": "83edc7ef25983428bb8b7f146ef9e18e"
  },
  {
    "url": "assets/img/image-20200805171439575.ea833e08.png",
    "revision": "ea833e084c1115a801c93746402180fa"
  },
  {
    "url": "assets/img/image-20200805171501835.7f4ecba3.png",
    "revision": "7f4ecba3999447e3dfcab372bc8ed51f"
  },
  {
    "url": "assets/img/image-20200805171514464.234d4ee8.png",
    "revision": "234d4ee8058fa816618e0f0d81c8b8a0"
  },
  {
    "url": "assets/img/image-20200805171900547.ccee687d.png",
    "revision": "ccee687d7dd0a2fecf4f528507952294"
  },
  {
    "url": "assets/img/image-20200805171927006.591a12f4.png",
    "revision": "591a12f4875ad60048e24e34dfcafc44"
  },
  {
    "url": "assets/img/image-20200805171954194.f23f430f.png",
    "revision": "f23f430fe9a55a800c1c0ca21900f50c"
  },
  {
    "url": "assets/img/image-20200805172000811.426088a5.png",
    "revision": "426088a55816143b2b1e02956e652c27"
  },
  {
    "url": "assets/img/image-20200805172027394.2ef1beb4.png",
    "revision": "2ef1beb4b11a4e14e91e1aa892ff8be5"
  },
  {
    "url": "assets/img/image-20200805172101202.0453297b.png",
    "revision": "0453297b9c577f54244b818114ceb9e4"
  },
  {
    "url": "assets/img/image-20200805172151671.cc9e42e4.png",
    "revision": "cc9e42e454947f9687332f5290b7f3e7"
  },
  {
    "url": "assets/img/image-20200805173036376.f1301521.png",
    "revision": "f130152185bd2296e5941b64ca548c5c"
  },
  {
    "url": "assets/img/image-20200808230848029.42f968e9.png",
    "revision": "42f968e9334677232b4501f6ebb68377"
  },
  {
    "url": "assets/img/image-20200808231736582.39da4688.png",
    "revision": "39da46887545c9177f987d7ab4f5b3ea"
  },
  {
    "url": "assets/img/image-20200808232535479.e19f0fb9.png",
    "revision": "e19f0fb9986bbff59bea305d55d8c232"
  },
  {
    "url": "assets/img/image-20200809125337578.38a18c6d.png",
    "revision": "38a18c6df8cf38999f8ba08ac5e35f5a"
  },
  {
    "url": "assets/img/image-20200829225253396.047feb22.png",
    "revision": "047feb222e9265d371178d2176a9ad9d"
  },
  {
    "url": "assets/img/image-20200829225438421.904eae10.png",
    "revision": "904eae10c00029f5bafeb3f21adb2e9d"
  },
  {
    "url": "assets/img/img4-2.32038866.png",
    "revision": "320388666b6e82d697b31f56f13f89b2"
  },
  {
    "url": "assets/img/img4-3.a1319061.png",
    "revision": "a13190612b5e13b8a570df157d7f0a59"
  },
  {
    "url": "assets/img/img6-1-1.3e04e822.png",
    "revision": "3e04e82206bc757c613b3b92c7245f59"
  },
  {
    "url": "assets/img/img6-4.ed397491.png",
    "revision": "ed397491008c14bf5159e12ef63aa58d"
  },
  {
    "url": "assets/img/powershell-theme.7c30321a.png",
    "revision": "7c30321a406f027a937254de1a890f0b"
  },
  {
    "url": "assets/img/rem.98343003.png",
    "revision": "98343003c8fd6f28aa70dd88d0e83e3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/shallow-clone.a57f74eb.png",
    "revision": "a57f74eb908edfb6cca038cdc9508687"
  },
  {
    "url": "assets/img/Sp7Wacom.a8f765d3.png",
    "revision": "a8f765d3f54516ee3fbdda4dbf2e161c"
  },
  {
    "url": "assets/img/vim.053c5ec5.png",
    "revision": "053c5ec599c0f5c96c78e74665731820"
  },
  {
    "url": "assets/img/windows-dual-link-setup.e7f5a7cf.png",
    "revision": "e7f5a7cfaa25e71e3d14897fcf6a87a2"
  },
  {
    "url": "assets/js/10.28c92abd.js",
    "revision": "8c274149346f1b4905f021205c889c7d"
  },
  {
    "url": "assets/js/11.fb7c412c.js",
    "revision": "e3d02e8722ca8188772cb393f29fb533"
  },
  {
    "url": "assets/js/12.dcb9e1a6.js",
    "revision": "d1992e5746e32b3928eac0bfdab6f12f"
  },
  {
    "url": "assets/js/13.31220ca8.js",
    "revision": "ab0f85dce20b5c942c6e05ce9df55608"
  },
  {
    "url": "assets/js/14.ed40d560.js",
    "revision": "250fb2cac04194fbd0f402906e3ec7d0"
  },
  {
    "url": "assets/js/15.ed8a975c.js",
    "revision": "d3677ddd12b8b230880a125c387a77fa"
  },
  {
    "url": "assets/js/16.77dbbb67.js",
    "revision": "23392fdc0eb26f4a65d1f902a5105154"
  },
  {
    "url": "assets/js/17.e86d3a36.js",
    "revision": "1e1a952d672b63e11d6ae389c971ffaf"
  },
  {
    "url": "assets/js/18.ce4fe650.js",
    "revision": "0d3dff6e23d478864ccfcce6988e088a"
  },
  {
    "url": "assets/js/19.2e2e4d04.js",
    "revision": "72d0510538f48da631b6ac932cacb12a"
  },
  {
    "url": "assets/js/2.f449302a.js",
    "revision": "3df847e032bbf43ad6e8aae2d0809eb7"
  },
  {
    "url": "assets/js/20.e2460884.js",
    "revision": "d1a24e667cac11142399511ac729031a"
  },
  {
    "url": "assets/js/21.3966a498.js",
    "revision": "54de4b74d443dae0af660f2e4a2b622d"
  },
  {
    "url": "assets/js/22.6f18ed25.js",
    "revision": "5c930e2cf19c533f107b24becf994e2c"
  },
  {
    "url": "assets/js/23.13cb6ce9.js",
    "revision": "9c3415297150b1fd713c7d67b69ea980"
  },
  {
    "url": "assets/js/24.af5142fe.js",
    "revision": "4e4a9aeb88869ca38b612f400d460f3f"
  },
  {
    "url": "assets/js/25.89bdd535.js",
    "revision": "1ec01e311191830b3d8ba97659e70292"
  },
  {
    "url": "assets/js/26.2a46eadf.js",
    "revision": "a9cd79670f88648d9d73171faa58a2e6"
  },
  {
    "url": "assets/js/27.adca991a.js",
    "revision": "d0f0deeb7d3de198be112d58ae8c7e2d"
  },
  {
    "url": "assets/js/28.64427958.js",
    "revision": "b5c94fd8f3ad685e0ad4719a6444826a"
  },
  {
    "url": "assets/js/29.76a68057.js",
    "revision": "108c6ab7c06a0f5a1fc97d033abb500c"
  },
  {
    "url": "assets/js/3.d6de21a9.js",
    "revision": "2d5c6c6672aa7ec1b1087f47e416d93f"
  },
  {
    "url": "assets/js/30.f53e840c.js",
    "revision": "b68803e6f80386f0a08edad8940ecd6e"
  },
  {
    "url": "assets/js/31.75f0520f.js",
    "revision": "42d1d027d3503bfe95e24b9202c5009f"
  },
  {
    "url": "assets/js/32.ceac82ff.js",
    "revision": "56213b3a41d7ea9dddc0c1590e8dd34e"
  },
  {
    "url": "assets/js/33.68245d2d.js",
    "revision": "938fea04f49cac9faecc9cc2d4a0915e"
  },
  {
    "url": "assets/js/34.7c304323.js",
    "revision": "6fbfa670bbc22b5e56b63f7f96315ca7"
  },
  {
    "url": "assets/js/35.503534fe.js",
    "revision": "9f65068fe434133d3e51ae03ad81a3f4"
  },
  {
    "url": "assets/js/36.35b012c8.js",
    "revision": "c4bd6cf4d55bb143296bc2230952b79e"
  },
  {
    "url": "assets/js/37.ed6cff0c.js",
    "revision": "356009412989724091e5983549ac0943"
  },
  {
    "url": "assets/js/38.2dfdadad.js",
    "revision": "7fba3b91f64f5cabfe1ce8a1dff6c74f"
  },
  {
    "url": "assets/js/39.6785b911.js",
    "revision": "ae4f3d3156724178f22c6080279ddaca"
  },
  {
    "url": "assets/js/4.06ef4ba0.js",
    "revision": "cbb3bbfb68ccecf9ff07642ba1528a83"
  },
  {
    "url": "assets/js/40.2d3376c0.js",
    "revision": "aed1f67048e53d445e05c30567c81c8c"
  },
  {
    "url": "assets/js/41.494b78f4.js",
    "revision": "2c3f5c6f822db8d06a51e2b557f5bd2b"
  },
  {
    "url": "assets/js/42.3980bf0d.js",
    "revision": "341ec45a2d8450c9408b6890621d8fe3"
  },
  {
    "url": "assets/js/43.f7bb6750.js",
    "revision": "9db1dc39b9207b6827a1ac055510cbe4"
  },
  {
    "url": "assets/js/44.34ba1be1.js",
    "revision": "6a63cedaa4205518726298a24095bb1e"
  },
  {
    "url": "assets/js/45.2f2b8f3a.js",
    "revision": "69a19d38e1b5c38b801ae33ed16a3f24"
  },
  {
    "url": "assets/js/46.45fd8d0f.js",
    "revision": "a01941f7a506b3ba5f75d2f6aeaf224e"
  },
  {
    "url": "assets/js/47.08615889.js",
    "revision": "f54b1b4247f542ca62063758cca2979c"
  },
  {
    "url": "assets/js/48.be08f9ca.js",
    "revision": "978d0ca4322be6dd10b4758e3bc3d75f"
  },
  {
    "url": "assets/js/49.566adab1.js",
    "revision": "6d399d1eb797a44041f1a64da71ee172"
  },
  {
    "url": "assets/js/5.21f84dbf.js",
    "revision": "33e585535541cbd168247088012a3cf6"
  },
  {
    "url": "assets/js/50.6bec36d4.js",
    "revision": "b76ba3c0a41df26fa7a5c63a514ac170"
  },
  {
    "url": "assets/js/51.185c2734.js",
    "revision": "391ad4ccef9c5e43d6e09a00ec6c065e"
  },
  {
    "url": "assets/js/52.c4467ec8.js",
    "revision": "e16e8f95a471ec23eecf5fa83ef024d2"
  },
  {
    "url": "assets/js/53.936d3507.js",
    "revision": "2d8eaca231a9de1f3c3442e482325eed"
  },
  {
    "url": "assets/js/54.35c878da.js",
    "revision": "8e3c4fd5e042c34736f1adf587171712"
  },
  {
    "url": "assets/js/55.336643e3.js",
    "revision": "419d5abea9ce1553e85a18d1c4e1570e"
  },
  {
    "url": "assets/js/56.a9dee910.js",
    "revision": "8186cf350c7bd8500f2f8357c0acd70f"
  },
  {
    "url": "assets/js/57.083e162a.js",
    "revision": "9b8e106a8dc211f60d4207f28be20d8f"
  },
  {
    "url": "assets/js/58.5f891cd6.js",
    "revision": "94442cc8bed010f9b2ab1b55d3b1f14e"
  },
  {
    "url": "assets/js/59.b2b652ab.js",
    "revision": "2514570e31db3043d6ace930c41e0fd0"
  },
  {
    "url": "assets/js/6.fa46fdb0.js",
    "revision": "ae17ea88c6c60cd8c0dbdc21ae451efe"
  },
  {
    "url": "assets/js/60.3413c5fd.js",
    "revision": "a5419b25a828fc12f0d36c7e1da1ba00"
  },
  {
    "url": "assets/js/61.6617c200.js",
    "revision": "bd27541e7d12bb06dd16e7d6faf595f8"
  },
  {
    "url": "assets/js/62.b3bf0a68.js",
    "revision": "f9765369fafb20d3ff59d38449128fde"
  },
  {
    "url": "assets/js/63.8fd9438c.js",
    "revision": "a8876e65e9b3998dfcca1f3feee1aac1"
  },
  {
    "url": "assets/js/64.8ee6e4ab.js",
    "revision": "c19becb06bb4f6c89f1b956f9fb65af5"
  },
  {
    "url": "assets/js/65.8fa5a3ea.js",
    "revision": "1e2509a4a084243b5596d58f01bbb37e"
  },
  {
    "url": "assets/js/66.fa63535d.js",
    "revision": "22ffb6b7f6b34e5ef04d1a128d8bfdd3"
  },
  {
    "url": "assets/js/67.bbe482a2.js",
    "revision": "2699bbad375d7d3e156fd26b25118c60"
  },
  {
    "url": "assets/js/68.b62442f0.js",
    "revision": "f29cae54c3711f85836e48769bbbf2bc"
  },
  {
    "url": "assets/js/69.e7acff09.js",
    "revision": "c5c733689b1ff3eaba44ba00c912f70c"
  },
  {
    "url": "assets/js/7.5eb2ce28.js",
    "revision": "2af6008fb6f1d12c10317653fcf7f0c3"
  },
  {
    "url": "assets/js/70.e2bc4eac.js",
    "revision": "f17e92205698f0c2904d6cff6daf80ab"
  },
  {
    "url": "assets/js/71.cb727859.js",
    "revision": "e3b2db6d521f32b3f5ab7b19a47ef398"
  },
  {
    "url": "assets/js/72.9d6e5153.js",
    "revision": "a9dc668cd859b65a062eb858d6e8eeea"
  },
  {
    "url": "assets/js/73.b945a8e4.js",
    "revision": "55380c0a9d6ef5cd9106cfe4326d440e"
  },
  {
    "url": "assets/js/74.cfbf1dcc.js",
    "revision": "a4856897038258c8c8842abe5806db4f"
  },
  {
    "url": "assets/js/75.b807be9b.js",
    "revision": "f1aac0b52d4bffabfe1341431a964882"
  },
  {
    "url": "assets/js/76.2da60443.js",
    "revision": "456da963341aa3a583442d43d396afd7"
  },
  {
    "url": "assets/js/77.5efb0331.js",
    "revision": "e76e581837241121ba4502aac05bb0c2"
  },
  {
    "url": "assets/js/78.0b2d3f26.js",
    "revision": "46251ae6c794be488b11b89121760e20"
  },
  {
    "url": "assets/js/79.0694162f.js",
    "revision": "a4d736453f467bd766868a75f5a7fb47"
  },
  {
    "url": "assets/js/8.a6ff4447.js",
    "revision": "5dc8ea98e326bcb901ff41487a2442ef"
  },
  {
    "url": "assets/js/80.97dedc86.js",
    "revision": "a7ceafcf0d12bdbad532ec40049dd940"
  },
  {
    "url": "assets/js/81.083aa642.js",
    "revision": "a576dfbaea3769e8cb86d156c84ac034"
  },
  {
    "url": "assets/js/82.79fa8e62.js",
    "revision": "c3ea986ac794d82dbca304eb2abe8d25"
  },
  {
    "url": "assets/js/83.30d0496a.js",
    "revision": "0c5de92b0e9551d7870cf853e8b5872f"
  },
  {
    "url": "assets/js/84.fe824ba6.js",
    "revision": "bc20a8440f0ca20699cdb8a3daec9886"
  },
  {
    "url": "assets/js/85.94b7f8d0.js",
    "revision": "1c06e9ed79de8f2e6b8bb12f541003f0"
  },
  {
    "url": "assets/js/86.8fb4a867.js",
    "revision": "3011052c7c008ac79e5c815361c27eb6"
  },
  {
    "url": "assets/js/87.18d42297.js",
    "revision": "a53329909c8068cdabfed00e1f25eae6"
  },
  {
    "url": "assets/js/88.cf475b9d.js",
    "revision": "28862f133914a597da9fafbfcf33d21d"
  },
  {
    "url": "assets/js/89.88c2bddc.js",
    "revision": "d5a9f4ff2310f59268fd698e77a72889"
  },
  {
    "url": "assets/js/9.f887648b.js",
    "revision": "788bd6f937efe525856bb6ea0d70f0bd"
  },
  {
    "url": "assets/js/app.ecc166bc.js",
    "revision": "ecd229964b9964f0337922b77f6a2c8a"
  },
  {
    "url": "blog/index.html",
    "revision": "80755c47b16e14ec93a454f5053a344f"
  },
  {
    "url": "blog/install-archlinux.html",
    "revision": "a34a05c4bf43e663f4fa90d515a35758"
  },
  {
    "url": "blog/linux-deploy-tutorial.html",
    "revision": "dad778facd2af6156034869810d0dae2"
  },
  {
    "url": "blog/linux-surface-pro7.html",
    "revision": "8c509f75d5a2e05abec00ef090eb25aa"
  },
  {
    "url": "blog/manjaro-kde-getting-started.html",
    "revision": "1576807beb3f9ece7256fa8bc4292fa7"
  },
  {
    "url": "blog/rsync-clone-linux.html",
    "revision": "3d8140f46ce07701e54c1257b1859dce"
  },
  {
    "url": "blog/surface-pro7-as-paint-tablet.html",
    "revision": "9b03bcb361528ea8609e6ba491e2b5ca"
  },
  {
    "url": "blog/virtual-disk-test.html",
    "revision": "d2042214d71db94acc0fa5d5e211fcf6"
  },
  {
    "url": "blog/win10-sound-scheme-from-win7.html",
    "revision": "67e16f1b77e0dde1703d6ac0d35a9114"
  },
  {
    "url": "blog/win10-start-menu-backup-restore.html",
    "revision": "01bf6651189311f28f6f5c01007555a6"
  },
  {
    "url": "blog/windows-rdp-ssl.html",
    "revision": "060ca37e56c3721939ab18d3ad14f79c"
  },
  {
    "url": "favicon.png",
    "revision": "a285189065424ab2ec6611532c97a65f"
  },
  {
    "url": "files/canvas-wandering/1-barchart/index.html",
    "revision": "5f8c64241cf10741798123b4d885b60b"
  },
  {
    "url": "files/canvas-wandering/2-linechart/index.html",
    "revision": "5e1ff971fd923799f0e8ff3dd9a78384"
  },
  {
    "url": "files/canvas-wandering/2-linechart/index.js",
    "revision": "016f723a8a31c1c9ecc0dadbd90f0936"
  },
  {
    "url": "files/canvas-wandering/3-piechart/index.html",
    "revision": "2283ce69fd8813505e9bddc3e495647a"
  },
  {
    "url": "files/canvas-wandering/3-piechart/index.js",
    "revision": "a3430ba1327e8cfdea0158f819df951e"
  },
  {
    "url": "files/canvas-wandering/4-scatter-chart/index.html",
    "revision": "54e50f57abb727840c40173826bb0f9f"
  },
  {
    "url": "files/canvas-wandering/4-scatter-chart/index.js",
    "revision": "de7f53a4034a2e2c5760df2748c02612"
  },
  {
    "url": "files/css/bootstrap_grid_system.css",
    "revision": "53387c00ff32669a528baa23a353e6ca"
  },
  {
    "url": "files/css/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  },
  {
    "url": "files/css/reset.css",
    "revision": "ba1d59b0e53d380b12b3e97a428b3314"
  },
  {
    "url": "files/effects/404-pages/coding.io.html",
    "revision": "6e98f4bafee362f3b2c0da54e9a69b06"
  },
  {
    "url": "files/effects/apple-video-scroll/index.html",
    "revision": "c8c239bce564f1087434a9ccde641ed1"
  },
  {
    "url": "files/effects/apple-video-scroll/lib/TweenLite.min.js",
    "revision": "d1c95e7ccac8cac52b3e5e20b1f0719f"
  },
  {
    "url": "files/effects/border-radius/icon_mask.png",
    "revision": "5ab8600f77b8bb563c2b8ced8f9c4b47"
  },
  {
    "url": "files/effects/border-radius/icon.png",
    "revision": "a562abef5e9d3cb6fd4a37743f5c580e"
  },
  {
    "url": "files/effects/border-radius/index.html",
    "revision": "784c0321d411f7f98cb625b8cbe7bf7d"
  },
  {
    "url": "files/effects/border-radius/mask.png",
    "revision": "4d5c13c6516d1fed25200100324238a9"
  },
  {
    "url": "files/effects/border-radius/mask2.png",
    "revision": "2c6d3b22e27ab5fff5e0056df690d928"
  },
  {
    "url": "files/effects/border-radius/photo.jpg",
    "revision": "6927a208863e3d7dc2c85da71bdd840a"
  },
  {
    "url": "files/effects/border-radius/photo2.png",
    "revision": "c7cbf9970e9257d7ab797a3d10db3f8a"
  },
  {
    "url": "files/effects/canvas-imageseq-play/canvas-keyframes.js",
    "revision": "aae6317f2ce320953359a9ddb010ecc1"
  },
  {
    "url": "files/effects/canvas-imageseq-play/canvas-keyframes.min.js",
    "revision": "9fcd442df72bdcb53524c4e064b14fcd"
  },
  {
    "url": "files/effects/canvas-imageseq-play/index.html",
    "revision": "36e4a7b9d57af8fb131f85d1e0bb5a4d"
  },
  {
    "url": "files/effects/canvas-imageseq-play/index.js",
    "revision": "b3d2cbb892325279b58ed9d061a31692"
  },
  {
    "url": "files/effects/canvas-scratch-card/index.html",
    "revision": "14a202fcc8121418b9e954d58855b577"
  },
  {
    "url": "files/effects/css-gird/common.css",
    "revision": "5c8ff1a03e09aa6f1e8d34d0426b077b"
  },
  {
    "url": "files/effects/css-gird/demo1.html",
    "revision": "ea2245247d71a73e6c852a5f59d292fb"
  },
  {
    "url": "files/effects/css-gird/demo2.html",
    "revision": "5d0041658fd4d26b5fcb4b501baad48b"
  },
  {
    "url": "files/effects/css-gird/demo3.html",
    "revision": "b3a77adfda6c9b7bc1e2765b7b06a4b7"
  },
  {
    "url": "files/effects/css-gird/demo4.html",
    "revision": "b8f97934aeeb2bd86501415a90267db2"
  },
  {
    "url": "files/effects/css-gird/demo5.html",
    "revision": "a36136acc730fb6f9a8ae5ce9b8c64bf"
  },
  {
    "url": "files/effects/css-gird/demo6.html",
    "revision": "cfd9edce9078cfd6053d983732c1c3dd"
  },
  {
    "url": "files/effects/css-gird/demo7.html",
    "revision": "3a52e63abb7e56386534107949933c94"
  },
  {
    "url": "files/effects/css-gird/index.html",
    "revision": "e5583fde09478849a1fd43cd258c3047"
  },
  {
    "url": "files/effects/css-layouts/layout-double-fly-wings.html",
    "revision": "f2249cc36ba9020cbee026a5375b2966"
  },
  {
    "url": "files/effects/css-layouts/layout-holy-grail.html",
    "revision": "3c56fd91943b9449698eacef2b02d56f"
  },
  {
    "url": "files/effects/css-sticky-layout/index.html",
    "revision": "e68ae069133614c56620fc29b7248425"
  },
  {
    "url": "files/effects/css-sticky-layout/style.css",
    "revision": "0182d88461a619d736386a6c73fdb528"
  },
  {
    "url": "files/effects/drag-n-drop/dragover_event.html",
    "revision": "e42b1e36fad37421bb15fe438579f5c6"
  },
  {
    "url": "files/effects/draggable-mouse-touch/drag-element.html",
    "revision": "31fe03142cc7ebdd0ba7a7537937fce0"
  },
  {
    "url": "files/effects/draggable-mouse-touch/draggable-mouse.js",
    "revision": "88e38401f31f0c2adae7783edc374e7d"
  },
  {
    "url": "files/effects/draggable-mouse-touch/draggable-touch.js",
    "revision": "3950b4613e19f57e85c61fb73e3f6f41"
  },
  {
    "url": "files/effects/draggable-mouse-touch/index.html",
    "revision": "d14dab06677702fa353af9daf26d7958"
  },
  {
    "url": "files/effects/draggable-mouse-touch/macos.html",
    "revision": "8a16997ab3e2249c139f2cea2a26a820"
  },
  {
    "url": "files/effects/jsqrscanner/index.html",
    "revision": "4184620653e2ec147cffc4830fb5d18e"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/24C4C259474DE5354D9FB187AD89F216.cache.js",
    "revision": "359073b5f90b154dcabd7f3fd19f0304"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/473C27C6FECA08502D247610DE7AFFD6.cache.js",
    "revision": "3eeb3bcc70d3977f04db1cbfeb8ffd08"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/61FDF3EE355B5CFDDC3880B5ED22C0EB.cache.js",
    "revision": "52eb41f19155c00a8d2a4701635fb042"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/B1F2ACB053147E133D7B1631DDD167E8.cache.js",
    "revision": "4bf24058e7290ea0e5a4e8fbee6687d2"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/F0879322278FBE3F622BCA3E5F9EFC31.cache.js",
    "revision": "332cb033d9d07b80e02efaf7c783b47a"
  },
  {
    "url": "files/effects/jsqrscanner/jsPretty/jsqrscanner.nocache.js",
    "revision": "54e564f87196c333aeef2187b1d5a038"
  },
  {
    "url": "files/effects/jsqrscanner/JsQRScanner.css",
    "revision": "2225d5937b4ac707baadc7c2c2d2a660"
  },
  {
    "url": "files/effects/linux_permissions.html",
    "revision": "a563825b6d01fb1ee38210f38119fb5c"
  },
  {
    "url": "files/effects/my-effects/bounce-ball/index.html",
    "revision": "4caea31288eb69ec33361a2e71ea8c0f"
  },
  {
    "url": "files/effects/my-effects/bounce-ball/res/chrome.png",
    "revision": "090529e8671d3702def9af7392f3ca47"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/index.html",
    "revision": "db0972610b0162cd4bd08ce2f21033d1"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/index.js",
    "revision": "c359573e6bf2409902d3b7e8eade0387"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/jquery-1.8.3.min.js",
    "revision": "3576a6e73c9dccdbbc4a2cf8ff544ad7"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/jquery-ui.min.js",
    "revision": "d09b080ee87a213b8c6bfa1de878212c"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/screenfull.min.js",
    "revision": "0bb37cf5ffdeffdf3258c7885b2702ea"
  },
  {
    "url": "files/effects/my-effects/colorful-screen/tools.js",
    "revision": "7a8dab1c31501e96907464f53dcf8b16"
  },
  {
    "url": "files/effects/my-effects/console.html",
    "revision": "7a0f933a5268ea1d42594e22a4d15903"
  },
  {
    "url": "files/effects/my-effects/countdown.html",
    "revision": "4f6a91ece5eb8157f05a106dc3733152"
  },
  {
    "url": "files/effects/my-effects/countdown2.html",
    "revision": "b70c3dd6ed42092ffd2113fffc4c7f32"
  },
  {
    "url": "files/effects/my-effects/countdown3.html",
    "revision": "286066c655c82ed5f57775dfd6b76373"
  },
  {
    "url": "files/effects/my-effects/dont-step-on-white/dont-step-on-white-mobile.html",
    "revision": "2dac802ae6dcdaf469971f3caf4bff95"
  },
  {
    "url": "files/effects/my-effects/dont-step-on-white/dont-step-on-white.html",
    "revision": "c53a64edb4f4aee9a95c7f60e204e81a"
  },
  {
    "url": "files/effects/my-effects/flower.html",
    "revision": "e12cf4f070c7751642b540e319d33bfb"
  },
  {
    "url": "files/effects/my-effects/number-guessing-game/index.html",
    "revision": "77b8eb16d8fe95544d3f47cbc11b85c2"
  },
  {
    "url": "files/effects/my-effects/number-guessing-game/number-guessing-game.css",
    "revision": "4a4151e80d02e9b5ff17daa98c9fb431"
  },
  {
    "url": "files/effects/my-effects/scroller.html",
    "revision": "ae8e4e4de59589acf46cc31f7727aaef"
  },
  {
    "url": "files/effects/my-effects/slides/img/1.jpg",
    "revision": "b3f9886abe00912cd9c5ec71b1ecec08"
  },
  {
    "url": "files/effects/my-effects/slides/img/2.jpg",
    "revision": "3f78659f5494df11823ad181c4ffde98"
  },
  {
    "url": "files/effects/my-effects/slides/js/holder.min.js",
    "revision": "a1e2742a09d2ddfc8e7a9dfedec5bff9"
  },
  {
    "url": "files/effects/my-effects/slides/js/jquery-1.12.4.min.js",
    "revision": "4f252523d4af0b478c810c2547a63e19"
  },
  {
    "url": "files/effects/my-effects/slides/slides-1.5.html",
    "revision": "d3de2e69771a23a58b8c989ade65d331"
  },
  {
    "url": "files/effects/my-effects/slides/slides-1.html",
    "revision": "a916d8bc51f219189bb778e35aec13ed"
  },
  {
    "url": "files/effects/my-effects/slides/slides-2.html",
    "revision": "c2aff1fdfaaeed9d5751ff1c73a78018"
  },
  {
    "url": "files/effects/my-effects/slides/slides-3-uiyjlz.html",
    "revision": "f9d74eb8e778a7a5a2ebe9a21c5acb5f"
  },
  {
    "url": "files/effects/my-effects/year_count_down.html",
    "revision": "46bb6346128054436b8cfb9239522355"
  },
  {
    "url": "files/effects/no-ie/index.html",
    "revision": "d161a6cfcc3451c981247adaacb61755"
  },
  {
    "url": "files/effects/no-ie/no-wx-browser.js",
    "revision": "15eae86bbf01a4a0b4fc0426c98452a0"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/css/support.style.css",
    "revision": "53aaf2234671da1fcfbb7a2e1e559c25"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/chrome.png",
    "revision": "68900b0bb5b88ce5082160dbd76cebf8"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/edge.png",
    "revision": "a751bdc8665f33e6521ee4cc1fe8da62"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/firefox.png",
    "revision": "e0427290d31d65e166f1d47b56af3b55"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/ie2345.png",
    "revision": "225fa202e30b2dc4e00796d44f54dbc1"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/qqbrowser.png",
    "revision": "d2c53254db3b47770c2f3d3f9e8c83a1"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/images/se360.png",
    "revision": "7e0e692f00b1178adcf10de83ef9c326"
  },
  {
    "url": "files/effects/no-ie/upgrade-your-browser/index.html",
    "revision": "b2f237c22af7d00391259d908bb7eebe"
  },
  {
    "url": "files/effects/practicles/css/style.css",
    "revision": "5e8e9e7423bb5cd9d4669c6c22d754c5"
  },
  {
    "url": "files/effects/practicles/index.html",
    "revision": "62a57dac221b1c2aed878e41f067863a"
  },
  {
    "url": "files/effects/practicles/index2.html",
    "revision": "ad000521b41e2605cc7b8a3c8ae6b19e"
  },
  {
    "url": "files/effects/practicles/js/app.js",
    "revision": "42b636bab9241eeca695ed6dffd7400d"
  },
  {
    "url": "files/effects/practicles/js/lib/stats.js",
    "revision": "6fece555a60e84acb42cdc0bda086d61"
  },
  {
    "url": "files/effects/practicles/particles.min.js",
    "revision": "00debcf6cf0789a19cee2278011afcd4"
  },
  {
    "url": "files/effects/print-html/index.html",
    "revision": "d36f943ee67f511d68fc279ceae13192"
  },
  {
    "url": "files/effects/sticky-footer/index.css",
    "revision": "7cbf4b260c12318570c0175c48f13d81"
  },
  {
    "url": "files/effects/sticky-footer/index.html",
    "revision": "3d448418bda9cf89777e87882a81dce6"
  },
  {
    "url": "files/effects/svg-clock/index.html",
    "revision": "954d8e2e3e8ed91c2b7acaa878888d6e"
  },
  {
    "url": "files/effects/text-to-qrcode/index.html",
    "revision": "870d366e1295514f31b29bb38dc96cea"
  },
  {
    "url": "files/effects/text-to-qrcode/qrcode.min.js",
    "revision": "aef4c27daa34de76f620f693756fb1a1"
  },
  {
    "url": "files/effects/throttle-debounce/debounce.html",
    "revision": "c603c141517bed3198534dbdeb85a4f5"
  },
  {
    "url": "files/effects/throttle-debounce/index.html",
    "revision": "41cd78bfb9bb013a1067fb6f4e3ccc18"
  },
  {
    "url": "files/effects/throttle-debounce/lodash.min.js",
    "revision": "bc0594c54450e8ac689739b6b198067a"
  },
  {
    "url": "files/effects/throttle-debounce/throttle.html",
    "revision": "c6426d1ce45123cd9219ae679efe310d"
  },
  {
    "url": "files/effects/web-audio-api-demo/index.html",
    "revision": "459c776324ee1be8c38ee9ba0e10c61b"
  },
  {
    "url": "files/effects/web-audio-video-keyboard/index.html",
    "revision": "b1502a6408c332f53622c81edd5ce161"
  },
  {
    "url": "files/effects/web-audio-video-keyboard/index.js",
    "revision": "5ac4a94aacdeea2df7d2bbba673d76f3"
  },
  {
    "url": "files/effects/web-audio-video-keyboard/style.css",
    "revision": "6195080ff0ef11d44b9d9685b4e49615"
  },
  {
    "url": "files/effects/websocket-demo/client/index.html",
    "revision": "03b782d5d324bed8782d28a848233ab3"
  },
  {
    "url": "files/effects/websocket-demo/server/index.js",
    "revision": "ef52d83fc1f9612958a6ef04091a1898"
  },
  {
    "url": "files/js/ajax-demo/fetch.html",
    "revision": "a0e7678e260f91c17dc219005f4cbc7e"
  },
  {
    "url": "files/js/ajax-demo/jquery.ajax.html",
    "revision": "a6c453cc1b5c96f3a18bd67bec5df4d9"
  },
  {
    "url": "files/js/ajax-demo/jquery.jsonp.html",
    "revision": "bf3e7b41add3e044624c92c64364c4bb"
  },
  {
    "url": "files/js/ajax-demo/xhr.html",
    "revision": "436b6718a242aa22ebd73e1b034776a8"
  },
  {
    "url": "files/js/ajax-demo/xhr1.html",
    "revision": "b4c395cd5389c841e0e74bc0f784bd47"
  },
  {
    "url": "files/js/cookie-demo/CookieStorage.js",
    "revision": "4f08865f0f3e4375a33bf87eed386e81"
  },
  {
    "url": "files/js/cookie-demo/index.html",
    "revision": "889fec75ef624f5076825e07b337991c"
  },
  {
    "url": "files/js/object_clone.js",
    "revision": "28c8fa4e38dc805012d06a74e0a4673d"
  },
  {
    "url": "googlefb0b4363a3ddb7c7.html",
    "revision": "6a11b51675fe2a53e66f4e20fd600454"
  },
  {
    "url": "index.html",
    "revision": "22a4c3fa552df5bda23e4708d643c643"
  },
  {
    "url": "manual/android-backup-steps.html",
    "revision": "411284886c0fba4c0e7f8f332c1d5c76"
  },
  {
    "url": "manual/android-rom-modify/index.html",
    "revision": "38ee19e83db29ef7c68b55257da72844"
  },
  {
    "url": "manual/android-rom-modify/rimg2sdat-master/index.html",
    "revision": "d32a0a875285adea4e1c06f133c0820b"
  },
  {
    "url": "manual/android-rom-modify/sdat2img-master/index.html",
    "revision": "dc4262fdb9958ea3fa26f299f642c08a"
  },
  {
    "url": "manual/android-rom-modify/step5_flash_machine.html",
    "revision": "f16b81c7de686a261f017e975a98d92c"
  },
  {
    "url": "manual/android-rom.html",
    "revision": "a13fa949d7c637ae233301849644c53e"
  },
  {
    "url": "manual/canvas-wandering.html",
    "revision": "a8387fe75686ca31bcdb64e1e4fb5214"
  },
  {
    "url": "manual/css-mobile.html",
    "revision": "ae76488739230dd3142ebbd6de13db6b"
  },
  {
    "url": "manual/echarts.html",
    "revision": "f9c334ad8dbee52aa9883db669b802cc"
  },
  {
    "url": "manual/firefox.html",
    "revision": "82e9aba46e2b4e13c264ef7d9fe7357f"
  },
  {
    "url": "manual/free-ssl.html",
    "revision": "cc9e92da6d392aaf4990a0ea27abd56c"
  },
  {
    "url": "manual/fstab.html",
    "revision": "e41a496cadb1c49dc3035c4b5924b884"
  },
  {
    "url": "manual/games.html",
    "revision": "a7dffab54f062fef04e7664cb8dc5c47"
  },
  {
    "url": "manual/git-pushing-multiple.html",
    "revision": "5c084f89321749b1acf0607a606569a3"
  },
  {
    "url": "manual/index.html",
    "revision": "27c5f3da31a079091edcd82be80033d1"
  },
  {
    "url": "manual/luks-home.html",
    "revision": "d0e5c4aa0defe0e25f3848175bcbaab0"
  },
  {
    "url": "manual/nextcloud.html",
    "revision": "d09a4d1be0910fe53f2ac47d22d7e58f"
  },
  {
    "url": "manual/prevent-program-accessing-internet.html",
    "revision": "47cd6d0fc5b66cdc681770b3ac20b3d6"
  },
  {
    "url": "manual/setup-aria2.html",
    "revision": "f4bdc2b3312ac061002b88ab20e60fcb"
  },
  {
    "url": "manual/setup-cordova.html",
    "revision": "6860baf6a6fafef8300e6010d8148684"
  },
  {
    "url": "manual/setup-electronjs.html",
    "revision": "d9bbadc294611d8e51dd0cf10165a93a"
  },
  {
    "url": "manual/setup-frp.html",
    "revision": "853feecda1bd6cbfeef21371d1b3b094"
  },
  {
    "url": "manual/setup-gitlab.html",
    "revision": "225f509bc26ad6c5b0856514ff474ac8"
  },
  {
    "url": "manual/setup-jenkins.html",
    "revision": "5f3eace1e1ddb9304173866f70a2dfc1"
  },
  {
    "url": "manual/setup-kvm.html",
    "revision": "4e38cf5ba12cff31d9c1ef9445314456"
  },
  {
    "url": "manual/setup-less.html",
    "revision": "5dc61b067d75278ffbbbd2b2a7cfa88c"
  },
  {
    "url": "manual/setup-mongodb.html",
    "revision": "bd2450abafdc6248c21778fd5d3817f5"
  },
  {
    "url": "manual/setup-mysql.html",
    "revision": "64d28c118b73d72a1ee2ff3192bb174d"
  },
  {
    "url": "manual/setup-nginx.html",
    "revision": "116b4cd9b934670f29a4c0c7a82c6d3f"
  },
  {
    "url": "manual/setup-path.html",
    "revision": "55935b9097aa8e372a0e7cada6dc84e4"
  },
  {
    "url": "manual/setup-php.html",
    "revision": "44ca15bce831b50e5b2752bc25583f89"
  },
  {
    "url": "manual/setup-pm2.html",
    "revision": "5b4fd99f39922fc641912fdf048ee883"
  },
  {
    "url": "manual/setup-samba.html",
    "revision": "b2eb257ecbb2ec30199d797304353885"
  },
  {
    "url": "manual/setup-samsung-s7-rndis.html",
    "revision": "d55e45d5474594503dab1c08a3cd30b2"
  },
  {
    "url": "manual/setup-termux.html",
    "revision": "8d4cc564a4187afbc4269695d7f2d7ea"
  },
  {
    "url": "manual/setup-ubuntu-resolution.html",
    "revision": "f240b76aa2f5199ccb55fee33cf2d6c2"
  },
  {
    "url": "manual/setup-vnc.html",
    "revision": "ee83d40572477c09ced5113e32df8ceb"
  },
  {
    "url": "manual/ssh.html",
    "revision": "80e701e1e14a55e27a8534fbe08c30e1"
  },
  {
    "url": "manual/vim.html",
    "revision": "e4e9490762629049507fa2a050fd50cc"
  },
  {
    "url": "manual/wifi-crack.html",
    "revision": "242c210f50e02d38a2e7bb41e7317204"
  },
  {
    "url": "manual/windows-dual-link-setup.html",
    "revision": "95cf9ec9d5eadcc39f74b388382da1b9"
  },
  {
    "url": "manual/windows-ssh-server.html",
    "revision": "eafc5bc8c0d5f6f61b8b11946cb35db5"
  },
  {
    "url": "manual/zip.html",
    "revision": "0084ff7df593e0786b8e9dabab872125"
  },
  {
    "url": "notes/css_note.html",
    "revision": "8f80c0d39eeb2c52213d67e223854768"
  },
  {
    "url": "notes/docker.html",
    "revision": "ea80af2a3f0f80a997c60eb902c16d29"
  },
  {
    "url": "notes/fe-effects-collection.html",
    "revision": "31aa31d3a0484d5f55ef39418b877e0f"
  },
  {
    "url": "notes/git-notes.html",
    "revision": "d78f6375d3ebe665718216a168938237"
  },
  {
    "url": "notes/index.html",
    "revision": "5670aa89dd36c2fe664ccabba2c7f78c"
  },
  {
    "url": "notes/js-notes.html",
    "revision": "7e1b5110505ecc846ced95695d4dbac3"
  },
  {
    "url": "notes/js/js_note_simple.html",
    "revision": "109befa8f170de7c95d8a099ff693a7c"
  },
  {
    "url": "notes/js/js-inherit.html",
    "revision": "00b47436758284ab477f2737515512e8"
  },
  {
    "url": "notes/js/js-object-clone.html",
    "revision": "ec15d48ea3c7e213002f072c63c7c36a"
  },
  {
    "url": "notes/js/js-proto-design-mode.html",
    "revision": "aa7fbf39653e4c496e1263c0b21f0701"
  },
  {
    "url": "notes/js/js-service-worker.html",
    "revision": "d7482566a0a42d477428905ddaf4f412"
  },
  {
    "url": "notes/js/js-symbol.html",
    "revision": "658a5aea21e5b4828e80a9abeac1911f"
  },
  {
    "url": "notes/js/js-throttle-debounce.html",
    "revision": "bc523db8c4f9fa9f1893a13afe3bdcf3"
  },
  {
    "url": "notes/linux.html",
    "revision": "e823900958776e3f1b70150faff0d1d0"
  },
  {
    "url": "notes/nodejs-notes.html",
    "revision": "820b5cad23650aac0cecb9802b0824ed"
  },
  {
    "url": "notes/ports.html",
    "revision": "c7f382d5885c61f33ce09f54d22cefde"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter01.html",
    "revision": "674e862333c059ddd6a4588aae8697b1"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter02.html",
    "revision": "db3c72027f9cfd7449f4283d5c4c86d9"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter03.html",
    "revision": "27e9548d765ae8a98337ade15780bfc4"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter04.html",
    "revision": "f1e0fff1d8bf407694d53c75bf5c3abc"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter05.html",
    "revision": "f8bef1bd5abb17c8eaa01b32d5d9b996"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/chapter06.html",
    "revision": "45273f973290562de14492b45006996b"
  },
  {
    "url": "notes/pro-js-for-web-dev-note/index.html",
    "revision": "ab6ee62a7991f5526019126907928912"
  },
  {
    "url": "notes/tujie-http.html",
    "revision": "0291b31f63b2a1cd04193d72bac79e1e"
  },
  {
    "url": "notes/virtual-machine.html",
    "revision": "325bd391c050b9202dea58b7aeb1f701"
  },
  {
    "url": "notes/windows.html",
    "revision": "2a4b5aa1ddd5968fe3e0564eb9627bc2"
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
