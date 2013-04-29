var Home = {};

Home = {
	Welcome:function (_member) {
		var mem = (_member == "sakthi") ? true : false;
		return _member;
		console.log("Welcome "+_member+"!");
	},
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


};



Home.Welcome("sakthi");

