function convert(){
    var intemp=document.getElementById('inputTemp');
    var choice=document.getElementById('inputChoice');
    var temp=parseFloat(intemp.value);
    var conv=choice.value;
    var ans=document.getElementById('answer');
    if(conv=="cf"){
        var ct= (9*temp/5)+32;
        ans.innerHTML= temp +" °C = " +ct.toFixed(2)+ " °F";
    }else if(conv=="ck"){
        var ct=temp+273.15;
        ans.innerHTML=temp +" °C = "+ct.toFixed(2)+ " °K";
    }else if(conv=="fc"){
        var ct=(temp-32)*5/9;
        ans.innerHTML=temp +" °F = "+ct.toFixed(2)+ " °C";
    }else if(conv=="fk"){
        var ct=((temp-32)*5/9)+273.15;
        ans.innerHTML=temp +" °F = "+ct.toFixed(2)+ " °K";
    }else if(conv=="kc"){
        var ct=temp-273.15;
        ans.innerHTML=temp +" °K = "+ct.toFixed(2)+ " °C";
    }else if(conv=="kf"){
        var ct=((temp-273.15)*5/9)+32;
        ans.innerHTML=temp +" °K = "+ct.toFixed(2)+ " °C";
    }
}