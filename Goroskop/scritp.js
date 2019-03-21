function play()
{
    alert(getZoo(document.getElementById("myYear").value));
}

function year_plus(year)
{
    return Number(year)+1;
}

function getZoo(year){
 var zoo ="";
 var o_year= Number(year) % 12;
    switch(o_year){
        case 0: zoo = "обезьяна"; break;
        case 1: zoo = "петух"; break;
        case 2: zoo = "собака"; break;
        case 3: zoo = "кабан"; break;
        case 4: zoo = "мышь"; break;
        case 5: zoo = "буйвол"; break;
        case 6: zoo = "тигр"; break;
        case 7: zoo = "кролик"; break;
        case 8: zoo = "дракон"; break;
        case 9: zoo = "змея"; break;
        case 10: zoo = "лошадь"; break;
        case 11: zoo = "коза"; break;
        default: zoo="некоректное значение года"; break;
    }
 return zoo; 
}