// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goXmxp: function() {
    wx.reLaunch({
      url: '../xmxp/xmxp'
    })
  },
  goBzjp: function() {
    wx.reLaunch({
      url: '../bzjp/bzjp'
    })
  },
  goXmpd: function() {
    wx.reLaunch({
      url: '../xmpd/xmpd'
    })
  },
  goAboutUs: function() {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },
  goContactUs: function() {
    wx.navigateTo({
      url: '../contactUs/contactUs',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})