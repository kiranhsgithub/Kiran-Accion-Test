(function(ng){
    
    var module = ng.module('logout',[]);
    var controllerId = 'LogoutController';
    module.controller(controllerId,['$scope','logoutService',controller]);
    
    function controller($scope,logoutService){
        $scope.logout = function(){
            logoutService.logout();
        };
    }
    
})(angular);