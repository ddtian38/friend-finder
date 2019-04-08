function displayFriend(results){
      
    var friendName = $("<h1 id=\"friend-name\"> " + results.name + "</h1>");
    var img = $("<img id=\"friend-img\" src = \""+ results.photo + "\">");
    $("#friend-content").append(friendName).append(img)
}

function apiCall(method, data){
    $.ajax({
         url: "/api/friends",
         data: data, 
         method: method,
    }).then(function(res){
        displayFriend(res);
    })

}

$("#submitBtn").on("click", function(event){

    event.preventDefault();

    var scores = []
    for(var x = 1; x <= 10; x++){
        scores.push($("#q"+x).val())
    }

    var input = {
        name: $("#name").val().trim(),
        link: $("#profile-pic").val().trim(),
        scores: scores
    }
    console.log(input);

    apiCall("POST", input);

})