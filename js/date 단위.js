var now = new Date();
console.log("현재를 기준으로 : " + now);

var MonthAgo = new Date(now.setMonth(now.getMonth()-1)); // set으로 설정을 할거야 현재 now에 대한 월의 값(getMonth)을 
console.log("한달 전 계산하기 : " + MonthAgo);

var MonthLater = new Date(now.setMonth(now.getMonth()+1));
console.log("한달 후 계산하기 : " + MonthLater);