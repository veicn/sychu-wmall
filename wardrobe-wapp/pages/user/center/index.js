"use strict";var app=getApp();Page({data:{balance:0,freeze:0,score:0,score_sign_continuous:0,userInfo:{}},onShareAppMessage:null,getUserInfo:function(){var e=this;app.wxRequest("/user/userCenter",{},function(n){e.setData({userInfo:n.data})})},onShow:function(){this.getUserInfo()},inviteFriends:function(){wx.showModal({content:"您的邀请码："+this.data.userInfo.inviteCode||"66666",showCancel:!1})},recharge:function(){app.redirect("/pages/user/recharge/index","navigateTo")}});