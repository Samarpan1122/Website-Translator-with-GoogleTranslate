function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

function hin() {
    $.cookie("googtrans", "/en/hi");
    location.reload();
}

function eng() {
    $.cookie("googtrans", "/en/en");
    location.reload();
}