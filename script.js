function rollDice() {
    var betAmount = parseInt(document.getElementById("betAmount").value);
    var diceResult = Math.floor(Math.random() * 6) + 1; // 1에서 6까지의 난수 생성

    var guess = prompt("주사위의 값은 무엇입니까? (1에서 6까지의 정수를 입력하세요)");

    if (guess === null) {
        return; // 사용자가 취소 버튼을 누르면 함수 종료
    }

    guess = parseInt(guess);

    if (isNaN(guess) || guess < 1 || guess > 6) {
        alert("올바른 입력이 아닙니다. 1에서 6까지의 정수를 입력하세요.");
        return;
    }

    var message;

    if (guess === diceResult) {
        var winnings = betAmount * 2;
        message = "축하합니다! 주사위의 값은 " + diceResult + "이었습니다. " + winnings + "만큼의 금액을 획득하셨습니다!";
    } else {
        message = "안타깝습니다. 주사위의 값은 " + diceResult + "이었습니다. " + betAmount + "만큼의 금액을 잃었습니다.";
    }

    document.getElementById("result").innerText = message;
}
