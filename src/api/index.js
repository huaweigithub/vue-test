import http from './public'
const baseurl = 'https://www.easy-mock.com/mock/5ced3ab5790f5442ee1cbb21/example'
// http://doc.liangxinghua.com/vue-family/5.html
// 获取商品列表
export const goodlist = (params) => {
    return http.fetGet(`${baseurl}/api`, params)
}