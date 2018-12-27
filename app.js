//app.js  这个是在程序启动时开始运行。
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var configs = wx.getStorageSync('configs');
    if (!configs){//如果没有配置的情况下
      configs=this.initConfigs();
    }
    wx.setStorageSync('configs', configs);//将创建的对象放入缓存里面，避免第一次进入的时候没有值
  },
 initConfigs:function(){ //初始化时创建一个配置对象。
   var configs =new Object();
   var config1 = new Object();
   config1.id ="config1";
   config1.name="立论阶段";
   config1.state=true;
   config1.time=180;
   config1.voice=15;
   config1.desc = "（一）正方一辩开篇立论\n（二）反方一辩开篇立论";//@是时间的占位符，后期需要动态改变的。
   configs.config1 = config1;

   var config2 = new Object();
   config2.id = "config2";
   config2.name = "驳立论阶段";
   config2.state = true;
   config2.time = 180;
   config2.voice = 15;
   config2.desc = "\n(一) 反方二辩驳对方立论  \n\n(二) 正方二辩驳对方立论";
   configs.config2 = config2;

   var config3 = new Object();
   config3.id = "config3";
   config3.name = "质辩阶段";
   config3.state = true;
   config3.time = 180;
   config3.voice = 15;
   config3.desc = "\n(一) 正方三辩提问反方一，二，四辨各一个问题,反方辩手分别应答 \n\n (二) 反方三辩提问正方一，二，四辨各一个问题,正方辩手分别应答";
   configs.config3 = config3;

   var config4 = new Object();
   config4.id = "config4";
   config4.name = "自由辩论阶段";
   config4.state = true;
   config4.time = 180;
   config4.voice = 15;
   config4.desc = "\n(一) 自由辩论";
   configs.config4 = config4;

   var config5 = new Object();
   config5.id = "config5";
   config5.name = "总结陈词阶段";
   config5.state = true;
   config5.time = 180;
   config5.voice = 15;
   config5.desc = "\n(一) 反方四辩总结陈词 \n\n(二) 正方四辩总结陈词";
   configs.config5 = config5;

   return configs;
   },
  globalData: {

    skin: '', //默认是白天模式
    reals: false,
  },

  getSkin: function () {
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        that.globalData.skin = res.data
      }
    })
  },

  getReals: function () {
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    var that = this
    wx.getStorage({
      key: 'reals',
      success: function (res) {
        that.globalData.reals = res.data
      }
    })
  }
})   
