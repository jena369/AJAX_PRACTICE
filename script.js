// //displays the country-population
// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();

// request.onload = () => {
//     var res = JSON.parse(request.response);

//     for (var i = 0; i < res.length; i++) {
//         console.log("Country : ", res[i].name.common, ", Region : ", res[i].region, ", SubRegion : ", res[i].subregion, ", Population : ", res[i].population);
//     }
// };


// //displays my github repos
// var requestRepo = new XMLHttpRequest();
//     requestRepo.open("GET", "https://api.github.com/users/jena369/repos");
//     requestRepo.send();

//     requestRepo.onload = () => {
//         var result = JSON.parse(requestRepo.response);
        
//         console.log("My REPO-NAMEs: ",result);
//     };

//loading photos from an API
var requestPhoto = new XMLHttpRequest();
requestPhoto.open("GET", "https://jsonplaceholder.typicode.com/photos");
requestPhoto.send();


requestPhoto.onload = () => {
    var resPhoto = JSON.parse(requestPhoto.response);
    for(var i = 0; i < resPhoto.length; i++){
        console.log("Photos Title:", resPhoto[i].name, resPhoto[i].thumbnailURL);
    }
    
};