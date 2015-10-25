var productlist=[
{"id":"h000001", "title":"Hotel Acacia", "img":"image/lodging/acacia.jpg", "cost":"630", "description":"Very beautiful hotel in Jakarta, Indonesia."},
{"id":"h000002", "title":"Hotel Bigley", "img":"image/lodging/bigley.jpg", "cost":"886", "description":"Bigley is nice and very beautiful hotel."},
{"id":"h000003", "title":"Hotel Burj Al Arab", "img":"image/lodging/burjalarab.jpg", "cost":"13434", "description":"Burj Al Arab is one of the most famous hotal in the world, and one of the expensive hotel. Service also is very great"},
{"id":"h000004", "title":"Hotel Izmailovo", "img":"image/lodging/izmailovo.jpg", "cost":"555", "description":"Izmalove is newly hotel. So, They have all clean room."},
{"id":"h000005", "title":"MarinaBay Sands", "img":"image/lodging/marinabay.jpg", "cost":"878", "description":"MarinaBay Sands is symbol of Singapore. They have big, nice swimming pol made from glasses."},
{"id":"h000006", "title":"Hotel Marriott", "img":"image/lodging/marriott.jpg", "cost":"542", "description":"Marriott is antique nice and very beautiful hotel."},
{"id":"h000007", "title":"Hotel Monport", "img":"image/lodging/monport.jpg", "cost":"648", "description":"Monport is nice and very beautiful hotel. And they have wonderful swimming pool."},
{"id":"h000008", "title":"Hotel Silver", "img":"image/lodging/silver.jpg", "cost":"327", "description":"Silver is newly nice hotel. And they have wonderful swimming pool."},
{"id":"h000009", "title":"Hotel Titanic", "img":"image/lodging/titanic.jpg", "cost":"1313", "description":"Every day in my dream I see you, I feel you."},
{"id":"h00000a", "title":"Intercontinental", "img":"image/lodging/intercontinental.jpg", "cost":"464", "description":"Intercontinental is one of the most famous hotel chain. They are very antique and make you feel come to paradise."},
{"id":"h00000b", "title":"Hotel Lotte", "img":"image/lodging/lotte.jpg", "cost":"412", "description":"Very nice hotel with amuzing park in Seoul"},
{"id":"h00000c", "title":"Hotel Hilton", "img":"image/lodging/hilton.jpg", "cost":"439", "description":"Hilton is one of the most famous hotal chain. They have nice service."}
];
// var cartlist=[
// {"title":"","img":"","cost":"","amount":""}
// ];

var products_list="";

$(function(){
	var body_width = $(window).width;
    var slider = new flux.slider('#slider', {
					pagination: true,
					controls: true,
					captions:true,
					transitions:['bars','blinds','blocks','blocks2','concentric','dissolve','slide','warp','zip'],
					delay:8000,
					height:300,
					width:body_width
				});

    for(var i=0; i<Object.keys(productlist).length; i++){
		products_list += MakeProduct(productlist[i].id, productlist[i].title, productlist[i].img, productlist[i].cost, productlist[i].description);
	}
	
	$("#product_container").append(products_list);
});
// $(document).ready(function(){
// 	// var slider = $('.bxslider').bxSlider({
// 	// 	mode: randommode(),
// 	// 	auto: true,
// 	// });

// 	// $("a.bx-prev").click(function(e){

// 	// });
// 	// $("a.bx-next").click(function(e){

// 	// });
// 	// console.log(slider);

// 	// for(var i=0; i<Object.keys(productlist).length; i++){
// 	// 	products_list += MakeProduct(productlist[i].id, productlist[i].title, productlist[i].img, productlist[i].cost, productlist[i].description);
// 	// }
// 	// $("#product_container").append(products_list);

// });
function randommode(){
	var i=Math.ceil(Math.random() * 3)

	if(i==1){
		return 'horizontal'
	}else if(i==2){
		return 'fade'
	}else if(i==3){
		return 'vertical'
	}
}
	
function MakeProduct(id, title, img, cost, description){
	var products_string="";
	products_string += "<div id="+id+" class='product'>";
	products_string += 		"<h2 class='product_title'>"+title+"</h2>";
	products_string += 		"<img class='product_img' src='"+img+"'>";
	products_string += 		"<p class='product_desc'>"+description+"</p>";
	products_string +=		"<div>";
	products_string += 		"<p>$"+'&nbsp;'+"</p>";	
	products_string += 		"<p class='product_cost'>"+cost+"</p>";
	products_string += 		"<p>"+'&nbsp;'+"Per 1 night</p>";
	products_string +=		"</div>";
	products_string += 		"<p class='product_detail'>detail</p>";
	products_string += 		"<div class='product_order'>";
	products_string += 			"<input id="+id+"_input"+" type='number' min='1' max='30'>";
	products_string += 			"<button id="+id+"_button"+" onclick='AddinCart(id)'>+</button>";
	products_string += 		"</div>";
	products_string += "</div>";

	return products_string;
}

function AddinCart(_button_id){
	var button_id = $("#"+_button_id);
	var root = button_id.parent().parent();
	var rootid = root.prop("id");
	var title = $(root).find(".product_title").text();
	var img_src = $(root).find(".product_img").prop("src");
	var split_img = img_src.split("image");
	var img = "image" + split_img[1];
	var description = root.find(".product_desc").text();
	var cost = root.find(".product_cost").text();
	var amount = button_id.prev().val();
	var totalcost = cost * amount;
	if(!isvaild(amount)){
		alert("You can have reservation for min 1 day, max 30 days.")
		return false;
	}
	var add_string="";
	add_string +="<div id='"+rootid+"_cart"+"' class='product_cart'>";
	add_string +=	"<img class='prodcut_img_cart' src='"+img+"'>";
	add_string +=	"<div>";
	add_string +=		"<div class='product_content_cart'>";
	add_string +=			"<h3>"+title+"</h3>";
	add_string +=		"</div>";
	add_string +=		"<div class='product_amount_cart'>";
	add_string +=			"<p class='cost_cart' style='display:none;'>"+cost+"</p>";
	add_string +=			"<p class='totalcost_cart'>"+"Totally $"+totalcost+"</p>";
	add_string +=			"<p class='amount_cart'>"+amount+"</p>";
	add_string +=			"<p>nights</p>";
	add_string +=			"<div class='product_button_cart'>";
	add_string +=				"<button id='"+rootid+"_add_btn' onclick='Addamount(id)'>+</button>";
	add_string +=				"<button id='"+rootid+"_sub_btn' onclick='Subamount(id)'>-</button>";
	add_string +=				"<button id='"+rootid+"_remove_btn' onclick='Removeitem(id)'>X</button>";
	add_string +=			"</div></div>";
	add_string +=	"</div>";
	add_string +="</div>";


	$("#cartlist").append(add_string);
}

function InitCart(){
	var cartlist_div= $("#cartlist");
	cartlist_div.children().remove();
}

function isvaild(amount){
	if(amount<1 || amount>30){
		return false;
	}else{
		return true;
	}
}

function Addamount(_button_id){
	var button_id = $("#"+_button_id);
	var root = button_id.parent().parent().parent().parent();
	var cost = root.find(".cost_cart").text();
	var totalcost = root.find(".totalcost_cart");
	var amount = root.find(".amount_cart");

	var new_amount = Number(amount.text());
	if(new_amount<30){
		new_amount +=1;
	}else{
		alert("You can't have your reservation over 30 day.")
		return false;
	}
	
	var new_totalcost = new_amount * cost;

	amount.text(new_amount);
	totalcost.text("Totally $"+new_totalcost);

}

function Subamount(_button_id){
	var button_id = $("#"+_button_id);
	var root = button_id.parent().parent().parent().parent();
	var cost = root.find(".cost_cart").text();
	var totalcost = root.find(".totalcost_cart");
	var amount = root.find(".amount_cart");

	var new_amount = Number(amount.text());
	if(new_amount>1){
		new_amount -=1;
	}else{
		alert("You can't have your reservation under 1 day.")
		return false;
	}
	var new_totalcost = new_amount * cost;

	amount.text(new_amount);
	totalcost.text("Totally $"+new_totalcost);
}
function Removeitem(_button_id){
	var button_id = $("#"+_button_id);
	var root = button_id.parent().parent().parent().parent();
	var title = root.find(".product_content_cart").children("h3").text();
	root.remove();
	alert("Remove your reservation for "+title);
}	


