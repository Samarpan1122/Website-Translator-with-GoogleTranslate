$.cookie("googtrans", "/en/hi");

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout:
    google.translate.TranslateElement.InlineLayout.SIMPLE},
    'google_translate_element');
    }
