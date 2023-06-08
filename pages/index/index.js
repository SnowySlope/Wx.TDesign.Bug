const app = getApp();
Component({
  /**
   * 页面的初始数据
   */
  data: {
    //上传图片
    originFiles: [{
        url: 'https://tdesign.gtimg.com/miniprogram/images/example4.png',
        name: 'uploaded1.png',
        type: 'image',
      },
    ],
    gridConfig: {
      column: 2,
      width: 320,
      height: 240,
    },
    config: {
      count: 1,
    },
  },
  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
  }
})