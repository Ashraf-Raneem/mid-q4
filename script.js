/* Add your script here */
//task 1
$("#list").click(function(){
    $.ajax({
        method: 'GET',
        url: 'http://skeleton.mernbook.com/api/users'
       }).done(function(response){
        response.forEach(element =>{
            let user = $('<p>').text(element.name);
            $('#users').append(user)
        });
       }).fail(function(response){
        console.log(response);
       });
       
})