var ctx
var canvas
window.onload = function(){
    canvas = document.getElementById('quick');
    console.log(canvas)
    ctx = canvas.getContext('2d');
}

var num = new Array(20);
for (var i = 0; i < num.length; i++) {
    num[i] = i+1;
}

//0부터 num의 끝까지 난수 생성
function quick_btn_event(){
    var temp, tmp

    for(var i =0;i<num.length;i++){
        //0부터 num의 인덱스 끝까지 난수 생성
        tmp = Math.floor(Math.random()*((num.length-1)-0)+1)
        
        temp = num[i];
        num[i] = num[tmp];
        num[tmp] = temp;
    }
    function draw(){
        ctx.fillStyle = "green";
        for(var i=0;i<num.length;i++){
            ctx.fillRect(13+(i*14), 30, 10, 5+num[i]);
        }
    }
}


let x = 0;
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(x, 130, 100, 100);

    x++;

    draw();
}

function draw(){
    ctx.fillStyle = "green";
    for(var i=0;i<num.length;i++){
        ctx.fillRect(13+(i*14), 30, 10, 100);
    }
}
// 5. 애니메이션 함수를 50ms 간격으로 반복 호출
setInterval(animate, 100);
