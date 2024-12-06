
const targetNumber = Math.floor(Math.random() * 98) + 1;
let attemptsLeft = 7;


let minRange = 1;
let maxRange = 100;

function playGame() {
    while (attemptsLeft > 0) {
        
        const guess = window.prompt(`猜一個數字（範圍：${minRange}~${maxRange}）。剩餘次數：${attemptsLeft}`);
        
       
        if (guess === null) {
            alert("遊戲已取消！");
            return;
        }

        const number = parseInt(guess, 10);
        if (isNaN(number) || number < minRange || number > maxRange) {
            alert(`輸入有誤！請輸入 ${minRange}~${maxRange} 的有效數字。`);
            continue;
        }

        attemptsLeft--;

       
        if (number === targetNumber) {
            alert("恭喜你答對了！");
            document.getElementById("result").innerHTML = `<img src="cat.jpg" alt="Correct!">`;
            return;
        } else if (number > targetNumber) {
            alert("太大了！");
            
            maxRange = number - 1;
        } else {
            alert("太小了！");
            
            minRange = number + 1;
        }
    }

    
    alert(`很遺憾，你已經用完所有次數！正確答案是：${targetNumber}`);
    document.getElementById("result").innerHTML = `<img src="trump.jpg" alt="Wrong!">`;
}


playGame();

