var op = ['+', '*', '/', '%']
var count = 0;
var re = 0;
function display(value) {
    if (op.includes(value) && document.querySelector('#calc').innerHTML.length == 0)//Preventing displaying opertors in empty calc
    {

    }
    else {
        title.style.display = 'none'
        document.querySelector('#calc').style.opacity = '1'
        if (count == 0)//Cheching rslt is obtained or not
        {
            document.querySelector('#calc').innerHTML = document.querySelector('#rslt').innerHTML;//Resetting the value of calc to rslt
            count++;
        }
        document.querySelector('#rslt').innerHTML = "";
        if (document.querySelector('#calc').innerHTML.length >= 11)//Checking Value in calc is exceeding the div or not
        {
            document.querySelector('#calc').style.fontSize = "30px";
        }
        else {
            document.querySelector('#calc').style.fontSize = "50px";
        }
        if ((!op.includes(value)) & re == 0) {
            document.querySelector('#calc').innerHTML = value;
            re++;
        }
        else {
            if (document.querySelector('#calc').innerHTML === '0' && value != '.') {
                document.querySelector('#calc').innerHTML = value;
            }
            else {
                let calc = document.querySelector('#calc').innerHTML;
                if (op.includes(value) && op.includes(calc[calc.length - 1])) {
                    calc = calc.slice(0, calc.length - 1);
                    calc += value;
                    document.querySelector('#calc').innerHTML = calc;
                }
                else {

                    document.querySelector('#calc').innerHTML += value;//'2'
                    re += 1;
                }
            }
        } //Adding the value to the calc
    }
}

function solution() {
    // var x=document.querySelector('#inpt').value;
    // var y=eval(x);
    // document.querySelector('#inpt').value=y;
    let calc = document.querySelector('#calc').innerHTML;
    if (calc.length == 0) {
        document.querySelector('#calc').innerHTML = '' //Not displaying the calc if = is pressed
    }
    else {
        if (calc.includes("%")) {
            y = calc.slice(0, -1) / 100;
            document.querySelector('#rslt').innerHTML = y;
            if (calc.includes(".")) {
                let val = document.querySelector('#rslt').innerHTML;
                var c = calc.slice(0, -1).split(".")[1].length;
                val = parseFloat(val).toFixed(c + 2);
                document.querySelector('#rslt').innerHTML = val;
            }
        }
        else {
            y = eval(calc);
            document.querySelector('#rslt').innerHTML = y;
            decimal(document.querySelector('#rslt').innerHTML);
        }
        document.querySelector('#calc').style.fontSize = "25px";
        document.querySelector('#calc').style.opacity = '0.6'
        count = 0;
        re = 0;
    }
}

function clearbox() {
    // document.querySelector('#inpt').value="";
    document.querySelector('#calc').innerHTML = ""
    document.querySelector('#rslt').innerHTML = "";
    title.style.display = 'block';

}

function cancle() {
    // let str=document.querySelector('#inpt').value;
    // str = str.substring(0, str.length - 1);
    // document.querySelector('#inpt').value=str;
    rslt = document.querySelector('#calc').innerHTML.slice(0, -1);
    document.querySelector('#calc').innerHTML = rslt;
    document.querySelector('#rslt').innerHTML = "";
    count++;
    re++;
    if (document.querySelector('#calc').innerHTML.length >= 11) {
        document.querySelector('#calc').style.fontSize = "30px";
        document.querySelector('#calc').style.opacity = '1'
    }
    else {
        document.querySelector('#calc').style.fontSize = "50px";
        document.querySelector('#calc').style.opacity = '1'
    }
    if (document.querySelector('#calc').innerHTML.length == 0) {
        title.style.display = 'block';
    }
}

function perc() {
    let calc = document.querySelector('#calc').innerHTML;
    if (calc.length == 0) {
        document.querySelector('#calc').innerHTML = '' //Not displaying the calc if = is pressed without an operands
    }
    else {
        x = document.querySelector('#calc').innerHTML
        y = eval(x);
        document.querySelector('#calc').innerHTML = y;
        display('%');
        // y=y/100;
        // document.querySelector('#rslt').innerHTML = y;
        // document.querySelector('#calc').style.fontSize = "25px";
        // count = 0;
        // re=0;
    }
}

function decimal(y) {
    if (y.length >= 13)//Checking Value in calc is exceeding the div or not
    {
        if (y.includes(".")) {
            y = parseFloat(y).toFixed(12);
            document.querySelector('#rslt').innerHTML = y;
        }
        document.querySelector('#rslt').style.fontSize = "35px";
    }
    else {
        document.querySelector('#rslt').style.fontSize = "50px";
    }
}