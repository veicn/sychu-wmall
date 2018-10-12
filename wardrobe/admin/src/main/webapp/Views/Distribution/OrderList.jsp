<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.wardrobe.layout.Blocks" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%-- JSTL表达式（判断，循环，输出） --%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> <%-- 方法表达式（字符串截取，替换） --%>
<%@ taglib uri="http://www.sychu.com/tags/tag" prefix="layout" %>

<layout:override name="<%=Blocks.BLOCK_HEADER_CSS%>">
    <style type="text/css">
        .orders-list th {
            padding: 0.75rem;
        }
        .orders-list td {
            padding: 0.3rem 0.75rem;
        }
    </style>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_HEADER_SCRIPTS%>">
    <script type="text/javascript" src="Content/js/require.js?v=${static_resource_version}"
            data-main="Content/js/app/orders/list.js?v=${static_resource_version}"></script>
</layout:override>

<layout:override name="<%=Blocks.BLOCK_BODY%>">
    <div class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>预约订单列表</strong>
                            <small>Orders List</small>
                        </div>
                        <div class="card-block">
                            <form id="members_query_form" method="post" class="form-horizontal" action="/admin/orders/reservation" novalidate <%--onsubmit="return false;"--%>>
                                <div class="form-group row">
                                    <div class="col-md-3">
                                        <input type="text" name="ono" class="form-control" placeholder="预约单编号" value="${ono}">
                                    </div>
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-primary members-query-btn">
                                            <i class="fa fa-search"></i> 检 索
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-right"></div>
                        <div class="card-block">
                            <table class="table table-striped table-sm orders-list">
                                <thead>
                                <tr>
                                    <th>预约单编号</th>
                                    <th>预约试衣间</th>
                                    <th>预约时间</th>
                                    <th>预约开始时间</th>
                                    <th>预约结束时间</th>
                                    <th>会员姓名</th>
                                    <th>预约单状态</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <c:forEach var="r" items="${page.list}">
                                    <tr>
                                        <td>${r.rno}</td>
                                        <td>${r.deviceName}（${r.lockName}）</td>
                                        <td>${r.createTime}</td>
                                        <td>${r.reserveStartTime}</td>
                                        <td>${r.reserveEndTime}</td>
                                        <td>${r.nickname}</td>
                                        <td>${r.statusName}</td>
                                        <td>
                                            <a href="javascript:;" class="btn btn-sm btn-primary" title="全部放入">
                                                <i class="fa fa-level-down"></i> 全部放入
                                            </a>
                                        </td>
                                    </tr>
                                </c:forEach>
                                <tbody>
                                </tbody>
                            </table>
                            <div>
                                <%@ include file="../Shared/Pagination.jsp" %>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/.col-->
            </div>
            <!--/.row-->
        </div>

    </div>
</layout:override>

<c:import url="../Shared/Layout.jsp">
    <c:param name="menu" value="orders"/>
    <c:param name="subMenu" value="list"/>
</c:import>
