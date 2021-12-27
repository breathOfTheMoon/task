// "use strict";

function func() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let choose = document.getElementById('choose');
    let box = document.getElementById('box');
    let message = document.getElementById('round');
    let warning = document.getElementById('warning');

    a = Number(num1.value);
    b = Number(num2.value);
    c = choose.value;
    
    switch (c) {
        case 'plus':
            if (c == 'plus')
                x = a + b;
            break;
        case 'minus':
            if (c == 'minus')
                x = a - b;
            break;
        case 'mult':
            if (c == 'mult')
                x = a * b;
            break;
        case 'div':
            if (c == 'div')
                if (b === 0) {
                    num2.classList.add('warning');
                    warning.classList.add('message_warning');
                    break;
                } else {
                    if (num2.classList.contains('warning')) {
                        num2.classList.remove('warning');
                        warning.classList.remove('message_warning');
                        x = a / b;
                    } else {
                        x = a / b;
                    }
                }
            break;
    }

    box.value = Math.round(x);
    
    if (Number(box.value) !== x) {
        message.classList.remove('zero');
    } else {
        if (message.classList.contains('zero')) {
        } else {
            (message.classList.add('zero'));
        }
    }
}