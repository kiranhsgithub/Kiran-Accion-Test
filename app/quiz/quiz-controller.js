(function(ng){
    
    var module = ng.module('quiz',[]);
    var controllerId = 'QuizController';
    module.controller(controllerId,['$scope','$location','questionService',controller]);
    
    function controller($scope,$location){
        
        $scope.takeQuiz = function(){ 
            var question = questionService.getLastAttendedQuestion();
            //assuming question service will return last attended question
            $location.path('#/quiz/' + question.id);
        };
    }
    
})(angular);