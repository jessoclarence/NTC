var Ht = ''+
		'<div class="row">'+
		'<div class="row">'+
		'	<div class="col-sm-4">'+
		'		<label>Airport Name</label>'+
		'	</div>'+
		'	<div class="col-sm-4">'+
		'		<input type="text" name="flow_type" id="flow_type">'+
		'	</div>'+
		'</div>'+
		'<div class="row">'+
		'	<div class = "col-sm-4">'+
		'		<label>Airport Code</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="text" name="airport_code" id="airport_code">'+
		' 	</div>'+
		' </div>'+
		' <div class="row">'+
		' 	<div class = "col-sm-4">'+
		' 		<label> Airline</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="text" name="airline" id="airline">'+
		' 	</div>'+
		' </div>'+
		' <div class="row">'+
		' 	<div class = "col-sm-4">'+
		' 		<label> DateTime</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="date" name="datetime" id = "datetime" >'+
		' 	</div>'+
		' </div>'+
		' <div class="row">'+
		' 	<div class = "col-sm-4">'+
		' 		<label>Luggages</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="number" name="luggages" id="luggages" >'+
		' 	</div>'+
		' </div>'+
		'<button type="button" id="call_submit" class="btn btn-primary">Add Airport</button>'+
		'</div>'	

var Airport = function(){
	this.id = null;
	this.flow_type = "";
	this.airport_code = "";
	this.airline = "";
	this.datetime = null;
	this.html_node = $(Ht)[0];
	this.luggages = null;
	this.container = null;
	this.btn_submit = null;
}

Airport.prototype.render = function(container){
	this.container = container;
	container.appendChild(this.html_node);
	this.bind_all(); 
}

Airport.prototype.bind_all = function(){
	if (this.container === null) {
				return false;
	}
	this.flow_type = $(this.html_node).find('#flow_type')[0];
	this.airport_code = $(this.html_node).find('#airport_code')[0];
	this.airline = $(this.html_node).find('#airline')[0];
	this.datetime = $(this.html_node).find('#datetime')[0];
	this.luggages = $(this.html_node).find('#luggages')[0];
	this.btn_submit = $("#call_submit");
	p = this;
	$(this.btn_submit).click(function(){p.submit();});
	return true;
}

Airport.prototype.submit = function(){
	if (this.container === null) {
		return false;
	}	
	$.ajax({
		url: "/regmain/airport_info/",
			data: {														
				flow_type : this.flow_type.value,
				airport_code : this.airport_code.value,
				airline : this.airline.value,
				datetime : this.datetime.value,
				luggages : this.luggages.value,					
			},
			type: "POST",
			dataType: "json",				
	});
	return true;
}	
