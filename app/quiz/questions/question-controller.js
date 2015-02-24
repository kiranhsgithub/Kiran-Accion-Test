(function(ng){
    
    var module = ng.module('quiz',[]);
    var controllerId = 'QuestionController';
    module.controller(controllerId,['$scope','QuestionService',controller]);
    
    function controller($scope,questionService){
        
        var parameters = $scope.params;
        if(parameters && parameters.id){
            $scope.question = {
                id : parameters.id
            };
        }
        
        if($scope.question){
            var question = questionService.getQuestionAndAnswer($scope.question.id);
            //Code to identify question and answer template
            question.getDetails();
        }
        
        $scope.continue = function(){
            //Way to check if question is answered
            if($scope.isAnswered()){
                //save answer and get next question id
            }else{
                //show error message saying question not answered yet
            }
        };
    }
    
})(angular);