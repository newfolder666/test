angular.module("MyNewApp",[])
		.controller("MyNewController",["$scope", "greetingService", function MyNewController($scope, greetingService){
			this.greeting = greetingService;

			this.clickMe = function(){
				alert("clicked");
			};
		}])
		.controller("MyNewController2",["$scope", "greetingService", function MyNewController($scope, greetingService){
			this.greeting2 = greetingService;
		}])
		.factory("greetingService",[ function GreetingService(){
			return {
				message:"Hello from greeting service test"
			};
		}])
