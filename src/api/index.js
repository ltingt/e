import ajax from './ajax'

export const  reqlinkshare = () => ajax('/api/index') // 获取首页广告列表
export const  reqCarousel = () => ajax('/api/carousel') // 获取轮播广告
export const  reqShopClassify = () => ajax('/api/classify') // 获取第二页商品列表
export const  reqBrand = () => ajax('/api/brand') // 获取第二页品牌列表
export const  reqAllbrand = () => ajax('/api/allbrand') // 获取第二页全部品牌列表
