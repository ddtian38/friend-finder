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
function validate(){
    for(var x = 1; x <= 10; x++){
        if($("#q"+x).val() === null){
            return false
        }
    }

    if($("#name").val() === "" || $("#profile-pic").val() === ""){
        return false;
    }

    return true;
}

function clear(){
    $("#name").val("");
    $("#profile-pic").val();
    for(var x = 1; x <= 10; x++){
        $("#q"+x).val(null)
    }
}

$("#submitBtn").on("click", function(event){

    event.preventDefault();

    if(validate()){
        var scores = []
        for(var x = 1; x <= 10; x++){
            scores.push($("#q"+x).val())
        }

        var input = {
            name: $("#name").val().trim(),
            link: $("#profile-pic").val().trim(),
            scores: scores
        }
        clear();
        apiCall("POST", input);
    }else{
        
        alert("Please fill in all inputs.")
        event.stopPropagation();
  
}

$("#modal-close").on("click", function(){
    while($("#friend-content").children().length > 0){
        $("#friend-content").children().remove();
    }
    
})

})