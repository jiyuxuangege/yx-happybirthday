$(function() {
  var benediction = "祝 杨 三 金 十 八 周 岁 六 周 年 生 日 快 乐 ! 俗 话 说: 年 初 六 送 穷 鬼，  迎 寿 星。".split(' ');
  var benediction2 = `
  新 的 一 年 没 话 说, 钱 包 钱 塞 不 下， 知 识 一 学 就 会, 医 术 小 华 佗。
  然 后 最 重 要 的 是 开 开 心 心 下 去 ， 我 觉 得 你 的 笑 容 超 灿 烂 哈。
  再 然 后 祝 福 的 话 想 不 到 了，  日 子 长 慢 慢 补 充 😎。`.split(' ');

  function print(text, dom, time) {
    var timer = null;
    var timeIdx= 0;
    var countIdx =  text.length;
    timer = setInterval(function() {

      dom.text(dom.text() + text[timeIdx])

      timeIdx++;
      if (timeIdx === countIdx) {
        clearInterval(timer)
      }
    }, time)
  
  }

  var benedDom = $("#benediction");
  var benedDom2 = $("#benediction2");
  print(benediction, benedDom, 50)
  setTimeout(function() {
    print(benediction2, benedDom2, 250)
  }, 1000)
  // var audio = $('audio');
  // audio[[0]].play()

  // $('document').on('touchstart', function () {
  //   function audioAutoPlay() {
  //     var audio = document.getElementById('audio');;
  //     audio.play();
  //   }
  //   audioAutoPlay()
  // });
  // 解决iOS禁止自动播放音频
// 微信自动播放音频
  
  // document.addEventListener("WeixinJSBridgeReady",function () {
  //     bgAudio.play();
  // }, false);
  // 其他应用在click/touch时触发播放
  document.addEventListener('click', function () {
      bgAudio.play()
  })  
  document.addEventListener('touchstart', function () {
      bgAudio.play()
  })

  function audioAutoPlay(id){
    var audio = document.getElementById(id);

    var play = function() {
        document.removeEventListener("WeixinJSBridgeReady", play);
        document.removeEventListener("YixinJSBridgeReady", play);

        audio.play();
        audio.pause();
        // document.removeEventListener("touchstart", play, false);
    };
    
    audio.play();
    audio.pause();

    //weixin
    document.addEventListener("WeixinJSBridgeReady", play, false);
    //yixin
    document.addEventListener('YixinJSBridgeReady', play, false);

    // document.addEventListener("touchstart", play, false);
  }
  audioAutoPlay('audio');
})