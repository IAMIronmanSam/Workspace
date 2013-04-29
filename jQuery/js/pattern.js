var Board = {};

Board = {
	Dots:function  (_type) {
		if(_type <= "9")
		{
			for (var i = 1; i <=_type; i++) {
				$('#Board').append("<div class=\"dots\" id="+i+">"+i+"</div>");
			}
		}
	else{
			for (var i = 1; i <=9; i++) {
				$('#Container').append("<div class=\"dots\" id="+i+"></div>");
			}
			alert("Maximun 9 is only allowed");
		}
	},
	getPosition:function  () {
			var vue = [];
			$("#ip input:text").each(function(){
				vue.push($(this).val());
				return vue;
			});
			console.log("Co-Ordinates: "+vue);	
	},
	DrawLines:function  (_coord) {
		
		
	},
};





