import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import wxPromise from 'wx-api-promisify'

axios.defaults.adapter = mpAdapter

export default {
  axios,
  wx: wxPromise,
}