"use strict";var app=getApp();Page({data:{wardrobeInfo:{},locksList:[]},getWardrobeList:function(){var t=this;app.wxRequest("/device/devices",{},function(e){var a=new Date;a.getTime();if(1==e.code){var o=e.data.list[0];t.setData({wardrobeInfo:o})}})},getWardrobeOrderLocks:function(){var t=this;app.wxRequest("/order/nowCanOpenLock",{did:t.data.wardrobeInfo.did},function(e){if(1==e.code){var a=e.data.locks;a.length>0?t.setData({locksList:a}):t.setData({locksList:null})}})},onShow:function(){this.getWardrobeList()}});