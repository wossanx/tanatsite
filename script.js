let favoriteCount = 0;

function buyProduct(event) {
    event.preventDefault();
    alert("Товар добавлен в корзину!");
  
}

function toggleFavorite(event, element) {
    event.preventDefault();
    const icon = element.querySelector('.favoritee');
    icon.classList.toggle('active');
    const isFavorite = icon.classList.contains('active');

    if (isFavorite) {
        favoriteCount++;
    } else {
        favoriteCount--;
    }
}

let likeCount = 0;

function toggleFavorite(element) {
    const icon = element.querySelector('.favoritee');
    icon.classList.toggle('active'); // Переключаем класс
    const isFavorite = icon.classList.contains('active');

    if (isFavorite) {
        likeCount++;
    } else {
        likeCount = Math.max(likeCount - 1, 0); // Не даем счетчику быть отрицательным
    }

    document.getElementById('likeCount').innerText = `${likeCount} Лайков`;
}


function buyProduct() {
    alert("Товар добавлен в корзину!");
}

function toggleFavorite(element) {
    const img = element.querySelector('.favoritee');
    img.classList.toggle('active'); 
}


const translations = {
    ru: {
        logo: "QPICK",
        productTitle: "Аксессуары для <br> Iphone 13 Pro Max",
        casesTitle: "Чехлы",
        caseTypeWhite: "Стеклянные",
        caseTypeYellow: "Силиконовые",
        caseTypeBlack: "Кожаные",
        headphonesTitle: "Беспроводные наушники",
        airpodsName: "Apple AirPods",
        gerlaxName: "GERLAX GH-04",
        borofoneName: "BOROFONE BO4",
        footerLogo: "QPICK",
        favoriteText: "Избранное",
        cartText: "Корзина",
        contactText: "Контакты",
        serviceText: "Условия сервиса"
    },
    kz: {
        logo: "QPICK",
        productTitle: "Iphone 13 Pro Max үшін <br> аксессуарлар",
        casesTitle: "Капа",
        caseTypeWhite: "Шыны",
        caseTypeYellow: "Силиконовые",
        caseTypeBlack: "Былғары",
        headphonesTitle: "Сымсыз құлаққаптар",
        airpodsName: "Apple AirPods",
        gerlaxName: "GERLAX GH-04",
        borofoneName: "BOROFONE BO4",
        footerLogo: "QPICK",
        favoriteText: "Таңдаулылар",
        cartText: "Корзина",
        contactText: "Себет",
        serviceText: "Қызмет шарттары"
    },
    en: {
        logo: "QPICK",
        productTitle: "Accessories for <br> Iphone 13 Pro Max",
        casesTitle: "Cases",
        caseTypeWhite: "Glass",
        caseTypeYellow: "Silicone",
        caseTypeBlack: "Leather",
        headphonesTitle: "Wireless Headphones",
        airpodsName: "Apple AirPods",
        gerlaxName: "GERLAX GH-04",
        borofoneName: "BOROFONE BO4",
        footerLogo: "QPICK",
        favoriteText: "Favorite",
        cartText: "Cart",
        contactText: "Contacts",
        serviceText: "Service Conditions"
    }
};

function changeLanguage(lang) {


    const languageLinks = document.querySelectorAll('.language-link');
    languageLinks.forEach(link => link.classList.remove('active'));

    document.getElementById('logo').innerText = translations[lang].logo;
    document.getElementById('product-title').innerHTML = translations[lang].productTitle;
    document.getElementById('cases-title').innerText = translations[lang].casesTitle;
    document.getElementById('case-type-white').innerText = translations[lang].caseTypeWhite;
    document.getElementById('case-type-yellow').innerText = translations[lang].caseTypeYellow;
    document.getElementById('case-type-black').innerText = translations[lang].caseTypeBlack;
    document.getElementById('headphones-title').innerText = translations[lang].headphonesTitle;
    document.getElementById('airpods-name').innerText = translations[lang].airpodsName;
    document.getElementById('gerlax-name').innerText = translations[lang].gerlaxName;
    document.getElementById('borofone-name').innerText = translations[lang].borofoneName;
    document.getElementById('footer-logo').innerText = translations[lang].footerLogo;
    document.getElementById('favorite-text').innerText = translations[lang].favoriteText;
    document.getElementById('cart-text').innerText = translations[lang].cartText;
    document.getElementById('contact-text').innerText = translations[lang].contactText;
    document.getElementById('service-text').innerText = translations[lang].serviceText;

    const activeLink = document.querySelector(`.${lang}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}