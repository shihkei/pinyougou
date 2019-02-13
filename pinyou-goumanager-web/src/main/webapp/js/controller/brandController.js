app.controller('brandController' ,function($scope,$http,$controller,brandService){
    $controller('baseController',{$scope:$scope});

    //读取列表数据绑定到表单中
    $scope.findAll=function(){
        brandService.finall().success(
            function(response){
                $scope.list=response;
            }
        );
    };
    //分页查询
    $scope.findPage = function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        )
    };

    $scope.save = function () {
        var object = null
        if($scope.entity.id!=null){//如果有ID
            object=brandService.update($scope.entity);//则执行修改方法
        }else {
            object=brandService.add($scope.entity);
        }
        object.success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//重新加载
                }else {
                    alert(response.message)
                }
            }
        )
    };

    // $scope.update = function () {
    // 	$http.post("../brand/update.do",$scope.entity).success(
    // 			function (response) {
    // 				if (response.success) {
    // 					$scope.reloadList();//重新加载
    // 				}else {
    // 					alert(response.message)
    // 				}
    // 			}
    // 	)
    // };

    $scope.findOne = function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        )
    };

    //批量删除
    $scope.dele = function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if (response.success) {
                    $scope.selectIds = []
                    $scope.reloadList();//重新加载
                }else {
                    alert(response.message)
                }
            }
        )
    };
    //条件查询
    $scope.searchEntity={};
    $scope.search = function (page,rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        )
    }


});