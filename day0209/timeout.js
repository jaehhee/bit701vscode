// setTimeout(함수,시간): 일정 시간이 지나면 딱 한번 함수 호출(ppt 51p)
console.log("안녕하세요");
setTimeout(function(){
    console.log("1초 지났어요!!!");
},1000); //1000이 1초

//화살표 함수를 이용해서 만들어보다
setTimeout(()=>{
    console.log("3초 지났어요!!!");
},30000);
