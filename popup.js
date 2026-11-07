document.addEventListener('DOMContentLoaded', () => {
  const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();

  const translations = {
    de: {
      siteActive: 'Auf dieser Website aktiv',
      siteDisabled: 'Auf dieser Website blockiert',
      autoCrop: 'Auto-Erkennung',
      autoCropDesc: 'Balken automatisch wegschneiden',
      brandWings: 'Flügel-Icons / Overlays',
      brandWingsDesc: 'YouTube-Stil an den Seiten',
      wingDim: 'Hintergrund-Dimmung',
      auraBlur: 'Hintergrund-Blur (Aura)',
      edgeBlend: 'Kanten-Einzug (Blend)',
      outerFade: 'Außenrand-Fade (Monitor-Enden)',
      off: { name: 'Aus (Standard)', desc: 'Originalformat' },
      crop: { name: '21:9 Crop', desc: 'Zoom (schneidet Balken ab)' },
      stretch: { name: '21:9 Stretch', desc: 'Horizontal auf 21:9 dehnen' },
      shadow: { name: 'Cinematic Shadow', desc: 'Sanfte Kanten & dezentes Licht' },
      soft: { name: 'Soft Ambient Glow', desc: 'Milchig-weiches Video-Ambilight' },
      vivid: { name: 'Vivid Ambilight', desc: 'Intensives Vollbild-Video-Ambilight' }
    },
    en: {
      siteActive: 'Active on this website',
      siteDisabled: 'Disabled on this website',
      autoCrop: 'Auto Detect',
      autoCropDesc: 'Auto crop letterbox bars',
      brandWings: 'Wing Icons / Overlays',
      brandWingsDesc: 'YouTube style on sides',
      wingDim: 'Background Dimming',
      auraBlur: 'Background Blur (Aura)',
      edgeBlend: 'Edge Blend (Soft Edge)',
      outerFade: 'Outer Edge Fade (Vignette)',
      off: { name: 'Off (Default)', desc: 'Original format' },
      crop: { name: '21:9 Crop', desc: 'Zoom to fill 21:9' },
      stretch: { name: '21:9 Stretch', desc: 'Horizontal stretch' },
      shadow: { name: 'Cinematic Shadow', desc: 'Soft edges & subtle glow' },
      soft: { name: 'Soft Ambient Glow', desc: 'Milky soft video ambilight' },
      vivid: { name: 'Vivid Ambilight', desc: 'Intense full video ambilight' }
    }
  };

  const t = translations[lang] || translations.en;

  document.getElementById('lbl-autocrop').textContent = t.autoCrop;
  document.getElementById('lbl-autocrop-desc').textContent = t.autoCropDesc;
  document.getElementById('lbl-brandwings').textContent = t.brandWings;
  document.getElementById('lbl-brandwings-desc').textContent = t.brandWingsDesc;
  document.getElementById('lbl-wingdim').textContent = t.wingDim;
  document.getElementById('lbl-aurablur').textContent = t.auraBlur;
  document.getElementById('lbl-edgeblend').textContent = t.edgeBlend;
  document.getElementById('lbl-outerfade').textContent = t.outerFade;

  ['off', 'crop', 'stretch', 'shadow', 'soft', 'vivid'].forEach(m => {
    document.getElementById(`t-${m}`).textContent = t[m].name;
    document.getElementById(`d-${m}`).textContent = t[m].desc;
  });

  const mainView = document.getElementById('mainView');
  const filterView = document.getElementById('filterView');
  const reglerView = document.getElementById('reglerView');

  document.getElementById('toFilterMenu').addEventListener('click', () => {
    mainView.classList.remove('active');
    filterView.classList.add('active');
  });
  document.getElementById('toReglerMenu').addEventListener('click', () => {
    mainView.classList.remove('active');
    reglerView.classList.add('active');
  });
  document.getElementById('backToMain').addEventListener('click', () => {
    filterView.classList.remove('active');
    mainView.classList.add('active');
  });
  document.getElementById('backToMainFromRegler').addEventListener('click', () => {
    reglerView.classList.remove('active');
    mainView.classList.add('active');
  });

  const siteHostEl = document.getElementById('siteHost');
  const siteStatusEl = document.getElementById('lblSiteStatus');
  const siteToggle = document.getElementById('siteToggle');

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

  const whitelistInput = document.getElementById('whitelistInput');
  const blacklistInput = document.getElementById('blacklistInput');
  const addWhitelistBtn = document.getElementById('addWhitelistBtn');
  const addBlacklistBtn = document.getElementById('addBlacklistBtn');
  const whitelistContainer = document.getElementById('whitelistContainer');
  const blacklistContainer = document.getElementById('blacklistContainer');

  let currentHost = '';

  function formatDim(val) { return val === 0 ? '0% (Schwarz)' : `${val}%`; }
  function formatBlur(val) {
    if (val === 0) return '0px (Klar / Spiegel)';
    if (val <= 20) return `${val}px (Leicht)`;
    if (val <= 50) return `${val}px (Mittel)`;
    return `${val}px (Milchig)`;
  }
  function formatEdge(val) { return val === 0 ? '0 (Harte Kante)' : `${val} (Weicher Einzug)`; }
  function formatOuterFade(val) { return val === 0 ? '0% (Vollbild)' : `${val}% (Fade-Out)`; }

  function cleanDomainInput(inputStr) {
    let clean = inputStr.trim().toLowerCase();
    if (!clean) return '';
    try {
      if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
        clean = 'https://' + clean;
      }
      const u = new URL(clean);
      return u.hostname.replace(/^www\./, '');
    } catch (e) {
      return inputStr.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
    }
  }

  // Fokus exklusiv auf YouTube
  const defaultWhitelisted = ['youtube.com'];

  function createDomainItem(dom, listType) {
    const div = document.createElement('div');
    div.className = 'domain-item';

    const span = document.createElement('span');
    span.textContent = dom;

    const btn = document.createElement('button');
    btn.className = 'domain-del';
    btn.dataset.domain = dom;
    btn.dataset.list = listType;
    btn.textContent = '×';

    div.appendChild(span);
    div.appendChild(btn);
    return div;
  }

  function renderLists(allowed, blocked) {
    whitelistContainer.replaceChildren();
    allowed.forEach(dom => {
      whitelistContainer.appendChild(createDomainItem(dom, 'allowed'));
    });

    blacklistContainer.replaceChildren();
    blocked.forEach(dom => {
      blacklistContainer.appendChild(createDomainItem(dom, 'blocked'));
    });

    document.querySelectorAll('.domain-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = btn.dataset.domain;
        const l = btn.dataset.list;
        browser.storage.local.get({ allowed_domains: defaultWhitelisted, blocked_domains: [] }).then(res => {
          let al = res.allowed_domains || defaultWhitelisted;
          let bl = res.blocked_domains || [];
          if (l === 'allowed') {
            al = al.filter(item => item !== d);
          } else {
            bl = bl.filter(item => item !== d);
          }
          browser.storage.local.set({ allowed_domains: al, blocked_domains: bl }).then(() => {
            renderLists(al, bl);
            checkCurrentSiteStatus(al, bl);
          });
        });
      });
    });
  }

  function checkCurrentSiteStatus(allowed, blocked) {
    const isBlocked = blocked.some(d => d && currentHost.includes(d.toLowerCase()));
    const isAllowed = allowed.some(d => d && currentHost.includes(d.toLowerCase()));
    const active = !isBlocked && isAllowed;
    siteToggle.checked = active;
    siteStatusEl.textContent = active ? t.siteActive : t.siteDisabled;
  }

  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs[0] && tabs[0].url) {
      try {
        const url = new URL(tabs[0].url);
        currentHost = url.hostname.toLowerCase().replace(/^www\./, '');
        siteHostEl.textContent = currentHost || 'Lokale Seite';
      } catch (e) {
        siteHostEl.textContent = 'Unbekannte Seite';
      }
    } else {
      siteHostEl.textContent = 'Aktiver Tab';
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
      outer_fade_strength: 0
    }).then(data => {
      const blocked = data.blocked_domains || [];
      const allowed = data.allowed_domains || defaultWhitelisted;

      renderLists(allowed, blocked);
      checkCurrentSiteStatus(allowed, blocked);

      autoToggle.checked = data.auto_crop_enabled;
      brandToggle.checked = data.brand_wings_enabled !== false;

      wingDimRange.value = data.wing_brightness !== undefined ? data.wing_brightness : 70;
      valWingDim.textContent = formatDim(parseInt(wingDimRange.value, 10));

      auraBlurRange.value = data.aura_blur_strength !== undefined ? data.aura_blur_strength : 45;
      valAuraBlur.textContent = formatBlur(parseInt(auraBlurRange.value, 10));

      const cleanEdge = Math.min(50, Math.max(0, Math.abs(parseInt(data.edge_blend_strength, 10) || 0)));
      edgeBlendRange.value = cleanEdge;
      valEdgeBlend.textContent = formatEdge(cleanEdge);

      outerFadeRange.value = data.outer_fade_strength !== undefined ? data.outer_fade_strength : 0;
      valOuterFade.textContent = formatOuterFade(parseInt(outerFadeRange.value, 10));

      updateSelection(data.ultrawide_mode);
    });
  }).catch(() => {});

  addWhitelistBtn.addEventListener('click', () => {
    const val = cleanDomainInput(whitelistInput.value);
    if (!val) return;
    browser.storage.local.get({ allowed_domains: defaultWhitelisted, blocked_domains: [] }).then(res => {
      let al = res.allowed_domains || defaultWhitelisted;
      let bl = res.blocked_domains || [];
      if (!al.includes(val)) al.push(val);
      bl = bl.filter(item => item !== val);
      browser.storage.local.set({ allowed_domains: al, blocked_domains: bl }).then(() => {
        whitelistInput.value = '';
        renderLists(al, bl);
        checkCurrentSiteStatus(al, bl);
      });
    });
  });

  addBlacklistBtn.addEventListener('click', () => {
    const val = cleanDomainInput(blacklistInput.value);
    if (!val) return;
    browser.storage.local.get({ allowed_domains: defaultWhitelisted, blocked_domains: [] }).then(res => {
      let al = res.allowed_domains || defaultWhitelisted;
      let bl = res.blocked_domains || [];
      if (!bl.includes(val)) bl.push(val);
      al = al.filter(item => item !== val);
      browser.storage.local.set({ allowed_domains: al, blocked_domains: bl }).then(() => {
        blacklistInput.value = '';
        renderLists(al, bl);
        checkCurrentSiteStatus(al, bl);
      });
    });
  });

  siteToggle.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    siteStatusEl.textContent = isChecked ? t.siteActive : t.siteDisabled;
    if (!currentHost) return;

    browser.storage.local.get({ allowed_domains: defaultWhitelisted, blocked_domains: [] }).then(res => {
      let al = res.allowed_domains || defaultWhitelisted;
      let bl = res.blocked_domains || [];

      if (isChecked) {
        if (!al.includes(currentHost)) al.push(currentHost);
        bl = bl.filter(item => item !== currentHost);
      } else {
        if (!bl.includes(currentHost)) bl.push(currentHost);
        al = al.filter(item => item !== currentHost);
      }
      browser.storage.local.set({ allowed_domains: al, blocked_domains: bl }).then(() => {
        renderLists(al, bl);
      });
    });
  });

  function updateSelection(mode) {
    items.forEach(el => el.classList.toggle('selected', el.dataset.mode === mode));
  }

  items.forEach(el => {
    el.addEventListener('click', () => {
      const mode = el.dataset.mode;
      updateSelection(mode);
      browser.storage.local.set({ ultrawide_mode: mode }).catch(() => {});

      browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setMode', mode: mode }).catch(() => {});
      }).catch(() => {});
    });
  });

  autoToggle.addEventListener('change', (e) => {
    const enabled = e.target.checked;
    browser.storage.local.set({ auto_crop_enabled: enabled }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setAutoCrop', enabled: enabled }).catch(() => {});
    }).catch(() => {});
  });

  brandToggle.addEventListener('change', (e) => {
    const enabled = e.target.checked;
    browser.storage.local.set({ brand_wings_enabled: enabled }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setBrandWings', enabled: enabled }).catch(() => {});
    }).catch(() => {});
  });

  wingDimRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    valWingDim.textContent = formatDim(val);
    browser.storage.local.set({ wing_brightness: val }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setWingBrightness', brightness: val }).catch(() => {});
    }).catch(() => {});
  });

  auraBlurRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    valAuraBlur.textContent = formatBlur(val);
    browser.storage.local.set({ aura_blur_strength: val }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setAuraBlur', blur: val }).catch(() => {});
    }).catch(() => {});
  });

  edgeBlendRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    valEdgeBlend.textContent = formatEdge(val);
    browser.storage.local.set({ edge_blend_strength: val }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setEdgeBlend', blend: val }).catch(() => {});
    }).catch(() => {});
  });

  outerFadeRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    valOuterFade.textContent = formatOuterFade(val);
    browser.storage.local.set({ outer_fade_strength: val }).catch(() => {});
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs[0]) browser.tabs.sendMessage(tabs[0].id, { action: 'setOuterFade', fade: val }).catch(() => {});
    }).catch(() => {});
  });
});