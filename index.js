window.onload=function() {
    var btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    btn1.onclick=function(){
        rst.innerHTML="";
        var a=1,
            b=1,
            c=a+b,
            arr=[1,1];
        var ipt=document.getElementById("ipt").value;
        if(ipt<2){
            alert("请您输入不小于2的数！")
        }else{
            while(c<=ipt){
                arr.push(c);
                a=b;
                b=c;
                c=a+b;
            }
            rst.innerHTML=arr.join("，");
        }
        btn2.onclick=function(){
            var ipt=document.getElementById("ipt");
            rst.innerHTML="";
            ipt.value="";
        }
    }
};


