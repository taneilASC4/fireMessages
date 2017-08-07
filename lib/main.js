// database object
var database = firebase.database().ref();

// button excutes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name +" : " + message);

    // Update database here
    var value = {name: newName, message: newmessage};
    database.push(value);
}
