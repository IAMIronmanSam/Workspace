   //$(document).ready(function() {
   	var testnamspc = {
    add:function(c){
    	if(isNaN(c)){
		console.log(c + " is not a number");
 	}else{
	 	var f = c + 1;
	    return f;
		console.log(c + " is a number");
 }
    
	},
	subs: function(b) {
			if(isNaN(b)){
		console.log(b + " is not a number");
 	}else{
		if (b>1)
		{var a = b-1;
		return a;}
		else{
			console.log("Value > 1");
		}
	}
	},

	multi:function(d) {
			if(isNaN(d)){
		console.log(d + " is not a number ");
 	}else{
		var g = d*2;
		return g;
	}
	},

	divd:function(e) {
			if(isNaN(e)){
		console.log(e + " is not a number");
 	}else{
		var h = e/2
		return h ;
	}
},
	dom:function (target) {
		$("#test").append($(target));
		var z = $(target).text("hello");
		var t =  $(target).text();
		return t;
}

};

testnamspc.subs('j');
 //   });//