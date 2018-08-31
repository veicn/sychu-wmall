package com.wardrobe.platform.service;

import com.wardrobe.common.po.UserShoppingCart;
import com.wardrobe.common.view.CommodityInputView;

import java.util.Map;

/**
 * Created by cxs on 2018/8/24.
 */
public interface IUserShoppingCartService {

    void saveShoppingCart(UserShoppingCart userShoppingCart);

    Map<String, Object> getUserShoppingCartList(CommodityInputView commodityInputView);

    void deleteUserShoppingCart(int scid, int userId);

    UserShoppingCart getUserShoppingCart(int scid);

    Map<String, Object> settlement(String scids, int uid);

}