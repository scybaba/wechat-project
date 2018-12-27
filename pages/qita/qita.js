// example/set/set.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reals: false,
    skinStyle: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //第三步，最后把全局的变量进行赋值操作。存到本地只是为了下次打开依然按照上次的设置来显示
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,
      reals: app.globalData.reals,

    })

    if (app.globalData.reals) {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#708090',
      })

      wx.setTabBarStyle({
        // borderStyle: '#708090',
        backgroundColor: '#708090',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#f8f8f8',
      })

      wx.setTabBarStyle({
        // borderStyle: '#f8f8f8',
        backgroundColor: '#f8f8f8',
      })
    }

    wx.setNavigationBarTitle({
      title: '模式切换',
    })

  },

  //切换时的处理函数
  switchChange: function (e) {
    var that = this
    var real

    //如果开启
    if (e.detail.value == true) {
      real = true
      app.globalData.skin = "dark"
      app.globalData.reals = true


    } else {
      //否则
      real = false
      app.globalData.skin = ""
      app.globalData.reals = false
    }
    //保存信息
    that.setData({

      reals: real,
      skinStyle: app.globalData.skin
    })
    //保存到本地
    wx.setStorage({
      key: "skin",
      data: app.globalData.skin
    })
    wx.setStorage({
      key: "reals",
      data: app.globalData.reals
    })
    console.log(app.globalData.reals)
    console.log("---------------------------")
    console.log("---------------------------")
    console.log("---------------------------")
    console.log("---------------------------")
    if (app.globalData.reals) {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#708090',
      })

      wx.setTabBarStyle({
        // borderStyle: '#708090',
        backgroundColor: '#708090',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#f8f8f8',
      })

      wx.setTabBarStyle({
        // borderStyle: '#f8f8f8',
        backgroundColor: '#f8f8f8',
      })
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })

    if (app.globalData.reals) {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#708090',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#f8f8f8',
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })

    if (app.globalData.reals) {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#708090',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000', //看文档 必须要六位 不能是三位
        backgroundColor: '#f8f8f8',
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'IT面试题库',
      desc: '好东西值得分享!',
      path: '/example/index/index'
    }
  }
})