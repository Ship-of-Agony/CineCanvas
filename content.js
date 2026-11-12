(() => {
  if (window.__cineCanvasLoaded) return;

  const currentHost = location.hostname.toLowerCase().replace(/^www\./, '');
  const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();

  const translations = {
    de: {
      title: 'CineCanvas Optionen', autoCropTitle: 'Auto-Erkennung', autoCropDesc: 'Balken automatisch wegschneiden', brandWingsTitle: 'Kino-Seitenrahmen', brandWingsDesc: 'Rahmen an den Seiten anzeigen',
      frameData: 'Design:', customBg: 'Eigenes Bild', btnChoose: 'Wählen',
      ambientMenu: 'Ambilight', ambientSettings: 'Ambilight-Einstellungen',
      wingDim: 'Hintergrund-Dimmung', auraBlur: 'Hintergrund-Blur', edgeBlend: 'Weicher Video-Rand', outerFade: 'Außenrand-Fade',
      off: { name: 'Aus (Standard)', desc: 'Originalformat' }, crop: { name: '21:9 Crop', desc: 'Zoom (schneidet Balken ab)' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal auf 21:9 dehnen' }, shadow: { name: 'Cinematic Shadow', desc: 'Sanfte Kanten & dezentes Licht' }, soft: { name: 'Soft Ambient Glow', desc: 'Milchig-weiches Video-Ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intensives Vollbild-Video-Ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Eigenes Bild...'
    },
    en: {
      title: 'CineCanvas Options', autoCropTitle: 'Auto Detect', autoCropDesc: 'Auto crop letterbox bars', brandWingsTitle: 'Cinema Side Wings', brandWingsDesc: 'Show side frames',
      frameData: 'Design:', customBg: 'Custom Image', btnChoose: 'Choose',
      ambientMenu: 'Ambilight', ambientSettings: 'Ambilight Settings',
      wingDim: 'Background Dimming', auraBlur: 'Background Blur', edgeBlend: 'Soft Video Edge', outerFade: 'Outer Edge Fade',
      off: { name: 'Off (Default)', desc: 'Original format' }, crop: { name: '21:9 Crop', desc: 'Zoom to fill 21:9' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal stretch' }, shadow: { name: 'Cinematic Shadow', desc: 'Soft edges & subtle glow' }, soft: { name: 'Soft Ambient Glow', desc: 'Milky soft video ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intense full video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Custom Image...'
    },
    fr: {
      title: 'Options CineCanvas', autoCropTitle: 'Détection Auto', autoCropDesc: 'Recadrer automatiquement les barres', brandWingsTitle: 'Cadres Latéraux', brandWingsDesc: 'Afficher les cadres sur les côtés',
      frameData: 'Design:', customBg: 'Image Personnalisée', btnChoose: 'Choisir',
      ambientMenu: 'Ambilight', ambientSettings: 'Paramètres Ambilight',
      wingDim: 'Assombrissement fond', auraBlur: 'Flou d\'arrière-plan', edgeBlend: 'Bord Vidéo Doux', outerFade: 'Fondu extérieur',
      off: { name: 'Désactivé', desc: 'Format original' }, crop: { name: '21:9 Recadrer', desc: 'Zoom sur 21:9' }, stretch: { name: '21:9 Étirer', desc: 'Étirement horizontal' }, shadow: { name: 'Ombre Cinématique', desc: 'Bords doux & lueur subtile' }, soft: { name: 'Lueur Ambiante', desc: 'Ambilight vidéo doux' }, vivid: { name: 'Ambilight Vif', desc: 'Ambilight vidéo intense' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Image Personnalisée...'
    },
    es: {
      title: 'Opciones CineCanvas', autoCropTitle: 'Detección Auto', autoCropDesc: 'Recortar barras automáticamente', brandWingsTitle: 'Marcos Laterales', brandWingsDesc: 'Mostrar marcos en los lados',
      frameData: 'Diseño:', customBg: 'Imagen Personalizada', btnChoose: 'Elegir',
      ambientMenu: 'Ambilight', ambientSettings: 'Ajustes de Ambilight',
      wingDim: 'Atenuación fondo', auraBlur: 'Desenfoque fondo', edgeBlend: 'Borde de Video Suave', outerFade: 'Desvanecimiento exterior',
      off: { name: 'Apagado', desc: 'Formato original' }, crop: { name: '21:9 Recortar', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estirar', desc: 'Estiramiento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordes suaves y brillo sutil' }, soft: { name: 'Brillo Ambiental', desc: 'Ambilight de video suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de video intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Imagen Personalizada...'
    },
    it: {
      title: 'Opzioni CineCanvas', autoCropTitle: 'Rilevamento Auto', autoCropDesc: 'Ritaglia barre automaticamente', brandWingsTitle: 'Cornici Laterali', brandWingsDesc: 'Mostra cornici ai lati',
      frameData: 'Design:', customBg: 'Immagine Personalizzata', btnChoose: 'Scegli',
      ambientMenu: 'Ambilight', ambientSettings: 'Impostazioni Ambilight',
      wingDim: 'Oscuramento sfondo', auraBlur: 'Sfocatura sfondo', edgeBlend: 'Bordo Video Morbido', outerFade: 'Dissolvenza esterna',
      off: { name: 'Spento', desc: 'Formato originale' }, crop: { name: '21:9 Ritaglia', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estendi', desc: 'Estensione orizzontale' }, shadow: { name: 'Ombra Cinematografica', desc: 'Bordi morbidi e luce soffusa' }, soft: { name: 'Luce Ambientale', desc: 'Ambilight video morbido' }, vivid: { name: 'Ambilight Vivido', desc: 'Ambilight video intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Immagine Personalizzata...'
    },
    pt: {
      title: 'Opções CineCanvas', autoCropTitle: 'Detecção Auto', autoCropDesc: 'Cortar barras auto', brandWingsTitle: 'Molduras Laterais', brandWingsDesc: 'Mostrar molduras nas laterais',
      frameData: 'Design:', customBg: 'Imagem Personalizada', btnChoose: 'Escolher',
      ambientMenu: 'Ambilight', ambientSettings: 'Configurações do Ambilight',
      wingDim: 'Escurecimento fundo', auraBlur: 'Desfoque fundo', edgeBlend: 'Borda Suave do Vídeo', outerFade: 'Esmaecimento Exterior',
      off: { name: 'Desligado', desc: 'Formato original' }, crop: { name: '21:9 Cortar', desc: 'Zoom para 21:9' }, stretch: { name: '21:9 Esticar', desc: 'Esticamento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordas suaves e brilho sutil' }, soft: { name: 'Brilho Ambiente', desc: 'Ambilight de vídeo suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de vídeo intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Imagem Personalizada...'
    },
    nl: {
      title: 'CineCanvas Opties', autoCropTitle: 'Auto Detectie', autoCropDesc: 'Balken automatisch bijsnijden', brandWingsTitle: 'Bioscoop Zijframes', brandWingsDesc: 'Zijframes weergeven',
      frameData: 'Ontwerp:', customBg: 'Aangepaste Afbeelding', btnChoose: 'Kiezen',
      ambientMenu: 'Ambilight', ambientSettings: 'Ambilight Instellingen',
      wingDim: 'Achtergrond dimmen', auraBlur: 'Achtergrondonscherpte', edgeBlend: 'Zachte Videorand', outerFade: 'Buitenste rand vervagen',
      off: { name: 'Uit', desc: 'Origineel formaat' }, crop: { name: '21:9 Bijsnijden', desc: 'Zoomen naar 21:9' }, stretch: { name: '21:9 Uitrekken', desc: 'Horizontaal uitrekken' }, shadow: { name: 'Cinematische Schaduw', desc: 'Zachte randen & subtiele gloed' }, soft: { name: 'Zachte Omgevingsgloed', desc: 'Zachte video ambilight' }, vivid: { name: 'Levendige Ambilight', desc: 'Intense video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Aangepaste Afbeelding...'
    },
    pl: {
      title: 'Opcje CineCanvas', autoCropTitle: 'Autowykrywanie', autoCropDesc: 'Automatyczne przycinanie', brandWingsTitle: 'Boczne Ramki Kinowe', brandWingsDesc: 'Pokaż ramki po bokach',
      frameData: 'Wygląd:', customBg: 'Własny Obraz', btnChoose: 'Wybierz',
      ambientMenu: 'Ambilight', ambientSettings: 'Ustawienia Ambilight',
      wingDim: 'Przyciemnianie tła', auraBlur: 'Rozmycie tła', edgeBlend: 'Miękka Krawędź Wideo', outerFade: 'Zanikanie krawędzi',
      off: { name: 'Wyłączone', desc: 'Format oryginalny' }, crop: { name: '21:9 Przytnij', desc: 'Powiększenie do 21:9' }, stretch: { name: '21:9 Rozciągnij', desc: 'Rozciągnięcie w poziomie' }, shadow: { name: 'Filmowy Cień', desc: 'Miękkie krawędzie i blask' }, soft: { name: 'Miękki Blask', desc: 'Mleczne ambilight' }, vivid: { name: 'Żywe Ambilight', desc: 'Intensywne ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Własny Obraz...'
    },
    cs: {
      title: 'Možnosti CineCanvas', autoCropTitle: 'Auto detekce', autoCropDesc: 'Auto ořezání pruhů', brandWingsTitle: 'Boční Kinové Rámy', brandWingsDesc: 'Zobrazit rámy po stranách',
      frameData: 'Design:', customBg: 'Vlastní Obrázek', btnChoose: 'Vybrat',
      ambientMenu: 'Ambilight', ambientSettings: 'Nastavení Ambilight',
      wingDim: 'Ztmavení pozadí', auraBlur: 'Rozostření pozadí', edgeBlend: 'Měkký Okraj Videa', outerFade: 'Vnější vyblednutí',
      off: { name: 'Vypnuto', desc: 'Původní formát' }, crop: { name: '21:9 Oříznout', desc: 'Přiblížit na 21:9' }, stretch: { name: '21:9 Roztáhnout', desc: 'Horizontální roztažení' }, shadow: { name: 'Filmový stín', desc: 'Měkké okraje a jemná záře' }, soft: { name: 'Měkká záře', desc: 'Jemný video ambilight' }, vivid: { name: 'Živý Ambilight', desc: 'Intenzivní video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Vlastní Obrázek...'
    },
    ru: {
      title: 'Настройки CineCanvas', autoCropTitle: 'Автораспознавание', autoCropDesc: 'Автообрезка полос', brandWingsTitle: 'Боковые Кино-рамки', brandWingsDesc: 'Показать рамки по бокам',
      frameData: 'Дизайн:', customBg: 'Свое Изображение', btnChoose: 'Выбрать',
      ambientMenu: 'Ambilight', ambientSettings: 'Настройки Ambilight',
      wingDim: 'Затемнение фона', auraBlur: 'Размытие фона', edgeBlend: 'Мягкий Край Видео', outerFade: 'Затемнение по краям',
      off: { name: 'Выкл', desc: 'Исходный формат' }, crop: { name: '21:9 Обрезка', desc: 'Увеличение до 21:9' }, stretch: { name: '21:9 Растянуть', desc: 'Растянуть по горизонтали' }, shadow: { name: 'Кино-тень', desc: 'Мягкие края и свечение' }, soft: { name: 'Мягкое свечение', desc: 'Мягкий видео-Ambilight' }, vivid: { name: 'Яркий Ambilight', desc: 'Интенсивный Ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Логотип YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Свое Изображение...'
    }
  };

  const i18n = translations[lang] || translations.en;
  const defaultWhitelisted = ['youtube.com'];

  const BRAND_LOGO_YOUTUBE = `
    <svg viewBox="0 0 48 34" width="62" height="44">
      <rect x="1" y="1" width="46" height="32" rx="10" fill="#FF0000"/>
      <polygon points="19,10 33,17 19,24" fill="#FFFFFF"/>
    </svg>
    <span class="uw-brand-subtext" style="color:#fff; font-weight:700;">YOUTUBE</span>
  `;

  let currentMode = 'off';
  let lastAmbilightMode = 'soft';
  let autoCropEnabled = true;
  let autoCropApplied = false;
  let brandWingsEnabled = true;
  let theaterFrameType = 'logo';
  let customBgData = null;

  let frameSettings = { brightness: 70, blur: 0, edgeBlend: 0, outerFade: 0 };
  let ambilightSettings = { brightness: 100, blur: 45, edgeBlend: 1, outerFade: 1 };

  let manualThemeMode = null;
  let barDetectionStreak = 0;
  let noBarDetectionStreak = 0;
  let pillarboxStreak = 0;
  let noPillarboxStreak = 0;
  let hasHardcodedPillarbox = false;
  let isFourByThree = false;
  let menuElement = null;
  let osdElement = null;
  let osdTimeout = null;
  let auraCanvas = null;
  let auraCtx = null;
  let auraLoopId = null;

  const scanCanvas = document.createElement('canvas');
  scanCanvas.width = 48;
  scanCanvas.height = 27;
  const scanCtx = scanCanvas.getContext('2d', { willReadFrequently: true });

  function isDomainAllowed(settings) {
    const blocked = settings.blocked_domains || [];
    const allowed = settings.allowed_domains || defaultWhitelisted;
    const isBlocked = blocked.some(d => d && currentHost.includes(d.toLowerCase().trim()));
    if (isBlocked) return false;
    return allowed.some(d => d && currentHost.includes(d.toLowerCase().trim()));
  }

  function isAmbilightActive() {
    return ['shadow', 'soft', 'vivid'].includes(currentMode) || theaterFrameType === 'ambilight';
  }

  function getActiveSettings() {
    return isAmbilightActive() ? ambilightSettings : frameSettings;
  }

  function showOsd(text) {
    const video = getActiveVideo();
    const host = getPlayerHost(video) || document.body;
    if (!osdElement) {
      osdElement = document.createElement('div');
      osdElement.className = 'uw-osd-badge';
    }
    if (osdElement.parentElement !== host) host.appendChild(osdElement);
    osdElement.textContent = text;
    osdElement.classList.add('visible');
    if (osdTimeout) clearTimeout(osdTimeout);
    osdTimeout = setTimeout(() => { osdElement.classList.remove('visible'); }, 1500);
  }

  function detectThemeMode() {
    if (manualThemeMode) return manualThemeMode;
    if (document.documentElement.hasAttribute('dark')) return 'mode-dark';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'mode-light';
    return 'mode-dark';
  }

  function getActiveVideo() {
    const videos = Array.from(document.querySelectorAll('video'));
    if (videos.length === 0) return null;
    return videos.reduce((best, v) => {
      const rect = v.getBoundingClientRect();
      const area = rect.width * rect.height;
      const bestRect = best ? best.getBoundingClientRect() : { width: 0, height: 0 };
      return area > (bestRect.width * bestRect.height) ? v : best;
    }, videos[0]);
  }

  function getPlayerHost(video) {
    if (!video) return null;
    return video.closest('.html5-video-player') || video.parentElement?.parentElement || video.parentElement;
  }

  function ensureAmbientElements(host) {
    if (!host) return;
    host.classList.add('uw-player-host');

    if (!host.querySelector('#uw-aura-canvas')) {
      auraCanvas = document.createElement('canvas');
      auraCanvas.id = 'uw-aura-canvas';
      auraCanvas.className = 'uw-aura-canvas';
      auraCanvas.width = 320;
      auraCanvas.height = 180;
      auraCtx = auraCanvas.getContext('2d', { alpha: false });
      host.prepend(auraCanvas);
    } else {
      auraCanvas = host.querySelector('#uw-aura-canvas');
      auraCtx = auraCanvas.getContext('2d', { alpha: false });
    }
    if (!host.querySelector('#uw-outer-vignette')) {
      const vig = document.createElement('div'); vig.id = 'uw-outer-vignette'; vig.className = 'uw-outer-vignette-layer'; host.prepend(vig);
    }
    if (!host.querySelector('#uw-theater-frame')) {
      const frameL = document.createElement('div'); frameL.id = 'uw-theater-frame'; frameL.className = 'uw-theater-frame-layer'; host.prepend(frameL);
    }
    if (!host.querySelector('#uw-brand-wing-left')) {
      const bLeft = document.createElement('div'); bLeft.id = 'uw-brand-wing-left'; bLeft.className = 'uw-brand-wing uw-wing-left';
      const bgLeft = document.createElement('div'); bgLeft.className = 'uw-wing-backdrop';
      const logoAreaL = document.createElement('div'); logoAreaL.className = 'uw-brand-logo-area';
      bLeft.appendChild(bgLeft); bLeft.appendChild(logoAreaL); host.prepend(bLeft);
    }
    if (!host.querySelector('#uw-brand-wing-right')) {
      const bRight = document.createElement('div'); bRight.id = 'uw-brand-wing-right'; bRight.className = 'uw-brand-wing uw-wing-right';
      const bgRight = document.createElement('div'); bgRight.className = 'uw-wing-backdrop';
      const logoAreaR = document.createElement('div'); logoAreaR.className = 'uw-brand-logo-area';
      bRight.appendChild(bgRight); bRight.appendChild(logoAreaR); host.prepend(bRight);
    }
  }

  function setTrustedSvg(container, html) {
    container.replaceChildren();
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    while (parsed.body.firstChild) container.appendChild(parsed.body.firstChild);
  }

  function updateBrandedWings(host) {
    if (!host) return;
    host.setAttribute('data-uw-theme', detectThemeMode());
    let fType = 'logo';
    if (theaterFrameType === 'ambilight') fType = 'ambilight';
    else if (theaterFrameType && theaterFrameType !== 'logo') fType = 'image';
    host.setAttribute('data-uw-frametype', fType);

    const lArea = host.querySelector('#uw-brand-wing-left .uw-brand-logo-area');
    const rArea = host.querySelector('#uw-brand-wing-right .uw-brand-logo-area');
    if (lArea && !lArea.dataset.loaded) { lArea.dataset.loaded = 'true'; setTrustedSvg(lArea, BRAND_LOGO_YOUTUBE); }
    if (rArea && !rArea.dataset.loaded) { rArea.dataset.loaded = 'true'; setTrustedSvg(rArea, BRAND_LOGO_YOUTUBE); }
  }

  function updateVideoEdgeMask() {
    const root = document.documentElement;
    const active = getActiveSettings();
    if (active.edgeBlend === 0 && !hasHardcodedPillarbox) {
      root.classList.remove('uw-mask-active');
      return;
    }
    root.classList.add('uw-mask-active');
    const baseOffsetPct = hasHardcodedPillarbox ? 12.5 : 0;
    const fadeSpanPct = (active.edgeBlend / 50) * 18;

    root.style.setProperty('--uw-mask-l-start', `${baseOffsetPct.toFixed(2)}%`);
    root.style.setProperty('--uw-mask-l-end', `${(baseOffsetPct + fadeSpanPct).toFixed(2)}%`);
    root.style.setProperty('--uw-mask-r-start', `${(100 - baseOffsetPct - fadeSpanPct).toFixed(2)}%`);
    root.style.setProperty('--uw-mask-r-end', `${(100 - baseOffsetPct).toFixed(2)}%`);
  }

  function applySettings() {
    const root = document.documentElement;
    const active = getActiveSettings();

    root.classList.toggle('uw-brand-wings-enabled', brandWingsEnabled);
    root.style.setProperty('--uw-wing-brightness', (active.brightness / 100).toString());
    root.style.setProperty('--uw-aura-blur', `${active.blur}px`);

    const video = getActiveVideo();
    const host = getPlayerHost(video);
    if (host) {
      ensureAmbientElements(host);
      updateBrandedWings(host);
      
      const frameLayer = host.querySelector('#uw-theater-frame');
      if (frameLayer) {
        if (theaterFrameType && theaterFrameType !== 'logo' && theaterFrameType !== 'ambilight') {
          if (theaterFrameType === 'custom' && customBgData) {
            frameLayer.style.backgroundImage = `url("${customBgData}")`;
          } else if (theaterFrameType !== 'custom') {
            const url = browser.runtime.getURL(`assets/frames/${theaterFrameType}.jpg`);
            frameLayer.style.backgroundImage = `url("${url}")`;
          } else {
            frameLayer.style.backgroundImage = 'none';
          }
        } else {
          frameLayer.style.backgroundImage = 'none';
        }
      }
    }

    updateVideoEdgeMask();
    const fadeWidthPct = (active.outerFade / 100) * 25;
    root.style.setProperty('--uw-outer-fade-width', `${fadeWidthPct.toFixed(1)}%`);
    root.style.setProperty('--uw-outer-fade-opacity', active.outerFade === 0 ? '0' : '1');

    updateMenuSliderVisuals();
  }

  function updateMenuSliderVisuals() {
    if (!menuElement) return;
    const active = getActiveSettings();

    const dimInput = menuElement.querySelector('#slider-wingDim input');
    const dimVal = menuElement.querySelector('#slider-wingDim .val');
    if (dimInput && dimVal) { dimInput.value = active.brightness; dimVal.textContent = `${active.brightness}%`; }

    const blendInput = menuElement.querySelector('#slider-edgeBlend input');
    const blendVal = menuElement.querySelector('#slider-edgeBlend .val');
    if (blendInput && blendVal) { blendInput.value = active.edgeBlend; blendVal.textContent = active.edgeBlend; }

    const fadeInput = menuElement.querySelector('#slider-outerFade input');
    const fadeVal = menuElement.querySelector('#slider-outerFade .val');
    if (fadeInput && fadeVal) { fadeInput.value = active.outerFade; fadeVal.textContent = `${active.outerFade}%`; }

    const blurInput = menuElement.querySelector('#slider-auraBlur input');
    const blurVal = menuElement.querySelector('#slider-auraBlur .val');
    if (blurInput && blurVal) { blurInput.value = active.blur; blurVal.textContent = `${active.blur}px`; }
  }

  function renderAuraFrame() {
    if (!isAmbilightActive()) {
      auraLoopId = null;
      return;
    }
    const video = getActiveVideo();
    if (video && !video.paused && !video.ended && video.videoWidth > 0 && auraCtx) {
      try {
        const vw = video.videoWidth; const vh = video.videoHeight;
        const cropX = hasHardcodedPillarbox ? Math.floor(vw * 0.135) : Math.floor(vw * 0.01);
        const cropW = vw - (cropX * 2);
        const cropY = Math.floor(vh * 0.02);
        const cropH = vh - (cropY * 2);
        auraCtx.drawImage(video, cropX, cropY, cropW, cropH, 0, 0, 320, 180);
      } catch (e) {}
    }
    auraLoopId = setTimeout(() => { requestAnimationFrame(renderAuraFrame); }, 33);
  }

  function startAuraLoop() { if (!auraLoopId) renderAuraFrame(); }

  function isBlack(pixel, threshold = 18) { return pixel[0] < threshold && pixel[1] < threshold && pixel[2] < threshold; }

  function updateEdgePositions(root, host, video) {
    if (!host || !video) return;
    const hostRect = host.getBoundingClientRect();
    const videoRect = video.getBoundingClientRect();
    if (hostRect.width > 0 && videoRect.width > 0) {
      let activeLeft = videoRect.left - hostRect.left;
      let activeRight = hostRect.right - videoRect.right;
      if (hasHardcodedPillarbox) { const inset = videoRect.width * 0.125; activeLeft += inset; activeRight += inset; }
      root.style.setProperty('--uw-wing-width-left', `${Math.max(0, (activeLeft / hostRect.width) * 100).toFixed(2)}%`);
      root.style.setProperty('--uw-wing-width-right', `${Math.max(0, (activeRight / hostRect.width) * 100).toFixed(2)}%`);
    }
  }

  function analyzeVideoAndAmbience() {
    const video = getActiveVideo();
    if (!video || !video.videoWidth || !video.videoHeight) return;

    const host = getPlayerHost(video);
    if (host) { ensureAmbientElements(host); updateBrandedWings(host); }

    const root = document.documentElement;
    const nativeFourByThree = (video.videoWidth / video.videoHeight) < 1.5;
    const prevPillarbox = hasHardcodedPillarbox;

    try {
      scanCtx.drawImage(video, 0, 0, 48, 27);
      if (!nativeFourByThree) {
        const l1 = scanCtx.getImageData(3, 14, 1, 1).data; const r1 = scanCtx.getImageData(44, 14, 1, 1).data;
        const innerL = scanCtx.getImageData(9, 14, 1, 1).data; const innerR = scanCtx.getImageData(38, 14, 1, 1).data;
        const bordersDark = isBlack(l1, 15) && isBlack(r1, 15);
        const centerActive = !isBlack(innerL, 25) && !isBlack(innerR, 25);
        if (bordersDark && centerActive) { pillarboxStreak++; noPillarboxStreak = 0; if (pillarboxStreak >= 2) hasHardcodedPillarbox = true; } 
        else if (!bordersDark) { noPillarboxStreak++; pillarboxStreak = 0; if (noPillarboxStreak >= 2) hasHardcodedPillarbox = false; }
      } else {
        hasHardcodedPillarbox = false;
      }
      isFourByThree = nativeFourByThree || hasHardcodedPillarbox;
      root.style.setProperty('--uw-scale', isFourByThree ? (hasHardcodedPillarbox ? '1.3333' : '1.778') : '1.3333');
      root.style.setProperty('--uw-scale-x', isFourByThree ? (hasHardcodedPillarbox ? '1.3333' : '1.778') : '1.3333');
      if (prevPillarbox !== hasHardcodedPillarbox) updateVideoEdgeMask();
      updateEdgePositions(root, host, video);

      if (autoCropEnabled && !video.paused && !video.ended) {
        const topBar = scanCtx.getImageData(24, 2, 1, 1).data;
        const bottomBar = scanCtx.getImageData(24, 25, 1, 1).data;
        const centerContent = scanCtx.getImageData(24, 14, 1, 1).data;
        const hasLetterbox = isBlack(topBar, 22) && isBlack(bottomBar, 22) && !isBlack(centerContent, 30);
        const hasFullHeight = (!isBlack(topBar, 35) || !isBlack(bottomBar, 35));

        if (hasLetterbox) {
          barDetectionStreak++; noBarDetectionStreak = 0;
          if (barDetectionStreak >= 2 && currentMode === 'off') { autoCropApplied = true; setMode('crop', true); }
        } else if (hasFullHeight) {
          noBarDetectionStreak++; barDetectionStreak = 0;
          if (noBarDetectionStreak >= 3 && autoCropApplied && currentMode === 'crop') { autoCropApplied = false; setMode('off', true); }
        }
      }
    } catch (e) {}
  }

  function setMode(modeId, isAutoTrigger = false) {
    currentMode = modeId;
    if (['shadow', 'soft', 'vivid'].includes(modeId)) {
      lastAmbilightMode = modeId;
    }
    if (!isAutoTrigger) { autoCropApplied = false; barDetectionStreak = 0; noBarDetectionStreak = 0; }

    const root = document.documentElement;
    root.classList.remove('uw-active', 'uw-mode-crop', 'uw-mode-stretch', 'uw-mode-shadow', 'uw-mode-soft', 'uw-mode-vivid');

    const video = getActiveVideo();
    const host = getPlayerHost(video);
    if (host) { ensureAmbientElements(host); updateBrandedWings(host); }

    if (modeId !== 'off') {
      root.classList.add('uw-active', `uw-mode-${modeId}`);
      analyzeVideoAndAmbience();
      if (['soft', 'vivid', 'shadow'].includes(modeId)) startAuraLoop();
    }
    applySettings();

    const btn = document.getElementById('uw-player-btn');
    if (btn) btn.classList.toggle('active', modeId !== 'off');

    document.querySelectorAll('.uw-menu-item').forEach(el => { el.classList.toggle('selected', el.dataset.mode === modeId); });
    if (!isAutoTrigger) browser.storage.local.set({ ultrawide_mode: modeId }).catch(() => {});
  }

  function handleDesignChange(type) {
    theaterFrameType = type;
    browser.storage.local.set({ theater_frame_type: type }).catch(() => {});

    if (menuElement) {
      const cRow = menuElement.querySelector('#inMenuCustomBg');
      if (cRow) cRow.style.display = (type === 'custom') ? 'flex' : 'none';
      const ambBox = menuElement.querySelector('#inMenuAmbientBox');
      if (ambBox) ambBox.style.display = (type === 'ambilight') ? 'flex' : 'none';
    }

    if (type === 'ambilight') {
      setMode(lastAmbilightMode || 'soft');
    } else if (type === 'custom') {
      frameSettings = { brightness: 100, blur: 0, edgeBlend: 1, outerFade: 1 };
      browser.storage.local.set({ frame_settings: frameSettings }).catch(() => {});
      if (['shadow', 'soft', 'vivid'].includes(currentMode)) setMode('off');
    } else {
      if (['shadow', 'soft', 'vivid'].includes(currentMode)) setMode('off');
    }
    applySettings();
  }

  function createSlider(idKey, labelKey, min, max, initialValue, unit, onChange) {
    const row = document.createElement('div'); 
    row.id = `slider-${idKey}`;
    row.className = 'uw-menu-slider-row';
    const header = document.createElement('div'); header.className = 'uw-slider-header';
    const label = document.createElement('span'); label.textContent = i18n[labelKey];
    const valDisplay = document.createElement('span'); valDisplay.className = 'val'; valDisplay.textContent = `${initialValue}${unit}`;
    header.appendChild(label); header.appendChild(valDisplay);

    const input = document.createElement('input'); input.type = 'range'; input.className = 'uw-range-input';
    input.min = min; input.max = max; input.value = initialValue;
    input.addEventListener('mousedown', e => e.stopPropagation()); input.addEventListener('click', e => e.stopPropagation());
    input.addEventListener('input', (e) => { 
      const v = parseInt(e.target.value, 10); 
      valDisplay.textContent = `${v}${unit}`; 
      onChange(v); 
    });
    row.appendChild(header); row.appendChild(input); return row;
  }

  function createMenu() {
    if (menuElement) return menuElement;
    menuElement = document.createElement('div'); menuElement.id = 'uw-player-menu'; menuElement.className = 'hidden';
    menuElement.addEventListener('mousedown', e => e.stopPropagation()); menuElement.addEventListener('click', e => e.stopPropagation());

    // 1. Auto-Crop Toggle
    const autoCropRow = document.createElement('div'); autoCropRow.className = 'uw-menu-toggle-row';
    const acLabel = document.createElement('div'); acLabel.className = 'uw-toggle-label';
    const acTitle = document.createElement('span'); acTitle.className = 'title'; acTitle.textContent = i18n.autoCropTitle;
    const acDesc = document.createElement('span'); acDesc.className = 'desc'; acDesc.textContent = i18n.autoCropDesc;
    acLabel.appendChild(acTitle); acLabel.appendChild(acDesc);
    const acSwitch = document.createElement('label'); acSwitch.className = 'uw-switch';
    const acInput = document.createElement('input'); acInput.type = 'checkbox'; acInput.checked = autoCropEnabled;
    acInput.addEventListener('change', (e) => {
      autoCropEnabled = e.target.checked;
      browser.storage.local.set({ auto_crop_enabled: autoCropEnabled }).catch(() => {});
      if (!autoCropEnabled && autoCropApplied) { autoCropApplied = false; setMode('off'); }
    });
    const acSlider = document.createElement('span'); acSlider.className = 'uw-slider';
    acSwitch.appendChild(acInput); acSwitch.appendChild(acSlider);
    autoCropRow.appendChild(acLabel); autoCropRow.appendChild(acSwitch); menuElement.appendChild(autoCropRow);

    // 2. Seitenrahmen Toggle
    const brandRow = document.createElement('div'); brandRow.className = 'uw-menu-toggle-row';
    const bLabel = document.createElement('div'); bLabel.className = 'uw-toggle-label';
    const bTitle = document.createElement('span'); bTitle.className = 'title'; bTitle.textContent = i18n.brandWingsTitle;
    const bDesc = document.createElement('span'); bDesc.className = 'desc'; bDesc.textContent = i18n.brandWingsDesc;
    bLabel.appendChild(bTitle); bLabel.appendChild(bDesc);
    const bSwitch = document.createElement('label'); bSwitch.className = 'uw-switch';
    const bInput = document.createElement('input'); bInput.type = 'checkbox'; bInput.checked = brandWingsEnabled;
    bInput.addEventListener('change', (e) => {
      brandWingsEnabled = e.target.checked;
      browser.storage.local.set({ brand_wings_enabled: brandWingsEnabled }).catch(() => {});
      applySettings();
    });
    const bSlider = document.createElement('span'); bSlider.className = 'uw-slider';
    bSwitch.appendChild(bInput); bSwitch.appendChild(bSlider);
    brandRow.appendChild(bLabel); brandRow.appendChild(bSwitch); menuElement.appendChild(brandRow);

    // 3. Theme Select
    const themeRow = document.createElement('div'); themeRow.className = 'uw-menu-theme-row';
    const themeLabel = document.createElement('span'); themeLabel.className = 'uw-item-title'; 
    themeLabel.style.cssText = 'color: #ffffff !important; font-weight: 600;';
    themeLabel.textContent = i18n.frameData;
    const themeSelect = document.createElement('select'); themeSelect.className = 'uw-theme-select'; 
    themeSelect.style.cssText = 'color: #ffffff !important; background: #1e1e24;';
    [ 
      { val: 'ambilight', label: i18n.frame_ambilight },
      { val: 'logo', label: i18n.frame_logo }, 
      { val: 'frame01', label: i18n.frame_frame01 }, 
      { val: 'frame02', label: i18n.frame_frame02 }, 
      { val: 'frame03', label: i18n.frame_frame03 }, 
      { val: 'frame04', label: i18n.frame_frame04 }, 
      { val: 'frame05', label: i18n.frame_frame05 },
      { val: 'frame06', label: i18n.frame_frame06 },
      { val: 'frame07', label: i18n.frame_frame07 },
      { val: 'frame08', label: i18n.frame_frame08 },
      { val: 'frame09', label: i18n.frame_frame09 },
      { val: 'frame10', label: i18n.frame_frame10 },
      { val: 'frame11', label: i18n.frame_frame11 },
      { val: 'frame12', label: i18n.frame_frame12 },
      { val: 'frame13', label: i18n.frame_frame13 },
      { val: 'frame14', label: i18n.frame_frame14 },
      { val: 'frame15', label: i18n.frame_frame15 },
      { val: 'frame16', label: i18n.frame_frame16 },
      { val: 'frame17', label: i18n.frame_frame17 },
      { val: 'frame18', label: i18n.frame_frame18 },
      { val: 'frame19', label: i18n.frame_frame19 },
      { val: 'frame20', label: i18n.frame_frame20 },
      { val: 'frame21', label: i18n.frame_frame21 },
      { val: 'frame22', label: i18n.frame_frame22 },
      { val: 'custom', label: i18n.frame_custom }
    ].forEach(o => { const opt = document.createElement('option'); opt.value = o.val; opt.textContent = o.label; themeSelect.appendChild(opt); });
    themeSelect.value = theaterFrameType;
    themeSelect.addEventListener('change', (e) => {
      handleDesignChange(e.target.value);
    });
    themeRow.appendChild(themeLabel); themeRow.appendChild(themeSelect); menuElement.appendChild(themeRow);

    // 4. Custom BG Row
    const customRow = document.createElement('div'); customRow.id = 'inMenuCustomBg'; customRow.className = 'uw-menu-theme-row'; customRow.style.display = (theaterFrameType === 'custom') ? 'flex' : 'none';
    const cLabel = document.createElement('span'); cLabel.className = 'uw-item-title'; 
    cLabel.style.cssText = 'color: #ffffff !important; font-weight: 600;';
    cLabel.textContent = i18n.customBg;
    const cActions = document.createElement('div'); cActions.style.display = 'flex'; cActions.style.gap = '4px';
    const hFile = document.createElement('input'); hFile.type = 'file'; hFile.accept = 'image/*'; hFile.style.display = 'none';
    const btnUp = document.createElement('button'); btnUp.textContent = i18n.btnChoose; btnUp.style.cssText = 'background:#333; border:1px solid #555; color:#fff; padding:3px 6px; border-radius:4px; font-size:10px; cursor:pointer;';
    btnUp.addEventListener('click', () => hFile.click());
    const btnCl = document.createElement('button'); btnCl.textContent = 'X'; btnCl.style.cssText = 'background:#333; border:1px solid rgba(255,107,107,0.3); color:#ff6b6b; padding:3px 6px; border-radius:4px; font-size:10px; cursor:pointer;';
    btnCl.addEventListener('click', () => { browser.storage.local.remove('custom_bg_data').then(() => { customBgData = null; hFile.value = ''; applySettings(); }); });
    hFile.addEventListener('change', (e) => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = (ev) => { customBgData = ev.target.result; browser.storage.local.set({ custom_bg_data: customBgData }).then(applySettings); }; r.readAsDataURL(f); });
    cActions.appendChild(hFile); cActions.appendChild(btnUp); cActions.appendChild(btnCl); customRow.appendChild(cLabel); customRow.appendChild(cActions); menuElement.appendChild(customRow);

    // 5. Ambilight-Einstellungen Submenu
    const ambientBox = document.createElement('div');
    ambientBox.id = 'inMenuAmbientBox';
    ambientBox.style.cssText = `display: ${theaterFrameType === 'ambilight' ? 'flex' : 'none'}; flex-direction: column; gap: 2px; margin: 4px 0; padding: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;`;
    
    const ambBoxTitle = document.createElement('div');
    ambBoxTitle.style.cssText = 'font-size: 11px; font-weight: 600; color: #ffffff; padding: 2px 4px 4px 4px;';
    ambBoxTitle.textContent = i18n.ambientSettings;
    ambientBox.appendChild(ambBoxTitle);

    [ { id: 'shadow', label: i18n.shadow.name, desc: i18n.shadow.desc }, { id: 'soft', label: i18n.soft.name, desc: i18n.soft.desc }, { id: 'vivid', label: i18n.vivid.name, desc: i18n.vivid.desc }
    ].forEach(opt => {
      const item = document.createElement('div'); item.className = `uw-menu-item ${currentMode === opt.id ? 'selected' : ''}`; item.dataset.mode = opt.id;
      const t = document.createElement('span'); t.className = 'uw-item-title'; t.textContent = opt.label;
      const d = document.createElement('span'); d.className = 'uw-item-desc'; d.textContent = opt.desc;
      item.appendChild(t); item.appendChild(d);
      item.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        setMode(opt.id); 
        ambientBox.querySelectorAll('.uw-menu-item').forEach(i => i.classList.toggle('selected', i.dataset.mode === opt.id));
      });
      ambientBox.appendChild(item);
    });
    menuElement.appendChild(ambientBox);

    menuElement.appendChild(document.createElement('div')).className = 'uw-menu-separator';

    // 6. Sliders
    const active = getActiveSettings();
    menuElement.appendChild(createSlider('wingDim', 'wingDim', 0, 100, active.brightness, '%', (v) => { 
      if (isAmbilightActive()) { ambilightSettings.brightness = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); } 
      else { frameSettings.brightness = v; browser.storage.local.set({ frame_settings: frameSettings }); }
      applySettings(); 
    }));
    menuElement.appendChild(createSlider('edgeBlend', 'edgeBlend', 0, 50, active.edgeBlend, '', (v) => { 
      if (isAmbilightActive()) { ambilightSettings.edgeBlend = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); } 
      else { frameSettings.edgeBlend = v; browser.storage.local.set({ frame_settings: frameSettings }); }
      applySettings(); 
    }));
    menuElement.appendChild(createSlider('outerFade', 'outerFade', 0, 100, active.outerFade, '%', (v) => { 
      if (isAmbilightActive()) { ambilightSettings.outerFade = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); } 
      else { frameSettings.outerFade = v; browser.storage.local.set({ frame_settings: frameSettings }); }
      applySettings(); 
    }));
    menuElement.appendChild(createSlider('auraBlur', 'auraBlur', 0, 80, active.blur, 'px', (v) => { 
      if (isAmbilightActive()) { ambilightSettings.blur = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); } 
      else { frameSettings.blur = v; browser.storage.local.set({ frame_settings: frameSettings }); }
      applySettings(); 
    }));
    
    menuElement.appendChild(document.createElement('div')).className = 'uw-menu-separator';

    // 7. Base Modes
    [ { id: 'off', label: i18n.off.name, desc: i18n.off.desc }, { id: 'crop', label: i18n.crop.name, desc: i18n.crop.desc }, { id: 'stretch', label: i18n.stretch.name, desc: i18n.stretch.desc }
    ].forEach(opt => {
      const item = document.createElement('div'); item.className = `uw-menu-item ${currentMode === opt.id ? 'selected' : ''}`; item.dataset.mode = opt.id;
      const t = document.createElement('span'); t.className = 'uw-item-title'; t.textContent = opt.label;
      const d = document.createElement('span'); d.className = 'uw-item-desc'; d.textContent = opt.desc;
      item.appendChild(t); item.appendChild(d);
      item.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        setMode(opt.id); 
        menuElement.classList.add('hidden'); 
      });
      menuElement.appendChild(item);
    });

    return menuElement;
  }

  function toggleMenu(btn) {
    const targetMenu = document.fullscreenElement || document.body;
    const menu = createMenu();
    if (menu.parentElement !== targetMenu) targetMenu.appendChild(menu);
    if (menu.classList.contains('hidden')) {
      const rect = btn.getBoundingClientRect();
      menu.style.left = 'auto'; menu.style.top = 'auto'; menu.style.bottom = 'auto'; menu.style.right = 'auto';
      if (rect.top > 350) menu.style.bottom = `${Math.max(10, window.innerHeight - rect.top + 8)}px`; else menu.style.top = `${Math.max(10, rect.bottom + 8)}px`;
      menu.style.right = `${Math.max(10, Math.min(window.innerWidth - 260 - 10, window.innerWidth - rect.right))}px`;
      updateMenuSliderVisuals();
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  function injectPlayerButton() {
    const video = getActiveVideo();
    if (!video) return;
    const host = getPlayerHost(video);
    if (host) {
      if (!host.dataset.cineCanvasInitialized) {
        host.dataset.cineCanvasInitialized = 'true';
        ensureAmbientElements(host);
        updateBrandedWings(host);
        applySettings(); 
      } else {
        ensureAmbientElements(host);
        updateBrandedWings(host);
      }
    }
    const controls = document.querySelector('.ytp-right-controls');
    let btn = document.getElementById('uw-player-btn');
    if (btn) {
      if (controls && !controls.contains(btn)) {
        btn.classList.remove('uw-floating'); btn.style.left = ''; btn.style.top = ''; btn.style.bottom = ''; btn.style.right = ''; controls.insertBefore(btn, controls.firstChild);
      }
      return;
    }
    btn = document.createElement('button'); btn.id = 'uw-player-btn'; btn.className = `ytp-button uw-player-btn ${currentMode !== 'off' ? 'active' : ''}`;
    btn.setAttribute('title', i18n.title); btn.style.zIndex = '2147483647';
    
    // Neuer Filmstreifen-Icon SVG (Version 0.4.2)
    const svgHtml = `<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM5 4H7V6H5V4ZM9 4H11V6H9V4ZM13 4H15V6H13V4ZM17 4H19V6H17V4ZM5 18H7V20H5V18ZM9 18H11V20H9V18ZM13 18H15V20H13V18ZM17 18H19V20H17V18ZM10 8.5L16 12L10 15.5V8.5Z"/></svg>`;
    
    const parsedSvg = new DOMParser().parseFromString(svgHtml, 'text/html');
    while (parsedSvg.body.firstChild) btn.appendChild(parsedSvg.body.firstChild);

    btn.addEventListener('mousedown', (e) => e.stopPropagation(), true);
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleMenu(btn); }, true);

    if (controls) { controls.insertBefore(btn, controls.firstChild); } 
    else { btn.classList.add('uw-floating'); btn.style.top = '24px'; btn.style.right = '24px'; (document.fullscreenElement || document.body).appendChild(btn); }
  }

  function initCineCanvasEvents() {
    setInterval(analyzeVideoAndAmbience, 900);
    browser.runtime.onMessage.addListener((msg) => {
      if (msg.action === 'setMode') setMode(msg.mode);
      if (msg.action === 'setAutoCrop') { autoCropEnabled = msg.enabled; if (!autoCropEnabled && autoCropApplied) { autoCropApplied = false; setMode('off'); } }
      if (msg.action === 'setBrandWings') { brandWingsEnabled = msg.enabled; applySettings(); const internalInput = document.getElementById('uw-menu-brand-toggle'); if (internalInput) internalInput.checked = brandWingsEnabled; }
      if (msg.action === 'setFrameType') { 
        handleDesignChange(msg.type);
      }
      if (msg.action === 'setCustomBg') { customBgData = msg.data; applySettings(); }
      if (msg.action === 'setWingBrightness') { 
        if (isAmbilightActive()) ambilightSettings.brightness = msg.brightness; else frameSettings.brightness = msg.brightness;
        applySettings(); 
      }
      if (msg.action === 'setAuraBlur') { 
        if (isAmbilightActive()) ambilightSettings.blur = msg.blur; else frameSettings.blur = msg.blur;
        applySettings(); 
      }
      if (msg.action === 'setEdgeBlend') { 
        const val = Math.min(50, Math.max(0, Math.abs(parseInt(msg.blend, 10) || 0)));
        if (isAmbilightActive()) ambilightSettings.edgeBlend = val; else frameSettings.edgeBlend = val;
        applySettings(); 
      }
      if (msg.action === 'setOuterFade') { 
        if (isAmbilightActive()) ambilightSettings.outerFade = msg.fade; else frameSettings.outerFade = msg.fade;
        applySettings(); 
      }
    });
    window.addEventListener('yt-navigate-finish', () => { hasHardcodedPillarbox = false; setTimeout(injectPlayerButton, 300); setTimeout(analyzeVideoAndAmbience, 600); });
    document.addEventListener('fullscreenchange', () => setTimeout(injectPlayerButton, 200));
    new MutationObserver(() => injectPlayerButton()).observe(document.body, { childList: true, subtree: true });
  }

  window.addEventListener('click', (e) => {
    if (menuElement && !menuElement.classList.contains('hidden') && !menuElement.contains(e.target) && !e.target.closest('#uw-player-btn')) {
      menuElement.classList.add('hidden');
    }
  }, true);

  browser.storage.local.get({
    allowed_domains: defaultWhitelisted,
    blocked_domains: [],
    ultrawide_mode: 'off',
    auto_crop_enabled: true,
    brand_wings_enabled: true,
    theater_frame_type: 'logo',
    custom_bg_data: null,
    frame_settings: { brightness: 70, blur: 0, edgeBlend: 0, outerFade: 0 },
    ambilight_settings: { brightness: 100, blur: 45, edgeBlend: 1, outerFade: 1 }
  }).then(res => {
    if (!isDomainAllowed(res)) return;
    window.__cineCanvasLoaded = true;
    autoCropEnabled = res.auto_crop_enabled !== false;
    brandWingsEnabled = res.brand_wings_enabled !== false;
    theaterFrameType = res.theater_frame_type || 'logo';
    customBgData = res.custom_bg_data || null;
    frameSettings = res.frame_settings || frameSettings;
    ambilightSettings = res.ambilight_settings || ambilightSettings;
    setMode(res.ultrawide_mode);
    initCineCanvasEvents();
  }).catch(() => {});
})();