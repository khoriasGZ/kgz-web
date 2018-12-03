/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Footer from 'src/components/Footer';
import Blog from 'src/components/App/Blog';

/*
 * Code
 */
const App = () => (
  <div id="app">
    <header id="app-header"> 
      <img
        id="header-background"
        alt="background du header"
        src="/images/star.jpg" 
      />
    <div id="header-presentation"> 
        <h1>Kevin GOMEZ</h1>
        <h2>Site WEB</h2>
    </div>
    </header>
    <main id="app-content">
      <div id="app-content-espace-pro">
        <Blog />
      </div>
      <div id="app-content-espace-perso">
        je suis le block 2
      </div>
    </main>
    <Footer />
  </div>
);


/*
 * Export default
 */
export default App;
