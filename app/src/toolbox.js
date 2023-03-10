// Blockly.devicesFlyoutCallback_event
// Blockly.devicesFlyoutCallback_condition
// Blockly.devicesFlyoutCallback_action
//
//   - Category: Event, Condition, Action categories를 동적으로 만드는 함수
//   - 부가 함수
//       addXml, event_block, condition_block, action_block
//

// The default event block category

// toolbox.js:54 <xml><block type="e_installed"></block></xml>
// toolbox.js:77 <xml><block type="inpute_data"></block></xml>
// toolbox.js:87 <xml><block type="specific_event"></block></xml>
// toolbox.js:97 <xml><block type="e_location"></block></xml>
// toolbox.js:106 <xml><block type="e_app"></block></xml>
// toolbox.js:761 <xml><block type="any"><value name="p"><block type="specific_event"></block></value><statement name="group"><block type="group"></block></statement></block></xml>
// toolbox.js:582 <xml><block type="e_time"></block></xml>
// toolbox.js:591 <xml><block type="e_day"></block></xml>
// toolbox.js:600 <xml><block type="e_week"></block></xml>
// toolbox.js:609 <xml><block type="input_time"></block></xml>
// toolbox.js:618 <xml><block type="e_timer"></block></xml>
// toolbox.js:119 <xml><block type="e_updated"></block></xml> 


Blockly.devicesFlyoutCallback_event = function(workspace) {
	// xmlList를 초기화
	var xmlList = [];
	
	// 선택한 장치 selected_dev의 각 이벤트 항목 item에 대하여
	// 적절한 속성의 블록을 만들어 xmlList에 추가
	selected_dev.forEach(function(itme){
		var device = itme
	   if(attrMap.makeBlock(device)){
			if(attrMap.isSingle(device)){
				var attr = attrMap.getSingle(device)
				var id = attr.id
				var type = attr.type
	
				// block/event.js의 event_block 함수 호출하여
				// 이벤트 블록을 만들어 리턴하는 함수를
				// Blockly.SmartThings 배열에 등록
				event_block(device, "Single", type, id);

				// xmlList에 위 이벤트 블록과 동일 이름의 xml을 만들어 추가
				var block = addXml("e_"+device+"Single"+type+id)
				xmlList.push(block)
			}else if(attrMap.isMultiple(device)){
				var attr_map = attrMap.getMultiple(device)
							
				attr_map.forEach(function (item, key, mapObj) {
					var attr = item
					var id = attr.id
					var type = attr.type
					event_block(device, "Multiple", type, id);
					var block = addXml("e_"+device+"Multiple"+type+id)
					xmlList.push(block)
				});
			
				
			}
		}
	});
	
	
	if (Blockly.Blocks["e_installed"]) {
		  var blockText = '<xml>' +
			  '<block type="e_installed">' +
			  '</block>' +
			  '</xml>';
		  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		xmlList.push(block)
	} 
		 

	subscribes_fromaction.forEach(function (item, key, mapObj) {
		var method_blockId = key
		var input_block = item; //subscribes_fromaction.set(this.id, [input_type, input_name, attr])

		//var sub_block = workspace.getBlockById(method_blockId)
		
		event_block2(method_blockId, input_block)
		var block = addXml('e_sub'+input_block[3])
		xmlList.push(block)
	});

		 
	if (Blockly.Blocks["inpute_data"]) {
		  var blockText = '<xml>' +
			  '<block type="inpute_data">' +
			  '</block>' +
			  '</xml>';
		  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
		 
	if (Blockly.Blocks["specific_event"]) {
		  var blockText = '<xml>' +
			  '<block type="specific_event">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 

	if (Blockly.Blocks["e_location"]) {
		  var blockText = '<xml>' +
			  '<block type="e_location">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	if (Blockly.Blocks["e_app"]) {
		  var blockText = '<xml>' +
			  '<block type="e_app">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	add_groupingBlock_xml("any", Block_colour_event, xmlList);
	add_schedule_xml(xmlList)

	
	if (Blockly.Blocks["e_updated"]) {
		  var blockText = '<xml>' +
			  '<block type="e_updated">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
		 
	console.log(xmlList)

	// 추가된 블록들을 포함하는 xmlList를 리턴하면
	// Blockly에서 이를 모두 메뉴로 보여줌
	return xmlList;
};

// The default condition block category

// toolbox.js:694 <xml><block type="operation"></block></xml>
// toolbox.js:703 <xml><block type="negate"></block></xml>
// toolbox.js:712 <xml><block type="boolean"></block></xml>
// toolbox.js:722 <xml><block type="compare"></block></xml>
// toolbox.js:731 <xml><block type="dev_attr"></block></xml>
// toolbox.js:740 <xml><block type="device_list"></block></xml>
// toolbox.js:160 <xml><block type="inputc_data"></block></xml>
// toolbox.js:169 <xml><block type="datac"></block></xml>
// toolbox.js:179 <xml><block type="condition_state"></block></xml>
// toolbox.js:188 <xml><block type="math_condition"></block></xml>
// toolbox.js:198 <xml><block type="is_null"></block></xml>
// toolbox.js:209 <xml><block type="last_event_data"></block></xml>
// toolbox.js:220 <xml><block type="already_enum"></block></xml>
// toolbox.js:229 <xml><block type="already_num"></block></xml>
// toolbox.js:238 <xml><block type="happen_enum_dropdown"></block></xml>
// toolbox.js:249 <xml><block type="now_c"></block></xml>
// toolbox.js:258 <xml><block type="function_invocation_c"></block></xml>
// toolbox.js:267 <xml><block type="getsunrise_c"></block></xml>
// toolbox.js:277 <xml><block type="getsunset_c"></block></xml>
// toolbox.js:288 <xml><block type="getlocation_c"></block></xml>
// toolbox.js:297 <xml><block type="getlocationmode_c"></block></xml>
// toolbox.js:307 <xml><block type="getweatherfeature_c"></block></xml>
// toolbox.js:789 <xml><block type="all"><statement name="group"><block type="group"></block></statement></block></xml>
// toolbox.js:789 <xml><block type="exists"><statement name="group"><block type="group"></block></statement></block></xml>

Blockly.devicesFlyoutCallback_condition = function(workspace) {
	var xmlList = [];

	// 선택한 장치 selected_dev의 각 이벤트 항목 item에 대하여
	// 적절한 속성의 블록을 만들어 xmlList에 추가
	selected_dev.forEach(function(itme){
		var device = itme;

		if(attrMap.isSingle(device)){
			condition_block(device, "single");
			var block = addXml("c_"+device+"single")
			xmlList.push(block);
		}else if(attrMap.isMultiple(device)){			
			condition_block(device,"multiple");
			var block = addXml("c_"+device+"multiple")
			xmlList.push(block);


		}
	});

	
	add_logic_xml(xmlList)

		
	if (Blockly.Blocks["inputc_data"]) {
		  var blockText = '<xml>' +
			  '<block type="inputc_data">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["datac"]) {
		  var blockText = '<xml>' +
			  '<block type="datac">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["condition_state"]) {
		 var blockText = '<xml>' +
			  '<block type="condition_state">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["math_condition"]) {
		 var blockText = '<xml>' +
			  '<block type="math_condition">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["is_null"]) {
		 var blockText = '<xml>' +
			  '<block type="is_null">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}


	if (Blockly.Blocks["last_event_data"]) {
		 var blockText = '<xml>' +
			  '<block type="last_event_data">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	//already
	if (Blockly.Blocks["already_enum"]) {
		 var blockText = '<xml>' +
			  '<block type="already_enum">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["already_num"]) {
		 var blockText = '<xml>' +
			  '<block type="already_num">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["happen_enum_dropdown"]) {
		 var blockText = '<xml>' +
			  '<block type="happen_enum_dropdown">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	
	if (Blockly.Blocks["now_c"]) {
		 var blockText = '<xml>' +
			  '<block type="now_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["function_invocation_c"]) {
		 var blockText = '<xml>' +
			  '<block type="function_invocation_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["getsunrise_c"]) {
		 var blockText = '<xml>' +
			  '<block type="getsunrise_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["getsunset_c"]) {
		 var blockText = '<xml>' +
			  '<block type="getsunset_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
		 

	if (Blockly.Blocks["getlocation_c"]) {
		 var blockText = '<xml>' +
			  '<block type="getlocation_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["getlocationmode_c"]) {
		 var blockText = '<xml>' +
			  '<block type="getlocationmode_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["getweatherfeature_c"]) {
		 var blockText = '<xml>' +
			  '<block type="getweatherfeature_c">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
		 
	add_groupingBlock_xml("all", Block_colour_condition, xmlList);
	add_groupingBlock_xml("exists", Block_colour_condition, xmlList);
		 

  return xmlList;
};

// The default action block category

// toolbox.js:372 <xml><block type="action_group"></block></xml>
// toolbox.js:382 <xml><block type="inputa_data"></block></xml>
// toolbox.js:391 <xml><block type="dataa"></block></xml>
// toolbox.js:401 <xml><block type="action_state"></block></xml>
// toolbox.js:410 <xml><block type="action_state_def"></block></xml>
// toolbox.js:420 <xml><block type="math_action"></block></xml>
// toolbox.js:432 <xml><block type="send"><field name="phone">+8210</field><field name="mes"></field></block></xml>
// toolbox.js:443 <xml><block type="sendpush"><field name="mes"></field></block></xml>
// toolbox.js:454 <xml><block type="sendsms"><field name="phone">+82010</field><field name="mes"></field></block></xml>
// toolbox.js:464 <xml><block type="sendnotification"><field name="mes"></field></block></xml>
// toolbox.js:630 <xml><block type="a_timer_after"></block></xml>
// toolbox.js:639 <xml><block type="a_timer_every"></block></xml>
// toolbox.js:648 <xml><block type="a_time"></block></xml>
// toolbox.js:657 <xml><block type="a_day"></block></xml>
// toolbox.js:666 <xml><block type="a_week"></block></xml>
// toolbox.js:675 <xml><block type="a_stop"></block></xml>
// toolbox.js:775 <xml><block type="map"><statement name="group"><block type="group"></block></statement></block></xml>
// toolbox.js:477 <xml><block type="now_a"></block></xml>
// toolbox.js:486 <xml><block type="function_invocation_a"></block></xml>
// toolbox.js:496 <xml><block type="subscribe_method"></block></xml>
// toolbox.js:505 <xml><block type="location_a"></block></xml>
// toolbox.js:514 <xml><block type="app_a"></block></xml>
// toolbox.js:526 <xml><block type="getlocation_a"></block></xml>
// toolbox.js:536 <xml><block type="getsunrise_a"></block></xml>
// toolbox.js:546 <xml><block type="getsunset_a"></block></xml>
// toolbox.js:557 <xml><block type="getweatherfeature_a"></block></xml>
// toolbox.js:567 <xml><block type="setlocationmode_a"></block></xml>

Blockly.devicesFlyoutCallback_action = function(workspace) {
	var xmlList = [];
	
	selected_dev.forEach(function(itme){
		var device = itme
	   if(commMap.makeBlock(device)){
			if(commMap.hasCommad(device)){
				action_block(device, "Command");
				var block = addXml("a_"+device+"Command")
				xmlList.push(block)
			}
			if(commMap.hasMethod(device)){
				action_block(device, "Method");
				var block = addXml("a_"+device+"Method")
				xmlList.push(block)
			}
			if(commMap.hasMethodS(device)){
				action_block(device, "MethodS");
				var block = addXml("a_"+device+"MethodS")
				xmlList.push(block)
			}
			
		}

	});



	selected_dev.forEach(function(itme){
		var device = itme;

		if(attrMap.isSingle(device)){
			action_block2(device, "single");
			var block = addXml("a_"+device+"single")
			xmlList.push(block);
		}else if(attrMap.isMultiple(device)){			
			action_block2(device,"multiple");
			var block = addXml("a_"+device+"multiple")
			xmlList.push(block);


		}


	});



	if (Blockly.Blocks["action_group"]) {
		 var blockText = '<xml>' +
			  '<block type="action_group">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["inputa_data"]) {
		 var blockText = '<xml>' +
			  '<block type="inputa_data">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["dataa"]) {
		 var blockText = '<xml>' +
			  '<block type="dataa">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["action_state"]) {
		 var blockText = '<xml>' +
			  '<block type="action_state">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["action_state_def"]) {
		 var blockText = '<xml>' +
			  '<block type="action_state_def">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["math_action"]) {
		 var blockText = '<xml>' +
			  '<block type="math_action">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	
	if (Blockly.Blocks["send"]) {
		var blockText = '<xml>' +
		  '<block type="send">' +
		  '<field name="phone">+8210</field>'+
		  '<field name="mes"></field>'+
		  '</block>' +
		  '</xml>';
		  console.log(blockText)
		var block = Blockly.Xml.textToDom(blockText).firstChild;
		xmlList.push(block)
	}	

	 if (Blockly.Blocks["sendpush"]) {
		  var blockText = '<xml>' +
			  '<block type="sendpush">' +
			  '<field name="mes"></field>'+
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["sendsms"]) {
		var blockText = '<xml>' +
		  '<block type="sendsms">' +
		  '<field name="phone">+82010</field>'+
		  '<field name="mes"></field>'+
		  '</block>' +
		  '</xml>';
		  console.log(blockText)
		var block = Blockly.Xml.textToDom(blockText).firstChild;
		xmlList.push(block)
	}
	if (Blockly.Blocks["sendnotification"]) {
		var blockText = '<xml>' +
		  '<block type="sendnotification">' +
		  '<field name="mes"></field>'+
		  '</block>' +
		  '</xml>';
		  console.log(blockText)
		var block = Blockly.Xml.textToDom(blockText).firstChild;
		xmlList.push(block)
	}

	add_timer_xml(xmlList)
	add_groupingBlock_xml("map", Block_colour_action, xmlList);

	if (Blockly.Blocks["now_a"]) {
		 var blockText = '<xml>' +
			  '<block type="now_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["function_invocation_a"]) {
		 var blockText = '<xml>' +
			  '<block type="function_invocation_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["subscribe_method"]) {
		 var blockText = '<xml>' +
			  '<block type="subscribe_method">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["location_a"]) {
		 var blockText = '<xml>' +
			  '<block type="location_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	if (Blockly.Blocks["app_a"]) {
		 var blockText = '<xml>' +
			  '<block type="app_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
		
		 

	if (Blockly.Blocks["getlocation_a"]) {
		 var blockText = '<xml>' +
			  '<block type="getlocation_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["getsunrise_a"]) {
		 var blockText = '<xml>' +
			  '<block type="getsunrise_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["getsunset_a"]) {
		 var blockText = '<xml>' +
			  '<block type="getsunset_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
		 

	if (Blockly.Blocks["getweatherfeature_a"]) {
		 var blockText = '<xml>' +
			  '<block type="getweatherfeature_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	if (Blockly.Blocks["setlocationmode_a"]) {
		 var blockText = '<xml>' +
			  '<block type="setlocationmode_a">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		 var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
		 

  return xmlList;
};
function add_schedule_xml(xmlList){

	 if (Blockly.Blocks["e_time"]) {
		  var blockText = '<xml>' +
			  '<block type="e_time">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["e_day"]) {
		  var blockText = '<xml>' +
			  '<block type="e_day">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["e_week"]) {
		  var blockText = '<xml>' +
			  '<block type="e_week">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["input_time"]) {
		  var blockText = '<xml>' +
			  '<block type="input_time">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["e_timer"]) {
		  var blockText = '<xml>' +
			  '<block type="e_timer">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
}
function add_timer_xml(xmlList){

	 if (Blockly.Blocks["a_timer_after"]) {
		  var blockText = '<xml>' +
			  '<block type="a_timer_after">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["a_timer_every"]) {
		  var blockText = '<xml>' +
			  '<block type="a_timer_every">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["a_time"]) {
		  var blockText = '<xml>' +
			  '<block type="a_time">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["a_day"]) {
		  var blockText = '<xml>' +
			  '<block type="a_day">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["a_week"]) {
		  var blockText = '<xml>' +
			  '<block type="a_week">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
	 if (Blockly.Blocks["a_stop"]) {
		  var blockText = '<xml>' +
			  '<block type="a_stop">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	} 
}

function add_groupingBlock_xml(group, color, xmlList){
	  groupingBlock(color)	
	  var block = addXml(group)
	  xmlList.push(block)
}

function add_logic_xml(xmlList){

	 if (Blockly.Blocks["operation"]) {
		  var blockText = '<xml>' +
			  '<block type="operation">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["negate"]) {
		  var blockText = '<xml>' +
			  '<block type="negate">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["boolean"]) {
		  var blockText = '<xml>' +
			  '<block type="boolean">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

	 if (Blockly.Blocks["compare"]) {
		  var blockText = '<xml>' +
			  '<block type="compare">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["dev_attr"]) {
		  var blockText = '<xml>' +
			  '<block type="dev_attr">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}
	 if (Blockly.Blocks["device_list"]) {
		  var blockText = '<xml>' +
			  '<block type="device_list">' +
			  '</block>' +
			  '</xml>';
			  console.log(blockText)
		  var block = Blockly.Xml.textToDom(blockText).firstChild;
		 xmlList.push(block)
	}

}

function addXml(b){
	if(b == "any"){
		 if (Blockly.Blocks["any"]) {
			  var blockText = '<xml>' +
				  '<block type="any">' +
					  '<value name="p">'+
						  '<block type="specific_event">'+
						  '</block>'+
					  '</value>' +
					  '<statement name="group">'+
						'<block type="group"></block>'+
					  '</statement>'+
				  '</block>' +
				  '</xml>';
				  console.log(blockText)
			  var block = Blockly.Xml.textToDom(blockText).firstChild;
			  return block
		}

	}else if(b == "map"){
		 if (Blockly.Blocks["map"]) {
			  var blockText = '<xml>' +
				  '<block type="map">' +
					  '<statement name="group">'+
						'<block type="group"></block>'+
					  '</statement>'+
				  '</block>' +
				  '</xml>';
				  console.log(blockText)
			  var block = Blockly.Xml.textToDom(blockText).firstChild;
			  return block
		}

	}else if(b == "all" || b == "exists"){
		 if (Blockly.Blocks[b]) {
			  var blockText = '<xml>' +
				  '<block type="'+b+'">' +
					  '<statement name="group">'+
						'<block type="group"></block>'+
					  '</statement>'+
				  '</block>' +
				  '</xml>';
				  console.log(blockText)
			  var block = Blockly.Xml.textToDom(blockText).firstChild;
			  return block
		}

	}
	else{
		 if (Blockly.Blocks[b]) {
			  var blockText = '<xml>' +
				  '<block type="'+b+'">' +
				  '</block>' +
				  '</xml>';
				  console.log(blockText)
			  var block = Blockly.Xml.textToDom(blockText).firstChild;
			  return block
		}
	}
}
function eliminate_A(pblock){
	if(pblock)
		if(pblock.type == "operation"){
			var blockA = pblock.getInputTargetBlock('A');
			var blockB = pblock.getInputTargetBlock('B');
			eliminate_A(blockA)
			eliminate_A(blockB)
		}
		else if(pblock.type == "compare"){
			pblock.removeInput('A');
			pblock.appendDummyInput_n_th('A', 0).appendField("grouping");
		}	
}

function append_A(pblock){
	if(pblock)
		if(pblock.type == "operation"){
			var blockA = pblock.getInputTargetBlock('A');
			var blockB = pblock.getInputTargetBlock('B');
			append_A(blockA)
			append_A(blockB)
		}
		else if(pblock.type == "compare"){
			pblock.removeInput('A');
			pblock.appendValueInput_n_th('A', 0)
		}	
}

