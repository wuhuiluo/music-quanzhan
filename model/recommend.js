import {
    Http
} from '../utils/http'
import {
    commonParams
} from '../config/index'
class Recommend {
    static async getBannerList() {
        return await Http.request({
            url: '/bannerList'
        })
    }

    static async getDiscList() {
        const data = Object.assign({}, commonParams, {
            platform: 'yqq',
            hostUin: 0,
            sin: 0,
            ein: 29,
            sortId: 5,
            needNewCode: 0,
            categoryId: 10000000,
            rnd: Math.random(),
            format: 'json'
        })
        return await Http.request({
            url: "/getDiscList",
            data,
            method: 'get'
        })
    }
}

export {
    Recommend
}