<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.wardrobe.layout.Blocks" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%-- JSTL表达式（判断，循环，输出） --%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> <%-- 方法表达式（字符串截取，替换） --%>
<%@ taglib uri="http://www.sychu.com/tags/tag" prefix="layout" %>

<layout:override name="<%=Blocks.BLOCK_HEADER_CSS%>">
    <style type="text/css">
        .products-list th {
            padding: 0.75rem;
        }
        .products-list td {
            padding: 0.3rem 0.75rem;
        }
        .img-rounded {
            height: 2rem;
        }
    </style>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_HEADER_SCRIPTS%>">
    <script type="text/javascript" src="Content/js/require.js?v=${static_resource_version}"
            data-main="Content/js/app/products/hotList.js?v=${static_resource_version}"></script>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_BODY%>">
    <div class="modal fade" id="banner_settings" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-default" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <form id="banner_form" method="post" class="form-horizontal" novalidate onsubmit="return false;">
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">
                                <span class="text-danger">*</span> 轮播图片
                            </label>
                            <div class="col-md-9 col-form-label">
                                <div style="width: 100%; position: relative">
                                    <img class="product-image-show" src="/Content/images/upload.png">
                                    <input type="file" class="product-image-file" name="file">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">
                                <span class="text-danger">*</span> 轮播标题
                            </label>
                            <div class="col-md-9 col-form-label">
                                <div style="width: 100%; position: relative">
                                    <input type="text" class="form-control" id="seqNo" name="seqNo" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">
                                <span class="text-danger">*</span> 轮播外链
                            </label>
                            <div class="col-md-9 col-form-label">
                                <div style="width: 100%; position: relative">
                                    <input type="text" class="form-control" id="seqNo" name="seqNo" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 form-control-label">
                                <span class="text-danger">*</span> 排序值
                            </label>
                            <div class="col-md-9 col-form-label">
                                <div style="width: 100%; position: relative">
                                    <input type="text" class="form-control" id="seqNo" name="seqNo" placeholder="值越大，越靠前">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">
                        <i class="fa fa-close"></i> 取 消
                    </button>
                    <button type="button" class="btn btn-sm btn-primary">
                        <i class="fa fa-ok"></i> 确 认
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>轮播设置</strong>
                        </div>
                        <div class="card-block">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#banner_settings">
                                <i class="fa fa-plus"></i> 添加轮播
                            </button>
                        </div>
                        <div class="card-footer text-right"></div>
                        <div class="card-block">
                            <table class="table table-striped table-sm table-bordered products-list">
                                <thead>
                                <tr>
                                    <th>##</th>
                                    <th>轮播图片</th>
                                    <th>轮播标题</th>
                                    <th>轮播链接</th>
                                    <th>轮播状态</th>
                                    <th>操作时间</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tr data-id="">
                                    <td>1</td>
                                    <td>--</td>
                                    <td>标题标题标题标题标题标题标题标题</td>
                                    <td>www.baidu.com</td>
                                    <td>已上线</td>
                                    <td>2018-11-12 11:11:11</td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-sm btn-danger" title="轮播下线">
                                            <i class="fa fa-level-down"></i> 下线
                                        </a>
                                        <a href="javascript:;" class="btn btn-sm btn-primary" title="轮播上线">
                                            <i class="fa fa-level-up"></i> 上线
                                        </a>
                                    </td>
                                </tr>
                                <tr data-id="">
                                    <td>1</td>
                                    <td>--</td>
                                    <td>标题标题标题标题标题标题标题标题</td>
                                    <td>www.baidu.com</td>
                                    <td>已上线</td>
                                    <td>2018-11-12 11:11:11</td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-sm btn-danger" title="轮播下线">
                                            <i class="fa fa-level-down"></i> 下线
                                        </a>
                                        <a href="javascript:;" class="btn btn-sm btn-primary" title="轮播上线">
                                            <i class="fa fa-level-up"></i> 上线
                                        </a>
                                    </td>
                                </tr>
                                <tr data-id="">
                                    <td>1</td>
                                    <td>--</td>
                                    <td>标题标题标题标题标题标题标题标题</td>
                                    <td>www.baidu.com</td>
                                    <td>已上线</td>
                                    <td>2018-11-12 11:11:11</td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-sm btn-danger" title="轮播下线">
                                            <i class="fa fa-level-down"></i> 下线
                                        </a>
                                        <a href="javascript:;" class="btn btn-sm btn-primary" title="轮播上线">
                                            <i class="fa fa-level-up"></i> 上线
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!--/.col-->
            </div>
            <!--/.row-->
        </div>

    </div>
</layout:override>

<c:import url="../Shared/GeneralLayout.jsp">
    <c:param name="menu" value="products"/>
    <c:param name="subMenu" value="banner"/>
</c:import>
