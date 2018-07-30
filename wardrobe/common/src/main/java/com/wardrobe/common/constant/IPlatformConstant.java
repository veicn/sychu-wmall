package com.wardrobe.common.constant;

import com.wardrobe.common.util.CustomizedPropertyConfigurer;


/*
 * 自定义常量
 */
public interface IPlatformConstant {
	
	String SUCCESS_CODE = "1";
	
	String SUCCESS_MESSAGE = "操作成功";
	
	String FAIL_CODE = "-1";
	
	String FAIL_MESSAGE = "操作失败";
    
    String FAIL_NOT_LOGIN_CODE = "0";
	
	String REQUEST_JSON = "request_json";
	
	String time00 = " 00:00:00";
	
    String time24 = " 23:59:59";
    
    String LOGIN_USER_UNIONID = "USER_UNIONID";

	String PERFECT_MOBILE_CAPTCHA = "PERFECT_MOBILE_CAPTCHA";

	String AND = "&";
    
    String ADMIN = "admin";
    
    String ADMIN_NAME = "管理员";
    
    String DOU_HAO = ",";
	
	String APP_ID = (String) CustomizedPropertyConfigurer.getContextProperty("app_id"); //appid
	
	String APP_SECRET = (String) CustomizedPropertyConfigurer.getContextProperty("appsecret"); //密钥
    
    String WX_OPEN_ID_KEY = "openId";
	
}