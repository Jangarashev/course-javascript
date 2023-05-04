import pages from './pages';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
    const random = Math.floor(Math.random() * pageNames.length);
});
