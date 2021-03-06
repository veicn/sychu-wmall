package com.wardrobe.platform.netty.client.bean;

import com.wardrobe.common.po.SysDeviceControl;
import io.netty.channel.Channel;

import java.util.List;

/**
 * Created by cxs on 2018/9/10.
 */
public class ClientBean {

    private int status = 0; //0：未连接  1：已连接  2：正在重连
    private String host;
    private int port;
    private Channel serviceChannel;
    private List<SysDeviceControl> sysDeviceControls;

    public ClientBean(List<SysDeviceControl> sysDeviceControls){ //初始化8个设备的状态
        /*for(int i = 1; i <= 8; i++){
            DeviceBean deviceBean = new DeviceBean();
            deviceBean.setDeviceNo(i);
            deviceBeans.add(deviceBean);
        }*/
        this.sysDeviceControls = sysDeviceControls;
    }

    public SysDeviceControl getDeviceControl(int lockId){
        for(SysDeviceControl deviceControl : sysDeviceControls){
            if(lockId == deviceControl.getLockId()){
                return deviceControl;
            }
        }
        return null;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public Channel getServiceChannel() {
        return serviceChannel;
    }

    public void setServiceChannel(Channel serviceChannel) {
        this.serviceChannel = serviceChannel;
    }

    public List<SysDeviceControl> getSysDeviceControls() {
        return sysDeviceControls;
    }

    public void setSysDeviceControls(List<SysDeviceControl> sysDeviceControls) {
        this.sysDeviceControls = sysDeviceControls;
    }
}
