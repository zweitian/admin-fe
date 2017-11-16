/*
* @Author: ztian
* @Date:   2017-02-24 10:35:19
* @Last Modified by:   ztian
* @Last Modified time: 2017-04-09 23:43:37
*/

'use strict';
import MMUtil from 'util/mm.jsx';

const _mm = new MMUtil();

export default class Product{
    
    // 后台获取商品详细信息接口
    getProduct(productId){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/products/'+productId),
            method  : 'GET'
        });
    }
    // 后台获取商品列表的接口
    getProductList(listParam){
        if(listParam.listType == 'list'){
            return _mm.request({
                url     : _mm.getServerUrl('/backend/products'),
                method  : 'GET',
                data    : {
                    pageNum : listParam.pageNum || 1
                }
            });
        }
        else if(listParam.listType == 'search'){
            return _mm.request({
                url     : _mm.getServerUrl('/backend/products/search'),
                method  : 'GET',
                data    : listParam
            });
        }
            
    }
    // 后台新增商品接口
    saveProduct(product){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/products'),
            method  : "POST",
            data    : product
        });
    }
    // 后台改变商品状态的接口
    setProductStatus(productId, status){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/products/ '+ productId + '/status'),
            method  : 'POST',
            data    : {
                _method     : 'PUT',
                status      : status
            }
        });
    }
    // 获取品类的子节点(平级)的接口
    getCategory(parentCategoryId){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/category/parallel-children'),
            method  : 'GET',
            data    : {
                categoryId : parentCategoryId || 0
            }
        });
    }
    // 新增品类的接口
    saveCategory(category){
        return _mm.request({
            url     : _mm.getServerUrl('/backend/category'),
            method  :'POST',
            data    : {
                parentId        : category.parentId    || 0,
                categoryName    : category.categoryName  || ''
            }
        });
    }
    // 后台更新品类名称的接口
    updateCategoryName(category){
        category._method = 'PUT';
        return _mm.request({
            url     : _mm.getServerUrl('/backend/category/name'),
            method  :'POST',
            data    : category
        });
    }
}
