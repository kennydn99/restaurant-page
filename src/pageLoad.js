import createHomePage from './home.js';
import makeTabsWork from './tabs.js';

function initialLoad() {
    makeTabsWork();
    createHomePage();
}

export default initialLoad;