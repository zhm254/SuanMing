// pages/myMeasure/myMeasure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      measureName: '甲乙与丙丁',
      measureType: '姓名配对',
      orderNum: 20190115935301547516130,
      state: '未付费'
    }, {
      measureName: '小明',
      measureType: '姓名详解',
      orderNum: 20190115935301547125632,
      state: '已付费'
    }, {
      measureName: '小华',
      measureType: '八字精批',
      orderNum: 20190115935301547854752,
      state: '未付费'
    }]
  },
  goPreviousPage: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  goFirst: function() {
    wx.reLaunch({
      url: '../first/first'
    })
  },
  goAfterSaleApply: function() {
    wx.reLaunch({
      url: '../afterSaleApply/afterSaleApply'
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