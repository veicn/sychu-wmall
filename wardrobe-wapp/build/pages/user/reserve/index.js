"use strict";var app=getApp(),utils=require("../../../utils/util.js");Page({data:{sumPrice:0,goodsList:[],wardrobeInfo:{},locksList:[],hasWardrobeInfo:!1},onShareAppMessage:null,getWardrobeOrderLocks:function(){var e=this;app.wxRequest("/order/nowCanOpenLock",{did:e.data.wardrobeInfo.did},function(o){if(1==o.code){var t=o.data.locks;t.length>0?e.setData({locksList:t}):e.setData({locksList:null})}})},getWardrobeOrder:function(){var e=this;app.wxRequest("/order/reserveOrderInfo",{},function(o){if(1==o.code){var t=o.data.list;t.length>0?(e.setData({wardrobeInfo:t[0],hasWardrobeInfo:!0}),e.getWardrobeOrderDetail(t[0].roid),e.getWardrobeOrderLocks()):e.setData({hasWardrobeInfo:!1})}})},getWardrobeOrderDetail:function(e){var o=this;app.wxRequest("/order/reserveOrderDetail",{roid:e},function(e){1==e.code&&o.setData({goodsList:e.data.list,sumPrice:e.data.sumPrice})})},onLoad:function(){this.getWardrobeOrder()},scanOrder:function(){wx.scanCode({scanType:"qrCode",success:function(e){app.wxRequest("/relay/openDoor",{did:6},function(e){1==e.code&&app.showToast("扫码开门成功","success")})}})},cancelOrder:function(){var e=this;wx.showModal({title:"确定要取消该订单吗？",content:"",success:function(o){o.confirm&&app.wxRequest("/order/cancelReserveOrder",{roid:e.data.wardrobeInfo.roid},function(o){1==o.code?(app.showToast("取消预约成功","success"),e.getWardrobeOrder()):app.showToast("取消预约失败","none")})}})},toCartOrder:function(){app.redirect("/pages/goods/reserve-settle/index?did="+this.data.wardrobeInfo.did,"navigateTo")},openLock:function(e){app.wxRequest("/relay/openLock",{lockId:e.currentTarget.dataset.id},function(e){1==e.code&&app.showToast("开柜成功","success")})},readCartSettle:function(e){app.wxRequest("/rfid/readRfid",{did:this.data.wardrobeInfo.did},function(o){if(1==o.code){var t=o.data.data.commoditys;if(!t||t.length<=0)return e(!0)}e(!1)},function(){e(!1)})},leave:function(){var e=this;wx.showModal({title:"提 示",content:"开门前请将未结算的衣服放回衣柜，确认离开吗？",success:function(o){o.confirm&&e.readCartSettle(function(e){if(!e)return app.showToast("请将未结算的衣服放回衣柜中！");app.wxRequest("/relay/closeDoor",{did:6},function(e){1==e.code&&app.showToast("开门成功","success")})})}})}});