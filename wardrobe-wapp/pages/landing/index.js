"use strict";var app=getApp();Page({data:{isSupported:wx.canIUse("button.open-type.getUserInfo")},onLoad:function(){},onGetUserInfo:function(e){"getuserinfo"==e.type.toLowerCase()&&"getuserinfo:ok"==e.detail.errMsg.toLowerCase()?(app.globalData.sessionId="",app.toLogin()):app.showToast("不支持的微信版本","none")}});