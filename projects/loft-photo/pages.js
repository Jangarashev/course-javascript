const pagesMap = {
    login: '.page-login',
    main: '.page-main',
    profile: '.page-profile',
  };
  
  export default {
    openPage(name) {
        pages.openPage('main'); 
        pages.openPage('profile'); 
        pages.openPage('login'); 
    },
  };
  