let goBtn = document.getElementById('submitBtn');
goBtn.addEventListener('click', checkOnClick);
let codeInput = document.getElementById('codeInput');
codeInput.addEventListener('onkeypress', checkOnEnter);

const correctCode = {
    1: 'a',
    2: 'h',
    3: 't',
    4: 'x',
    5: 'm',
    6: 'r',
    7: 'e',
    8: 'j',
    9: 'v',
    10: 's'
}

const nextPage = {
    1: '2927.html',
    2: '3652.html',
    3: '4735.html',
    4: '5691.html',
    5: '6865.html',
    6: '7239.html',
    7: '8679.html',
    8: '9182.html',
    9: '10523.html',
    10: 'end.html'
}

function checkOnClick(event) {
    //grab input
    let userInput = codeInput.value.trim().toLowerCase();
    //check if input is correct
    checkCode(userInput);
    event.preventDefault();
};

//allow enter or return key to input code
function checkOnEnter(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        //grab input
        let userInput = codeInput.value.trim().toLowerCase();
        //check if input is correct
        checkCode(userInput);
    };
};

function checkCode(userInput) {
    if (userInput === correctCode[codeInput.dataset.num]) {
        window.location.href = nextPage[codeInput.dataset.num];
    } else {
        displayTryAgainText();
    }
}

function displayTryAgainText() {
    let tryAgainText = document.getElementById('again');
    tryAgainText.addEventListener('animationend', function() {
        tryAgainText.classList.remove('showTryAgainAnimation');
    });
    tryAgainText.classList.add('showTryAgainAnimation');
}