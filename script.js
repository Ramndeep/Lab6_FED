/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */

// Set a cookie with a name, value, and expiration in days
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

// Get a cookie value by name
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Show the top banner if it hasn't been closed this session
function showTopBanner() {
    if (!sessionStorage.getItem("topBannerClosed")) {
        var banner = document.getElementById("top-banner");
    banner.classList.remove("hide");
    setTimeout(function () {
        banner.classList.add("show");
    }, 50); // Delay to ensure the transition is triggered
}
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
    if (!getCookie("footerBannerClosed")) { 
    document.getElementById("footer-banner").classList.remove("hide");
    }
}

// Show the modal if it hasn't been closed
function showModal() {
    if (!localStorage.getItem("modalClosed")){
    document.getElementById("modal").classList.remove("hide");
    }
}

/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
    document.getElementById("modal").classList.add("hide");
    localStorage.setItem("modalClosed", "true");
}

/**
 * Hides the top banner
 */
function closeTopBanner() {
    setTimeout(() => {
        document.getElementById("top-banner").classList.add("hide");
        sessionStorage.setItem("topBannerClosed", "true");
    }, 2000);
}


/**
 * Hides the footer banner
 */
function closeFooterBanner() {
    document.getElementById("footer-banner").classList.add("hide");
    setCookie("footerBannerClosed", "true", 7);
}
// Clear all data from localStorage, sessionStorage, and cookies
function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = "footerBannerClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("All data has been cleared!");
}

document.getElementById("clear-data").addEventListener("click", clearData);

// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.querySelector("#modal .close").addEventListener("click", closeModal);
document.querySelector("#top-banner .close").addEventListener("click", closeTopBanner);
document.querySelector("#footer-banner .close").addEventListener("click", closeFooterBanner);

// Event listener for Clear Data button
document.getElementById("clear-data").addEventListener("click", clearData);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);