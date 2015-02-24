(function(ng){
    
    var module = ng.module('register',[]);
    var controllerId = 'RegisterController';
    module.controller(controllerId,['$scope','registerService',controller]);
    
    function controller($scope,registerService){
        
        $scope.register = function(){ 
            registerService.register($scope.user);
        };
    }
    
})(angular);