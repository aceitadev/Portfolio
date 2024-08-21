window.onload = function () {
    const last = localStorage.getItem('lastPage');
    if (last === null) {
        localStorage.setItem('lastPage', 'home');
        return;
    }
    if (last === "home") {
        return;
    }
    showPage(last);
};

function showPage(pageId) {
    if (pageId === "clientes") {
        alert("Em desenvolvimento...");
        return;
    }
    if (pageId === "contato") {
        alert("Em desenvolvimento...\nDiscord: aceita");
        return;
    }

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    window.top.document.title = "Portfólio ・ " + format(pageId);
    localStorage.setItem('lastPage', pageId);
    updateIcon(pageId);
}

function updateIcon(iconId) {
    switch (iconId) {
        case 'home':
            setFavicons('assets/icons/home.png');
            break;
        case 'conhecimentos':
            setFavicons('assets/icons/skill.png');
            break;
        case 'clientes':
            setFavicons('assets/icons/clients.png');
            break;
        case 'contato':
            setFavicons('assets/icons/contact.png');
            break;
    }
}

function setFavicons(favImg) {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
}

function format(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}