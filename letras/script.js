// script.js - Canal Letras - Versão corrigida e limpa (Mega links)

const musicas = [
  {
    title: "Burro Caubói",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/BC.jpg",
    mega: "https://drive.google.com/file/d/1QzcK-xR4slEZiTAooN2x9yCz9PmPdc5C/view?usp=sharing" // ← substitua pelo link real do Mega
  },
  {
    title: "Cabrão do Destino",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/CDD.jpg",
    mega: "https://drive.google.com/file/d/193lkDF9-Jlt__DYLq9vDmiASaBtMVo1A/view?usp=sharing"
  },
  {
    title: "Cala Boca, Glerba!",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/CBG.jpg",
    mega: "https://drive.google.com/file/d/1N4NRYnFuKDb0ZTT-1EgvnnO0T_73JqJG/view?usp=sharing"
  },
  {
    title: "Corno de Novo",
    artist: "deevmusics",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/CDN.jpg",
    mega: "https://drive.google.com/file/d/164VrYUnLmYpYr6rel9cxsDWX0o17RNzB/view?usp=sharing"
  },
  {
    title: "Dicionário de Palavrão",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/DP.jpg",
    mega: "https://drive.google.com/file/d/1bxYBadlNFMNhE4WWxC-oPsz3COSOPiaZ/view?usp=sharing"
  },
  {
    title: "Foto na Estante",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/FNE.jpg",
    mega: "https://drive.google.com/file/d/1BGsXPuqo0qaX4q6AecaKejGZSNX52lUR/view?usp=drive_link"
  },
  {
    title: "Fundão dos Fracassados",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/FDF.jpg",
    mega: "https://drive.google.com/file/d/1oAQXgL24Eo4smpR-Oy2SN0Jv-ahEVFj5/view?usp=drive_link"
  },
  {
    title: "Golfe Branquinho",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/GB1.jpeg",
    mega: "https://drive.google.com/file/d/1JTNowKISkZw0m-A_JeAqK6rg949P9rym/view?usp=drive_link"
  },
  {
    title: "Golfe Branco",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/GB2.jpeg",
    mega: "https://drive.google.com/file/d/1dW6sR1Q1BnDPZufORncikHzIv4wi7VhG/view?usp=drive_link"
  },
  {
    title: "Hotel Galinhas",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/HG.jpg",
    mega: "https://drive.google.com/file/d/1fPmRSh5gso0JezlBIYZO7rigmczRhbHO/view?usp=drive_link"
  },
  {
    title: "Hulk do Galo",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/HUG.jpg",
    mega: "https://drive.google.com/file/d/1VCR9qm6IzDVWSRgZaP3irqnhFVm-CNvI/view?usp=drive_link"
  },
  {
    title: "Julietto",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/J.jpg",
    mega: "https://drive.google.com/file/d/1iLq9lHpBEiK8eHAqm_M9maxcFlNBEYqk/view?usp=drive_link"
  },
  {
    title: "Lua",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/L.jpg",
    mega: "https://drive.google.com/file/d/1kGmjF0M2Y_Cw7mzE7jXpnaycjCT1SdFR/view?usp=drive_link"
  },
  {
    title: "Lua de Paçoca",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/LP.jpg",
    mega: "https://drive.google.com/file/d/11ST4m3m0I1WSY-C2mKsjF_qJXtaRn42G/view?usp=drive_link"
  },
  {
    title: "Magazine Estranha",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/ME.jpg",
    mega: "https://drive.google.com/file/d/1GeNqi8gO4ryGKUnrAXOpOdwsa6EPpeq3/view?usp=drive_link"
  },
  {
    title: "Malé",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/ML.jpg",
    mega: "https://drive.google.com/file/d/1gXxEdiFEBHd324M-wK3gkCL-2_7Ml4Vm/view?usp=drive_link"
  },
  {
    title: "Mendigo do Tigrinho",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/MD.jpg",
    mega: "https://drive.google.com/file/d/1UZk-LGHP8ROFLoo_hXzDAX2qJ4LoYghZ/view?usp=drive_link"
  },
  {
    title: "Mercado de Calcinha",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/MC.jpg",
    mega: "https://drive.google.com/file/d/1m5pHD6Cjqqlpq6OZ2C_jolndTctWSwto/view?usp=drive_link"
  },
  {
    title: "Palavrão Day",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/PD.jpg",
    mega: "https://drive.google.com/file/d/1O_exRyY_6y4qOmylbs3AF65OkxZ3oUxY/view?usp=drive_link"
  },
  {
    title: "Phonk do Dino",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/PDD.jpg",
    mega: "https://drive.google.com/file/d/14wseTdWJuLNB9ULtK4yIEtsrbEYx3Lk5/view?usp=drive_link"
  },
  {
    title: "Pocotó na Fazenda",
    artist: "deevmusics",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/PNF.jpg",
    mega: "https://drive.google.com/file/d/18OAYugAkE4PI_DGCxsxCeMBiVbpjSuai/view?usp=drive_link"
  },
  {
    title: "Porra Day",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/PRD.jpg",
    mega: "https://drive.google.com/file/d/1D7GS1UfGpMPwwgB9eIO_RGXEnl5l0OBy/view?usp=drive_link"
  },
  {
    title: "Primo Irritante",
    artist: "rothurmiusek",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/PI.jpg",
    mega: "https://drive.google.com/file/d/10HeO4aBLytMosjT-ZhCh3cJQEHbwTJXN/view?usp=drive_link"
  },
  {
    title: "Thur M Puta Mentirosa",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/TMPM.jpg",
    mega: "https://drive.google.com/file/d/13H25DCmeVcKc2S86eQ0DuAzQAkI79Eam/view?usp=drive_link"
  },
  {
    title: "Vida da Thuremi",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/VT.jpg",
    mega: "https://drive.google.com/file/d/1FEkfWZIPoKC3vzqG-24dj_OSRybDJFcE/view?usp=drive_link"
  },
  {
    title: "Vida Merda",
    artist: "arthurn",
    capa: "C:/Users/CLIENTE/Downloads/deevchadoloads/covers-letras/VM.jpg",
    mega: "https://drive.google.com/file/d/1tt0CCRNnqT6zV9chpQ_nRIGn10CgYvsx/view?usp=drive_link"
  }
];

const capaFallback = "default-cover.jpg";

// Acessa as letras do letras.js
const letras = window.letrasMusicas || {};

// Abre o modal com a letra
function abrirLetra(title) {
  const letra = letras[title] || "Letra não disponível para esta música.";
  const modal = document.createElement("div");
  modal.className = "lyrics-modal";
  modal.innerHTML = `
    <div class="lyrics-content">
      <button class="close-modal">×</button>
      <h3>${title}</h3>
      <div class="lyrics-text">${letra.replace(/\n/g, '<br>')}</div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-modal")) {
      modal.remove();
    }
  });
}

// Renderiza as músicas agrupadas por artista
function renderizarMusicas(filteredMusicas = musicas) {
  const container = document.getElementById("track-list");
  if (!container) return;
  container.innerHTML = '';

  const grupos = filteredMusicas.reduce((acc, m) => {
    if (!acc[m.artist]) acc[m.artist] = [];
    acc[m.artist].push(m);
    return acc;
  }, {});

  Object.keys(grupos).forEach(artist => {
    const section = document.createElement('div');
    section.className = 'artist-group';
    section.innerHTML = `<h3>${artist}</h3>`;

    grupos[artist].forEach(musica => {
      const capaSrc = musica.capa || capaFallback;
      const megaLink = musica.mega || '#'; // Se não tiver link, vai para #

      const div = document.createElement("div");
      div.className = "track";

      div.innerHTML = `
        <img src="${capaSrc}" alt="Capa de ${musica.title}" class="cover">
        <div class="info">
          <h3>${musica.title}</h3>
          <p>${musica.artist}</p>
        </div>
        <!-- Player removido para evitar tela preta; se quiser preview, adicione um player externo aqui -->
        <div class="action-buttons">
          <a href="${megaLink}" target="_blank" class="mega-btn download-btn">Baixar MP3</a>
          <button class="lyrics-btn" data-title="${musica.title}">Letra da Música</button>
        </div>
      `;

      // Evento para abrir letra
      div.querySelector(".lyrics-btn").addEventListener("click", () => {
        abrirLetra(musica.title);
      });

      section.appendChild(div);
    });

    container.appendChild(section);
  });
}

// Toggle de tema claro/laranja
document.getElementById('theme-switch')?.addEventListener('change', (e) => {
  document.body.classList.toggle('theme-white', e.target.checked);
  document.body.classList.toggle('theme-orange', !e.target.checked);
});

// Busca em tempo real
document.getElementById('search-input')?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = musicas.filter(m =>
    m.title.toLowerCase().includes(query) || m.artist.toLowerCase().includes(query)
  );
  renderizarMusicas(filtered);
});

// Toggle de layout (lista vs grade)
const toggleBtn = document.getElementById("toggle-layout");
const trackList = document.getElementById("track-list");
if (toggleBtn && trackList) {
  toggleBtn.addEventListener("click", () => {
    trackList.classList.toggle("grid");
    toggleBtn.textContent = trackList.classList.contains("grid")
      ? "Mudar para Lista"
      : "Mudar para Grade";
  });
}

// Inicializa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderizarMusicas();
});
