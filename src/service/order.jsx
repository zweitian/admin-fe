/*
* @Author: ztian
* @Date:   2017-04-05 11:07:34
* @Last Modified by:   ztian
* @Last Modified time: 2017-04-05 17:47:33
*/

'use strict';

import MMUtil from 'util/mm.jsx';

const _mm = new MMUtil();

export default class Order{
    // 获取订单列表
    getOrderList(listParam){
        if(listParam.listType == 'list'){
            return _mm.request({
                url     : _mm.getServerUrl('/backend/orders'),
                method  : 'GET',
                data    : {
                    pageNum : listParam.pageNum || 1
                }
            });
        }
        //后台订单搜索列表的接口
        else if(listParam.listType == 'search'){
            return _mm.request({
                url     : _mm.getServerUrl('/backend/orders/search'),
                method  : 'GET',
                data    : listParam
            });
        } 
    }
    // 获取订单详情
    getOrderDetail(orderNo){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/orders/'+orderNo),
            method  : 'GET'
        });
    }
    // 后台订单发货接口
    sendGoods(orderNo){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/orders/'+ orderNo +'/shipment'),
            method  : 'POST',
            data    :{
                _method:'PUT'
            }
        });
    }
}