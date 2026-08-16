let lang = 'es';

const copy = (value) => value?.[lang] || value?.es || '';
const button = document.getElementById('lang');

function renderRestaurants() {
  const target = document.getElementById('restaurant-list');
  if (!siteContent.restaurants.length) {
    target.innerHTML = `<p class="restaurant-empty">${lang === 'es' ? 'Próximamente, nuestros lugares favoritos.' : 'Our favourite places, coming soon.'}</p>`;
    return;
  }
  target.innerHTML = siteContent.restaurants.map((place, index) => `
    <a class="restaurant" href="${place.mapUrl}" target="_blank" rel="noopener noreferrer">
      <span class="restaurant-index">0${index + 1}</span>
      <span><h3>${copy(place.name)}</h3><p>${copy(place.details)}</p></span>
      <span class="restaurant-arrow" aria-hidden="true">↗</span>
    </a>`).join('');
}

function renderActivities() {
  const target = document.getElementById('activities-panel');
  const activities = siteContent.weeklyActivities;

  if (activities.embeds?.length) {
    target.classList.add('no-frame');
    target.style.display = 'block';
    target.style.width = '100%';
    target.innerHTML = activities.embeds.map((embed) => `
      <div class="agenda-embed" style="background:#1e3029; padding:28px 28px 30px; width:min(596px,100%); max-width:596px; margin:0 auto 34px;">
        <h3 class="agenda-embed-title" style="color:#fff; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; margin:0 0 14px; text-align:left;">${copy(embed.title)}</h3>
        <blockquote class="instagram-media" data-instgrm-permalink="${embed.url}" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:8px; margin:0 auto; max-width:540px; width:100%;"></blockquote>
      </div>
    `).join('');
    if (window.instgrm) window.instgrm.Embeds.process();
    return;
  }

  target.classList.remove('no-frame');
  target.style.display = '';
  target.style.width = '';
  if (!activities.items.length) {
    target.innerHTML = `<p class="activity-empty">${lang === 'es' ? 'Muy pronto: una selección de planes para esta semana.' : 'Coming soon: a curated selection of plans for this week.'}</p>`;
    return;
  }
  target.innerHTML = `<p class="activity-week">${copy(activities.week)}</p><ul class="activity-list">${activities.items.map((item) => `
    <li><span class="activity-type">${copy(item.type)}</span><h3>${copy(item.title)}</h3><p>${copy(item.details)}</p></li>`).join('')}</ul>`;
}

function renderLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach((element) => {
    element.innerHTML = element.dataset[lang];
  });
  button.textContent = lang === 'es' ? 'EN' : 'ES';
  button.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  renderRestaurants();
  renderActivities();
}

button.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  renderLanguage();
});

renderLanguage();
