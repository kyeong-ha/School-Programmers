// 부족한 금액 계산하기
function solution(price, money, count) {
    let result = 0;
    
    for(let i=1; i<=count; i++){
        let usage_fee = i*price;

        if(money < usage_fee) {
            if(money) { 
                usage_fee -= money;
                money = 0;
            }
            result += Math.abs(money-usage_fee) ;
        }
        else money -= usage_fee;
    }
    
    return result;
}