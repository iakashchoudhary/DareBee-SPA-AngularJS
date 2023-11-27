var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "homepage.html",
            title: "DAREBEE - Fitness on Your Terms."
        })
        .when("/workouts", {
            templateUrl: "workouts.html",
            title: "DAREBEE Workouts"
        })
        .when("/programs", {
            templateUrl: "programs.html",
            title: "Fitness Programs"
        })
        .when("/nutrition", {
            templateUrl: "nutrition.html",
            title: "Nutrition"
        })
        .when("/challenges", {
            templateUrl: "challenges.html",
            title: "Fitness Challenges"
        })
        .otherwise({ redirectTo: "/" });
});

app.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.title = $route.current.title;
        document.title = $route.current.title;
    });
}]);