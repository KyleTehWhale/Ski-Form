function fade_ski(){
    var type_sel = document.getElementById('type_sel');
    var custy_info = document.getElementById('ski_custy_info');
    
    changeDisplay(type_sel,custy_info);
}
function fade_ski_custyInfo(){
    var custy_info= document.getElementById('ski_custy_info');
    var ski_info = document.getElementById('ski_info');

    changeDisplay(custy_info,ski_info);
}
function fade_skiInfo(){
    var ski_info= document.getElementById('ski_info');
    var ski_sel = document.getElementById('ski_select');

    changeDisplay(bike_info,service_sel);
}
function changeDisplay(element_fade,elemnt_change){
    var object_to_fade = element_fade;
    var object_to_change = elemnt_change;

    object_to_fade.classList.remove('fade_in');
    object_to_fade.classList.add('fade_out');
    setTimeout(function(){
        object_to_fade.style.display = 'none';
        object_to_fade.style.position = 'absolute';
        object_to_change.style.display = 'flex';
        object_to_change.classList.add('fade_in');
    }, 1500);
    
    
}