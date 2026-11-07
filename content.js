(() => {
  if (window.__cineCanvasLoaded) return;

  const currentHost = location.hostname.toLowerCase().replace(/^www\./, '');
  const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();

  const translations = {
    de: {
      title: 'CineCanvas Optionen', autoCropTitle: 'Auto-Erkennung', autoCropDesc: 'Balken automatisch wegschneiden', brandWingsTitle: 'Flügel-Icons / Overlays', brandWingsDesc: 'YouTube-Stil an den Seiten',
      wingDim: 'Hintergrund-Dimmung', auraBlur: 'Hintergrund-Blur', edgeBlend: 'Kanten-Einzug', outerFade: 'Außenrand-Fade',
      off: { name: 'Aus (Standard)', desc: 'Originalformat' }, crop: { name: '21:9 Crop', desc: 'Zoom (schneidet Balken ab)' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal auf 21:9 dehnen' }, shadow: { name: 'Cinematic Shadow', desc: 'Sanfte Kanten & dezentes Licht' }, soft: { name: 'Soft Ambient Glow', desc: 'Milchig-weiches Video-Ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intensives Vollbild-Video-Ambilight' },
      osdTheme: 'Flügel-Theme', osdWings: 'Flügel-Overlays', osdAutoCrop: 'Auto-Crop', on: 'An', offState: 'Aus'
    },
    en: {
      title: 'CineCanvas Options', autoCropTitle: 'Auto Detect', autoCropDesc: 'Auto crop letterbox bars', brandWingsTitle: 'Wing Icons / Overlays', brandWingsDesc: 'YouTube style on sides',
      wingDim: 'Background Dimming', auraBlur: 'Background Blur', edgeBlend: 'Edge Blend', outerFade: 'Outer Edge Fade',
      off: { name: 'Off (Default)', desc: 'Original format' }, crop: { name: '21:9 Crop', desc: 'Zoom to fill 21:9' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal stretch' }, shadow: { name: 'Cinematic Shadow', desc: 'Soft edges & subtle glow' }, soft: { name: 'Soft Ambient Glow', desc: 'Milky soft video ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intense full video ambilight' },
      osdTheme: 'Wing Theme', osdWings: 'Wing Overlays', osdAutoCrop: 'Auto-Crop', on: 'On', offState: 'Off'
    },
    fr: {
      title: 'Options CineCanvas', autoCropTitle: 'Détection Auto', autoCropDesc: 'Recadrer automatiquement les barres', brandWingsTitle: 'Icônes / Superpositions', brandWingsDesc: 'Style YouTube',
      wingDim: 'Assombrissement du fond', auraBlur: 'Flou d\'arrière-plan', edgeBlend: 'Fondu des bords', outerFade: 'Fondu extérieur',
      off: { name: 'Désactivé', desc: 'Format original' }, crop: { name: '21:9 Recadrer', desc: 'Zoom sur 21:9' }, stretch: { name: '21:9 Étirer', desc: 'Étirement horizontal' }, shadow: { name: 'Ombre Cinématique', desc: 'Bords doux & lueur subtile' }, soft: { name: 'Lueur Ambiante', desc: 'Ambilight vidéo doux' }, vivid: { name: 'Ambilight Vif', desc: 'Ambilight vidéo intense' },
      osdTheme: 'Thème', osdWings: 'Superpositions', osdAutoCrop: 'Auto-Crop', on: 'Activé', offState: 'Désactivé'
    },
    es: {
      title: 'Opciones CineCanvas', autoCropTitle: 'Detección Auto', autoCropDesc: 'Recortar barras automáticamente', brandWingsTitle: 'Iconos / Superposiciones', brandWingsDesc: 'Estilo YouTube',
      wingDim: 'Atenuación de fondo', auraBlur: 'Desenfoque de fondo', edgeBlend: 'Mezcla de bordes', outerFade: 'Desvanecimiento exterior',
      off: { name: 'Apagado', desc: 'Formato original' }, crop: { name: '21:9 Recortar', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estirar', desc: 'Estiramiento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordes suaves y brillo sutil' }, soft: { name: 'Brillo Ambiental', desc: 'Ambilight de video suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de video intenso' },
      osdTheme: 'Tema', osdWings: 'Superposiciones', osdAutoCrop: 'Recorte Auto', on: 'Activado', offState: 'Desactivado'
    },
    it: {
      title: 'Opzioni CineCanvas', autoCropTitle: 'Rilevamento Auto', autoCropDesc: 'Ritaglia barre', brandWingsTitle: 'Icone / Sovrapposizioni', brandWingsDesc: 'Stile YouTube',
      wingDim: 'Oscuramento sfondo', auraBlur: 'Sfocatura sfondo', edgeBlend: 'Sfumatura bordi', outerFade: 'Dissolvenza esterna',
      off: { name: 'Spento', desc: 'Formato originale' }, crop: { name: '21:9 Ritaglia', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estendi', desc: 'Estensione orizzontale' }, shadow: { name: 'Ombra Cinematografica', desc: 'Bordi morbidi e luce soffusa' }, soft: { name: 'Luce Ambientale', desc: 'Ambilight video morbido' }, vivid: { name: 'Ambilight Vivido', desc: 'Ambilight video intenso' },
      osdTheme: 'Tema', osdWings: 'Sovrapposizioni', osdAutoCrop: 'Ritaglio Auto', on: 'On', offState: 'Off'
    },
    pt: {
      title: 'Opções CineCanvas', autoCropTitle: 'Detecção Auto', autoCropDesc: 'Cortar barras auto', brandWingsTitle: 'Ícones / Sobreposições', brandWingsDesc: 'Estilo YouTube',
      wingDim: 'Escurecimento do Fundo', auraBlur: 'Desfoque do Fundo', edgeBlend: 'Mistura de Bordas', outerFade: 'Esmaecimento Exterior',
      off: { name: 'Desligado', desc: 'Formato original' }, crop: { name: '21:9 Cortar', desc: 'Zoom para 21:9' }, stretch: { name: '21:9 Esticar', desc: 'Esticamento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordas suaves e brilho sutil' }, soft: { name: 'Brilho Ambiente', desc: 'Ambilight de vídeo suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de vídeo intenso' },
      osdTheme: 'Tema', osdWings: 'Sobreposições', osdAutoCrop: 'Corte Auto', on: 'Ligado', offState: 'Desligado'
    },
    nl: {
      title: 'CineCanvas Opties', autoCropTitle: 'Auto Detectie', autoCropDesc: 'Balken automatisch bijsnijden', brandWingsTitle: 'Pictogrammen / Overlays', brandWingsDesc: 'YouTube-stijl',
      wingDim: 'Achtergrond dimmen', auraBlur: 'Achtergrondonscherpte', edgeBlend: 'Randen overvloeien', outerFade: 'Buitenste rand vervagen',
      off: { name: 'Uit', desc: 'Origineel formaat' }, crop: { name: '21:9 Bijsnijden', desc: 'Zoomen naar 21:9' }, stretch: { name: '21:9 Uitrekken', desc: 'Horizontaal uitrekken' }, shadow: { name: 'Cinematische Schaduw', desc: 'Zachte randen & subtiele gloed' }, soft: { name: 'Zachte Omgevingsgloed', desc: 'Zachte video ambilight' }, vivid: { name: 'Levendige Ambilight', desc: 'Intense video ambilight' },
      osdTheme: 'Thema', osdWings: 'Overlays', osdAutoCrop: 'Auto-Crop', on: 'Aan', offState: 'Uit'
    },
    pl: {
      title: 'Opcje CineCanvas', autoCropTitle: 'Autowykrywanie', autoCropDesc: 'Automatyczne przycinanie', brandWingsTitle: 'Ikony / Nakładki', brandWingsDesc: 'Styl YouTube',
      wingDim: 'Przyciemnianie tła', auraBlur: 'Rozmycie tła', edgeBlend: 'Wtapianie krawędzi', outerFade: 'Zanikanie krawędzi',
      off: { name: 'Wyłączone', desc: 'Format oryginalny' }, crop: { name: '21:9 Przytnij', desc: 'Powiększenie do 21:9' }, stretch: { name: '21:9 Rozciągnij', desc: 'Rozciągnięcie w poziomie' }, shadow: { name: 'Filmowy Cień', desc: 'Miękkie krawędzie i subtelny blask' }, soft: { name: 'Miękki Blask', desc: 'Mleczne ambilight' }, vivid: { name: 'Żywe Ambilight', desc: 'Intensywne ambilight' },
      osdTheme: 'Motyw', osdWings: 'Nakładki', osdAutoCrop: 'Auto-Crop', on: 'Wł.', offState: 'Wył.'
    },
    cs: {
      title: 'Možnosti CineCanvas', autoCropTitle: 'Auto detekce', autoCropDesc: 'Auto ořezání pruhů', brandWingsTitle: 'Ikony / Překryvy', brandWingsDesc: 'Styl YouTube',
      wingDim: 'Ztmavení pozadí', auraBlur: 'Rozostření pozadí', edgeBlend: 'Mísení okrajů', outerFade: 'Vnější vyblednutí',
      off: { name: 'Vypnuto', desc: 'Původní formát' }, crop: { name: '21:9 Oříznout', desc: 'Přiblížit na 21:9' }, stretch: { name: '21:9 Roztáhnout', desc: 'Horizontální roztažení' }, shadow: { name: 'Filmový stín', desc: 'Měkké okraje a jemná záře' }, soft: { name: 'Měkká záře', desc: 'Jemný video ambilight' }, vivid: { name: 'Živý Ambilight', desc: 'Intenzivní video ambilight' },
      osdTheme: 'Motiv', osdWings: 'Překryvy', osdAutoCrop: 'Auto-ořez', on: 'Zapnuto', offState: 'Vypnuto'
    },
    ru: {
      title: 'Настройки CineCanvas', autoCropTitle: 'Автораспознавание', autoCropDesc: 'Автообрезка полос', brandWingsTitle: 'Иконки / Оверлеи', brandWingsDesc: 'Стиль YouTube',
      wingDim: 'Затемнение фона', auraBlur: 'Размытие фона', edgeBlend: 'Смягчение краев', outerFade: 'Затемнение по краям',
      off: { name: 'Выкл', desc: 'Исходный формат' }, crop: { name: '21:9 Обрезка', desc: 'Увеличение до 21:9' }, stretch: { name: '21:9 Растянуть', desc: 'Растянуть по горизонтали' }, shadow: { name: 'Кино-тень', desc: 'Мягкие края и легкое свечение' }, soft: { name: 'Мягкое свечение', desc: 'Мягкий видео-Ambilight' }, vivid: { name: 'Яркий Ambilight', desc: 'Интенсивный Ambilight' },
      osdTheme: 'Тема', osdWings: 'Оверлеи', osdAutoCrop: 'Автообрезка', on: 'Вкл', offState: 'Выкл'
    }
  };

  const i18n = translations[lang] || translations.en;
  const defaultWhitelisted = ['youtube.com'];

  const BRAND_LOGO_YOUTUBE = `
    <svg viewBox="0 0 48 34" width="62" height="44">
      <rect x="1" y="1" width="46" height="32" rx="10" fill="#FF0000"/>
      <polygon points="19,10 33,17 19,24" fill="#FFFFFF"/>
    </svg>
    <span class="uw-brand-subtext" style="color:#fff; font-weight:700;">STREAMTUBE</span>
  `;

  const ORDERED_MODES = ['off', 'crop', 'stretch', 'shadow', 'soft', 'vivid'];

  const OPTIONS = [
    { id: 'off', label: i18n.off.name, desc: i18n.off.desc },
    { id: 'crop', label: i18n.crop.name, desc: i18n.crop.desc },
    { id: 'stretch', label: i18n.stretch.name, desc: i18n.stretch.desc },
    { separator: true },
    { id: 'shadow', label: i18n.shadow.name, desc: i18n.shadow.desc },
    { id: 'soft', label: i18n.soft.name, desc: i18n.soft.desc },
    { id: 'vivid', label: i18n.vivid.name, desc: i18n.vivid.desc }
  ];

  let currentMode = 'off';
  let autoCropEnabled = false;
  let autoCropApplied = false;
  let brandWingsEnabled = true;
  let wingBrightness = 70;
  let auraBlurStrength = 45;
  let edgeBlendStrength = 0;
  let outerFadeStrength = 0;
  let manualThemeMode = null;
  let barDetectionStreak = 0;
  let noBarDetectionStreak = 0;
  let pillarboxStreak = 0;
  let noPillarboxStreak = 0;
  let menuElement = null;
  let osdElement = null;
  let osdTimeout = null;
  let auraCanvas = null;
  let auraCtx = null;
  let auraLoopId = null;
  let hasHardcodedPillarbox = false;
  let isFourByThree = false;
  let floatingBtnPos = null;
  let isDraggingFloatingBtn = false;
  let hasDraggedFloatingBtn = false;

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

  function showOsd(text) {
    const video = getActiveVideo();
    const host = getPlayerHost(video) || document.body;
    if (!osdElement) {
      osdElement = document.createElement('div');
      osdElement.className = 'uw-osd-badge';
    }
    if (osdElement.parentElement !== host) {
      host.appendChild(osdElement);
    }
    osdElement.textContent = text;
    osdElement.classList.add('visible');

    if (osdTimeout) clearTimeout(osdTimeout);
    osdTimeout = setTimeout(() => {
      osdElement.classList.remove('visible');
    }, 1500);
  }

  function detectThemeMode() {
    if (manualThemeMode) return manualThemeMode;
    if (document.documentElement.hasAttribute('dark')) return 'mode-dark';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'mode-light';
    }
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
      const vig = document.createElement('div');
      vig.id = 'uw-outer-vignette';
      vig.className = 'uw-outer-vignette-layer';
      host.prepend(vig);
    }

    if (!host.querySelector('#uw-glow-left')) {
      const leftWing = document.createElement('div');
      leftWing.id = 'uw-glow-left';
      leftWing.className = 'uw-ambient-wing';
      host.prepend(leftWing);
    }
    if (!host.querySelector('#uw-glow-right')) {
      const rightWing = document.createElement('div');
      rightWing.id = 'uw-glow-right';
      rightWing.className = 'uw-ambient-wing';
      host.prepend(rightWing);
    }

    if (!host.querySelector('#uw-brand-wing-left')) {
      const bLeft = document.createElement('div');
      bLeft.id = 'uw-brand-wing-left';
      bLeft.className = 'uw-brand-wing uw-wing-left';
      const bgLeft = document.createElement('div');
      bgLeft.className = 'uw-wing-backdrop';
      const logoAreaL = document.createElement('div');
      logoAreaL.className = 'uw-brand-logo-area';
      const markL = document.createElement('div');
      markL.className = 'uw-brand-watermark';
      markL.textContent = 'CINECANVAS';
      bLeft.appendChild(bgLeft);
      bLeft.appendChild(logoAreaL);
      bLeft.appendChild(markL);
      host.prepend(bLeft);
    }
    if (!host.querySelector('#uw-brand-wing-right')) {
      const bRight = document.createElement('div');
      bRight.id = 'uw-brand-wing-right';
      bRight.className = 'uw-brand-wing uw-wing-right';
      const bgRight = document.createElement('div');
      bgRight.className = 'uw-wing-backdrop';
      const logoAreaR = document.createElement('div');
      logoAreaR.className = 'uw-brand-logo-area';
      const markR = document.createElement('div');
      markR.textContent = 'CINECANVAS';
      markR.className = 'uw-brand-watermark';
      bRight.appendChild(bgRight);
      bRight.appendChild(logoAreaR);
      bRight.appendChild(markR);
      host.prepend(bRight);
    }
  }

  function setTrustedSvg(container, html) {
    container.replaceChildren();
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    while (parsed.body.firstChild) {
      container.appendChild(parsed.body.firstChild);
    }
  }

  function updateBrandedWings(host) {
    if (!host) return;
    const mode = detectThemeMode();
    host.setAttribute('data-uw-theme', mode);

    const lArea = host.querySelector('#uw-brand-wing-left .uw-brand-logo-area');
    const rArea = host.querySelector('#uw-brand-wing-right .uw-brand-logo-area');

    if (lArea && !lArea.dataset.loaded) {
      lArea.dataset.loaded = 'true';
      setTrustedSvg(lArea, BRAND_LOGO_YOUTUBE);
    }
    if (rArea && !rArea.dataset.loaded) {
      rArea.dataset.loaded = 'true';
      setTrustedSvg(rArea, BRAND_LOGO_YOUTUBE);
    }
  }

  function updateVideoEdgeMask() {
    const root = document.documentElement;
    const isAmbienceMode = (currentMode === 'shadow' || currentMode === 'soft' || currentMode === 'vivid');

    if (!isAmbienceMode || (edgeBlendStrength === 0 && !hasHardcodedPillarbox)) {
      root.classList.remove('uw-mask-active');
      return;
    }

    root.classList.add('uw-mask-active');
    const baseOffsetPct = hasHardcodedPillarbox ? 12.5 : 0;
    const fadeSpanPct = (edgeBlendStrength / 50) * 18;

    const lStart = baseOffsetPct;
    const lEnd = baseOffsetPct + fadeSpanPct;
    const rStart = 100 - baseOffsetPct - fadeSpanPct;
    const rEnd = 100 - baseOffsetPct;

    root.style.setProperty('--uw-mask-l-start', `${lStart.toFixed(2)}%`);
    root.style.setProperty('--uw-mask-l-end', `${lEnd.toFixed(2)}%`);
    root.style.setProperty('--uw-mask-r-start', `${rStart.toFixed(2)}%`);
    root.style.setProperty('--uw-mask-r-end', `${rEnd.toFixed(2)}%`);
  }

  function applySettings() {
    const root = document.documentElement;
    root.classList.toggle('uw-brand-wings-enabled', brandWingsEnabled);
    root.style.setProperty('--uw-wing-brightness', (wingBrightness / 100).toString());
    root.style.setProperty('--uw-aura-blur', `${auraBlurStrength}px`);

    updateVideoEdgeMask();

    const fadeWidthPct = (outerFadeStrength / 100) * 25;
    root.style.setProperty('--uw-outer-fade-width', `${fadeWidthPct.toFixed(1)}%`);
    root.style.setProperty('--uw-outer-fade-opacity', outerFadeStrength === 0 ? '0' : '1');
  }

  function renderAuraFrame() {
    if (currentMode !== 'soft' && currentMode !== 'vivid' && currentMode !== 'shadow') {
      auraLoopId = null;
      return;
    }

    const video = getActiveVideo();
    if (video && !video.paused && !video.ended && video.videoWidth > 0 && auraCtx) {
      try {
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const cropX = hasHardcodedPillarbox ? Math.floor(vw * 0.135) : Math.floor(vw * 0.01);
        const cropW = vw - (cropX * 2);
        const cropY = Math.floor(vh * 0.02);
        const cropH = vh - (cropY * 2);

        auraCtx.drawImage(video, cropX, cropY, cropW, cropH, 0, 0, 320, 180);
      } catch (e) {}
    }

    auraLoopId = setTimeout(() => {
      requestAnimationFrame(renderAuraFrame);
    }, 33);
  }

  function startAuraLoop() {
    if (!auraLoopId) renderAuraFrame();
  }

  function isBlack(pixel, threshold = 14) {
    return pixel[0] < threshold && pixel[1] < threshold && pixel[2] < threshold;
  }

  function updateEdgePositions(root, host, video) {
    if (!host || !video) return;
    const hostRect = host.getBoundingClientRect();
    const videoRect = video.getBoundingClientRect();

    if (hostRect.width > 0 && videoRect.width > 0) {
      let activeLeft = videoRect.left - hostRect.left;
      let activeRight = hostRect.right - videoRect.right;

      if (hasHardcodedPillarbox) {
        const pillarInset = videoRect.width * 0.125;
        activeLeft += pillarInset;
        activeRight += pillarInset;
      }

      const leftPct = Math.max(0, (activeLeft / hostRect.width) * 100);
      const rightPct = Math.max(0, (activeRight / hostRect.width) * 100);

      root.style.setProperty('--uw-wing-width-left', `${leftPct.toFixed(2)}%`);
      root.style.setProperty('--uw-wing-width-right', `${rightPct.toFixed(2)}%`);
    } else {
      const fallback = hasHardcodedPillarbox ? '26%' : (isFourByThree ? '28%' : '14%');
      root.style.setProperty('--uw-wing-width-left', fallback);
      root.style.setProperty('--uw-wing-width-right', fallback);
    }
  }

  function analyzeVideoAndAmbience() {
    const video = getActiveVideo();
    if (!video || !video.videoWidth || !video.videoHeight) return;

    const host = getPlayerHost(video);
    if (host) {
      ensureAmbientElements(host);
      updateBrandedWings(host);
    }

    const root = document.documentElement;
    const rawAspect = video.videoWidth / video.videoHeight;
    const nativeFourByThree = rawAspect < 1.5;
    const prevPillarbox = hasHardcodedPillarbox;

    try {
      scanCtx.drawImage(video, 0, 0, 48, 27);

      if (!nativeFourByThree) {
        const l1 = scanCtx.getImageData(3, 5, 1, 1).data;
        const l2 = scanCtx.getImageData(3, 14, 1, 1).data;
        const l3 = scanCtx.getImageData(3, 22, 1, 1).data;
        const r1 = scanCtx.getImageData(44, 5, 1, 1).data;
        const r2 = scanCtx.getImageData(44, 14, 1, 1).data;
        const r3 = scanCtx.getImageData(44, 22, 1, 1).data;

        const innerL = scanCtx.getImageData(9, 14, 1, 1).data;
        const innerR = scanCtx.getImageData(38, 14, 1, 1).data;

        const bordersDark = isBlack(l1, 10) && isBlack(l2, 10) && isBlack(l3, 10) &&
                            isBlack(r1, 10) && isBlack(r2, 10) && isBlack(r3, 10);
        const centerActive = !isBlack(innerL, 25) && !isBlack(innerR, 25);

        if (bordersDark && centerActive) {
          pillarboxStreak++;
          noPillarboxStreak = 0;
          if (pillarboxStreak >= 2) hasHardcodedPillarbox = true;
        } else if (!bordersDark) {
          noPillarboxStreak++;
          pillarboxStreak = 0;
          if (noPillarboxStreak >= 2) hasHardcodedPillarbox = false;
        }
      } else {
        hasHardcodedPillarbox = false;
      }

      isFourByThree = nativeFourByThree || hasHardcodedPillarbox;

      if (isFourByThree) {
        root.style.setProperty('--uw-scale', hasHardcodedPillarbox ? '1.3333' : '1.778');
        root.style.setProperty('--uw-scale-x', hasHardcodedPillarbox ? '1.3333' : '1.778');
      } else {
        root.style.setProperty('--uw-scale', '1.3333');
        root.style.setProperty('--uw-scale-x', '1.3333');
      }

      if (prevPillarbox !== hasHardcodedPillarbox) {
        updateVideoEdgeMask();
      }

      updateEdgePositions(root, host, video);

      if (autoCropEnabled && !video.paused && !video.ended) {
        const topBar = scanCtx.getImageData(24, 2, 1, 1).data;
        const bottomBar = scanCtx.getImageData(24, 25, 1, 1).data;
        const centerContent = scanCtx.getImageData(24, 14, 1, 1).data;

        const hasLetterbox = isBlack(topBar, 14) && isBlack(bottomBar, 14) && !isBlack(centerContent, 28);
        const hasFullHeight = !isBlack(topBar, 25) || !isBlack(bottomBar, 25);

        if (hasLetterbox) {
          barDetectionStreak++;
          noBarDetectionStreak = 0;
          if (barDetectionStreak >= 2 && currentMode === 'off') {
            autoCropApplied = true;
            setMode('crop', true);
          }
        } else if (hasFullHeight) {
          noBarDetectionStreak++;
          barDetectionStreak = 0;
          if (noBarDetectionStreak >= 3 && autoCropApplied && currentMode === 'crop') {
            autoCropApplied = false;
            setMode('off', true);
          }
        }
      }
    } catch (e) {}
  }

  function setMode(modeId, isAutoTrigger = false) {
    currentMode = modeId;
    if (!isAutoTrigger) {
      autoCropApplied = false;
      barDetectionStreak = 0;
      noBarDetectionStreak = 0;
    }

    const root = document.documentElement;
    root.classList.remove(
      'uw-active',
      'uw-mode-crop',
      'uw-mode-stretch',
      'uw-mode-shadow',
      'uw-mode-soft',
      'uw-mode-vivid'
    );

    const video = getActiveVideo();
    const host = getPlayerHost(video);
    if (host) {
      ensureAmbientElements(host);
      updateBrandedWings(host);
    }

    if (modeId !== 'off') {
      root.classList.add('uw-active', `uw-mode-${modeId}`);
      analyzeVideoAndAmbience();
      if (modeId === 'soft' || modeId === 'vivid' || modeId === 'shadow') {
        startAuraLoop();
      }
    }

    updateVideoEdgeMask();

    const btn = document.getElementById('uw-player-btn');
    if (btn) btn.classList.toggle('active', modeId !== 'off');

    document.querySelectorAll('.uw-menu-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.mode === modeId);
    });

    if (!isAutoTrigger) {
      browser.storage.local.set({ ultrawide_mode: modeId }).catch(() => {});
    }
  }

  function cycleMode() {
    const nextIdx = (ORDERED_MODES.indexOf(currentMode) + 1) % ORDERED_MODES.length;
    const nextMode = ORDERED_MODES[nextIdx];
    setMode(nextMode);
    const modeName = i18n[nextMode]?.name || nextMode;
    showOsd(modeName);
  }

  function toggleBrandWings() {
    brandWingsEnabled = !brandWingsEnabled;
    browser.storage.local.set({ brand_wings_enabled: brandWingsEnabled }).catch(() => {});
    applySettings();
    const internalInput = document.getElementById('uw-menu-brand-toggle');
    if (internalInput) internalInput.checked = brandWingsEnabled;
    showOsd(`${i18n.osdWings}: ${brandWingsEnabled ? i18n.on : i18n.offState}`);
  }

  function toggleThemeMode() {
    const current = detectThemeMode();
    manualThemeMode = (current === 'mode-dark') ? 'mode-light' : 'mode-dark';
    const video = getActiveVideo();
    const host = getPlayerHost(video);
    if (host) updateBrandedWings(host);
    showOsd(`${i18n.osdTheme}: ${manualThemeMode === 'mode-dark' ? 'Dark' : 'Light'}`);
  }

  function toggleAutoCrop() {
    autoCropEnabled = !autoCropEnabled;
    browser.storage.local.set({ auto_crop_enabled: autoCropEnabled }).catch(() => {});
    if (!autoCropEnabled && autoCropApplied) {
      autoCropApplied = false;
      setMode('off');
    }
    const autoCropInput = document.querySelector('#uw-player-menu .uw-switch input[type="checkbox"]');
    if (autoCropInput) autoCropInput.checked = autoCropEnabled;
    showOsd(`${i18n.osdAutoCrop}: ${autoCropEnabled ? i18n.on : i18n.offState}`);
  }

  function createSlider(labelKey, min, max, value, onChange) {
    const row = document.createElement('div');
    row.className = 'uw-menu-slider-row';
    const header = document.createElement('div');
    header.className = 'uw-slider-header';
    const label = document.createElement('span');
    label.textContent = i18n[labelKey] || labelKey;
    const valDisplay = document.createElement('span');
    valDisplay.textContent = value;
    header.appendChild(label);
    header.appendChild(valDisplay);

    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'uw-range-input';
    input.min = min;
    input.max = max;
    input.value = value;
    
    input.addEventListener('mousedown', e => e.stopPropagation());
    input.addEventListener('click', e => e.stopPropagation());
    input.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      valDisplay.textContent = val;
      onChange(val);
    });

    row.appendChild(header);
    row.appendChild(input);
    return row;
  }

  function createMenu() {
    if (menuElement) return menuElement;

    menuElement = document.createElement('div');
    menuElement.id = 'uw-player-menu';
    menuElement.className = 'hidden';

    // 1. Auto-Crop Toggle
    const autoCropRow = document.createElement('div');
    autoCropRow.className = 'uw-menu-toggle-row';
    const autoCropLabel = document.createElement('div');
    autoCropLabel.className = 'uw-toggle-label';
    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.textContent = i18n.autoCropTitle + ' ';
    const kbdElement = document.createElement('kbd');
    kbdElement.textContent = 'Alt+A';
    titleSpan.appendChild(kbdElement);
    const descSpan = document.createElement('span');
    descSpan.className = 'desc';
    descSpan.textContent = i18n.autoCropDesc;
    autoCropLabel.appendChild(titleSpan);
    autoCropLabel.appendChild(descSpan);

    const autoCropSwitch = document.createElement('label');
    autoCropSwitch.className = 'uw-switch';
    const autoCropInput = document.createElement('input');
    autoCropInput.type = 'checkbox';
    autoCropInput.checked = autoCropEnabled;
    autoCropInput.addEventListener('change', (e) => {
      autoCropEnabled = e.target.checked;
      browser.storage.local.set({ auto_crop_enabled: autoCropEnabled }).catch(() => {});
      if (!autoCropEnabled && autoCropApplied) {
        autoCropApplied = false;
        setMode('off');
      }
    });
    const autoCropSlider = document.createElement('span');
    autoCropSlider.className = 'uw-slider';
    autoCropSwitch.appendChild(autoCropInput);
    autoCropSwitch.appendChild(autoCropSlider);
    autoCropRow.appendChild(autoCropLabel);
    autoCropRow.appendChild(autoCropSwitch);
    menuElement.appendChild(autoCropRow);

    // 2. Branded Wings Toggle
    const brandRow = document.createElement('div');
    brandRow.className = 'uw-menu-toggle-row';
    const brandLabel = document.createElement('div');
    brandLabel.className = 'uw-toggle-label';
    const bTitleSpan = document.createElement('span');
    bTitleSpan.className = 'title';
    bTitleSpan.textContent = i18n.brandWingsTitle + ' ';
    const bKbdElement = document.createElement('kbd');
    bKbdElement.textContent = 'Alt+W';
    bTitleSpan.appendChild(bKbdElement);
    const bDescSpan = document.createElement('span');
    bDescSpan.className = 'desc';
    bDescSpan.textContent = i18n.brandWingsDesc;
    brandLabel.appendChild(bTitleSpan);
    brandLabel.appendChild(bDescSpan);

    const brandSwitch = document.createElement('label');
    brandSwitch.className = 'uw-switch';
    const brandInput = document.createElement('input');
    brandInput.type = 'checkbox';
    brandInput.id = 'uw-menu-brand-toggle';
    brandInput.checked = brandWingsEnabled;
    brandInput.addEventListener('change', (e) => {
      brandWingsEnabled = e.target.checked;
      browser.storage.local.set({ brand_wings_enabled: brandWingsEnabled }).catch(() => {});
      applySettings();
    });
    const brandSlider = document.createElement('span');
    brandSlider.className = 'uw-slider';
    brandSwitch.appendChild(brandInput);
    brandSwitch.appendChild(brandSlider);
    brandRow.appendChild(brandLabel);
    brandRow.appendChild(brandSwitch);
    menuElement.appendChild(brandRow);

    const separator = document.createElement('div');
    separator.className = 'uw-menu-separator';
    menuElement.appendChild(separator);

    // SLIDERS
    menuElement.appendChild(createSlider('wingDim', 0, 100, wingBrightness, (v) => {
      wingBrightness = v;
      browser.storage.local.set({ wing_brightness: v }).catch(() => {});
      applySettings();
    }));
    menuElement.appendChild(createSlider('auraBlur', 0, 80, auraBlurStrength, (v) => {
      auraBlurStrength = v;
      browser.storage.local.set({ aura_blur_strength: v }).catch(() => {});
      applySettings();
    }));
    menuElement.appendChild(createSlider('edgeBlend', 0, 50, edgeBlendStrength, (v) => {
      edgeBlendStrength = v;
      browser.storage.local.set({ edge_blend_strength: v }).catch(() => {});
      applySettings();
    }));
    menuElement.appendChild(createSlider('outerFade', 0, 100, outerFadeStrength, (v) => {
      outerFadeStrength = v;
      browser.storage.local.set({ outer_fade_strength: v }).catch(() => {});
      applySettings();
    }));

    const separator2 = document.createElement('div');
    separator2.className = 'uw-menu-separator';
    menuElement.appendChild(separator2);

    OPTIONS.forEach(opt => {
      if (opt.separator) {
        const sep = document.createElement('div');
        sep.className = 'uw-menu-separator';
        menuElement.appendChild(sep);
        return;
      }

      const item = document.createElement('div');
      item.className = `uw-menu-item ${currentMode === opt.id ? 'selected' : ''}`;
      item.dataset.mode = opt.id;

      const title = document.createElement('span');
      title.className = 'uw-item-title';
      title.textContent = opt.label;

      const desc = document.createElement('span');
      desc.className = 'uw-item-desc';
      desc.textContent = opt.desc;

      item.appendChild(title);
      item.appendChild(desc);

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        setMode(opt.id);
        menuElement.classList.add('hidden');
      });

      menuElement.appendChild(item);
    });

    document.body.appendChild(menuElement);

    window.addEventListener('click', (e) => {
      if (menuElement && !menuElement.classList.contains('hidden')) {
        if (!menuElement.contains(e.target) && !e.target.closest('#uw-player-btn')) {
          menuElement.classList.add('hidden');
        }
      }
    });

    window.addEventListener('resize', () => {
      if (menuElement) menuElement.classList.add('hidden');
    });

    document.addEventListener('fullscreenchange', () => {
      if (menuElement) menuElement.classList.add('hidden');
      const fsEl = document.fullscreenElement;
      if (fsEl) {
        if (menuElement.parentElement !== fsEl) fsEl.appendChild(menuElement);
      } else {
        if (menuElement.parentElement !== document.body) document.body.appendChild(menuElement);
      }
    });

    return menuElement;
  }

  function positionMenu(btn, menu) {
    const rect = btn.getBoundingClientRect();
    const menuWidth = 260;

    menu.style.left = 'auto';
    menu.style.top = 'auto';
    menu.style.bottom = 'auto';
    menu.style.right = 'auto';

    if (rect.top > 350) {
      menu.style.bottom = `${Math.max(10, window.innerHeight - rect.top + 8)}px`;
    } else {
      menu.style.top = `${Math.max(10, rect.bottom + 8)}px`;
    }

    const rightOffset = Math.max(10, Math.min(window.innerWidth - menuWidth - 10, window.innerWidth - rect.right));
    menu.style.right = `${rightOffset}px`;
  }

  function toggleMenu(btn) {
    const targetMenu = document.fullscreenElement || document.body;
    const menu = createMenu();
    if (menu.parentElement !== targetMenu) {
      targetMenu.appendChild(menu);
    }

    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      positionMenu(btn, menu);
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  function makeButtonDraggable(btn) {
    let startX, startY, origX, origY;

    btn.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || !btn.classList.contains('uw-floating')) return;
      isDraggingFloatingBtn = true;
      hasDraggedFloatingBtn = false;
      startX = e.clientX;
      startY = e.clientY;

      const rect = btn.getBoundingClientRect();
      origX = rect.left;
      origY = rect.top;

      btn.classList.add('dragging');
      e.preventDefault();
      e.stopPropagation();
    }, true);

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingFloatingBtn) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasDraggedFloatingBtn = true;
      }

      const newLeft = Math.max(10, Math.min(window.innerWidth - btn.offsetWidth - 10, origX + dx));
      const newTop = Math.max(10, Math.min(window.innerHeight - btn.offsetHeight - 10, origY + dy));

      btn.style.left = `${newLeft}px`;
      btn.style.top = `${newTop}px`;
      btn.style.right = 'auto';
      btn.style.bottom = 'auto';
    });

    window.addEventListener('mouseup', () => {
      if (!isDraggingFloatingBtn) return;
      isDraggingFloatingBtn = false;
      btn.classList.remove('dragging');

      if (hasDraggedFloatingBtn) {
        const pos = { left: btn.style.left, top: btn.style.top };
        browser.storage.local.set({ floating_btn_pos: pos }).catch(() => {});
        setTimeout(() => {
          hasDraggedFloatingBtn = false;
        }, 120);
      }
    });
  }

  function injectPlayerButton() {
    const video = getActiveVideo();
    if (!video) return;

    const host = getPlayerHost(video);
    if (host) {
      ensureAmbientElements(host);
      updateBrandedWings(host);
    }

    const controls = document.querySelector('.ytp-right-controls');
    let btn = document.getElementById('uw-player-btn');

    if (btn) {
      if (controls && !controls.contains(btn)) {
        btn.classList.remove('uw-floating');
        btn.style.left = '';
        btn.style.top = '';
        btn.style.bottom = '';
        btn.style.right = '';
        controls.insertBefore(btn, controls.firstChild);
      }
      return;
    }

    btn = document.createElement('button');
    btn.id = 'uw-player-btn';
    btn.className = `ytp-button uw-player-btn ${currentMode !== 'off' ? 'active' : ''}`;
    btn.setAttribute('title', i18n.title);
    btn.setAttribute('aria-label', 'CineCanvas');
    btn.setAttribute('type', 'button');

    const svgHtml = `
      <svg viewBox="0 0 24 24">
        <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H5V6h14v12z"/>
        <path d="M7 9l-3 3 3 3v-2h4v-2H7V9zm10 0v2h-4v2h4v2l3-3-3-3z"/>
      </svg>
    `;
    const parsedSvg = new DOMParser().parseFromString(svgHtml, 'text/html');
    while (parsedSvg.body.firstChild) {
      btn.appendChild(parsedSvg.body.firstChild);
    }

    makeButtonDraggable(btn);

    btn.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    }, true);

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      if (hasDraggedFloatingBtn) {
        hasDraggedFloatingBtn = false;
        return;
      }

      toggleMenu(btn);
    }, true);

    if (controls) {
      controls.insertBefore(btn, controls.firstChild);
    } else {
      btn.classList.add('uw-floating');
      if (floatingBtnPos && floatingBtnPos.left && floatingBtnPos.top) {
        btn.style.left = floatingBtnPos.left;
        btn.style.top = floatingBtnPos.top;
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
      } else {
        btn.style.top = '24px';
        btn.style.right = '24px';
        btn.style.left = 'auto';
        btn.style.bottom = 'auto';
      }
      const fsEl = document.fullscreenElement;
      if (fsEl) {
        fsEl.appendChild(btn);
      } else {
        document.body.appendChild(btn);
      }
    }
  }

  function initCineCanvasEvents() {
    setInterval(analyzeVideoAndAmbience, 900);

    browser.runtime.onMessage.addListener((msg) => {
      if (msg.action === 'setMode') {
        setMode(msg.mode);
      } else if (msg.action === 'setAutoCrop') {
        autoCropEnabled = msg.enabled;
        if (!autoCropEnabled && autoCropApplied) {
          autoCropApplied = false;
          setMode('off');
        }
      } else if (msg.action === 'setBrandWings') {
        brandWingsEnabled = msg.enabled;
        applySettings();
        const internalInput = document.getElementById('uw-menu-brand-toggle');
        if (internalInput) internalInput.checked = brandWingsEnabled;
      } else if (msg.action === 'setWingBrightness') {
        wingBrightness = msg.brightness;
        applySettings();
      } else if (msg.action === 'setAuraBlur') {
        auraBlurStrength = msg.blur;
        applySettings();
      } else if (msg.action === 'setEdgeBlend') {
        edgeBlendStrength = Math.min(50, Math.max(0, Math.abs(parseInt(msg.blend, 10) || 0)));
        applySettings();
      } else if (msg.action === 'setOuterFade') {
        outerFadeStrength = msg.fade;
        applySettings();
      } else if (msg.command === 'cycle-mode') {
        cycleMode();
      } else if (msg.command === 'toggle-wings') {
        toggleBrandWings();
      } else if (msg.command === 'toggle-theme') {
        toggleThemeMode();
      } else if (msg.command === 'toggle-autocrop') {
        toggleAutoCrop();
      }
    });

    window.addEventListener('yt-navigate-finish', () => {
      hasHardcodedPillarbox = false;
      pillarboxStreak = 0;
      setTimeout(injectPlayerButton, 300);
      setTimeout(analyzeVideoAndAmbience, 600);
    });

    document.addEventListener('fullscreenchange', () => {
      setTimeout(injectPlayerButton, 200);
    });

    const observer = new MutationObserver(() => injectPlayerButton());
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  browser.storage.local.get({
    site_filter_mode: 'whitelist',
    blocked_domains: [],
    allowed_domains: defaultWhitelisted,
    ultrawide_mode: 'off',
    auto_crop_enabled: false,
    brand_wings_enabled: true,
    wing_brightness: 70,
    aura_blur_strength: 45,
    edge_blend_strength: 0,
    outer_fade_strength: 0,
    floating_btn_pos: null
  }).then(res => {
    if (!isDomainAllowed(res)) return;

    window.__cineCanvasLoaded = true;
    autoCropEnabled = res.auto_crop_enabled;
    brandWingsEnabled = res.brand_wings_enabled !== false;
    wingBrightness = res.wing_brightness !== undefined ? res.wing_brightness : 70;
    auraBlurStrength = res.aura_blur_strength !== undefined ? res.aura_blur_strength : 45;
    edgeBlendStrength = Math.min(50, Math.max(0, Math.abs(parseInt(res.edge_blend_strength, 10) || 0)));
    outerFadeStrength = res.outer_fade_strength !== undefined ? res.outer_fade_strength : 0;
    floatingBtnPos = res.floating_btn_pos || null;

    applySettings();
    setMode(res.ultrawide_mode);
    initCineCanvasEvents();
  }).catch(() => {});
})();