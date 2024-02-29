export const languages = {
    en: 'en English',
    ru: 'ru Русский',
  };
  
  export const showDefaultLang = true;
  export const defaultLang = 'en';
  
  export const routes = {
    // en: {
    //   'blog': 'articles',
    // },
    // ru: {
    //   'blog': 'блог',
    // },
  }

  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.blog': 'Blog',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'footer.copyright': 'Copyright © <span id="currentYear"></span> All rights reserved.',
      'portfolio.subDesc': 'Technologies i used:',
      'portfolio.externalButton': 'Check out'
    },
    ru: {
        'nav.home': 'Главная',
        'nav.blog': 'Блог',
        'nav.about': 'Обо мне',
        'nav.portfolio': 'Портфолио',
        'footer.copyright': 'Авторское право © <span id="currentYear"></span> Все права защищены.',
        'portfolio.subDesc': 'Использованные технологии:',
        'portfolio.externalButton': 'Смотреть'
    },
  } as const;