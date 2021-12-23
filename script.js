function func() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let choose = document.getElementById('choose');
    let box = document.getElementById('box');

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
                x = a / b;
            break;
    }

    box.value = Math.round(x);
}