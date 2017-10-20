/*
Kiran Aranha
Javascript 11-20
October 20, 2017
 */

function firstLast6(array){
    return array[0] == 6 || array[array.length - 1] == 6;
}

function has23(array){
    return array[0] == 2 || array[1] == 2 || array[0] == 3 || array[1] == 3;
}

function fix23(array){
    if(array[0] == 2 && array[1] == 3){
        array[1] = 0;
    }else if(array[1] == 2 && array[2] == 3){
        array[2] = 0;
    }
    return array;
}

function countYZ(str){
    array = str.split(' ');
    var i = 0;
    array.forEach(check);
    function check(x){
        x = x.toLowerCase();
        if(x.endsWith('z') || x.endsWith('y')){
            i += 1
        }
    }
    return i;
}

function endOther(str1, str2){
    return str1.toLowerCase().endsWith(str2.toLowerCase()) || str2.toLowerCase().endsWith(str1.toLowerCase());
}

function starOut(str){
    var x = str.split('');
    var a = 0;
    while(x.includes('*')){
        a = x.lastIndexOf('*');
        x[a + 1] = '';
        x[a] = '';
        if(x[a - 1] !== '*'){
            x[a - 1] = '';
        }
    }
    x = x.join('');
    return x;
}

function getSandwich(sandwich){
    if(sandwich.includes('bread')){
        var bread1 = sandwich.indexOf('bread');
        var bread2 = sandwich.lastIndexOf('bread');
        return sandwich.slice(bread1 + 5, bread2);
    }else{
        return '';
    }
}

function canBalance(array) {
    var value1 = 0;
    var value2 = 0;

    for(var i = 0; i < array.length; i++){
        value2 += array[i];
    }
    for(var x = 0; x <= array.length - 2; x++) {
        value1 += array[x];
        value2 -= array[x];
        if(value1 == value2){
            return true;
        }
    }
    return false;
}

function countClumps(array) {
    var  clumps=0;
    for(var i=0;i<array.length;i++){
        var x=i+1;
        if(array[i]==array[x]){
            clumps++;
            while((array[i]==array[x])){
                if(x==array.length-1){
                    break;
                }
                x+=1;
            }
        }
        i=x-1;
        if(i==length.array-2) {
            break;
        }
    }
    return clumps;
}

function evenlySpaced(a, b, c){
    var mid = 0;
    var max =0;
    var min = 0;
    if((a < b && a > c) || (a > b && a < c)) {
        mid = a;
    }else if((b < c && b > a) || (b > c && b < a)){
        mid = b;
    }else{
        mid = c;
    }
    if(a > mid){
        max = a;
    }else if(c > mid){
        max = c;
    }else{
        max = b;
    }
    if(a < mid){
        min = a;
    }else if(c < mid){
        min = c;
    }else{
        min = b;
    }
    return (min - mid) == (mid - max);
}


function tester() {
    document.getElementById("output").innerHTML = firstLast6([6, 4, 4, 5, 3, 1]);
    document.getElementById("output").innerHTML = has23([6575676, 3]);
    document.getElementById("output").innerHTML = fix23([676, 2, 3]);
    document.getElementById("output").innerHTML = countYZ('poop soup chicken house badz kdny ksndZ djnfY');
    document.getElementById("output").innerHTML = starOut('hs*jel***fj*dls**j*sls*so');
    document.getElementById("output").innerHTML = getSandwich('fyre6grbreadpenut butter and jelly breadjf hhf345uih hfd');
    document.getElementById("output").innerHTML = canBalance([1, 2, 3, 6]);
    document.getElementById("output").innerHTML = countClumps([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 7, 8, 8, 0, 0]);
    document.getElementById("output").innerHTML = evenlySpaced(3, 5, 7);
}
