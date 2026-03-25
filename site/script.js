(() => {
  const container = document.querySelector('.scroll-container');
  const pages = document.querySelectorAll('.page');
  const dots = document.querySelectorAll('.dot');
  const scrollHint = document.getElementById('scrollHint');
  const fixedHeader = document.getElementById('fixedHeader');
  const fixedFooter = document.getElementById('fixedFooter');

  // ── Intersection Observer for reveal animations ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, root: container }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // ── Active page tracking for dots ──
  const pageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(pages).indexOf(entry.target);
          dots.forEach((d) => d.classList.remove('active'));
          if (dots[index]) dots[index].classList.add('active');

          // Show fixed header/footer on pages 2–9 (indexes 1–8)
          const showFixed = index >= 1 && index <= 8;
          fixedHeader.classList.toggle('visible', showFixed);
          fixedFooter.classList.toggle('visible', showFixed);

          // Hide scroll hint permanently after leaving cover
          if (scrollHint && index > 8) {
            scrollHint.classList.add('hidden');
          }
        }
      });
    },
    { threshold: 0.5, root: container }
  );

  pages.forEach((page) => pageObserver.observe(page));

  // ── Dot click navigation ──
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      pages[index]?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Keyboard navigation ──
  let currentPage = 0;
  let isScrolling = false;

  document.addEventListener('keydown', (e) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      if (currentPage < pages.length - 1) {
        currentPage++;
        navigateToPage(currentPage);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (currentPage > 0) {
        currentPage--;
        navigateToPage(currentPage);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      currentPage = 0;
      navigateToPage(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      currentPage = pages.length - 1;
      navigateToPage(currentPage);
    }
  });

  function navigateToPage(index) {
    isScrolling = true;
    pages[index]?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling = false; }, 800);
  }

  // Keep currentPage in sync with scroll
  container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;
    const pageHeight = window.innerHeight;
    currentPage = Math.round(scrollTop / pageHeight);

    // Hide scroll hint as soon as user scrolls
    // if (scrollHint && scrollTop > 50) {
    //   scrollHint.classList.add('hidden');
    // }
  });

  // ── Floating Pill ──
  const pillToggle = document.getElementById('pillToggle');
  const pillMenu = document.getElementById('pillMenu');

  if (pillToggle && pillMenu) {
    pillToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      pillMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.pill')) {
        pillMenu.classList.remove('open');
      }
    });

    // Language buttons
    document.querySelectorAll('.pill-lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById('pillThemeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }
})();
