function onButtonClick(event, arguments) {
    let userWindow = window;
    let browser = userWindow.navigator.appCodeName;
    let isUserBrowser = browser === "Mozilla";

    if (isUserBrowser) {
        alert("Yes");
    } else {
        alert("No");
    }
}