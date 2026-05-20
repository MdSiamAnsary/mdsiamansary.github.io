// partials.js — injects nav, social strip, and footer into every page
(function () {

  const NAV_HTML = `
  <div class="social-strip">
    <a href="https://scholar.google.com/citations?user=LvOwTM8AAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=57223033441"  target="_blank" rel="noopener">Scopus</a>
    <a href="https://orcid.org/0000-0002-4942-2541"                          target="_blank" rel="noopener">ORCID</a>
    <a href="https://www.linkedin.com/in/md-siam-ansary/"                    target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://github.com/MdSiamAnsary/"                               target="_blank" rel="noopener">GitHub</a>
  </div>
  <nav class="topnav">
    <a href="index.html" class="nav-brand">Ansary</a>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="education.html">Education</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>`;

  const FOOTER_HTML = `
  <footer>
    <p>© 2026 Md. Siam Ansary &nbsp;·&nbsp; Assistant Professor, Dept. of CSE, AUST</p>
    <ul class="footer-links">
      <li><a href="about.html">About</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </footer>`;

  // Inject before <main> and after </main>
  const main = document.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('beforebegin', NAV_HTML);
    main.insertAdjacentHTML('afterend',    FOOTER_HTML);
  }

})();
