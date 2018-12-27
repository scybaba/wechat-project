Page({
  onTapJump: function (event) {
    wx.switchTab({
      url: "../index/index",
      success: function () {
        comsole.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  onUnload: function (event) {
    console.log("page is unload")
  },
  onHide: function (event) {
    console.log("page is hide")
  }
})