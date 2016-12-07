var HT = ''+
		'<div class="row">'+
		'<div class="row">'+
		'	<div class="col-sm-4">'+
		'		<label>Address</label>'+
		'	</div>'+
		'	<div class="col-sm-4">'+
		'		<input type="text" name="address" id="address_id">'+
		'	</div>'+
		'</div>'+
		'<div class="row">'+
		'	<div class = "col-sm-4">'+
		'		<label>Cell Phone</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="text" name="cell_phone" id="cell_phone_id">'+
		' 	</div>'+
		' </div>'+
		' <div class="row">'+
		' 	<div class = "col-sm-4">'+
		' 		<label>Telephone</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="text" name="telephone" id="telephone_id">'+
		' 	</div>'+
		' </div>'+
		' <div class="row">'+
		' 	<div class = "col-sm-4">'+
		' 		<label>Email</label>'+
		' 	</div>'+
		' 	<div class = "col-sm-4">'+
		' 		<input type="text" name="email" id = "email_id" >'+
		' 	</div>'+
		' </div>'+				
		'<div class="row">'+
		'<div class="col-sm-4">'+
		'<button type="button" id = "call_submit" class="btn btn-primary" name ="submit">Add Contact</button>'+		
		'</div>'+
		'</div>'+
		'</div>'	




var Contact = function(){
	this.id = null;
	this.address = "";
	this.cell = null;
	this.email = null;
	this.telephone = null;
	this.html_node = $(HT)[0];
	this.container = null;
	this.btn_ = null;
}


Contact.prototype.render = function(container){
	this.container = container;
	container.appendChild(this.html_node);
	this.bind_all();
}

Contact.prototype.bind_all = function(){
	if (this.container == null){
		return false;
	}
	this.address = $(this.html_node).find("#address_id")[0];
	this.cell = $(this.html_node).find("#cell_phone_id")[0];
	this.email = $(this.html_node).find("#email_id")[0];
	this.telephone = $(this.html_node).find("#telephone_id")[0];
	this.btn_ = $("#call_submit");
	p = this;
	$(this.btn_).click(function(){p.submit();});
	return true;
}

Contact.prototype.submit = function(){
	if( this.container == null){
		return false;
	}
	$.ajax({
		url: "/regmain/add_contact_info/",
		data: {										
				address : this.address.value,
				cell_phone : this.cell.value,						
				email : this.email.value,	
				telephone : this.telephone.value,							
		},
		type: "POST",
		dataType: "json",
	});
	return true;
}	
	