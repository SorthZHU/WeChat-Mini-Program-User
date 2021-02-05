//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
var sum = 2
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurls: ["cloud://wxyun-7g4bm1vn16ceb7ed.7778-wxyun-7g4bm1vn16ceb7ed-1304852033/images/haibao/swiper3.jpg", "cloud://wxyun-7g4bm1vn16ceb7ed.7778-wxyun-7g4bm1vn16ceb7ed-1304852033/images/haibao/swiper2.jpg", "cloud://wxyun-7g4bm1vn16ceb7ed.7778-wxyun-7g4bm1vn16ceb7ed-1304852033/images/haibao/swiper1.jpg"],
    dataList:[],
    num:0,
    
  },
  
  //获取通知数据
  async getnum(){
    await wx.cloud.callFunction({
      name:"getnumtest"
    }).then(res=>{
      this.setData({
        num:res.result.total
      })
      // console.log(this.data.num)
    })
     
    
  },
  //通知栏请求数据
  async getTitle(){
    await this.getnum()
    console.log(this.data.num)
    wx.cloud.callFunction({
      name:"getTitle"
    }).then(res=>{
      var temp = this.data.num
      this.setData({
        dataList:[res.result.data[temp - 1].title,res.result.data[temp - 2].title]
      })
      
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTitle()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
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
    
  }
})