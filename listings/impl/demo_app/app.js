function SurveyPlanController($scope, $http) {
    $http({method: 'GET', url: './data/surveyPlan.json'}).
            success(function(data, status, headers, config) {
                $scope.cidsBean = data;
            })
}
;
