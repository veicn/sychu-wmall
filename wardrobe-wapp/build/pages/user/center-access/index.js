"use strict";var app=getApp();Page({data:{wardrobeInfo:{},locksList:[]},getWardrobeList:function(){var e=this;app.wxRequest("/device/devices",{},function(t){var a=new Date;a.getTime();if(1==t.code){var o=t.data.list[0];e.setData({wardrobeInfo:o}),e.getWardrobeOrderLocks()}})},getWardrobeOrderLocks:function(){var e=this;app.wxRequest("/order/nowCanOpenLock",{did:e.data.wardrobeInfo.did},function(t){if(1==t.code){var a=t.data.locks;a.length>0?e.setData({locksList:a}):e.setData({locksList:null})}})},openLock:function(e){app.wxRequest("/relay/openLock",{lockId:e.currentTarget.dataset.id},function(e){1==e.code&&app.showToast("开柜成功","success")})},onShow:function(){this.getWardrobeList()},toCartOrder:function(){app.redirect("/pages/goods/reserve-settle/index?did="+this.data.wardrobeInfo.did,"navigateTo")},readCartSettle:function(e){app.wxRequest("/rfid/readRfid",{did:this.data.wardrobeInfo.did},function(t){if(1==t.code){var a=t.data.data.commoditys;if(!a||a.length<=0)return e(!0)}e(!1)},function(){e(!1)})},leave:function(){var e=this;wx.showModal({title:"提 示",content:"开门前请将未结算的衣服放回衣柜，确认离开吗？",success:function(t){t.confirm&&e.readCartSettle(function(e){if(!e)return app.showToast("请将未结算的衣服放回衣柜中！");app.wxRequest("/relay/closeDoor",{did:6},function(e){1==e.code&&app.showToast("开门成功","success")})})}})}});