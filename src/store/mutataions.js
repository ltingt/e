import {RECEIVE_LINKSHARE,
  RECEIVE_CAROUSEL,
  RECEIVE_ADVERTISING,
  RECEIVE_SHOPCLASSIFY,
  RECEIVE_BRAND,
  RECEIVE_ALLBRAND} from './mutation-type'

export default {
  [RECEIVE_LINKSHARE] (state, {linkshare}) {
    state.linkshare = linkshare
  },
  [RECEIVE_CAROUSEL] (state, {carousel}) {
    state.carousel = carousel
  },
  [RECEIVE_ADVERTISING] (state, {advertising}) {
    state.advertising = advertising
  },
  [RECEIVE_SHOPCLASSIFY] (state, {shopclassify}) {
    state.shopclassify = shopclassify
  },
  [RECEIVE_BRAND] (state, {brand}) {
    state.brand = brand
  },
  [RECEIVE_ALLBRAND] (state, {allbrand}) {
    state.allbrand = allbrand
  }
}
