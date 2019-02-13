//品牌服务层
app.service('brandService',function ($http) {
    //findall
    this.findAll = function () {
        return $http.get("../brand/findAll.do");
    }
    this.findPage = function (page,rows) {
        return $http.get("../brand/findPage.do?page="+page+"&size="+rows)
    }
    this.findOne = function (id) {
        return $http.post("../brand/findOne.do?id="+id)
    }
    this.add = function (entity) {
        return $http.post("../brand/add.do",entity)
    }
    this.update = function (entity) {
        return $http.post("../brand/update.do",entity)
    }
    this.dele = function (ids) {
        return $http.post("../brand/delete.do?ids="+ids )
    }
    this.search = function (page,rows,searchEntity) {
        return $http.post("../brand/search.do?page="+page+"&size="+rows,searchEntity)
    }
})