angular.module("musicApp")
       .constant("http://104.197.128.152:8000/v1/")
		.service("musicFactory",function($resource){
		
	    var musicTrack= $resource('http://104.197.128.152:8000/v1/tracks');
	    var name;
	    var genName;
		 // We can retrieve a collection from the server
        this.music=function(){
        var cards = musicTrack.get();
         
         //  alert(name.title);
           return cards;
         };

       this.create_new_track = function(music)
       {
       		 	var newMusic= new musicTrack({'title':music.title,'rating':music.rating,'genre':[music.genre]});
       		 	//var newMusic=new musicTrack(music);
            	newMusic.$save();

       };

       var musicGenre=$resource('http://104.197.128.152:8000/v1/genres/:id');
       this.mic=function(){

       	    var gens= musicGenre.get();
       	    return gens;
       }

       this.create_new_genre=function(muse){

       	    var newGenre= new musicGenre({'name':muse.name});
       	    newGenre.$save();
       };		
	
		   this.getMusicByName= function(musicName){
			     var name=musicTrack.get({'title':musicName});           
			     return  name;
		   };

      this.getGenreByName=function(genreId){

          var genName=musicGenre.get({'id':genreId});
          //alert(genName.name);
          return genName;
        }

      this.editSingleTrack= function(idnew,singleSong){
        var id=idnew;
        var edit_new= $resource('http://104.197.128.152:8000/v1/tracks/'+id,{isArray:true});
        edit_new.get({'title':"",'rating':""},function(mscName) {
        mscName.title=singleSong.results[0].title;        
        mscName.rating=singleSong.results[0].rating;
        mscName.genres.name=singleSong.results[0].genres.name;
        //mscName.genres.push({'id':15,'name':'kkkk'}); Its not working but its workin in json server 
        mscName.$save();       

          });	
       };


       this.editSingleGenre=function(singleGenre){
    
          id=singleGenre.id;
          var edit_gen=$resource('http://104.197.128.152:8000/v1/genres/'+id);
          edit_gen.get({'id':singleGenre.id},function(genName){
          genName.name=singleGenre.name;
          genName.$save();
        });
      };
});

		


  