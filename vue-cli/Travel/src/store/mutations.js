// 用于改变“city”状态的值
export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 将新值存储到localStorage
      localStorage.city = city
    } catch (e) {}
  }
}
