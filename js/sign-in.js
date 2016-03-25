var path=require("path");
 console.log(path.HOST);
 var URL = path.HOST+":"+path.PORT+path.BASE_URL
 console.log(URL);
$(document).ready( function(){
	$('#sign-in').submit(function(e){
		e.preventDefault();
		if(($('input[name=email]').val() != "") && ($('input[name=password]').val() != "")){

			$("#error_box").html("");
					
					var formData = {
						'email': $('input[name=email]').val(),
						'password': $('input[name=password]').val() 
					};
	
					$.ajax({
						type: "POST",
						url: URL+"/UserConsumers/login",
						data: formData,
						complete: function(e, xhr, settings){
					       if(e.status === 200){
						 	window.location.replace("home.html");
						 	document.cookie="auth = data.auth";
						 	console.log(document.cookie);
					       }
					       else if(e.status === 400){

						 		if(data.message == ' '){
						 		
						 		$("#error_box").html("Try Again");
						 	}else{
						 	
						 		$("#error_box").html(data.message);
						 	
						 	}
						 	
						 		$('input[name=email]').val("");
						 		$('input[name=password]').val("");
						 	}else if (e.status === 401){
						 		if(data.message == ' '){
						 		
						 		$("#error_box").html("Oops that's not a match! ");
						 	}else{
						 	
						 		$("#error_box").html(data.message);
						 	
						 	}
						 	
						 		$('input[name=email]').val("");
						 		$('input[name=password]').val("");

					       }else{
					       		$("#error_box").html("Please try again after sometime");
					       }
					    }
						// 					stausCode: {
						// 	200: function(data){
						// 		console.log("clicked");
						// 		window.location.replace("http://www.google.com");
						// 		document.cookie="auth = data.auth";
						// 	},
						// 	400: function(data){
						// 		if(data.message == ' '){
						// 		$("#error_box").html("Try Again");
						// 	}else{
						// 		$("#error_box").html(data.message);
						// 	}
						// 		$('input[name=email]').val("");
						// 		$('input[name=password]').val("");
						// 	},
						// 	401: function(data){
						// 		$("#error_box").html("You are not authorised to access the account");
						// 	}
						// }
					});
					
				} else {
					$("#error_box").html("Please fill every field correctly");
				}
	});
});