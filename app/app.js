/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(ng){
    var app = ng.module('accionQuiz',['ngRoute','login','register','logout','quiz','answers']);
    
    app.config(['$routeProvider',function($routeProvider){
            $routeProvider
                    .when('/login',{
                        templateUrl:'login/login.html',
                        controller:'LoginController'
                    })
                    .when('/register',{
                        templateUrl:'register/register.html',
                        controller:'RegisterController'
                    })
                    .when('/logout',{
                        templateUrl:'',
                        controller:'LogoutControlller'
                    })
                    .when('/quiz',{
                        templateUrl:'quiz/quiz.html',
                        controller:'QuizController'
                    })
                    .when('/quiz/:id',{
                        templateUrl:'quiz/questions/question.html',
                        controller:'QuestionController'
                    })
                    .when('/answers',{
                        templateUrl:'answers/login.html',
                        controller:'AnswersController'
                    })
                    .otherWise({
                        templateUrl:'login/login.html',
                        controller:'LoginController'
                    });
    }]);
    
})(angular);


