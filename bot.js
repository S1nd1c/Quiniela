function findUserName(initData) {
    let userTitle = document.getElementById("userName");
    console.log(userTitle)

    userTitle.textContent = initData.user.username;
}


function run() {
    const initData = window.Telegram.WebApp.initDataUnsafe;
    findUserName(initData)
}



if(window.Telegram.WebApp) {
    run();
} else {
    console.log("WebApp not initialized");
}