const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if (signUpButton) {
  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });
}

if (signInButton) {
  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
}

window.addEventListener('load', function() {
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    // Ouvrir/fermer le menu
    toggle.addEventListener('click', function() {
      links.classList.toggle('active');
    });

    // Fermer le menu après clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        links.classList.remove('active');
      });
    });
  }
});
