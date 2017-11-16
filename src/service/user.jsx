/*
* @Author: ztian
* @Date:   2017-02-24 15:49:17
* @Last Modified by:   ztian
* @Last Modified time: 2017-04-13 15:59:59
*/

'use strict';

import MMUtil from 'util/mm.jsx';

const mm = new MMUtil();

export default class User{
    // 检查用于登录的信息是否合法
    checkLoginInfo(userInfo){
        if(!userInfo.username){
            return {
                state: false,
                msg: '用户名不能为空'
            }
        }
        if(!userInfo.password){
            return {
                state: false,
                msg: '密码不能为空'
            }
        }
        return {
            state: true,
            msg: '验证通过'
        }
    }
    // 后台管理员登录的接口
    login(userInfo){
        return mm.request({
            url     : mm.getServerUrl('/backend/session/user'),
            method  : 'POST',
            data    : {
                username : userInfo.username || '',
                password : userInfo.password || ''
            }
        });
    }
    // 后台管理员退出登录的接口
    logout(){
        return mm.request({
            url     : mm.getServerUrl('/session/user'),
            method  : 'POST',
            data    :{
                _method : 'DELETE'
            }
        });
    }
}