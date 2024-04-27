function findUserName(initData) {
    let userTitle = document.getElementById("userName");
    console.log(userTitle)

    userTitle.textContent += initData.user.username;
}

function setupMainButton(mainButton) {
    mainButton.setText("Accept");
    if(!mainButton.isVisible) {
        mainButton.show();
    }

    mainButton.onClick(function() {
        console.log("El lili es crack");
    })
}

function run() {
    const mainButton = window.Telegram.WebApp.MainButton;
    const initData = window.Telegram.WebApp.initDataUnsafe;
    findUserName(initData)
    setupMainButton(mainButton)
}


if(window.Telegram.WebApp) {
    run();
} else {
    console.log("WebApp not initialized");
}