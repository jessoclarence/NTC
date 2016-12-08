var HTT = ''+
		'<div class="row">' +
		
		'  <div class="row">' +
		'    <div class="col-sm-4">' +
		'		<select id = "vol_type_id">'+
		'		<option value="Serving Food">Serving Food</option>'+
		'		<option value="Health Care">Health Care</option>'+		
		'		</select>'+
		'    </div>' +
		'  </div>'+
		'</div>' 


var Attendance = function(){
	this.id = null;
	this.name = "";
	this.html_node = $(HTT)[0];
}


Attendance.prototype.render = function(container){
	this.container = container;
	container.appendChild(this.html_node);
	console.log("I am Here");
	//this.bind_input();
}
