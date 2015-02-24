(function(ng){
    
    var module = ng.module('common',[]);
    var serviceId = 'LoginService';
    module.factory(serviceId,service);
    
    function service(){
        
        var LoginService = function(){
            
        };
        
        LoginService.prototype.login = function(){
            //Login code
        };
        
        return new LoginService();
    }
    
})(angular);