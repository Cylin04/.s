var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    console.log("My controller.....");
    $scope.users = [
        {name: "Hien", email: "THPT Yên Lãng", fullname: " Hien Nguyen Kim "},
        {name: "HienNK", email: " THPT Yên Lãng  ", fullname: "Hien NK"},
        {name: "English", email: "THPT Yên Lãng", fullname: "English"}

    ];
    $scope.addUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";

    };
    $scope.selectUser = function (user) {
        console.log(user);
        $scope.clickedUser =user;

    };
    $scope.editUser =function (){
        $scope.message="User Edited successfully";
    };
    $scope.deleteUser =function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message= "User Deleted successfully";

    };
    $scope.clearMessage =function (){
        $scope.message="";
    };
});