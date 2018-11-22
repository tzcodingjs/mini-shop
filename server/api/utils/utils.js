// 处理图片路径
const baseUrl = 'http://127.0.0.1:3000/images'
const utils = {
  preUrl:(obj) => {
    if (!obj) {
      return
    }
    for (let value of obj) {
      if (value && value.Image) {
        value.Image.url = baseUrl + value.Image.url
      }
    }
    return obj
  }
}

module.exports = utils
