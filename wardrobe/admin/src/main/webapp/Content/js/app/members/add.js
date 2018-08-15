requirejs.config({
    baseUrl: 'Content/',
    paths: {
        "jquery"    : 'bower_components/jquery/dist/jquery',
        "tether"    : 'bower_components/tether/dist/js/tether',
        "bootstrap" : 'bower_components/bootstrap/dist/js/bootstrap',
        "pace"      : 'bower_components/pace/pace',
        "chart"     : 'bower_components/chart.js/dist/Chart',

        "alert"     : 'utils/jqueryAlert/alert/alert',

        "jquery.validate"              : 'bower_components/jquery.validation/dist/jquery.validate',
        "jquery.validate.unobtrusive"  : 'bower_components/Microsoft.jQuery.Unobtrusive.Validation/jquery.validate.unobtrusive',

        "base"      : 'js/widgets/base',
        "override"  : 'js/widgets/override',
        "productsLabelSettings" : 'js/widgets/productsLabelSettings'
    },
    shim: {
        "bootstrap": {
            deps: ["jquery", "override"]
        },
        "alert": {
            deps: ["jquery"]
        },
        "jquery.validate": {
            deps: ["jquery", "override"]
        },
        "jquery.validate.unobtrusive": {
            deps: ["jquery", "jquery.validate"]
        }
    },  // 依赖关系
    waitSeconds: 0,
    urlArgs: '_=' + new Date().getTime()
});

require(['jquery', 'alert', 'override', 'bootstrap', 'base', 'jquery.validate', 'jquery.validate.unobtrusive', 'productsLabelSettings'], function ($, jqueryAlert) {
    'use strict';

    // 表单校验配置
    $(document).ready(function () {
        $('#product_form').validate();
    });

    $.postJSON = function(url, data, callback) {
        return $.ajax({
            'type' : 'POST',
            'url' : url,
            'contentType' : 'application/json',
            'data' : JSON.stringify(data),
            'dataType' : 'json',
            'success' : callback
        });
    };

    /* category *************************************************/
    var $category = new $.ProductsLabelSettings({
        type: "category",
        failure: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-error.png',
                'content'   : "商品品类保存失败, 请稍后重试",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });
        },
        success: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-ok.png',
                'content'   : "商品品类保存成功",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });

            window.setTimeout(function () {
                window.location.reload();
            }, 1500);
        }
    });

    function queryCatetory() {
        $category.query({}, function (data) {
            var htmls = [];

            for (var i = 0; i < data.length; i++) {
                htmls.push('<option value="' + data.value + '">' + data.value + '</option>');
            }

            $("#p_categorySelect").html(htmls.join(""));
        });
    }
    queryCatetory();

    $(".category-list").on("click", ".category-item.fa-remove", function (e) {
        e.preventDefault;

        var $this = $(this);
        $this.parents(".btn-close").remove();

        var selectors = $(".category-list").find(".category-item");
        var selectorsValue = [];
        selectors.each(function (i) {
            selectorsValue.push(selectors.eq(i).attr("data-value"));
        });
        $("#p_category").val(selectorsValue.join(","));

        queryCatetory();
    });

    $("#p_categorySelect").on("change", function (e) {
        e.preventDefault;

        var $this = $(this);
        $(".category-add").before('<button type="button" class="btn btn-success btn-close">' + $this.val() + '<i class="fa fa-remove"></i></button>');

        var selectors = $(".category-list").find(".category-item.category-active");
        var selectorsValue = [];
        selectors.each(function (i) {
            selectorsValue.push(selectors.eq(i).attr("data-value"));});
        $("#p_category").val(selectorsValue.join(","));

        queryCatetory();
    });

    /* style *************************************************/
    var $style = new $.ProductsLabelSettings({
        type: "style",
        failure: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-error.png',
                'content'   : "商品风格保存失败, 请稍后重试",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });
        },
        success: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-ok.png',
                'content'   : "商品风格保存成功",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });

            window.setTimeout(function () {
                window.location.reload();
            }, 1500);
        }
    });

    /* material *************************************************/
    var $material = new $.ProductsLabelSettings({
        type: "material",
        failure: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-error.png',
                'content'   : "商品材质保存失败, 请稍后重试",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });
        },
        success: function () {
            jqueryAlert({
                'icon'      : '/Content/images/icon-ok.png',
                'content'   : "商品材质保存成功",
                'closeTime' : 2000,
                'modal'        : true,
                'isModalClose' : true
            });

            window.setTimeout(function () {
                window.location.reload();
            }, 1500);
        }
    });
    var $this = $(this);

    $this.toggleClass("style-selected");

    var selectors = $(".style-list").find(".style-item");
    var selectorsValue = [];
    selectors.each(function (i) {
        selectorsValue.push('<option value="' +  (selectors.eq(i).attr("data-value")) + '">' + (selectors.eq(i).attr("data-value")) + '</option>');
    });
    $("#p_style").val(selectorsValue.join(","));
});
