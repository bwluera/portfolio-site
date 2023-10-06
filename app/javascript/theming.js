const THEME_KEY = 'theme_preference';
let darkTheme = null;
let lightTheme = null;

function setupThemes() {
    const toggle = document.querySelector("[data-toggle-theme]");

    let themes = toggle.getAttribute("data-toggle-theme").split(",");

    if (themes.length !== 2) {
        console.log("ERROR: Exactly two themes must be specified.")
    }

    [darkTheme, lightTheme] = themes;

    let themePreference = localStorage.getItem(THEME_KEY);

    // If the preference is invalid, use dark theme by default.
    if (!themes.includes(themePreference)) {
        themePreference = darkTheme;
    }

    setTheme(themePreference);
    if (themePreference === darkTheme) {
        document.documentElement.classList.add("dark");
    }

    // When the page loads, this needs to be updated.
    if (themePreference === darkTheme) {
        toggle.checked = true;
    }

    toggle.addEventListener("click", function () {
        toggleTheme();
    })
}

function toggleTheme() {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    let newTheme;
    if (currentTheme === darkTheme) {
        document.documentElement.classList.remove("dark");
        newTheme = lightTheme;
    } else {
        document.documentElement.classList.add("dark");
        newTheme = darkTheme;
    }

    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
}

document.addEventListener("turbo:load", () => {
    setupThemes();
})
