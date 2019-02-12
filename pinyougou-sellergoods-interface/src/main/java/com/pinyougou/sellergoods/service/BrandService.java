package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

/**
 * @author SHIH
 * @date 2019/01/19
 * @description 品牌借口
 **/
public interface BrandService {
    /**
     * 查询所有
     * @return
     */
    public List<TbBrand> getAll();

    /**
     * 分页接口
     * @param pageNum 当前页码
     * @param pageSize 每页数量
     * @return
     */
    public PageResult findPage(int pageNum,int pageSize);

    public void add(TbBrand brand);

    public void update(TbBrand brand);

    public TbBrand findOne(Long id);

    public void delete(Long [] ids);

    public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
}
