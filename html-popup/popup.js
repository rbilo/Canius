const homeBtn = document.getElementById("goToHome");
const homepageURL = "../html-homepage/home.html"

homeBtn.addEventListener("click", () => {
    browser.tabs.create({ url: homepageURL });
});