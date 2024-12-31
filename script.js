const sections = document.querySelectorAll('.section1,.section2, .section3, .Abtsection3,.section4, .section5, .header,.contact-container,.contact-box,.map-container,.footer ');

sections.forEach((section) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      section.classList.add('animate');
    }
  }, {
    root: null, // Set root to null to observe the viewport
    threshold: 0.5, // Trigger callback when 50% of the section is in view
  });

  observer.observe(section);
});
