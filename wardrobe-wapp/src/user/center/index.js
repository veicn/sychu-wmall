const app = getApp();

Page({
    data: {
        balance: 0,
        freeze: 0,
        score: 0,
        score_sign_continuous: 0,

        userInfo: {}
    },
    onShareAppMessage: function (e) {
        if (e.from === 'menu') {
            return app.onShareAppMessage({
                path: '/pages/index/index',
                title: app.getCookie("syc_appName") || "衣否",
                imgUrl: "/images/logo.jpg"
            });
        }
        else if (e.from === 'button') {
            return app.onShareAppMessage({
                path: '/pages/index/index?inviteCode=' + this.data.userInfo.inviteCode,
                title: app.getCookie("syc_appName") || "衣否",
                imgUrl: "/images/logo.jpg"
            });
        }
    },
    getUserInfo: function () {
        let content = this;

        app.wxRequest("/user/userCenter", {}, function (res) {
            content.setData({
                userInfo : res.data
            });
        });
    },
    onShow: function () {
        this.getUserInfo();
    },
    inviteFriends : function () {
        //<button open-type="share" class="item-share">邀请好友</button>
        wx.showModal({
            content: ('您的邀请码：' + this.data.userInfo.inviteCode || "66666"),
            showCancel: false
        });
    },
    recharge: function () {
        app.redirect("/pages/user/recharge/index", "navigateTo");
    }
});
