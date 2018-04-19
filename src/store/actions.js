import {RECEIVE_LINKSHARE,
  RECEIVE_CAROUSEL,
  RECEIVE_ADVERTISING,
  RECEIVE_SHOPCLASSIFY,
  RECEIVE_BRAND,
  RECEIVE_ALLBRAND,
} from './mutation-type'
import {reqlinkshare, reqCarousel, reqShopClassify, reqBrand, reqAllbrand} from '../api/index'

export default {
  // 获取头部动态列表
  async getLinkshare ({commit}) {
    const result = await reqlinkshare()
    if (result.code === 0) {
      const linkshare = result.data
      commit(RECEIVE_LINKSHARE, {linkshare})
    }
  },
  // 获取轮播列表
  async getCarousel ({commit}) {
    const result = await reqCarousel()
    if (result.code === 0) {
      const carousel = result.data
      commit(RECEIVE_CAROUSEL, {carousel})
    }
  },
  // 获取广告列表
  async getAdvertising ({commit}) {
    const result = await reqlinkshare()
    if (result.code === 0) {
      const advertising = result.data
      commit(RECEIVE_ADVERTISING, {advertising})
    }
  },
  // 获取第二页商品列表
  async getShopclassify ({commit}) {
    const result = await reqShopClassify()
    if (result.code === 0) {
      const shopclassify = result.data
      commit(RECEIVE_SHOPCLASSIFY, {shopclassify})
    }
  },
  // 获取第二页品牌列表
  async getBrand ({commit}) {
    const result = await reqBrand()
    if (result.code === 0) {
      const brand = result.data
      commit(RECEIVE_BRAND, {brand})
    }
  },
  // 获取第二页全部品牌列表
  async getAllBand ({commit}) {
    const result = await reqAllbrand()
    if (result.code === 0) {
      const allbrand = result.data
      console.log(allbrand)
      commit(RECEIVE_ALLBRAND, {allbrand})
    }
  }
}
