<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.wardrobe.layout.Blocks" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%-- JSTL表达式（判断，循环，输出） --%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> <%-- 方法表达式（字符串截取，替换） --%>
<%@ taglib uri="http://www.sychu.com/tags/tag" prefix="layout" %>

<layout:override name="<%=Blocks.BLOCK_HEADER_CSS%>">
    <link href="Content/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css?v=${static_resource_version}" rel="stylesheet">
    <style type="text/css">
        .btn.btn-close {
            margin-bottom: 1rem;
        }
    </style>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_HEADER_SCRIPTS%>">
    <script type="text/javascript" src="Content/js/require.js?v=${static_resource_version}"
            data-main="Content/js/app/products/settins.js?v=${static_resource_version}"></script>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_BODY%>">

    <%@ include file="./LabelSettings.jsp" %>

    <div class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>商品品类</strong>
                            <small>Category</small>
                        </div>
                        <div class="card-block category-list">
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                连衣裙<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                西服<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                外套<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                下装<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                下装<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                连衣裙<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                西服<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                下装<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                连衣裙<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close category-item" data-id="1">
                                西服<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-close" data-toggle="modal" data-target="#product_category_add">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>商品风格</strong>
                            <small>Style</small>
                        </div>
                        <div class="card-block style-list">
                            <button type="button" class="btn btn-success btn-close style-item" data-id="1">
                                职场<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close">
                                职场<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close">
                                职场<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close">
                                职场<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close">
                                职场<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-close" data-toggle="modal" data-target="#product_style_add">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>商品材质</strong>
                            <small>Material</small>
                        </div>
                        <div class="card-block material-list">
                            <button type="button" class="btn btn-success btn-close material-item" data-id="1">
                                纯棉<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-close">
                                纯棉<i class="fa fa-remove"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-close" data-toggle="modal" data-target="#product_material_add">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</layout:override>

<c:import url="../Shared/GeneralLayout.jsp">
    <c:param name="menu" value="products"/>
    <c:param name="subMenu" value="settings"/>
</c:import>