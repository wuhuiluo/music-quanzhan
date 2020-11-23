import {
  Recommend
} from '../../model/recommend'
// components/recommend/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    contentHeight: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    type: 'loading',
    recommends: [],
    discList: []
  },

  attached() {
    this.getBannerList()
    this.getDiscList()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async getBannerList() {
      const result = await Recommend.getBannerList()
      this.setData({
        recommends: result.data.slider
      })
    },

    async getDiscList() {
      const result = await Recommend.getDiscList()
      this.setData({
        discList: result.data.list,
        type: 'end'
      })
      console.log(this.data.discList);
    }
  }
})