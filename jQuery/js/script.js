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
},
	domstyle:function (target,color) {
		$("#test").append($(target));
		var z = $(target).css("background-color",color);
		var t =  $(target).css("background-color");
		console.log($(target).css("background-color"));
		return t;
},
	domremove:function (target) {
		$(target).detach();
		var t = $("#test").length;
		return t;
},
	domclass:function (target) {
		$(target).addClass("testing");
		var t = $(target).attr('class');
		return t;
},
	tstvar:["dfgmgdgg","sdfsdfj"]

};

testnamspc.subs('j');

/*(function($){

  $.fn.enumerate = function(start) {
    if (typeof start !== "number") {
      start = 1;
    }
    return this.each(function(i) {
      $(this).prepend((start + i) + ". ");
    });
  };

}(jQuery));*/
 //   });//