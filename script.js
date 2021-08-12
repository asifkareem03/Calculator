function display(value) {
    // document.querySelector('#inpt').value+=value;
    inpt.value += value;
}

function solution() {
    // var x=document.querySelector('#inpt').value;
    // var y=eval(x);
    // document.querySelector('#inpt').value=y;
    if (inpt.value == '') {
        inpt.value = ''
    }
    else {
        x = inpt.value;
        y = eval(x);
        inpt.value = y;
    }
}

function clearbox() {
    // document.querySelector('#inpt').value="";
    inpt.value = ''
}

function cancle() {
    // let str=document.querySelector('#inpt').value;
    // str = str.substring(0, str.length - 1);
    // document.querySelector('#inpt').value=str;
    rslt=inpt.value.slice(0,-1);
    inpt.value=rslt;
}