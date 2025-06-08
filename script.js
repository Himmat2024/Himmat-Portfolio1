 <script>
    function filterProjects(category) {
      const buttons = document.querySelectorAll('.filter-buttons button');
      buttons.forEach(btn => btn.classList.remove('active'));

      const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase() === category);
      if (activeButton) activeButton.classList.add('active');

      const projects = document.querySelectorAll('[data-category]');
      projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
          project.classList.add('show');
        } else {
          project.classList.remove('show');
        }
      });
    }
  </script>