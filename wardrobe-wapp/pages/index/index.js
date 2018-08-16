//index.js
//获取应用实例
var app = getApp();

Page({
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false,
        // loading
        userInfo: {},
        swiperCurrent: 0,
        selectCurrent: 0,
        categories: [],
        activeCategoryId: 0,
        goods: [],
        usersGoods: [],
        hotGoods: [],
        scrollTop: "0",
        loadingMoreHidden: true,

        hasNoCoupons: true,
        coupons: []
    },

    tabClick: function(e) {
        this.setData({
            activeCategoryId: e.currentTarget.id
        });
        this.getGoodsList(this.data.activeCategoryId);
    },
    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    toDetailsTap: function(e) {
        wx.navigateTo({
            url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
        })
    },
    tapBanner: function(e) {
        if (e.currentTarget.dataset.id != 0) {
            wx.navigateTo({
                url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
            })
        }
    },
    bindTypeTap: function(e) {
        this.setData({
            selectCurrent: e.index
        })
    },
    scroll: function(e) {
        //  console.log(e) ;
        var that = this,
        scrollTop = that.data.scrollTop;
        
        that.setData({
            scrollTop: e.detail.scrollTop
        })
        // console.log('e.detail.scrollTop:'+e.detail.scrollTop) ;
        // console.log('scrollTop:'+scrollTop)
    },
    onLoad: function() {
        var that = this;

        wx.setNavigationBarTitle({
            title: wx.getStorageSync('mallName')
        })

        that.getHotGoodsList();
        that.getUsersGoodsList();
       
        that.setData({
                        banners: [
                            {businessId: 121, picUrl: "http://images2.moonbasa.com/ProductImg/1/1602/huge/033016222-010-01-H.jpg"},
                            {businessId: 121, picUrl: "http://img005.hc360.cn/hb/MTQ2MzI1NjA4NzI3NTM4MDA1Mjg3Mg==.jpg"},
                            {businessId: 121, picUrl: "http://pic.qiantucdn.com/58pic/18/48/86/562887145916b_1024.jpg"}
                        ]
                    });
    },

    getUsersGoodsList: function (categoryId) {
        if (categoryId == 0) {
            categoryId = "";
        }

        console.log(categoryId);
        var that = this;

        app.wxRequest(
          "/commodity/index",
          {
            newly : "1"
          },
          function (res) {
            if (res.code == 1) {
              that.setData({
                usersGoods: res.data.list
              });
            }
          }
        );
    },

    getHotGoodsList: function (categoryId) {
        if (categoryId == 0) {
            categoryId = "";
        }

        console.log(categoryId);
        var that = this;

        app.wxRequest(
          "/commodity/index",
          {
            hot : "1"
          },
          function (res) {
            if (res.code == 1) {
              that.setData({
                hotGoods: res.data.list
              });
            }
          }
        );
    },
    getCoupons: function() {
        var that = this;
        wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/coupons',
            data: {
                type: ''
            },
            success: function(res) {
                if (res.data.code == 0) {
                    that.setData({
                        hasNoCoupons: false,
                        coupons: res.data.data
                    });
                }
            }
        })
    },
    gitCoupon: function(e) {
        var that = this;
        wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/fetch',
            data: {
                id: e.currentTarget.dataset.id,
                token: app.globalData.token
            },
            success: function(res) {
                if (res.data.code == 20001 || res.data.code == 20002) {
                    wx.showModal({
                        title: '错误',
                        content: '来晚了',
                        showCancel: false
                    });
                    return;
                }
                if (res.data.code == 20003) {
                    wx.showModal({
                        title: '错误',
                        content: '你领过了，别贪心哦~',
                        showCancel: false
                    });
                    return;
                }
                if (res.data.code == 30001) {
                    wx.showModal({
                        title: '错误',
                        content: '您的积分不足',
                        showCancel: false
                    });
                    return;
                }
                if (res.data.code == 20004) {
                    wx.showModal({
                        title: '错误',
                        content: '已过期~',
                        showCancel: false
                    });
                    return;
                }
                if (res.data.code == 0) {
                    wx.showToast({
                        title: '领取成功，赶紧去下单吧~',
                        icon: 'success',
                        duration: 2000
                    })
                } else {
                    wx.showModal({
                        title: '错误',
                        content: res.data.msg,
                        showCancel: false
                    });
                }
            }
        })
    },
    onShareAppMessage: function() {
        return {
            title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
            path: '/pages/index/index',
            success: function(res) {
                // 转发成功
            },
            fail: function(res) {
                // 转发失败
            }
        }
    },
    getNotice: function() {
        var that = this;
        wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
            data: {
                pageSize: 5
            },
            success: function(res) {
                if (res.data.code == 0) {
                    that.setData({
                        noticeList: res.data.data
                    });
                }
            }
        })
    }
})