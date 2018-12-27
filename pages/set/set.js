Page({
  data: {
    configs: {}
  },
  onLoad: function (options) {  //options前一个页面的参数
    console.log(options);
    var configs = wx.getStorageSync('configs'); //由于配置页面进来的时候的configs是空，所以这时需要来拿一些初始化里面的值
    this.setData({ configs: configs})
  },
  onReady: function () {
  },
  onShow: function () {//显示
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  switchChange: function (e) {
    console.log(e) //通过输出看数据value的值
    var id = e.target.id;//获取点击事件的id
    var configs = this.data.configs; 
    var config = configs[id];//获取一下id
    if (!config) {//如果id不存在，说明是第一次进入页面，首次设置
      config = new Object();//这时就新建一个对象
      configs[id] = config;//将对象放入到configs对象中。
    }
    config.state=e.detail.value;//获取状态是否是启动状态
    this.setData({ configs: configs})
    wx.setStorageSync('configs', configs) //将数据放入到缓存里面
   
  },
  sliderChange: function (e) {
    console.log(e) //通过输出看数据value的值
    var id = e.target.id;//获取点击事件的id
    var configs = this.data.configs;
    var config = configs[id];//获取一下id
    if (!config) {//如果id不存在，说明是第一次进入页面，首次设置
      config = new Object();//这时就新建一个对象
      configs[id] = config;//将对象放入到configs对象中。
    }
    config.time = e.detail.value;//获取状态是否是启动状态
    this.setData({ configs: configs })
    wx.setStorageSync('configs', configs) //将数据放入到缓存里面
  }, 
  radioChange: function (e) {
    console.log(e) //通过输出看数据value的值
    var id = e.target.id;//获取点击事件的id
    var configs = this.data.configs;
    var config = configs[id];//获取一下id
    if (!config) {//如果id不存在，说明是第一次进入页面，首次设置
      config = new Object();//这时就新建一个对象
      configs[id] = config;//将对象放入到configs对象中。
    }
    config.voice = e.detail.value;//获取状态是否是启动状态
    this.setData({ configs: configs })
    wx.setStorageSync('configs', configs) //将数据放入到缓存里面
  }
}
)