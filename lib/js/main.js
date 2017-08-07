// database object
var database = firebase.database().ref();

// button excutes this function
function updateDB(){
    var newName = $("#name").val();
    var newMessage = $("#message").val();
    console.log(newName +" : " + newMessage);

    // Update database here
    var value = {name: newName, message: newMessage};
    database.push(value);
}

database.on("child_added" , function(rowData){
    console.log(rowData.val());
    var name = rowData.val().name;
    var message = rowData.val().message;

    var html ="<p>" + name + ": " + message + "</p>";
    $(".allMessages").append(html);
});
