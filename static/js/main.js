function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

var mila = "\u006d\u0069\u006c\u0061\u0040\u0063\u0069\u0076\u0069\u0063\u0076\u0069\u0073\u0069\u006F\u006E\u002e\u0064\u0065";

function copyToClipboard(text) {
  const listener = function(ev) {
    ev.preventDefault();
    ev.clipboardData.setData('text/plain', text);
  };
  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);

}
addLoadEvent(function () {
  var menuEl = document.getElementById('menu');
  if(menuEl) {
    menuEl.addEventListener('click', function() {
      var menu = document.querySelector("#menu-items");
      menu.classList.toggle("hidden");
      menu.classList.toggle("block");
    });
  }
  document.querySelectorAll('.email').forEach(function(el) {
    el.innerHTML = mila;
    el.addEventListener('click', function(e) {
      e.preventDefault();
      copyToClipboard(mila)
      el.innerHTML = "E-mail kopiert!";
      setTimeout(function() {
        el.innerHTML = mila;
      }, 800)
    })
  })

});
window.addEventListener('scroll', function() {
  if(window.pageYOffset > 100) {
    document.querySelector('body').classList.add("scroll")
  } else {
    document.querySelector('body').classList.remove("scroll")
  }
});
