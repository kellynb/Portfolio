

window.onload = function () {
    const hideBrewTracker = document.getElementById("brewTracker");
    return hideBrewTracker.style.display = "none"
};

const viewBrewTracker = () => {
    const viewTracker = document.getElementById("brewTracker");
    viewTracker.style.display = "block"

    const hideHomePage = document.getElementById("homePage");
    return hideHomePage.style.display = "none"
}