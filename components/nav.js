const navsData = [
    {}
];

function navTemplate(nav) {
    return `
    <nav class="blog-header fixed-top">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-2 logo-div">
                    <a href="index.html"><i class="fas fa-home"></i></a>
                </div>
                <div class="col-8 text-center logo-div">
                    <a class="blog-header-logo" href="index.html">Area Phonebook</a><sup>Beta</sup>
                </div>
                <div class="col-2 d-flex justify-content-end align-items-center logo-div">
                    <div class="nav-item dropdown">
                        <a class="" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                             
                            <!-- <a class="dropdown-item" href="tel:01798899911"><i class="fas fa-phone-alt"></i> আমাদেরকে কল করুন</a> -->
                            <a class="dropdown-item" href="about-us.html"><i class="fas fa-info-circle"></i> আমাদের সম্পর্কে</a>
                            <a class="dropdown-item" href="our-team.html"><i class="fas fa-users"></i> আমাদের টিম</a>
                            <!-- <a class="dropdown-item" href="mailto:areaphonebook@gmail.com"><i class="fas fa-envelope"></i> ইমেল</a> -->
                            <!-- <a class="dropdown-item" href="https://www.facebook.com/AreaPhonebook" target="_blank"><i class="fab fa-facebook-square"></i> ফেসবুক</a> -->
                            <a class="dropdown-item" href="investor.html"><i class="fas fa-handshake"></i> ইনভেস্টর</a>
                            <a class="dropdown-item" href="sponsors.html"><i class="fas fa-handshake"></i> স্পনসর</a>
                            <a class="dropdown-item" href="terms-and-conditions.html"><i class="fas fa-file-alt"></i> টার্মস এন্ড কন্ডিশনস</a>
                            <a class="dropdown-item" href="privacy-policy.html"><i class="fas fa-user-secret"></i> প্রাইভেসি পলিসি</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 

    <div style="margin-top: 50px;"></div>
    `;
}


// <a class="dropdown-item" href="#" id="theme-toggle"><i class="fas fa-user-plus"></i> <span id="theme">Light</span> Mode</a>
// <a class="dropdown-item" href="https://forms.gle/QNqDBmJFR9tnPvwBA" target="_blank"><i class="fas fa-user-plus"></i> আপনার তথ্য যোগ করুন</a>




document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;

{ /* <a href="tel:${nav.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */ }




function getTheme() {
    return localStorage.getItem("theme") || "light";
}

function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');

function applyTheme(theme) {
    document.body.className = theme;
    colorScheme.content = theme;
}

function rotateTheme(theme) {
    if (theme === "light") {
        return "dark";
    }
    return "light";
}

const themeDisplay = document.getElementById("theme");
const themeToggler = document.getElementById("theme-toggle");

// Mimic heavy load done by other JS scripts
setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);
    themeDisplay.innerText = theme;

    themeToggler.onclick = () => {
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);
        themeDisplay.innerText = newTheme;
        saveTheme(newTheme);

        theme = newTheme;
    };
}, 100);