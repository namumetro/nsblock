//이 블럭은 스페셜블럭과 기타블럭을 참고해 만들었습니다.
Entry.staticBlocks = [
{
category: 'start',
blocks: [
'when_run_button_click',
'when_some_key_pressed',
'mouse_clicked',
'mouse_click_cancled',
'when_object_click',
'when_object_click_canceled',
'when_message_cast',
'message_cast',
'message_cast_wait',
'when_scene_start',
'start_scene',
'start_neighbor_scene',
'check_object_property',
'check_block_execution',
'switch_scope',
'is_answer_submited',
'check_lecture_goal',
'check_variable_by_name',
'show_prompt',
'check_goal_success',
'positive_number',
'negative_number',
'wildcard_string',
'wildcard_boolean',
'register_score',
],
},
{
category: 'flow',
blocks: [
'wait_second',
'repeat_basic',
'repeat_inf',
'repeat_while_true',
'stop_repeat',
'_if',
'if_else',
'wait_until_true',
'stop_object',
'restart_project',
'when_clone_start',
'create_clone',
'delete_clone',
'remove_all_clones',
],
},
{
category: 'moving',
blocks: [
'move_direction',
'bounce_wall',
'move_x',
'move_y',
'move_xy_time',
'locate_x',
'locate_y',
'locate_xy',
'locate_xy_time',
'locate',
'locate_object_time',
'rotate_relative',
'direction_relative',
'rotate_by_time',
'direction_relative_duration',
'rotate_absolute',
'direction_absolute',
'see_angle_object',
'move_to_angle',
],
},
{
category: 'looks',
blocks: [
'show',
'hide',
'dialog_time',
'dialog',
'remove_dialog',
'change_to_some_shape',
'change_to_next_shape',
'add_effect_amount',
'change_effect_amount',
'erase_all_effects',
'change_scale_size',
'set_scale_size',
'flip_x',
'flip_y',
'change_object_index',
],
},
{
category: 'brush',
blocks: [
'brush_stamp',
'start_drawing',
'stop_drawing',
'set_color',
'set_random_color',
'change_thickness',
'set_thickness',
'change_brush_transparency',
'set_brush_tranparency',
'brush_erase_all',
],
},
{
category: 'text',
blocks: ['text_blue', 'text_orange', 'text_Yello', 'text_gray ', 'text_flush'],
},
{
category: 'sound',
blocks: [
'sound_something_with_block',
'sound_something_second_with_block',
'sound_from_to',
'sound_something_wait_with_block',
'sound_something_second_wait_with_block',
'sound_from_to_and_wait',
'sound_volume_change',
'sound_volume_set',
'sound_silent_all',
],
},
{
category: 'judgement',
blocks: [
'is_clicked',
'is_press_some_key',
'reach_something',
'boolean_basic_operator',
'boolean_and_or',
'boolean_not',
],
},
{
category: 'calc',
blocks: [
'calc_basic',
'calc_rand',
'coordinate_mouse',
'coordinate_object',
'get_sound_volume',
'quotient_and_mod',
'calc_operation',
'get_project_timer_value',
'choose_project_timer_action',
'set_visible_project_timer',
'get_date',
'distance_something',
'get_sound_duration',
'get_user_name',
'length_of_string',
'combine_something',
'char_at',
'substring',
'index_of_string',
'replace_string',
'change_string_case',
],
},
{
category: 'variable',
blocks: [
'variableAddButton',
'listAddButton',
'ask_and_wait',
'get_canvas_input_value',
'set_visible_answer',
'get_variable',
'change_variable',
'set_variable',
'show_variable',
'hide_variable',
'value_of_index_from_list',
'add_value_to_list',
'remove_value_from_list',
'insert_value_to_list',
'change_value_list_index',
'length_of_list',
'is_included_in_list',
'show_list',
'hide_list',
],
},
{
category: 'func',
blocks: ['functionAddButton'],
},
{
category: 'analysis',
blocks: [
'analizyDataAddButton',
'append_row_to_table',
'insert_row_to_table',
'delete_row_from_table',
'set_value_from_table',
'get_table_count',
'get_value_from_table',
'calc_values_from_table',
'open_table_chart',
'close_table_chart',
],
},
{
category: 'ai_utilize',
blocks: [
'aiUtilizeBlockAddButton',
'aiUtilizeModelTrainButton',
'audio_title',
'check_microphone',
'speech_to_text_convert',
'speech_to_text_get_value',
'get_microphone_volume',
'tts_title',
'read_text',
'read_text_wait_with_block',
'set_tts_property',
'translate_title',
'get_translated_string',
'check_language',
'video_title',
'video_draw_webcam',
'video_check_webcam',
'video_flip_camera',
'video_set_camera_opacity_option',
'video_motion_value',
'video_toggle_model',
'video_is_model_loaded',
'video_number_detect',
'video_toggle_ind',
'video_body_part_coord',
'video_face_part_coord',
'video_detected_face_info',
],
},
{
category: 'expansion',
blocks: [
'expansionBlockAddButton',
'weather_title',
'check_weather',
'check_finedust',
'get_weather_data',
'get_current_weather_data',
'get_today_temperature',
'check_city_weather',
'check_city_finedust',
'get_city_weather_data',
'get_current_city_weather_data',
'get_today_city_temperature',
'festival_title',
'count_festival',
'get_festival_info',
'behaviorConductDisaster_title',
'count_disaster_behavior',
'get_disaster_behavior',
'behaviorConductLifeSafety_title',
'count_lifeSafety_behavior',
'get_lifeSafety_behavior',
],
},
{
category: 'arduino',
blocks: [
'arduino_reconnect',
'arduino_open',
'arduino_cloud_pc_open',
'arduino_connect',
'arduino_download_connector',
'download_guide',
'arduino_download_source',
'arduino_noti',
].concat(EntryStatic.DynamicHardwareBlocks),
}
];
EntryStatic.getAllBlocks = () => {
return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
{ category: 'start', visible: true },
{ category: 'flow', visible: true },
{ category: 'moving', visible: true },
{ category: 'looks', visible: true },
{ category: 'brush', visible: true },
{ category: 'text', visible: true },
{ category: 'sound', visible: true },
{ category: 'judgement', visible: true },
{ category: 'calc', visible: true },
{ category: 'variable', visible: true },
{ category: 'func', visible: true },
{ category: 'analysis', visible: true },
{ category: 'ai_utilize', visible: true },
{ category: 'expansion', visible: true },
{ category: 'arduino', visible: false }, { category: category, visible: true }
]);
for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
}
}
Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
Entry.playground.blockMenu._generateCategoryCode(category);
if (options) {
if (options.background) {
$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
if (options.backgroundSize) {
$(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
}
}
if (options.name) {
$(`#entryCategory${category}`)[0].innerText = options.name
}
}
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
Entry.block[blockname] = {
color: color.color,
outerLine: color.outerLine,
skeleton: skeleton,
statement: [],
params: params.params,
events: {},
def: {
params: params.def,
type: blockname
},
paramsKeyMap: params.map,
class: _class ? _class : 'default',
func: func,
template: template
}
}
///////////////////////////////////////////////////블럭 만들기 시작
addBlock('cs_log','%1콘솔창에 띄우기',{
	color:'#92DD55',
	outerLine:'#92D050'
},{
	params:[{
		type:'Block',
		accept:'string'
	}],
	def:[{
		type:'text',
		params:['Hello, World!']
	}],
	map:{
		CONTENT:0
	}
},'cs',(sprite,script)=>{
	console.log(script.getValue('CONTENT',script))
	script.callReturn()
})
///////////////////////////////////////////////////
addBlock('cs_clear','콘솔 지우기',{
	color:'#92DD55',
	outerLine:'#92D050'
},{
	params:[],
	def:[],
	map:{}
},'cs',(sprite,script)=>{
	console.clear()
	script.callReturn()
})
///////////////////////////////////////////////////
addBlock('_alert','%1alert 창에 띄우기',{
	color:'#92DD55',
	outerLine:'#92D050'
},{
	params:[{
		type:'Block',
		accept:'string'
	}],
	def:[{
		type:'text',
		params:['Hello, World!']
	}],
	map:{
		CONTENT:0
	}
},'pu',(sprite,script)=>{
	alert(script.getValue('CONTENT',script))
})
///////////////////////////////////////////////////
addBlock('_confirm','%1내용의 confirm 창에 확인을 눌렀는가?',{
	color:'#92DD55',
	outerLine:'#92D050'
},{
	params:[{
		type:'Block',
		accept:'string'
	}],
	def:[{
		type:'text',
		params:['Hello, World!']
	}],
	map:{
		CONTENT:0
	}
},'pu',(sprite,script)=>{
	return confirm(script.getValue('CONTENT',script))
},'basic_boolean_field')
///////////////////////////////////////////////////
addBlock('_prompt','%1프롬프트 창에 띄우고 창에 입력한 값',{
	color:'#92DD55',
	outerLine:'#92D050'
},{
	params:[{
		type:'Block',
		accept:'string'
	}],
	def:[{
		type:'text',
		params:['Hello, World!']
	}],
	map:{
		CONTENT:0
	}
},'pu',(sprite,script)=>{
	return prompt(script.getValue('CONTENT',script))
},'basic_string_field')
///////////////////////////////////////////////////
Entry.staticBlocks.push({
category: 'API', blocks: [
	'cs_log',
	'cs_clear',
	'_alert',
	'_confirm',
	'_prompt'
]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware.svg);
background-repeat: no-repeat;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware_on.svg);
background-color: #000;
border-color: #000;
color: #ffff;
}
</style>
`)

$('#entryCategoryAPI').append('스폐셜'), alert("현재스페셜블럭은1.6입니다~(알림)"),console.log("스페셜블럭 작동이 시작되었습니다."),document.title = "Special_Block_entry";
