
$(function(){
	InitCardInfo();
	MakingComboDate();

	$("#info_credit").hide();
	$("#pay_paypal").click(function(){
		$("#info_paypal").show();
		$("#info_credit").hide();
		InitCardInfo();
		$(".ToggleRequire").prop("required",false);
	});
	$("#pay_credit").click(function(){
		console.log($("#pay_paypal").prop("checked"));
		console.log($("#pay_credit").prop("checked"));
		$("#info_credit").show();
		$("#info_paypal").hide();
		$(".ToggleRequire").prop("required",true);
	});
	$("#in_username").keydown(function(){
		if($("#in_username").val()==""||$("#in_username").val()==null){
			$(".TogglePW").prop("required",false);
			return;
		}else{
			$(".TogglePW").prop("required",true);
		}
	});
	$("#uploadBtn").change(function(){
		console.log(this.value);
		$("#uploadFile").val(this.value);
	});

	/*Control Innut*/
	$(".onlyInsertnum").keydown(function (e){
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)||
            (e.keyCode >112 && e.keyCode <= 127)) 
			{
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
	});

});

function InitCardInfo(){
	/*Initialize Credit Card Information*/
	/*Card Nmber*/
	var length = $("#card_num").children().length;
	for(var i=0; i<length; i=i+2){
		var target = $("#card_num").children(i);
		if(target.val()!=""){
			target.val("");
		}
	}
	/*Expiration Date*/
	length = $("#card_date").children().length;
	for(var i=0; i<3; i=i+2){
		var target = $("#card_date").children(i);
		if(target.val()!=""){
			target.val("");
		}
	}
	/*Security Code*/
	$("#cvv").val("");
	/*Name*/
	$("#card_name").val("");
}

function MakingComboDate(){
	/*Card Date - Month*/
	var string ="";
	for(var i=1; i<13; i++){
		string+="<option>"+i+"</option>";
	}
	$("#card_mon").append(string);

	/*Card Date - Year*/
	string ="";
	for(var i=2015; i<2036; i++){
		string+="<option>"+i+"</option>";
	}
	$("#card_year").append(string);
}

function Vaildation(){
	if(!CardValidation()){
		return 0;
	}
}

function CardValidation(){
	if($("#pay_credit").prop("checked")){
		if(($("#card_num").children(0).val()=="")||
		   ($("#card_num").children(2).val()=="")||
		   ($("#card_num").children(4).val()=="")||
		   ($("#card_num").children(6).val()=="")){
			alert("Enter Your Card Numbers.")
			return 0;
		}
		if($("#cvv").val==""){
			alert("Enter Your CVV Numbers.")
			return 0;
		}
		if($("#card_name").val==""){
			alert("Enter Your Name in Card.")
			return 0;
		}
	}else{
		return;
	}
}