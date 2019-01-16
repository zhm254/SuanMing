// pages/bzjp/bzjp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowDatePicker: false,
    birthday: {},
    bornTimeIndex: 0,
    bornTime: [
      '时辰不清楚',
      '子时0点',
      '丑时1点',
      '丑时2点',
      '寅时3点',
      '寅时4点',
      '卯时5点',
      '卯时6点',
      '辰时7点',
      '辰时8点',
      '巳时9点',
      '巳时10点',
      '午时11点',
      '午时12点',
      '未时13点',
      '未时14点',
      '申时15点',
      '申时16点',
      '酉时17点',
      '酉时18点',
      '戌时19点',
      '戌时20点',
      '亥时21点',
      '亥时22点',
      '子时23点'
    ]
  },
  bornTimeChange: function(e) {
    this.setData({
      bornTimeIndex: e.detail.value
    });
  },
  submitBirthday: function(e) {
    this.setData({
      birthday: e.detail
    })
  },
  showDatePickerPlus: function() {
    this.setData({
      isShowDatePicker: true
    })
  },
  sexRadioChange: function(e) {
    //console.log(e);
  },
  goFirst: function() {
    wx.reLaunch({
      url: '../first/first'
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