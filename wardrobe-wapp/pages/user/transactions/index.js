"use strict";var app=getApp();Page({data:{transactions:{}},onShareAppMessage:null,getUserTransactionsList:function(){var t=this;app.wxRequest("/transactions/index",{},function(a){t.setData({transactions:a.data})})},onLoad:function(){this.getUserTransactionsList()}});