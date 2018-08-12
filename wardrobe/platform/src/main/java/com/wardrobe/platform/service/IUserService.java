package com.wardrobe.platform.service;

import com.wardrobe.common.bean.PageBean;
import com.wardrobe.common.bean.UserPerfectBean;
import com.wardrobe.common.po.UserInfo;
import com.wardrobe.common.view.UserInputView;

import java.util.Map;

/**
 * Created by 雷达 on 2018/7/30.
 */
public interface IUserService {

    UserInfo getUserInfo(int uid);

    UserInfo getUserInfoByOpenId(String unionId);

    void addUser(UserInfo userInfo);

    void updateUser(UserPerfectBean userPerfectBean);

    Integer checkInviteCode(String inviteCode, int uid);

    Map<String, Object> getUserCenter(int uid);

    Map<String, Object> getUserSetting(int uid);

    void updateUserMobile(int uid, String newMoblie);

    boolean userIsPerfect(int uid);

    void saveUserRecharge(int dictId, int userId);

    PageBean getUserListIn(UserInputView userInputView);

    Map<String, Object> getMembersDetailIn(int userId);

}
