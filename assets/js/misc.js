// Robust modal + topic filter script for /misc page
// - Exposes openModal and showTopic globally for inline onclick compatibility
// - Adds delegated click handlers so inline onclick can be removed safely
// - Safely initializes and even creates the modal markup if missing

(function () {
  // Ensure modal elements exist; create if missing
  function ensureModal() {
    let modal = document.getElementById('photo-modal');
    let modalImg = document.getElementById('modal-img');

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'photo-modal';
      modal.className = 'modal';
      modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <img class="modal-content" id="modal-img">
      `;
      document.body.appendChild(modal);
      modalImg = document.getElementById('modal-img');
    }

    const closeBtn = modal.querySelector('.modal-close');
    return { modal, modalImg, closeBtn };
  }

  // Global: open image modal
  window.openModal = function (img) {
    const { modal, modalImg } = ensureModal();
    if (modal && modalImg && img && img.src) {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
    }
  };

  // Global: filter topic sections
  window.showTopic = function (topicId) {
    // Remove active class from all filter links
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => link.classList.remove('active'));

    // Add active class to selected topic (guard if element not found)
    const activeLink = document.getElementById('filter-' + topicId);
    if (activeLink) activeLink.classList.add('active');

    // Hide all sections first
    const sections = document.querySelectorAll('.topic-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show selected section
    const sectionEl = document.getElementById('section-' + topicId);
    if (sectionEl) sectionEl.classList.remove('hidden');
  };

  document.addEventListener('DOMContentLoaded', function () {
    const { modal, modalImg, closeBtn } = ensureModal();

    // Event delegation for images (works even without inline onclick)
    document.addEventListener('click', function (e) {
      // Click on any image inside .mics-box or .mics-box-image, or with data-modal attribute
      const img = e.target.closest('.mics-box img, .mics-box-image img, img[data-modal]');
      if (img) {
        window.openModal(img);
        return;
      }

      // Close when clicking close button or backdrop
      if (e.target === modal || e.target === closeBtn) {
        modal.style.display = 'none';
      }
    });

    // ESC to close modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });

    // Initialize default section safely
    if (typeof window.showTopic === 'function') {
      window.showTopic('graduation');
    }
  });

  // Menu toggle logic (no-op if elements absent)
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
})();