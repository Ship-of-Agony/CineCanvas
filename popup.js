document.addEventListener('DOMContentLoaded', () => {
  const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();
  const translations = {
    de: {
      autoCrop: 'Auto-Erkennung', autoCropDesc: 'Balken automatisch wegschneiden',
      brandWings: 'Kino-Seitenrahmen', brandWingsDesc: 'Rahmen an den Seiten anzeigen',
      frameData: 'Design auswählen:', customBg: 'Eigenes Bild', btnChoose: 'Wählen',
      ambientSettings: 'Ambilight-Einstellungen', wingDim: 'Hintergrund-Dimmung', auraBlur: 'Hintergrund-Blur',
      edgeBlend: 'Weicher Video-Rand', outerFade: 'Außenrand-Fade',
      off: { name: 'Aus (Standard)', desc: 'Originalformat' }, crop: { name: '21:9 Crop', desc: 'Zoom (schneidet Balken ab)' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal auf 21:9 dehnen' }, shadow: { name: 'Cinematic Shadow', desc: 'Sanfte Kanten & dezentes Licht' }, soft: { name: 'Soft Ambient Glow', desc: 'Milchig-weiches Video-Ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intensives Vollbild-Video-Ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Eigenes Bild...'
    },
    en: {
      autoCrop: 'Auto Detect', autoCropDesc: 'Auto crop letterbox bars',
      brandWings: 'Cinema Side Wings', brandWingsDesc: 'Show side frames',
      frameData: 'Select Design:', customBg: 'Custom Image', btnChoose: 'Choose',
      ambientSettings: 'Ambilight Settings', wingDim: 'Background Dimming', auraBlur: 'Background Blur',
      edgeBlend: 'Soft Video Edge', outerFade: 'Outer Edge Fade',
      off: { name: 'Off (Default)', desc: 'Original format' }, crop: { name: '21:9 Crop', desc: 'Zoom to fill 21:9' }, stretch: { name: '21:9 Stretch', desc: 'Horizontal stretch' }, shadow: { name: 'Cinematic Shadow', desc: 'Soft edges & subtle glow' }, soft: { name: 'Soft Ambient Glow', desc: 'Milky soft video ambilight' }, vivid: { name: 'Vivid Ambilight', desc: 'Intense full video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Custom Image...'
    },
    fr: {
      autoCrop: 'Détection Auto', autoCropDesc: 'Recadrer automatiquement les barres',
      brandWings: 'Cadres Latéraux', brandWingsDesc: 'Afficher les cadres sur les côtés',
      frameData: 'Sélectionner le Design:', customBg: 'Image Personnalisée', btnChoose: 'Choisir',
      ambientSettings: 'Paramètres Ambilight', wingDim: 'Assombrissement fond', auraBlur: 'Flou d\'arrière-plan',
      edgeBlend: 'Bord Vidéo Doux', outerFade: 'Fondu extérieur',
      off: { name: 'Désactivé', desc: 'Format original' }, crop: { name: '21:9 Recadrer', desc: 'Zoom sur 21:9' }, stretch: { name: '21:9 Étirer', desc: 'Étirement horizontal' }, shadow: { name: 'Ombre Cinématique', desc: 'Bords doux & lueur subtile' }, soft: { name: 'Lueur Ambiante', desc: 'Ambilight vidéo doux' }, vivid: { name: 'Ambilight Vif', desc: 'Ambilight vidéo intense' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Image Personnalisée...'
    },
    es: {
      autoCrop: 'Detección Auto', autoCropDesc: 'Recortar barras automáticamente',
      brandWings: 'Marcos Laterales', brandWingsDesc: 'Mostrar marcos en los lados',
      frameData: 'Seleccionar Diseño:', customBg: 'Imagen Personalizada', btnChoose: 'Elegir',
      ambientSettings: 'Ajustes de Ambilight', wingDim: 'Atenuación fondo', auraBlur: 'Desenfoque fondo',
      edgeBlend: 'Borde de Video Suave', outerFade: 'Desvanecimiento exterior',
      off: { name: 'Apagado', desc: 'Formato original' }, crop: { name: '21:9 Recortar', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estirar', desc: 'Estiramiento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordes suaves y brillo sutil' }, soft: { name: 'Brillo Ambiental', desc: 'Ambilight de video suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de video intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Imagen Personalizada...'
    },
    it: {
      autoCrop: 'Rilevamento Auto', autoCropDesc: 'Ritaglia barre automaticamente',
      brandWings: 'Cornici Laterali', brandWingsDesc: 'Mostra cornici ai lati',
      frameData: 'Seleziona Design:', customBg: 'Immagine Personalizzata', btnChoose: 'Scegli',
      ambientSettings: 'Impostazioni Ambilight', wingDim: 'Oscuramento sfondo', auraBlur: 'Sfocatura sfondo',
      edgeBlend: 'Bordo Video Morbido', outerFade: 'Dissolvenza esterna',
      off: { name: 'Spento', desc: 'Formato originale' }, crop: { name: '21:9 Ritaglia', desc: 'Zoom a 21:9' }, stretch: { name: '21:9 Estendi', desc: 'Estensione orizzontale' }, shadow: { name: 'Ombra Cinematografica', desc: 'Bordi morbidi e luce soffusa' }, soft: { name: 'Luce Ambientale', desc: 'Ambilight video morbido' }, vivid: { name: 'Ambilight Vivido', desc: 'Ambilight video intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Immagine Personalizzata...'
    },
    pt: {
      autoCrop: 'Detecção Auto', autoCropDesc: 'Cortar barras auto',
      brandWings: 'Molduras Laterais', brandWingsDesc: 'Mostrar molduras nas laterais',
      frameData: 'Selecionar Design:', customBg: 'Imagem Personalizada', btnChoose: 'Escolher',
      ambientSettings: 'Configurações do Ambilight', wingDim: 'Escurecimento fundo', auraBlur: 'Desfoque fundo',
      edgeBlend: 'Borda Suave do Vídeo', outerFade: 'Esmaecimento Exterior',
      off: { name: 'Desligado', desc: 'Formato original' }, crop: { name: '21:9 Cortar', desc: 'Zoom para 21:9' }, stretch: { name: '21:9 Esticar', desc: 'Esticamento horizontal' }, shadow: { name: 'Sombra Cinemática', desc: 'Bordas suaves e brilho sutil' }, soft: { name: 'Brilho Ambiente', desc: 'Ambilight de vídeo suave' }, vivid: { name: 'Ambilight Vívido', desc: 'Ambilight de vídeo intenso' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Imagem Personalizada...'
    },
    nl: {
      autoCrop: 'Auto Detectie', autoCropDesc: 'Balken automatisch bijsnijden',
      brandWings: 'Bioscoop Zijframes', brandWingsDesc: 'Zijframes weergeven',
      frameData: 'Selecteer Ontwerp:', customBg: 'Aangepaste Afbeelding', btnChoose: 'Kiezen',
      ambientSettings: 'Ambilight Instellingen', wingDim: 'Achtergrond dimmen', auraBlur: 'Achtergrondonscherpte',
      edgeBlend: 'Zachte Videorand', outerFade: 'Buitenste rand vervagen',
      off: { name: 'Uit', desc: 'Origineel formaat' }, crop: { name: '21:9 Bijsnijden', desc: 'Zoomen naar 21:9' }, stretch: { name: '21:9 Uitrekken', desc: 'Horizontaal uitrekken' }, shadow: { name: 'Cinematische Schaduw', desc: 'Zachte randen & subtiele gloed' }, soft: { name: 'Zachte Omgevingsgloed', desc: 'Zachte video ambilight' }, vivid: { name: 'Levendige Ambilight', desc: 'Intense video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'YouTube Logo', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Aangepaste Afbeelding...'
    },
    pl: {
      autoCrop: 'Autowykrywanie', autoCropDesc: 'Automatyczne przycinanie',
      brandWings: 'Boczne Ramki Kinowe', brandWingsDesc: 'Pokaż ramki po bokach',
      frameData: 'Wybierz Wygląd:', customBg: 'Własny Obraz', btnChoose: 'Wybierz',
      ambientSettings: 'Ustawienia Ambilight', wingDim: 'Przyciemnianie tła', auraBlur: 'Rozmycie tła',
      edgeBlend: 'Miękka Krawędź Wideo', outerFade: 'Zanikanie krawędzi',
      off: { name: 'Wyłączone', desc: 'Format oryginalny' }, crop: { name: '21:9 Przytnij', desc: 'Powiększenie do 21:9' }, stretch: { name: '21:9 Rozciągnij', desc: 'Rozciągnięcie w poziomie' }, shadow: { name: 'Filmowy Cień', desc: 'Miękkie krawędzie i blask' }, soft: { name: 'Miękki Blask', desc: 'Mleczne ambilight' }, vivid: { name: 'Żywe Ambilight', desc: 'Intensywne ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Własny Obraz...'
    },
    cs: {
      autoCrop: 'Auto detekce', autoCropDesc: 'Auto ořezání pruhů',
      brandWings: 'Boční Kinové Rámy', brandWingsDesc: 'Zobrazit rámy po stranách',
      frameData: 'Vyberte Design:', customBg: 'Vlastní Obrázek', btnChoose: 'Vybrat',
      ambientSettings: 'Nastavení Ambilight', wingDim: 'Ztmavení pozadí', auraBlur: 'Rozostření pozadí',
      edgeBlend: 'Měkký Okraj Videa', outerFade: 'Vnější vyblednutí',
      off: { name: 'Vypnuto', desc: 'Původní formát' }, crop: { name: '21:9 Oříznout', desc: 'Přiblížit na 21:9' }, stretch: { name: '21:9 Roztáhnout', desc: 'Horizontální roztažení' }, shadow: { name: 'Filmový stín', desc: 'Měkké okraje a jemná záře' }, soft: { name: 'Měkká záře', desc: 'Jemný video ambilight' }, vivid: { name: 'Živý Ambilight', desc: 'Intenzivní video ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Logo YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Vlastní Obrázek...'
    },
    ru: {
      autoCrop: 'Автораспознавание', autoCropDesc: 'Автообрезка полос',
      brandWings: 'Боковые Кино-рамки', brandWingsDesc: 'Показать рамки по бокам',
      frameData: 'Выберите Дизайн:', customBg: 'Свое Изображение', btnChoose: 'Выбрать',
      ambientSettings: 'Настройки Ambilight', wingDim: 'Затемнение фона', auraBlur: 'Размытие фона',
      edgeBlend: 'Мягкий Край Видео', outerFade: 'Затемнение по краям',
      off: { name: 'Выкл', desc: 'Исходный формат' }, crop: { name: '21:9 Обрезка', desc: 'Увеличение до 21:9' }, stretch: { name: '21:9 Растянуть', desc: 'Растянуть по горизонтали' }, shadow: { name: 'Кино-тень', desc: 'Мягкие края и свечение' }, soft: { name: 'Мягкое свечение', desc: 'Мягкий видео-Ambilight' }, vivid: { name: 'Яркий Ambilight', desc: 'Интенсивный Ambilight' },
      frame_ambilight: 'Ambilight', frame_logo: 'Логотип YouTube', frame_frame01: 'Frame 1', frame_frame02: 'Frame 2', frame_frame03: 'Frame 3', frame_frame04: 'Frame 4', frame_frame05: 'Frame 5', frame_frame06: 'Frame 6', frame_frame07: 'Frame 7', frame_frame08: 'Frame 8', frame_frame09: 'Frame 9', frame_frame10: 'Frame 10', frame_frame11: 'Frame 11', frame_frame12: 'Frame 12', frame_frame13: 'Frame 13', frame_frame14: 'Frame 14', frame_frame15: 'Frame 15', frame_frame16: 'Frame 16', frame_frame17: 'Frame 17', frame_frame18: 'Frame 18', frame_frame19: 'Frame 19', frame_frame20: 'Frame 20', frame_frame21: 'Frame 21', frame_frame22: 'Frame 22', frame_custom: 'Свое Изображение...'
    }
  };
  const t = translations[lang] || translations.en;

  document.getElementById('lbl-autocrop').textContent = t.autoCrop;
  document.getElementById('lbl-autocrop-desc').textContent = t.autoCropDesc;
  document.getElementById('lbl-brandwings').textContent = t.brandWings;
  document.getElementById('lbl-brandwings-desc').textContent = t.brandWingsDesc;
  document.getElementById('lbl-framedata').textContent = t.frameData;
  document.getElementById('lbl-ambientsettings').textContent = t.ambientSettings;
  document.getElementById('lbl-wingdim').textContent = t.wingDim;
  document.getElementById('lbl-aurablur').textContent = t.auraBlur;
  document.getElementById('lbl-edgeblend').textContent = t.edgeBlend;
  document.getElementById('lbl-outerfade').textContent = t.outerFade;
  document.getElementById('lbl-custombg').textContent = t.customBg;
  document.getElementById('btnUploadBg').textContent = t.btnChoose;

  const selectEl = document.getElementById('frameSelect');
  Array.from(selectEl.options).forEach(opt => { opt.text = t['frame_' + opt.value] || opt.text; });

  ['off', 'crop', 'stretch', 'shadow', 'soft', 'vivid'].forEach(m => {
    document.getElementById(`t-${m}`).textContent = t[m].name;
    document.getElementById(`d-${m}`).textContent = t[m].desc;
  });

  const ambientContainer = document.getElementById('ambientContainer');
  const autoToggle = document.getElementById('autoCropToggle');
  const brandToggle = document.getElementById('brandWingsToggle');
  const wingDimRange = document.getElementById('wingDimRange');
  const valWingDim = document.getElementById('val-wingdim');
  const auraBlurRange = document.getElementById('auraBlurRange');
  const valAuraBlur = document.getElementById('val-aurablur');
  const edgeBlendRange = document.getElementById('edgeBlendRange');
  const valEdgeBlend = document.getElementById('val-edgeblend');
  const outerFadeRange = document.getElementById('outerFadeRange');
  const valOuterFade = document.getElementById('val-outerfade');
  const items = document.querySelectorAll('.item');

  const customBgRow = document.getElementById('customBgRow');
  const customBgInput = document.getElementById('customBgInput');
  const btnUploadBg = document.getElementById('btnUploadBg');
  const btnClearBg = document.getElementById('btnClearBg');

  let currentMode = 'off';
  let lastAmbilightMode = 'soft';
  let currentDesign = 'logo';
  let frameSettings = { brightness: 70, blur: 0, edgeBlend: 0, outerFade: 0 };
  let ambilightSettings = { brightness: 100, blur: 45, edgeBlend: 1, outerFade: 1 };

  function isAmbilightActive() {
    return ['shadow', 'soft', 'vivid'].includes(currentMode) || currentDesign === 'ambilight';
  }

  function getActiveSettings() {
    return isAmbilightActive() ? ambilightSettings : frameSettings;
  }

  function updateSliderVisuals() {
    const active = getActiveSettings();
    wingDimRange.value = active.brightness; valWingDim.textContent = `${active.brightness}%`;
    auraBlurRange.value = active.blur; valAuraBlur.textContent = `${active.blur}px`;
    edgeBlendRange.value = active.edgeBlend; valEdgeBlend.textContent = active.edgeBlend;
    outerFadeRange.value = active.outerFade; valOuterFade.textContent = `${active.outerFade}%`;
  }

  function updateMenuDisplay() {
    ambientContainer.style.display = (currentDesign === 'ambilight') ? 'flex' : 'none';
    customBgRow.style.display = (currentDesign === 'custom') ? 'flex' : 'none';
  }

  function sendToContentScript(msg) {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, msg).catch(() => {});
    }).catch(() => {});
  }

  browser.storage.local.get({
    ultrawide_mode: 'off',
    auto_crop_enabled: true,
    brand_wings_enabled: true,
    theater_frame_type: 'logo',
    frame_settings: { brightness: 70, blur: 0, edgeBlend: 0, outerFade: 0 },
    ambilight_settings: { brightness: 100, blur: 45, edgeBlend: 1, outerFade: 1 }
  }).then(data => {
    currentMode = data.ultrawide_mode || 'off';
    if (['shadow', 'soft', 'vivid'].includes(currentMode)) lastAmbilightMode = currentMode;
    currentDesign = data.theater_frame_type || 'logo';
    autoToggle.checked = data.auto_crop_enabled !== false;
    brandToggle.checked = data.brand_wings_enabled !== false;
    selectEl.value = currentDesign;
    frameSettings = data.frame_settings || frameSettings;
    ambilightSettings = data.ambilight_settings || ambilightSettings;
    updateMenuDisplay();
    updateSliderVisuals();
    items.forEach(el => el.classList.toggle('selected', el.dataset.mode === currentMode));
  });
  
  autoToggle.addEventListener('change', (e) => {
    browser.storage.local.set({ auto_crop_enabled: e.target.checked });
    sendToContentScript({ action: 'setAutoCrop', enabled: e.target.checked });
  });

  brandToggle.addEventListener('change', (e) => {
    browser.storage.local.set({ brand_wings_enabled: e.target.checked });
    sendToContentScript({ action: 'setBrandWings', enabled: e.target.checked });
  });

  items.forEach(el => {
    el.addEventListener('click', () => {
      currentMode = el.dataset.mode;
      if (['shadow', 'soft', 'vivid'].includes(currentMode)) lastAmbilightMode = currentMode;
      items.forEach(i => i.classList.toggle('selected', i.dataset.mode === currentMode));
      browser.storage.local.set({ ultrawide_mode: currentMode }).catch(() => {});
      updateSliderVisuals();
      sendToContentScript({ action: 'setMode', mode: currentMode });
    });
  });

  selectEl.addEventListener('change', (e) => {
    currentDesign = e.target.value;
    updateMenuDisplay();
    if (currentDesign === 'ambilight') {
      currentMode = lastAmbilightMode || 'soft';
      browser.storage.local.set({ ultrawide_mode: currentMode }).catch(() => {});
      items.forEach(i => i.classList.toggle('selected', i.dataset.mode === currentMode));
      sendToContentScript({ action: 'setMode', mode: currentMode });
    } else if (currentDesign === 'custom') {
      frameSettings = { brightness: 100, blur: 0, edgeBlend: 1, outerFade: 1 };
      browser.storage.local.set({ frame_settings: frameSettings }).catch(() => {});
      if (['shadow', 'soft', 'vivid'].includes(currentMode)) {
        currentMode = 'off';
        browser.storage.local.set({ ultrawide_mode: currentMode }).catch(() => {});
        items.forEach(i => i.classList.toggle('selected', i.dataset.mode === currentMode));
        sendToContentScript({ action: 'setMode', mode: currentMode });
      }
    } else {
      if (['shadow', 'soft', 'vivid'].includes(currentMode)) {
        currentMode = 'off';
        browser.storage.local.set({ ultrawide_mode: currentMode }).catch(() => {});
        items.forEach(i => i.classList.toggle('selected', i.dataset.mode === currentMode));
        sendToContentScript({ action: 'setMode', mode: currentMode });
      }
    }
    updateSliderVisuals();
    browser.storage.local.set({ theater_frame_type: currentDesign }).catch(() => {});
    sendToContentScript({ action: 'setFrameType', type: currentDesign });
  });

  btnUploadBg.addEventListener('click', () => customBgInput.click());
  btnClearBg.addEventListener('click', () => { browser.storage.local.remove('custom_bg_data').then(() => { customBgInput.value = ''; sendToContentScript({ action: 'setCustomBg', data: null }); }); });
  customBgInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => { browser.storage.local.set({ custom_bg_data: event.target.result }).then(() => { sendToContentScript({ action: 'setCustomBg', data: event.target.result }); }); };
    reader.readAsDataURL(file);
  });

  wingDimRange.addEventListener('input', (e) => { 
    const v = parseInt(e.target.value, 10);
    valWingDim.textContent = `${v}%`; 
    if (isAmbilightActive()) { ambilightSettings.brightness = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); }
    else { frameSettings.brightness = v; browser.storage.local.set({ frame_settings: frameSettings }); }
    sendToContentScript({ action: 'setWingBrightness', brightness: v }); 
  });

  auraBlurRange.addEventListener('input', (e) => { 
    const v = parseInt(e.target.value, 10);
    valAuraBlur.textContent = `${v}px`; 
    if (isAmbilightActive()) { ambilightSettings.blur = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); }
    else { frameSettings.blur = v; browser.storage.local.set({ frame_settings: frameSettings }); }
    sendToContentScript({ action: 'setAuraBlur', blur: v }); 
  });

  edgeBlendRange.addEventListener('input', (e) => { 
    const v = parseInt(e.target.value, 10);
    valEdgeBlend.textContent = v; 
    if (isAmbilightActive()) { ambilightSettings.edgeBlend = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); }
    else { frameSettings.edgeBlend = v; browser.storage.local.set({ frame_settings: frameSettings }); }
    sendToContentScript({ action: 'setEdgeBlend', blend: v }); 
  });

  outerFadeRange.addEventListener('input', (e) => { 
    const v = parseInt(e.target.value, 10);
    valOuterFade.textContent = `${v}%`; 
    if (isAmbilightActive()) { ambilightSettings.outerFade = v; browser.storage.local.set({ ambilight_settings: ambilightSettings }); }
    else { frameSettings.outerFade = v; browser.storage.local.set({ frame_settings: frameSettings }); }
    sendToContentScript({ action: 'setOuterFade', fade: v }); 
  });
});