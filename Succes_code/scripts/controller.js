

angular.module("musicApp")
		.controller("musicCtrl",function($scope,musicFactory){
		$scope.singleGenre={};
		$scope.search={};	
		$scope.again={};
		$scope.music={};
		$scope.muse={};
		$scope.showDetails=false;
		 $scope.toggleDetails=function(){
            $scope.showDetails=!$scope.showDetails;
          };
		$scope.tracks=musicFactory.music();
		$scope.genres=musicFactory.mic();
		$scope.saveTrack=function(){

			musicFactory.create_new_track($scope.music) ;
		}

		$scope.saveGenre=function(){

			musicFactory.create_new_genre($scope.muse);
		}

		$scope.searchTrack=function(){

			$scope.singleSong=musicFactory.getMusicByName($scope.search.title);
		}

		$scope.searchGenre=function(){

			$scope.singleGenre=musicFactory.getGenreByName($scope.again.id);
		}

		$scope.editTrack=function(idnew,singleSong){
		
	       musicFactory.editSingleTrack(idnew,singleSong);
		}

		$scope.editGenre=function(){
		$scope.p=	musicFactory.editSingleGenre($scope.singleGenre);

		}
		
	
		});