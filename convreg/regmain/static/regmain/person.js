// Person model

var TMPL_PERSON = '' +
		'<div class="row">' +
		
		'  <div class="row">' +
		'    <div class="col-sm-4">' +
		'      <label>First Name</label>' +
		'    </div>' +
		'    <div class="col-sm-4">' +
		'      <input type="text" name="txt_first_name" ' +
		'             class="txt_first_name" />' +
		'    </div>' +
		'  </div>' +
		
		'  <div class="row">' +
		'		<div class="col-sm-4">' +
		'      	<label>Airport Info</label>'+
		'    	</div>' + 
		'		<div class="col-sm-4">' +
		'		<input type="button" value="Add Airport Info" id="add_airport_btn"/>' +     
		'    	</div>' + 
		'  </div>' +

		' <div class="row" id="html_add_airport"></div>'+

		'  <div class="row">' +
		'		<div class="col-sm-4">' +
		'      	<label>Contact Info</label>'+
		'    	</div>' + 
		'		<div class="col-sm-4">' +
		'		<input type="button" id="add_contact_btn" value="Contact Info">'+
		'    	</div>' + 
		'  </div>' +

		' <div class="row" id="html_contact_info"></div>'+	

		'  <div class="row">' +
		'		<div class="col-sm-4">' +
		'      	<label>Attendance Type</label>'+
		'    	</div>' + 
		'		<div class="col-sm-4">' +
		'		<select id = "vol_type_id">'+
		'		<option value="Normal">Normal</option>'+
		'		<option value="Worker">Worker</option>'+
		'		<option value="Volunteer">Volunteer</option>'+
		'		</select>'+
		'    	</div>' + 				
		'		<div class="col-sm-4" id="html_att_type"> </div>'+
		'  </div>' +
		'  <div class="row">' +
		'    <div class="col-sm-4">' +
		'      <input type="button" value="Submit" class="btn_person_submit"/>' +
		'    </div>' +
		'  </div>' +		
		'</div>'

var Person = function(family_id) {
		this.id = null;

		this.first_name = "";
		this.last_name = "";
		this.dob = null;
		this.sex = null;
		this.church_id = null;
		this.family_id = family_id;
		this.contact_info_id = null;
		this.att_type_id = null;

		this.container = null;
		this.html_node = $(TMPL_PERSON)[0];

		this.html_contact_info = null;
		this.add_contact_btn = null;

		this.html_add_airport = null;
		this.add_airport_btn = null;
		
		this.txt_first_name = null;
		this.btn_submit = null;

		this.html_att_type = null;
		this.vol_type_id = null;
}

Person.prototype.render = function(container) {
		this.container = container;
		container.appendChild(this.html_node);
		this.bind_inputs();
}

Person.prototype.update_values_from_form = function() {
		if (this.container === null) {
				return false;
		}

		this.first_name = this.txt_first_name.value;
		return true;
}

Person.prototype.process_response = function(json) {
		this.first_name = json.first_name;

		this.update_html_fields();
}

Person.prototype.update_html_fields = function() {
		this.txt_first_name.value = this.first_name;
}

Person.prototype.submit = function() {		
		if (this.container === null) {
				return false;
		}

		this.update_values_from_form();

		p = this;

		$.ajax({
				url: "/regmain/add_person/",
				data: {
						first_name: this.first_name
				},
				type: "POST",
				dataType: "json"
		}).done(function(json) {
				p.process_response(json);
		});
		return true;
}

Person.prototype.bind_inputs = function() {
		if (this.container === null) {
				return false;
		}

		this.txt_first_name = $(this.html_node).find(
				'input.txt_first_name')[0];

		this.html_add_airport = $(this.html_node).find(
				'#html_add_airport')[0];
		this.add_airport_btn = $(this.html_node).find(
				'#add_airport_btn')[0];

		this.html_contact_info = $(this.html_node).find(
				'#html_contact_info')[0];
		this.add_contact_btn = $(this.html_node).find(
				'#add_contact_btn')[0];

		this.btn_submit = $(this.html_node).find(
				'input.btn_person_submit')[0];
		
		this.vol_type_id = $(this.html_node).find(
				'#vol_type_id')[0];															
		this.html_att_type = $(this.html_node).find(
				'#html_att_type')[0];

		p = this;
		x = this;
		y = this;
		$(this.vol_type_id).on("click",function(){			
			if(p.vol_type_id.value == 'Worker' || p.vol_type_id.value == 'Volunteer'){							
				p.voluter_type();
			}
		});
		$(this.btn_submit).on("click",function(){p.submit();});
		$(this.add_airport_btn).on("click",function(){x.add_airport_html();});
		$(this.add_contact_btn).on("click",function(){y.add_contact_html();});
}


Person.prototype.add_airport_html = function(){
	airport = new Airport();	
	airport.render(this.html_add_airport);
}

Person.prototype.add_contact_html = function(){
	contact = new Contact();
	contact.render(this.html_contact_info);
}

Person.prototype.voluter_type = function(){
	vol = new Attendance();
	vol.render(this.html_att_type);
}
