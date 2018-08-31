package com.wardrobe.platform.service;

import com.wardrobe.common.bean.PageBean;
import com.wardrobe.common.po.SysDeviceControl;
import com.wardrobe.common.po.SysDeviceInfo;
import com.wardrobe.common.view.DeviceInputView;

import java.sql.Timestamp;
import java.util.Map;

/**
 * Created by cxs on 2018/8/24.
 */
public interface ISysDeviceService {

    PageBean getDeviceList(DeviceInputView deviceInputView);

    Map<String, Object> getDevice(int did);

    SysDeviceInfo getDeviceInfo(int did);

    SysDeviceControl getDistributionDeviceControl(int did, Timestamp reserveStartTime, Timestamp reserveEndTime);

}