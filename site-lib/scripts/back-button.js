document.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.className = "back-container";
  container.innerHTML = `
    <a href="https://kmn9.github.io/theopendoor/index.html" class="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
      Back to main page
    </a>
  `;
  document.body.insertBefore(container, document.body.firstChild);

});
