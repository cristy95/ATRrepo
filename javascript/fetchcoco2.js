var siteloc = "http:/localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchinfo(){
	$.ajax({
		url: siteloc + scriptloc + "getcollege.py",
		data:{},
		dataType: 'json'
		success: jQuery(document).ready(function($){

        /*The country onchange starts here*/
        var orig_html;
        var orig_value;
        var state_value;

        var us_states = {AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas'};
	var uk_states = {LN: 'London', WH:'Whales'};
        var $el = $("#location-country");
        $el.data('oldval', $el.val());
        $el.change(function(){
            var $this = $(this);
            if(this.value=="US" && $this.data('oldval')!="US"){
                var str = '<select name="location_state" id="location-state">';
                orig_html = $("#location-state-div").html();
                orig_value = $("#location-state").val();
                for(var st in us_states){
                    if(st == state_value)
                        str += '<option value="'+st+'" selected="selected">'+us_states[st]+'</option>';
                    else
                        str += '<option value="'+st+'">'+us_states[st]+'</option>';
                }
                str += "</select>";
                $("#location-state-div").html(str);
                $this.data('oldval', $this.val());
            }
            else if($this.data('oldval')=="US" && $this.val()!="US"){
                state_value = $("#location-state").val();
                $("#location-state-div").html(orig_html);
                $("#location-state").val(orig_value);
                $this.data('oldval', $this.val());
            }
        });

    });



	}

}

