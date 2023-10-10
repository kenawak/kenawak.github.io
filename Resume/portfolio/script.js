document.addEventListener('DOMContentLoaded', function () {
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    let typed_strings = typedElement.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
  }
});
