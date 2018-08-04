var log = require('./utils/log.js')

App({
  onLaunch: function () {
    wx.login({
      success: function (result) {
        if (result.code) {
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: result.code
            },
            success: function (res) {
              console.log(res.data)
            },
            fail: function (err) {
              console.log(err.message)
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo: function (callback) {
    var content = this

    if (content.globalData.userInfo) {
      typeof callback == "function" && callback(content.globalData.userInfo)
    } else {
      wx.login({
        success: function (res) {
          log.log(JSON.stringify(res))
          wx.getUserInfo({
            success: function (user) {
              log.log(JSON.stringify(user))
              content.globalData.userInfo = user.userInfo
              typeof callback == "function" && callback(content.globalData.userInfo)
            },
            fail: function (err) {
              log.log(JSON.stringify(err))
            }
          })
        }
      })
    }
  },
  onShow: function () {},
  onHide: function () {},
  globalData: {
    userInfo: null
  },
  onGetUserInfo: function (event) {
    if (!event.detail && !event.detail.userInfo) {
      return false;
    }

    this.globalData.userInfo = event.detail.userInfo;
    return event.detail.userInfo;
  }
})
