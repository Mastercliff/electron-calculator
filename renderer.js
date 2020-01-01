let input = document.getElementById('input-main');
let input_init_content;
let input_final_content;

function bClick(e){
    input_init_content = input.value;
    e = e || window.event;
    var target = e.target || e.srcElement 
    val = target.textContent || target.innerText;
    input.value = input_init_content + val;
    input_final_content = input.value;
    console.log(input_final_content);
}

function remo(){
    let b;
    input_init_content = input.value;
    console.log(input_init_content);
    b = input_init_content.substring(0,(input_init_content.length - 1));
    input.value = b;
}

function reset(){
    input.value = ''
}

function result(){
    let a;
    a = eval(input_final_content);
    console.log(a);
    input.value = a;
}

function info_alert(){
    window.alert('Version 1.0\nThanks for testing\n\nDeveloper: MasterCliff \n');
}