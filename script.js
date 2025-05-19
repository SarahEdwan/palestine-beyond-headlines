document.addEventListener("DOMContentLoaded", async () => {
  const newsEl = document.getElementById("news");

  try {
    const response = await fetch("https://api.mediastack.com/v1/news?access_key=765187919d8b8be05b878d8c5160cff7&keywords=palestine&languages=en&limit=5");
    const data = await response.json();

    data.data.forEach(article => {
      const el = document.createElement("p");
      el.innerHTML = `
        <strong>${article.source}</strong>: 
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">
          ${article.title}
        </a>
      `;
      newsEl.appendChild(el);
    });

  } catch (error) {
    newsEl.innerHTML = "<p>News could not be loaded at this time.</p>";
    console.error("Error fetching news:", error);
  }

  // Map setup
  const map = L.map('map').setView([31.9522, 35.2332], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
});
