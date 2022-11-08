var ctx
var canvas
    canvas = document.getElementById('quick');
    console.log(canvas)
    ctx = canvas.getContext('2d');
//#region 변수 선언부
/*20개의 인트형 배열 선언 및 1~n까지 순차적으로 기입(블럭의 높이를 계단 형태 구현)*/
class Block{
    constructor(){
        this.xpos = 0;
        this.height = 0;
        this.used_pivot = 0;
    }

    draw(){
        if(this.used_pivot==0){ctx.fillStyle = "green";} 
        else                    {ctx.fillStyle = "white";}
        ctx.fillRect(this.xpos, 140-this.height*5, 10, this.height*5);
    }
}
var B = new Array(20);
for (var i = 0; i < B.length; i++) {
    B[i] = new Block;
    B[i].height = i+1;
    B[i].xpos = 13+((B[i].height-1)*14);
    console.log(i+"번째 클래스")
    console.log("높이 : "+B[i].height)
    console.log("x위치 : "+B[i].xpos)
}

var realarr = new Array(20);
for(var i=0; i<realarr.length;i++){
    realarr=0;
}

var tmp_eliment

//#endregion
function update(){
    /*순서 */
    for(var i=0;i<B.length;i++){                //i는 시작할 피벗의 위치, j는 피벗이 옮겨야 할 위치, q는 
        if(B[i].used_pivot==0){
            for(var j=0;j<realarr.length;j++){
                if(realarr[i]<realarr[j]){
                    tmp_eliment = realarr[j]
                    
                    for(var q=j-1;q>=i;q--){
                        
                    }
                }
            }
        }
    }


    animate();
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /*pivot 삼각형 만들기*/

    for(var i=0;i< B.length;i++){
        B[i].draw()
    }
}
// 5. 애니메이션 함수를 30fps 간격으로 반복 호출
setInterval(update, 50);


//#region /*버튼 관련*/
var btn = document.getElementsByClassName('btn'); /*quick의 관련 버튼은 [0]*/
btn[0].addEventListener('click', function(event){
    quick_btn_event();
    console.log("test");
});

function quick_btn_event(){
    var temp, tmp

    for(var i =0;i<B.length;i++){
        //0부터 num의 인덱스 끝까지 난수 생성
        tmp = Math.floor(Math.random()*((B.length-1)-0)+1)
        
        temp = B[i].height;
        B[i].height = B[tmp].height;
        B[tmp].height = temp;
    }
    for(var i=0;i<B.length;i++){
        realarr[i]=B[i].height
    }
}
//#endregion

//#region 
// #include <stdio.h>
// #include <stdlib.h> //랜덤함수 호출

// void Swap(int arr[], int a, int b) // a,b 스왑 함수 
// {
//     int temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
// int Partition(int arr[], int left, int right)
// {
//     int pivot = arr[left]; // 피벗의 위치는 가장 왼쪽에서 시작
//     int low = left + 1;
//     int high = right;
 
//     while (low <= high) // 교차되기 전까지 반복한다 
//     {
//         while (low <= right && pivot >= arr[low]) // 피벗보다 큰 값을 찾는 과정 
//         {
//             low++; // low를 오른쪽으로 이동 
//         }
//         while (high >= (left+1)  && pivot <= arr[high]) // 피벗보다 작은 값을 찾는 과정 
//         {
//             high--; // high를 왼쪽으로 이동
//         }
//         if (low <= high)// 교차되지 않은 상태이면 스왑 과정 실행 
//         {
//             Swap(arr, low, high); //low와 high를 스왑 
//         }
//     }
//     Swap(arr, left, high); // 피벗과 high가 가리키는 대상을 교환 
//     return high;  // 옮겨진 피벗의 위치정보를 반환 
 
// }
 
 
// void QuickSort(int arr[], int left, int right)
// {
//     if (left <= right)
//     {
//         int pivot = Partition(arr, left, right); // 둘로 나누어서
//         QuickSort(arr, left, pivot - 1); // 왼쪽 영역을 정렬한다.
//         QuickSort(arr, pivot + 1, right); // 오른쪽 영역을 정렬한다.
//     }
// }
 
// //메인함수
// int main()
// {
//     int n,i;
//     int arr[100];

	
//     printf("몇개의 숫자로 정렬하시겠습니까?\n");
//     scanf("%d",&n);

//     for(i = 0 ; i < n ; i++)
//         arr[i]=rand()%1000;

//     printf("정렬전 배열 :");
//     for(i = 0 ; i < n ; i++)
//         printf("%d ", arr[i]);
//     printf("\n");

//     QuickSort(arr,0,n-1);

//     printf("정렬후 배열 :");
//     for(i = 0 ; i < n ; i++)
//         printf("%d ", arr[i]);
//     printf("\n");

//     return 0;
// }
//#region 