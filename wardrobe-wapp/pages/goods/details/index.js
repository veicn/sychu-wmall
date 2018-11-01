"use strict";var app=getApp();Page({data:{autoplay:!0,interval:3e3,duration:1e3,goodsDetail:{},swiperCurrent:0,hasMoreSelect:!1,selectSize:"选择：",selectSizePrice:0,shopCartNum:0,shopOrderNum:0,hideShopPopup:!0,hideShopOrderPopup:!0,isFavorite:!1,buyNumber:0,buyNumMin:1,buyNumMax:0,propertyChildIds:"",propertyChildNames:"",canSubmit:!1,shopCartInfo:{},shopOrderInfo:{},shopType:"addShopCart",goodId:0,goodDetail:{},goodDetailSize:{}},onShareAppMessage:function(){return app.onShareAppMessage({path:"/pages/goods/details/index?id="+this.data.goodId,title:"["+this.data.goodsDetail.brandName+"] "+this.data.goodsDetail.commName,imgUrl:this.data.goodsDetail.resources[0]})},swiperchange:function(t){this.setData({swiperCurrent:t.detail.current})},bindColorTap:function(t){app.redirect("/pages/goods/details/index?id="+t.currentTarget.dataset.id,"redirectTo")},getGoodsDetail:function(){var t=this;app.wxRequest("/commodity/detail",{cid:t.data.goodId},function(e){if(1==e.code){for(var a=e.data.colors,o=0;o<a.length;o++)e.data.colors[o].selected=!1,a[o].cid==t.data.goodId&&(a[o].selected=!0);e.data.desc=e.data.desc.split(/\n/),t.setData({goodsDetail:e.data,isFavorite:1==e.data.collection})}else app.showToast(e.message||"获取商品详情失败")})},goShopCart:function(){app.redirect("/pages/goods/cart/index","reLaunch")},goShopOrderCart:function(){app.redirect("/pages/goods/room/index","reLaunch")},addShopFavorite:function(){var t=this;app.wxRequest("/user/saveCollection",{cid:t.data.goodId},function(e){1==e.code?t.setData({isFavorite:!0}):app.showToast(e.message||"收藏商品失败")})},removeShopFavorite:function(){var t=this;app.wxRequest("/user/cancelCollection",{cid:t.data.goodId},function(e){1==e.code?t.setData({isFavorite:!1}):app.showToast(e.message||"移除收藏商品失败")})},onLoad:function(t){var e=this,a=t.id,o=app.getCookie("shopCartNum")||"",i=app.getCookie("shopOrderNum")||"";e.setData({goodId:a,shopCartNum:o,shopOrderNum:i}),e.getGoodsDetail()},getGoodsDetailSize:function(t){var e=this;app.wxRequest("/commodity/detail/selected",{cid:e.data.goodId},function(a){if(1==a.code){for(var o=a.data.sizes,i=0;i<o.length;i++)a.data.sizes[i].selected=!1,t&&o[i].cid==t&&(o[i].selected=!0);e.setData({goodDetailSize:a.data})}else app.showToast(a.message||"获取商品详情尺码失败")})},saveShopCartAdd:function(t,e,a){app.wxRequest("/commodity/saveShoppingCart",{sid:t,shoppingType:a,count:e},function(t){1!=t.code&&app.showToast(t.message||"添加购物车失败")})},toAddShopCart:function(){this.setData({shopType:"addShopCart"}),this.bindGuiGeTap(),this.getGoodsDetailSize()},bindGuiGeTap:function(){this.setData({hideShopPopup:!1})},closePopupTap:function(){this.setData({hideShopPopup:!0})},addShopCart:function(){for(var t=null,e=this.data.goodDetailSize.sizes,a=0;a<e.length;a++)e[a].selected&&(t=e[a]);return t?this.data.buyNumber<1?void wx.showModal({title:"提示",content:"购买数量不能为0！",showCancel:!1}):(this.saveShopCartAdd(t.sid,this.data.buyNumber,1),this.setData({shopCartNum:Number(this.data.shopCartNum)+this.data.buyNumber}),this.closePopupTap(),void app.showToast("已加入购物车","success")):(wx.showModal({title:"提示",content:"请选择商品规格！",showCancel:!1}),void this.bindGuiGeTap())},toAddShopOrderCart:function(){this.setData({shopType:"addShopOrderCart"}),this.bindShopOrderTap(),this.getGoodsDetailSize()},bindShopOrderTap:function(){this.setData({hideShopOrderPopup:!1})},closeShopOrderPopupTap:function(){this.setData({hideShopOrderPopup:!0})},selectProductSize:function(t){this.labelItemTap(t)},addProductCount:function(t){this.numJiaTap(t)},minusProductCount:function(t){this.numJianTap(t)},addShopOrderCart:function(){for(var t=null,e=this.data.goodDetailSize.sizes,a=0;a<e.length;a++)e[a].selected&&(t=e[a]);return t?this.data.buyNumber<1?void wx.showModal({title:"提示",content:"购买数量不能为0！",showCancel:!1}):(this.saveShopCartAdd(t.sid,this.data.buyNumber,2),this.setData({shopOrderNum:Number(this.data.shopOrderNum)+this.data.buyNumber}),this.closeShopOrderPopupTap(),void app.showToast("已加入配衣间","success")):(wx.showModal({title:"提示",content:"请选择商品规格！",showCancel:!1}),void this.bindShopOrderTap())},labelItemTap:function(t){for(var e=this,a=t.currentTarget.dataset,o=e.data.goodDetailSize.sizes,i=0;i<o.length;i++)o[i].selected=!1;o[a.index].selected=!0,e.data.goodDetailSize.sizes=o,e.setData({buyNumMax:o[a.index].stock,buyNumber:o[a.index].stock>0?1:0,goodDetailSize:e.data.goodDetailSize})},numJianTap:function(){if(this.data.buyNumber>this.data.buyNumMin){var t=this.data.buyNumber;t--,this.setData({buyNumber:t})}},numJiaTap:function(){if(this.data.buyNumber<this.data.buyNumMax){var t=this.data.buyNumber;t++,this.setData({buyNumber:t})}}});