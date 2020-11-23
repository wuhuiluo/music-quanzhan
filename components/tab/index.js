import {
  px2rpx
} from '../../miniprogram_npm/lin-ui/utils/util'
// components/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    contentHeight: 0
  },

  pageLifetimes: {
    show() {
      this.getScrollViewHeight()
    }
  },

  attached() {
    this.getScrollViewHeight()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getScrollViewHeight() {
      let windowHeight = px2rpx(wx.getSystemInfoSync().windowHeight) // 获取整个窗口的高度
      console.log(windowHeight);
      let headerHeight = 88
      let headerNav = 80
      this.setData({
        contentHeight: windowHeight - headerHeight - headerNav
      })
      console.log(this.data.contentHeight);
    }
  }
})