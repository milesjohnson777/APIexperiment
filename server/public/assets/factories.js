myApp.factory('Rekkidz', ['$http', function($http){
    var data = {};

    // var postRecord = function(data){
    //     $http.post('/record', data).then(function(response){
    //         console.log('saved record: ', response);
    //         getRecord();
    //     });
    // };

    var getRecord = function(){
        var url = 'https://api.discogs.com/artists/100457/releases?callback=JSON_CALLBACK';

        $http.jsonp(url).success(function(response){
            console.log(response.data);
            data.response = response.data;
        });
    };

    return {
        getRecord: getRecord,
        data: data
    }

}]);
