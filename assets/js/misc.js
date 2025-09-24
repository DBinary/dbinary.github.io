// Expose functions globally so inline onclick still works
(function () {
  function openModal(img) {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg && img && img.src) {
      modal.style.display = 'block';
      modalImg.src = img.src;
    }
  }

  function showTopic(topicId) {
    // Remove active class from all filter links
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => link.classList.remove('active'));

    // Add active class to selected topic
    const activeLink = document.getElementById('filter-' + topicId);
    if (activeLink) activeLink.classList.add('active');

    // Hide all sections first
    const sections = document.querySelectorAll('.topic-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show selected section
    const sectionEl = document.getElementById('section-' + topicId);
    if (sectionEl) sectionEl.classList.remove('hidden');
  }

  // Attach to window
  window.openModal = openModal;
  window.showTopic = showTopic;
})();

// Modal interactions and default init
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');

  // Bind click on images (works even if inline onclick is removed)
  if (modal && modalImg && closeBtn) {
    document
      .querySelectorAll('.mics-box img, .mics-box-image img')
      .forEach(img => {
        img.addEventListener('click', function () {
          modal.style.display = 'block';
          modalImg.src = this.src;
        });
      });

    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  } else {
    console.warn(
      'Modal elements (#photo-modal, #modal-img, .modal-close) not all found. ' +
        'Image click functionality might be affected. Ensure these elements exist in your HTML.'
    );
  }

  // Initialize with graduation section shown by default
  if (typeof window.showTopic === 'function') {
    window.showTopic('graduation');
  }
});

// --- 菜单切换逻辑（保留原有功能） ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
} else {
  // console.log('Menu toggle elements not found on this page (expected on some pages).');
}