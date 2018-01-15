$(document).ready(function(){
	function checkPhoneNumber(){
		var phoneNumber = document.getElementById('phoneNumber').value;
	    if(!(/^1[34578]\d{9}$/.test(phoneNumber))){
	        $(".phoneWarningMessage").show();
	    }else {
	    	$(".phoneWarningMessage").hide();
	    }
	};
	function nameAndCompany(){
	    var nameAndCompany = document.getElementById('nameAndCompany').value;
	    if(nameAndCompany.length === 0){
	        $(".nameWarningMessage").show();
	    }else {
	    	$(".nameWarningMessage").hide();
	    }
	};
	$("#phoneNumber").blur(function(){
		checkPhoneNumber();
	});
	$("#nameAndCompany").blur(function(){
		nameAndCompany();
	});
	$("#phoneNumber").focus(function(){
		$(".phoneWarningMessage").hide();
	});
	$("#nameAndCompany").focus(function(){
		$(".nameWarningMessage").hide();
	});
	$("#yuyuezixun").click(function(){
		var phoneNumber = document.getElementById('phoneNumber').value;
		var nameAndCompany = document.getElementById('nameAndCompany').value;
		if(!(/^1[34578]\d{9}$/.test(phoneNumber))){
	        $(".phoneWarningMessage").show();
	    }else if(nameAndCompany.length === 0){
	        $(".nameWarningMessage").show();
	    }else if(/^1[34578]\d{9}$/.test(phoneNumber)&nameAndCompany.length !== 0){
	    	$(".dialog").show();
			$.ajax({
			  type: "POST",
			  url: "test.php",
			  data: {phoneNumber: phoneNumber, nameAndCompany: nameAndCompany},
			  success: function(){
			  	// $(".dialog").show();
			  	$("#phoneNumber").val("");
			  	$("#nameAndCompany").val("");;
			  }
			});
	    }
	});
	$("#dialogCloseButton").click(function(){
		$(".dialog").hide();
	})
})