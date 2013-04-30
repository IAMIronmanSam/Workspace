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
			console.log("Maximun 9 is only allowed");
		}
	},
	getPosition:function  () {
			var vue = [];
			$("#ip input:text").each(function(){
				
				vue.push($(this).val());
				return vue;
			});
			console.log("Co-Ordinates: "+vue);	
			this.DrawLines(vue);
	},
	DrawLines:function  (_coord) {
		console.log("Array"+_coord)
		var net = [];
		for (var i = 0; i <_coord.length ; i++) {
			console.log("DrawLines"+_coord[i]);

			if(_coord[i] %2 != 0 && _coord[i]!=5)
			{
				net.push(1);
				console.log(_coord[i]);
			}
			else{
				net.push(0);
				
			}

			//$('#'+_coord[i]).append("<div class=line></div>");
		};
			console.log("Net: "+net.length);

	},
};





