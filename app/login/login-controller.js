(function(ng){
    
    var module = ng.module('login',[]);
    var controllerId = 'LoginController';
    module.controller(controllerId,['$scope','loginService',controller]);
    
    function controller($scope,loginService){
        
        $scope.login = function(){
            //log in service is supposed to perform actual login 
            loginService.login($scope.user);
        };
    }
    
})(angular);