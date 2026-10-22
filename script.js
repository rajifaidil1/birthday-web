/**
 * ============================================================================
 * 13. KONFIGURASI PERSONALISASI (EDIT BAGIAN INI DENGAN MUDAH)
 * ============================================================================
 * Urutan Foto (Total 9 Foto di dalam folder images/):
 * - foto1.jpg & foto2.jpg : Halaman 1 (Bingkai Kiri & Kanan Kue Ulang Tahun)
 * - foto3.jpg - foto5.jpg : Bagian Scrapbook Polaroid
 * - foto6.jpg - foto9.jpg : Bagian Timeline Kenangan
 */
const BIRTHDAY_CONFIG = {
  // Nama yang berulang tahun & pengirim
  recipientName: "[NAMA YANG BERULANG TAHUN]",
  senderName: "[NAMA PENGIRIM / SAHABATMU] ♡",
  letterDateLabel: "Hari Spesialmu • Edisi Ulang Tahun",

  // Subjudul Hero (akan ditampilkan dengan efek ketikan / typewriter)
  heroSubtitle: "hari ini, semesta merayakan dirimu.",

  // ==========================================================================
  // FOTO 1 & FOTO 2: Halaman 1 (Bingkai Kiri & Kanan Kue Ulang Tahun)
  // ==========================================================================
  heroSidePhotos: {
    left: {
      src: "images/foto1.jpg",
      alt: "Foto 1 — Sebelah kiri kue ulang tahun",
      caption: "the birthday star ✨",
      note: "Halaman Pembuka • Foto #1",
      sticker: "🎀"
    },
    right: {
      src: "images/foto2.jpg",
      alt: "Foto 2 — Sebelah kanan kue ulang tahun",
      caption: "selalu manis ♡",
      note: "Halaman Pembuka • Foto #2",
      sticker: "🍒"
    }
  },

  // ==========================================================================
  // FOTO 3, FOTO 4, FOTO 5: Galeri Scrapbook Foto Interaktif
  // ==========================================================================
  photos: [
    {
      src: "images/foto3.jpg",
      alt: "Foto 3 — Kenangan pertama di scrapbook",
      caption: "bukti kalau kita memang menggemaskan ♡",
      note: "Salah satu foto yang selalu berhasil bikin senyum sendiri.",
      sticker: "🎀",
      tilt: "-2.5deg",
      tapeTilt: "3deg"
    },
    {
      src: "images/foto4.jpg",
      alt: "Foto 4 — Kenangan kedua di scrapbook",
      caption: "salah satu kenangan favoritku",
      note: "Waktu berjalan cepat, tapi momen ini tetap terasa hangat.",
      sticker: "🍒",
      tilt: "2deg",
      tapeTilt: "-4deg"
    },
    {
      src: "images/foto5.jpg",
      alt: "Foto 5 — Kenangan ketiga di scrapbook",
      caption: "galeri kamera ini sudah menyaksikan semuanya 😭",
      note: "Momen ini layak punya museum sendiri ✨",
      sticker: "🌸",
      tilt: "-1.8deg",
      tapeTilt: "2deg"
    }
  ],

  // ==========================================================================
  // FOTO 6, FOTO 7, FOTO 8, FOTO 9: Timeline Kenangan Interaktif
  // ==========================================================================
  timeline: [
    {
      date: "[TANGGAL KENANGAN 1 — mis. Awal Cerita Kita]",
      title: "Pertemuan & Babak Pertama ✨",
      description: "[GANTI DENGAN KENANGANMU: Tuliskan momen pertama kali kalian kenal atau kesan pertama yang paling lucu saat diingat sekarang.]",
      image: "images/foto6.jpg",
      icon: "🌸",
      animClass: "timeline-anim-left"
    },
    {
      date: "[TANGGAL KENANGAN 2 — mis. Hari Paling Seru]",
      title: "Petualangan & Tawa Tanpa Henti 🎀",
      description: "[GANTI DENGAN KENANGANMU: Ceritakan satu kejadian konyol, jalan-jalan dadakan, atau obrolan tengah malam yang tidak terlupakan.]",
      image: "images/foto7.jpg",
      icon: "🍒",
      animClass: "timeline-anim-right"
    },
    {
      date: "[TANGGAL KENANGAN 3 — mis. Momen Favorit]",
      title: "Momen Ini Layak Punya Museum Sendiri 🏆",
      description: "[GANTI DENGAN KENANGANMU: Tuliskan momen ketika kalian saling mendukung atau kenangan manis yang selalu bikin kangen.]",
      image: "images/foto8.jpg",
      icon: "💌",
      animClass: "timeline-anim-pop"
    },
    {
      date: "Hari Ini & Seterusnya ♡",
      title: "Merayakan Babak Baru Hidupmu 🎂",
      description: "Hari ini semesta merayakan bertambahnya usiamu—dan semoga tahun ini membawa lebih banyak keajaiban untukmu.",
      image: "images/foto9.jpg",
      icon: "✨",
      animClass: "timeline-anim-left"
    }
  ],

  // Konfigurasi Audio / Playlist Romantis + Embed Spotify Resmi
  audio: {
    // 1. Jalur relatif untuk file MP3 lokal (opsional)
    src: "audio/birthday-song.mp3",
    title: "Lover's Daydream (Birthday Edit)",
    artist: "Playlist Semesta Ulang Tahunmu ♡",
    // Jika file MP3 belum ditambahkan, aktifkan melodi kotak musik Web Audio otomatis
    enableSynthFallback: true,

    // 2. Link Lagu / Playlist / Album Spotify Resmi
    spotifyUrl: "https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI"
  },

  // 5. Birthday Investigation — Roasting Lucu
  investigationStats: [
    {
      badge: "KLASIFIKASI TOP SECRET",
      label: "Umur",
      value: "informasi rahasia negara 🤫",
      joke: "Catatan Detektif: Siapa pun yang berani menanyakan angka pastinya akan dikenakan denda traktiran es krim."
    },
    {
      badge: "LAPORAN TAHUNAN",
      label: "Status",
      value: "makin tua, katanya makin bijak 📈",
      joke: "Catatan Detektif: Grafik kebijaksanaan naik tipis, tapi grafik suka tiba-tiba ngantuk jam 9 malam naik drastis!"
    },
    {
      badge: "SISTEM DIAGNOSTIK",
      label: "Kedewasaan",
      value: "error 404 ❌",
      joke: "Catatan Detektif: File kedewasaan tidak ditemukan saat melihat stiker lucu, kucing lewat, atau diskon makanan."
    },
    {
      badge: "STATUS LANGGANAN",
      label: "Level drama",
      value: "langganan premium ♾️",
      joke: "Catatan Detektif: Sudah otomatis diperpanjang seumur hidup dengan fitur cerita heboh setiap minggu."
    },
    {
      badge: "AURA KARAKTER",
      label: "Energi karakter utama",
      value: "1000%",
      joke: "Catatan Detektif: Bahkan lampu jalan pun berasa jadi spotlight film komedi romantis kalau kamu lewat."
    },
    {
      badge: "ACHIEVEMENT UNLOCKED",
      label: "Skill terbuka",
      value: "berhasil bertahan satu tahun lagi 🏆",
      joke: "Catatan Detektif: Selamat! Kamu berhasil melewati 365 hari penuh plot twist dengan senyum paling manis."
    },
    {
      badge: "PROSES BACKGROUND",
      label: "Tanggung jawab",
      value: "sedang dimuat...",
      joke: "Catatan Detektif: Mohon tunggu sebentar, koneksi menuju kedewasaan penuh sedang buffering karena hari ini waktunya bersenang-senang!"
    },
    {
      badge: "PERINGATAN GEMAS",
      label: "Tingkat kelucuan",
      value: "mencurigakan banget 🎀",
      joke: "Catatan Detektif: Resmi melanggar batas maksimal keimutan yang diizinkan di satu halaman website."
    }
  ],

  // 8. Pesan Rahasia Tersembunyi (Muncul saat tombol hati kecil ♡ diklik)
  secretMessages: [
    "Rahasia #1: Tahu nggak? Kehadiranmu itu sering jadi alasan kenapa hari orang-orang di sekitarmu terasa jauh lebih ringan dan menyenangkan ♡",
    "Rahasia #2: Sekalipun kadang kamu meragukan dirimu sendiri, kamu sudah tumbuh sejauh ini dengan sangat hebat. Bangga banget sama kamu! ✨",
    "Rahasia #3: Kapan pun dunia terasa terlalu berisik, ingat bahwa kamu selalu punya tempat untuk bercerita dan pulang di sini 🎀"
  ],

  // Sapaan Karakter Maskot Saat Diklik
  mascotLines: [
    "Selamat ulang tahun! Jangan lupa tiup lilinnya ya 🎂",
    "Psst... ada 3 tombol hati rahasia (♡) di halaman ini lho!",
    "Kamu kelihatan manis banget hari ini! 🎀",
    "Klik foto mana saja untuk melihat ukuran penuhnya ya 📸",
    "Semoga semua doa terbaikmu dikabulkan tahun ini ✨"
  ],

  // 9. Surat yang Menyentuh Hati (Muncul baris demi baris)
  letterParagraphs: [
    "Selamat ulang tahun untuk seseorang yang pantas mendapatkan begitu banyak hal indah di dunia ini.",
    "Semoga babak baru dalam hidupmu membawa kebahagiaan yang tidak terduga, orang-orang yang membuatmu merasa dimengerti, momen kecil yang layak dikenang, dan keberanian untuk mengejar semua yang diinginkan hatimu.",
    "Semoga kamu tidak pernah lupa betapa istimewanya dirimu, bahkan pada hari-hari ketika hidup terasa sedikit terlalu berat.",
    "Terima kasih sudah menjadi dirimu sendiri. Semoga ada lebih banyak tawa, lebih banyak kenangan, lebih banyak cerita konyol, dan lebih banyak alasan untuk tersenyum.",
    "Kamu pantas mendapatkan tahun yang seindah kebahagiaan yang kamu bawa ke dalam hidup orang lain. ♡"
  ],

  // Warna Tema (Opsional: ubah jika ingin menyesuaikan nuansa)
  themeColors: {
    accentPink: "#ff5d8f",
    accentDeepRose: "#d83169"
  }
};

/**
 * ============================================================================
 * STATE & MANAJEMEN APLIKASI
 * ============================================================================
 */
const AppState = {
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  foundSecrets: new Set(),
  lightboxItems: [],
  currentLightboxIndex: 0,
  isAudioPlaying: false,
  isMuted: false,
  usingSynthFallback: false,
  synthInterval: null,
  audioCtx: null,
  typewriterTimer: null,
  particles: [],
  confettiBurstQueue: []
};

/**
 * ============================================================================
 * INISIALISASI SAAT DOM SIAP
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  buildUnifiedLightboxList();
  applyPersonalizationConfig();
  initMotionPreference();
  renderInvestigationCards();
  renderScrapbookGallery();
  renderTimeline();
  renderLetterParagraphs();
  initIntroExperience();
  initScrollAnimations();
  initLightboxModal();
  initSurpriseInteractions();
  initMusicPlayer();
  initCanvasCelebration();
  initGlobalClickHeartsAndCursorSparkles();
});

/**
 * Menggabungkan ke-9 foto (foto1.jpg - foto9.jpg) ke dalam satu daftar Lightbox
 * agar foto mana pun yang diklik menampilkan gambar yang tepat secara berurutan.
 */
function buildUnifiedLightboxList() {
  const list = [];

  // Index 0 & 1: Foto 1 & Foto 2 (Halaman 1 — Samping Kue)
  if (BIRTHDAY_CONFIG.heroSidePhotos?.left) {
    list.push({
      src: BIRTHDAY_CONFIG.heroSidePhotos.left.src,
      alt: BIRTHDAY_CONFIG.heroSidePhotos.left.alt || "Foto 1",
      caption: BIRTHDAY_CONFIG.heroSidePhotos.left.caption || "",
      note: BIRTHDAY_CONFIG.heroSidePhotos.left.note || "Foto #1",
      fileNumber: 1
    });
  }
  if (BIRTHDAY_CONFIG.heroSidePhotos?.right) {
    list.push({
      src: BIRTHDAY_CONFIG.heroSidePhotos.right.src,
      alt: BIRTHDAY_CONFIG.heroSidePhotos.right.alt || "Foto 2",
      caption: BIRTHDAY_CONFIG.heroSidePhotos.right.caption || "",
      note: BIRTHDAY_CONFIG.heroSidePhotos.right.note || "Foto #2",
      fileNumber: 2
    });
  }

  // Index 2, 3, 4: Foto 3, Foto 4, Foto 5 (Scrapbook)
  BIRTHDAY_CONFIG.photos.forEach((photo, idx) => {
    list.push({
      src: photo.src,
      alt: photo.alt || `Foto ${idx + 3}`,
      caption: photo.caption || "",
      note: photo.note || `Scrapbook • Foto #${idx + 3}`,
      fileNumber: idx + 3
    });
  });

  // Index 5, 6, 7, 8: Foto 6, Foto 7, Foto 8, Foto 9 (Timeline Kenangan)
  BIRTHDAY_CONFIG.timeline.forEach((item, idx) => {
    list.push({
      src: item.image,
      alt: item.title || `Foto ${idx + 6}`,
      caption: item.title || "",
      note: item.date || `Kenangan • Foto #${idx + 6}`,
      fileNumber: idx + 6
    });
  });

  AppState.lightboxItems = list;
}

/**
 * Menerapkan data dari BIRTHDAY_CONFIG ke elemen-elemen halaman
 * termasuk foto1.jpg dan foto2.jpg di sebelah kiri & kanan kue ulang tahun
 */
function applyPersonalizationConfig() {
  const root = document.documentElement;
  if (BIRTHDAY_CONFIG.themeColors?.accentPink) {
    root.style.setProperty("--accent-pink", BIRTHDAY_CONFIG.themeColors.accentPink);
  }
  if (BIRTHDAY_CONFIG.themeColors?.accentDeepRose) {
    root.style.setProperty("--accent-deep-rose", BIRTHDAY_CONFIG.themeColors.accentDeepRose);
  }

  const heroNameEl = document.getElementById("recipient-name-hero");
  const navLabelEl = document.getElementById("nav-recipient-label");
  const senderEl = document.getElementById("letter-sender-name");
  const dateStampEl = document.getElementById("letter-date-stamp");

  if (heroNameEl) heroNameEl.textContent = BIRTHDAY_CONFIG.recipientName;
  if (navLabelEl) navLabelEl.textContent = BIRTHDAY_CONFIG.recipientName;
  if (senderEl) senderEl.textContent = BIRTHDAY_CONFIG.senderName;
  if (dateStampEl) dateStampEl.textContent = BIRTHDAY_CONFIG.letterDateLabel;

  // Konfigurasi Bingkai Foto Kiri (foto1.jpg) & Kanan (foto2.jpg) Kue Ulang Tahun
  const sidePhotos = BIRTHDAY_CONFIG.heroSidePhotos;
  if (sidePhotos) {
    const leftImg = document.getElementById("hero-photo-left");
    const leftCap = document.getElementById("hero-caption-left");
    const leftSticker = document.getElementById("hero-sticker-left");
    const leftFrame = document.querySelector(".hero-side-frame.frame-left");

    if (leftImg && sidePhotos.left) {
      leftImg.src = sidePhotos.left.src;
      leftImg.alt = sidePhotos.left.alt || "Foto 1";
      leftImg.onerror = () => {
        leftImg.src = createPastelPlaceholderDataURI(sidePhotos.left.caption, 1);
      };
    }
    if (leftCap && sidePhotos.left?.caption) leftCap.textContent = sidePhotos.left.caption;
    if (leftSticker && sidePhotos.left?.sticker) leftSticker.textContent = sidePhotos.left.sticker;
    leftFrame?.addEventListener("click", () => openLightboxBySrc(sidePhotos.left.src));

    const rightImg = document.getElementById("hero-photo-right");
    const rightCap = document.getElementById("hero-caption-right");
    const rightSticker = document.getElementById("hero-sticker-right");
    const rightFrame = document.querySelector(".hero-side-frame.frame-right");

    if (rightImg && sidePhotos.right) {
      rightImg.src = sidePhotos.right.src;
      rightImg.alt = sidePhotos.right.alt || "Foto 2";
      rightImg.onerror = () => {
        rightImg.src = createPastelPlaceholderDataURI(sidePhotos.right.caption, 2);
      };
    }
    if (rightCap && sidePhotos.right?.caption) rightCap.textContent = sidePhotos.right.caption;
    if (rightSticker && sidePhotos.right?.sticker) rightSticker.textContent = sidePhotos.right.sticker;
    rightFrame?.addEventListener("click", () => openLightboxBySrc(sidePhotos.right.src));
  }
}

/**
 * ============================================================================
 * PENGATURAN PREFERS-REDUCED-MOTION & TOMBOL TOGGLE ANIMASI
 * ============================================================================
 */
function initMotionPreference() {
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById("motion-toggle-btn");
  const toggleIcon = document.getElementById("motion-toggle-icon");

  function updateMotionUI() {
    htmlEl.setAttribute("data-motion", AppState.reducedMotion ? "reduced" : "full");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-pressed", String(AppState.reducedMotion));
    }
    if (toggleIcon) {
      toggleIcon.textContent = AppState.reducedMotion ? "🌙" : "✨";
    }
  }

  updateMotionUI();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      AppState.reducedMotion = !AppState.reducedMotion;
      updateMotionUI();
    });
  }
}

/**
 * ============================================================================
 * 2 & 3. HALAMAN PEMBUKA (AMPLOP) & REVEAL SINEMATIK
 * ============================================================================
 */
function initIntroExperience() {
  const body = document.body;
  const introOverlay = document.getElementById("intro-overlay");
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const openBtn = document.getElementById("open-surprise-btn");
  const skipBtn = document.getElementById("skip-intro-btn");
  const cinematicVeil = document.getElementById("cinematic-veil");
  const heroStage = document.getElementById("hero-camera-stage");

  body.classList.add("locked-scroll");

  function startHeroCinematicReveal(startMusic = true) {
    if (cinematicVeil && !AppState.reducedMotion) {
      cinematicVeil.classList.add("is-active");
      setTimeout(() => {
        cinematicVeil.classList.remove("is-active");
      }, 450);
    }

    if (introOverlay) {
      introOverlay.classList.add("is-hidden");
    }
    body.classList.remove("locked-scroll");

    setTimeout(() => {
      if (heroStage) heroStage.classList.add("is-revealed");
      runHeroTypewriter(BIRTHDAY_CONFIG.heroSubtitle);
      if (!AppState.reducedMotion) {
        triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.35, 45);
      }
    }, 300);

    if (startMusic) {
      startAudioPlaybackAfterInteraction();
    }
  }

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      openBtn.disabled = true;
      if (envelopeWrapper) {
        envelopeWrapper.classList.add("is-opening");
      }

      // Ledakan partikel hati & confetti dari amplop
      const rect = openBtn.getBoundingClientRect();
      triggerConfettiBurst(rect.left + rect.width / 2, rect.top, 55);
      spawnMultipleFloatingHearts(rect.left + rect.width / 2, rect.top, 10);

      setTimeout(() => {
        startHeroCinematicReveal(true);
        openBtn.disabled = false;
      }, AppState.reducedMotion ? 150 : 1050);
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      AppState.reducedMotion = true;
      document.documentElement.setAttribute("data-motion", "reduced");
      startHeroCinematicReveal(false);
    });
  }
}

/**
 * Efek ketikan huruf demi huruf (Typewriter) untuk subjudul Hero
 */
function runHeroTypewriter(text) {
  const el = document.getElementById("hero-typewriter");
  if (!el) return;

  if (AppState.typewriterTimer) {
    clearInterval(AppState.typewriterTimer);
  }

  if (AppState.reducedMotion) {
    el.textContent = text;
    return;
  }

  el.textContent = "";
  const chars = Array.from(text);
  let idx = 0;

  AppState.typewriterTimer = setInterval(() => {
    if (idx < chars.length) {
      el.textContent += chars[idx];
      idx += 1;
    } else {
      clearInterval(AppState.typewriterTimer);
    }
  }, 55);
}

/**
 * ============================================================================
 * 5. RENDER KARTU BIRTHDAY INVESTIGATION (ROASTING LUCU)
 * ============================================================================
 */
function renderInvestigationCards() {
  const grid = document.getElementById("investigation-grid");
  const jokeBanner = document.getElementById("investigation-joke-banner");
  if (!grid) return;

  grid.innerHTML = "";

  BIRTHDAY_CONFIG.investigationStats.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "stat-sticker-card";
    card.setAttribute("role", "listitem");
    card.style.transitionDelay = `${index * 80}ms`;

    card.innerHTML = `
      <span class="stat-badge-pill">${escapeHtml(item.badge)}</span>
      <span class="stat-label">${escapeHtml(item.label)}:</span>
      <span class="stat-value">${escapeHtml(item.value)}</span>
      <div class="stat-popup-hint">Ketuk untuk catatan detektif 💬</div>
    `;

    const showJoke = () => {
      if (jokeBanner) {
        jokeBanner.textContent = `🕵️‍♀️ ${item.joke}`;
      }
    };

    card.addEventListener("click", (e) => {
      showJoke();
      spawnFloatingHeart(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
    });
    card.addEventListener("mouseenter", showJoke);
    card.addEventListener("focus", showJoke);

    grid.appendChild(card);
  });
}

/**
 * ============================================================================
 * 6. RENDER SCRAPBOOK FOTO POLAROID (foto3.jpg, foto4.jpg, foto5.jpg)
 * ============================================================================
 */
function renderScrapbookGallery() {
  const gallery = document.getElementById("scrapbook-gallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  BIRTHDAY_CONFIG.photos.forEach((photo, index) => {
    // Urutan nomor file di scrapbook dimulai dari foto3.jpg (index + 3)
    const photoFileNumber = index + 3;

    const figure = document.createElement("figure");
    figure.className = "polaroid-card reveal-on-scroll";
    figure.style.setProperty("--polaroid-tilt", photo.tilt || "-2deg");
    figure.style.setProperty("--tape-tilt", photo.tapeTilt || "2deg");
    figure.setAttribute("tabindex", "0");
    figure.setAttribute("role", "button");
    figure.setAttribute("aria-label", `Buka foto ${photo.caption} di tampilan penuh`);

    figure.innerHTML = `
      <div class="polaroid-tape" aria-hidden="true"></div>
      <span class="polaroid-sticker" aria-hidden="true">${escapeHtml(photo.sticker || "🎀")}</span>
      <div class="polaroid-img-wrapper">
        <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" />
      </div>
      <figcaption class="polaroid-caption">${escapeHtml(photo.caption)}</figcaption>
      <p class="polaroid-subnote">${escapeHtml(photo.note || "")}</p>
      <span class="polaroid-open-btn">perbesar foto 🔍</span>
    `;

    // Penanganan gambar gagal dimuat dengan ilustrasi SVG pastel sesuai nomor foto
    const imgEl = figure.querySelector("img");
    if (imgEl) {
      imgEl.addEventListener("error", () => {
        imgEl.src = createPastelPlaceholderDataURI(photo.caption, photoFileNumber);
      });
    }

    const openHandler = () => openLightboxBySrc(photo.src);
    figure.addEventListener("click", openHandler);
    figure.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openHandler();
      }
    });

    gallery.appendChild(figure);
  });
}

/**
 * Membuat SVG Data URI Pastel yang cantik jika file gambar belum ada / salah nama
 */
function createPastelPlaceholderDataURI(captionText, num) {
  const safeText = escapeHtml(captionText || `Kenangan #${num}`);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffe5ec"/>
          <stop offset="50%" stop-color="#f3e8ff"/>
          <stop offset="100%" stop-color="#ffe5d9"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <circle cx="300" cy="250" r="95" fill="#ffffff" opacity="0.75"/>
      <text x="300" y="275" font-size="82" text-anchor="middle">📸</text>
      <text x="300" y="410" font-family="sans-serif" font-size="24" font-weight="bold" fill="#5c2d3e" text-anchor="middle">Foto #${num} (images/foto${num}.jpg)</text>
      <text x="300" y="450" font-family="sans-serif" font-size="18" fill="#8a4f64" text-anchor="middle">${safeText}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * ============================================================================
 * LIGHTBOX MODAL UNTUK SELURUH 9 FOTO (foto1.jpg - foto9.jpg)
 * ============================================================================
 */
function initLightboxModal() {
  const modal = document.getElementById("lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  backdrop?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", () => stepLightbox(-1));
  nextBtn?.addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function openLightboxBySrc(targetSrc) {
  const foundIdx = AppState.lightboxItems.findIndex((item) => item.src === targetSrc);
  openLightbox(foundIdx >= 0 ? foundIdx : 0);
}

function openLightbox(index) {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  AppState.currentLightboxIndex = index;
  updateLightboxContent();
  modal.hidden = false;
  document.body.classList.add("locked-scroll");
  document.getElementById("lightbox-close-btn")?.focus();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("locked-scroll");
}

function stepLightbox(direction) {
  const total = AppState.lightboxItems.length;
  if (!total) return;
  AppState.currentLightboxIndex = (AppState.currentLightboxIndex + direction + total) % total;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = AppState.lightboxItems[AppState.currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightbox-image");
  const captionEl = document.getElementById("lightbox-caption");
  const noteEl = document.getElementById("lightbox-note");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    imgEl.onerror = () => {
      imgEl.src = createPastelPlaceholderDataURI(item.caption, item.fileNumber || AppState.currentLightboxIndex + 1);
    };
  }
  if (captionEl) captionEl.textContent = item.caption;
  if (noteEl) noteEl.textContent = item.note || "";
  if (counterEl) {
    counterEl.textContent = `${AppState.currentLightboxIndex + 1} / ${AppState.lightboxItems.length}`;
  }
}

/**
 * ============================================================================
 * 7. RENDER TIMELINE KENANGAN INTERAKTIF (foto6.jpg - foto9.jpg)
 * ============================================================================
 */
function renderTimeline() {
  const listEl = document.getElementById("timeline-list");
  if (!listEl) return;

  listEl.innerHTML = "";

  BIRTHDAY_CONFIG.timeline.forEach((item, index) => {
    // Urutan nomor file di timeline dimulai dari foto6.jpg (index + 6)
    const timelinePhotoNumber = index + 6;

    const article = document.createElement("article");
    article.className = "timeline-item reveal-on-scroll";

    article.innerHTML = `
      <div class="timeline-dot" aria-hidden="true">${escapeHtml(item.icon || "♡")}</div>
      <div class="timeline-card ${escapeHtml(item.animClass || "timeline-anim-left")}">
        <span class="timeline-date">${escapeHtml(item.date)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="timeline-thumb" style="cursor: pointer;" title="Klik untuk memperbesar foto">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
        </div>
      </div>
    `;

    const imgEl = article.querySelector("img");
    if (imgEl) {
      imgEl.addEventListener("error", () => {
        imgEl.src = createPastelPlaceholderDataURI(item.title, timelinePhotoNumber);
      });
    }

    const thumbEl = article.querySelector(".timeline-thumb");
    thumbEl?.addEventListener("click", () => openLightboxBySrc(item.image));

    listEl.appendChild(article);
  });
}

/**
 * ============================================================================
 * 9. RENDER SURAT YANG MENYENTUH HATI (BARIS DEMI BARIS)
 * ============================================================================
 */
function renderLetterParagraphs() {
  const container = document.getElementById("letter-body-container");
  const replayLetterBtn = document.getElementById("replay-letter-btn");
  if (!container) return;

  container.innerHTML = "";

  BIRTHDAY_CONFIG.letterParagraphs.forEach((paragraphText, idx) => {
    const p = document.createElement("p");
    p.className = "letter-paragraph";
    p.style.transitionDelay = `${idx * 380}ms`;
    p.textContent = paragraphText;
    container.appendChild(p);
  });

  if (replayLetterBtn) {
    replayLetterBtn.addEventListener("click", () => {
      const paragraphs = container.querySelectorAll(".letter-paragraph");
      paragraphs.forEach((p) => {
        p.style.transitionDelay = "0ms";
        p.classList.remove("is-revealed");
      });

      setTimeout(() => {
        paragraphs.forEach((p, idx) => {
          p.style.transitionDelay = AppState.reducedMotion ? "0ms" : `${idx * 380}ms`;
          p.classList.add("is-revealed");
        });
      }, 120);
    });
  }
}

/**
 * ============================================================================
 * INTERSECTION OBSERVER UNTUK ANIMASI SAAT HALAMAN DIGULIR
 * ============================================================================
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const statCards = document.querySelectorAll(".stat-sticker-card");
  const letterPaper = document.querySelector(".love-letter-paper");
  const finaleSection = document.getElementById("finale-section");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    statCards.forEach((el) => el.classList.add("is-visible"));
    document.querySelectorAll(".letter-paragraph").forEach((p) => p.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Jika bagian investigasi terlihat, tampilkan statistik satu per satu
          if (entry.target.classList.contains("dossier-board")) {
            statCards.forEach((card) => card.classList.add("is-visible"));
          }

          // Jika kartu surat terlihat, tampilkan paragraf baris demi baris
          if (entry.target === letterPaper) {
            document.querySelectorAll(".letter-paragraph").forEach((p) => {
              p.classList.add("is-revealed");
            });
          }

          // Jika bagian penutup terlihat, picu perayaan confetti lembut
          if (entry.target.closest("#finale-section") && !finaleSection.dataset.celebrated) {
            finaleSection.dataset.celebrated = "true";
            if (!AppState.reducedMotion) {
              triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 40);
            }
          }
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * ============================================================================
 * 8 & 10. INTERAKSI KEJUTAN (KADO, LILIN, HATI RAHASIA, MASKOT, REPLAY)
 * ============================================================================
 */
function initSurpriseInteractions() {
  // Tombol Confetti di Hero
  const heroConfettiBtn = document.getElementById("hero-confetti-btn");
  heroConfettiBtn?.addEventListener("click", (e) => {
    triggerConfettiBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 3, 50);
  });

  // 1. Kotak Hadiah Interaktif
  const giftBtn = document.getElementById("gift-box-btn");
  const giftPanel = document.getElementById("gift-reveal-panel");
  const giftPrompt = document.getElementById("gift-prompt-text");

  giftBtn?.addEventListener("click", () => {
    const isOpened = giftBtn.classList.toggle("is-opened");
    giftBtn.setAttribute("aria-expanded", String(isOpened));
    if (giftPanel) giftPanel.hidden = !isOpened;
    if (giftPrompt) {
      giftPrompt.textContent = isOpened
        ? "Yeay! Kupon spesialmu terbuka 🎉"
        : "Ketuk untuk membuka kado!";
    }
    if (isOpened) {
      const rect = giftBtn.getBoundingClientRect();
      triggerConfettiBurst(rect.left + rect.width / 2, rect.top, 35);
      playSparkleChime();
    }
  });

  // 2. Bagian Buat Permohonan dengan Lilin Animasi
  const makeWishBtn = document.getElementById("make-wish-btn");
  const relightBtn = document.getElementById("relight-candle-btn");
  const wishFlame = document.getElementById("wish-flame");
  const wishSmoke = document.getElementById("wish-smoke");
  const wishStatus = document.getElementById("wish-status-message");

  makeWishBtn?.addEventListener("click", () => {
    wishFlame?.classList.add("is-blown");
    wishSmoke?.classList.add("is-active");
    if (wishStatus) {
      wishStatus.textContent = "✨ Permohonanmu sudah dikirim ke semesta! Semoga segera terwujud ♡";
    }
    makeWishBtn.hidden = true;
    if (relightBtn) relightBtn.hidden = false;

    const rect = makeWishBtn.getBoundingClientRect();
    triggerConfettiBurst(rect.left + rect.width / 2, rect.top - 40, 60);
    spawnMultipleFloatingHearts(rect.left + rect.width / 2, rect.top - 40, 12);
    playSparkleChime();
  });

  relightBtn?.addEventListener("click", () => {
    wishFlame?.classList.remove("is-blown");
    wishSmoke?.classList.remove("is-active");
    if (wishStatus) {
      wishStatus.textContent = "Lilin menyala kembali... siap menyimpan harapan baru ✨";
    }
    relightBtn.hidden = true;
    if (makeWishBtn) makeWishBtn.hidden = false;
  });

  // 3. Pesan Rahasia Tersembunyi (Saat Hati Kecil Diklik)
  const secretTriggers = document.querySelectorAll(".secret-heart-trigger");
  const secretModal = document.getElementById("secret-modal");
  const secretBackdrop = document.getElementById("secret-modal-backdrop");
  const secretClose = document.getElementById("secret-modal-close");
  const secretCounterBtn = document.getElementById("secret-counter-btn");

  secretTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-secret-id") || 0);
      AppState.foundSecrets.add(id);
      btn.classList.add("is-found");
      updateSecretCounterUI();
      openSecretModal(
        `Pesan Rahasia #${id + 1} ♡`,
        BIRTHDAY_CONFIG.secretMessages[id] || BIRTHDAY_CONFIG.secretMessages[0]
      );
      playSparkleChime();
    });
  });

  secretCounterBtn?.addEventListener("click", () => {
    const count = AppState.foundSecrets.size;
    const total = BIRTHDAY_CONFIG.secretMessages.length;
    const msg =
      count === 0
        ? "Cari 3 tombol hati kecil bertuliskan '♡' di sepanjang halaman untuk membuka pesan rahasia!"
        : Array.from(AppState.foundSecrets)
            .sort()
            .map((i) => BIRTHDAY_CONFIG.secretMessages[i])
            .join("\n\n");
    openSecretModal(`Koleksi Rahasiamu (${count}/${total})`, msg);
  });

  const closeSecretModal = () => {
    if (secretModal) secretModal.hidden = true;
    document.body.classList.remove("locked-scroll");
  };

  secretClose?.addEventListener("click", closeSecretModal);
  secretBackdrop?.addEventListener("click", closeSecretModal);

  // 4. Karakter Maskot Melambai + Tombol "✕" (Close/Hide Bubble Chat)
  const mascotBtn = document.getElementById("mascot-btn");
  const mascotBubble = document.getElementById("mascot-speech-bubble");
  const mascotSpeechText = document.getElementById("mascot-speech-text");
  const mascotBubbleClose = document.getElementById("mascot-bubble-close");
  let mascotLineIdx = 0;

  // Tombol "✕" untuk menyembunyikan bubble chat agar tidak mengganggu layar
  mascotBubbleClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    mascotBubble?.classList.add("is-hidden");
  });

  // Klik ikon beruang untuk menampilkan kembali bubble chat & mengganti kalimat sapaan
  mascotBtn?.addEventListener("click", (e) => {
    if (mascotBubble) {
      mascotBubble.classList.remove("is-hidden");
    }
    if (mascotSpeechText) {
      mascotSpeechText.textContent =
        BIRTHDAY_CONFIG.mascotLines[mascotLineIdx % BIRTHDAY_CONFIG.mascotLines.length];
      mascotLineIdx += 1;
    }
    spawnFloatingHeart(e.clientX || 60, e.clientY || window.innerHeight - 60);
  });

  // 5. Tombol Replay di Adegan Penutup ("putar kembali momen kecil kita ↻")
  const replayExperienceBtn = document.getElementById("replay-experience-btn");
  replayExperienceBtn?.addEventListener("click", () => {
    resetAndReplayExperience();
  });
}

function updateSecretCounterUI() {
  const textEl = document.getElementById("secret-count-text");
  if (textEl) {
    textEl.textContent = `${AppState.foundSecrets.size}/${BIRTHDAY_CONFIG.secretMessages.length} Rahasia`;
  }
}

function openSecretModal(title, message) {
  const modal = document.getElementById("secret-modal");
  const titleEl = document.getElementById("secret-modal-title");
  const msgEl = document.getElementById("secret-modal-message");
  const progEl = document.getElementById("secret-modal-progress");

  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (progEl) {
    progEl.textContent = `Ditemukan: ${AppState.foundSecrets.size} dari ${BIRTHDAY_CONFIG.secretMessages.length} pesan rahasia ♡`;
  }

  modal.hidden = false;
  document.body.classList.add("locked-scroll");
  document.getElementById("secret-modal-close")?.focus();
}

/**
 * Mengulang seluruh pengalaman dari awal ketika tombol replay ditekan
 */
function resetAndReplayExperience() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const introOverlay = document.getElementById("intro-overlay");
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const heroStage = document.getElementById("hero-camera-stage");
  const wishFlame = document.getElementById("wish-flame");
  const wishSmoke = document.getElementById("wish-smoke");
  const makeWishBtn = document.getElementById("make-wish-btn");
  const relightBtn = document.getElementById("relight-candle-btn");
  const wishStatus = document.getElementById("wish-status-message");
  const giftBtn = document.getElementById("gift-box-btn");
  const giftPanel = document.getElementById("gift-reveal-panel");
  const finaleSection = document.getElementById("finale-section");

  // Reset amplop & intro
  if (envelopeWrapper) envelopeWrapper.classList.remove("is-opening");
  if (heroStage) heroStage.classList.remove("is-revealed");
  if (introOverlay) introOverlay.classList.remove("is-hidden");
  document.body.classList.add("locked-scroll");

  // Reset lilin permohonan & kotak hadiah
  wishFlame?.classList.remove("is-blown");
  wishSmoke?.classList.remove("is-active");
  if (makeWishBtn) makeWishBtn.hidden = false;
  if (relightBtn) relightBtn.hidden = true;
  if (wishStatus) {
    wishStatus.textContent = "Lilin masih menyala terang... siap menyimpan harapanmu ✨";
  }
  giftBtn?.classList.remove("is-opened");
  if (giftPanel) giftPanel.hidden = true;
  if (finaleSection) delete finaleSection.dataset.celebrated;
}

/**
 * ============================================================================
 * 4. PEMUTAR MUSIK MINI — PLAYLIST ROMANTIS + LACI SPOTIFY RESMI
 * ============================================================================
 */
function initMusicPlayer() {
  const audio = document.getElementById("birthday-audio");
  const widget = document.getElementById("music-player-widget");
  const minimizeBtn = document.getElementById("music-minimize-btn");
  const minimizeIcon = document.getElementById("music-minimize-icon");
  const playBtn = document.getElementById("music-play-btn");
  const muteBtn = document.getElementById("music-mute-btn");
  const muteIcon = document.getElementById("music-mute-icon");
  const seekBar = document.getElementById("music-seek-bar");
  const currentTimeEl = document.getElementById("music-current-time");
  const durationEl = document.getElementById("music-duration");
  const titleEl = document.getElementById("music-track-title");
  const artistEl = document.getElementById("music-track-artist");
  const fallbackNotice = document.getElementById("music-fallback-notice");

  // Elemen Laci Spotify
  const spotifyToggleWrapper = document.getElementById("spotify-toggle-wrapper");
  const spotifyToggleBtn = document.getElementById("spotify-toggle-btn");
  const spotifyToggleLabel = document.getElementById("spotify-toggle-label");
  const spotifyDrawer = document.getElementById("spotify-embed-drawer");
  const spotifyContainer = document.getElementById("spotify-iframe-container");

  if (!audio) return;

  if (titleEl) titleEl.textContent = BIRTHDAY_CONFIG.audio.title;
  if (artistEl) artistEl.textContent = BIRTHDAY_CONFIG.audio.artist;
  audio.src = BIRTHDAY_CONFIG.audio.src;

  // Sembunyikan tombol Spotify jika spotifyUrl dikosongkan di konfigurasi
  const embedUrl = convertToSpotifyEmbedUrl(BIRTHDAY_CONFIG.audio.spotifyUrl);
  if (!embedUrl && spotifyToggleWrapper) {
    spotifyToggleWrapper.style.display = "none";
  }

  // Toggle Laci Spotify + Lazy-Load Iframe + Jeda Otomatis Audio Lokal
  spotifyToggleBtn?.addEventListener("click", () => {
    if (!spotifyDrawer || !embedUrl) return;
    const isOpening = spotifyDrawer.hidden;
    spotifyDrawer.hidden = !isOpening;
    spotifyToggleBtn.setAttribute("aria-expanded", String(isOpening));

    if (spotifyToggleLabel) {
      spotifyToggleLabel.textContent = isOpening
        ? "tutup laci Spotify ▴"
        : "buka playlist Spotify resmi ✨";
    }

    if (isOpening) {
      // Muat iframe hanya saat pertama kali dibuka agar halaman tetap cepat
      if (spotifyContainer && !spotifyContainer.querySelector("iframe")) {
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl;
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.loading = "lazy";
        iframe.title = "Pemutar Lagu Spotify Ulang Tahun";
        spotifyContainer.appendChild(iframe);
      }

      // Jeda audio lokal / kotak musik agar tidak bertabrakan dengan Spotify
      if (AppState.isAudioPlaying) {
        toggleAudioPlayback(false);
      }
    }
  });

  // Penanganan ramah jika file audio/birthday-song.mp3 belum ada
  audio.addEventListener("error", () => {
    AppState.usingSynthFallback = Boolean(BIRTHDAY_CONFIG.audio.enableSynthFallback);
    if (fallbackNotice) {
      fallbackNotice.hidden = false;
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    if (durationEl && Number.isFinite(audio.duration)) {
      durationEl.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (!Number.isFinite(audio.duration) || audio.duration === 0) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (seekBar) seekBar.value = String(pct);
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  seekBar?.addEventListener("input", () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = (Number(seekBar.value) / 100) * audio.duration;
    }
  });

  playBtn?.addEventListener("click", () => {
    toggleAudioPlayback();
  });

  muteBtn?.addEventListener("click", () => {
    AppState.isMuted = !AppState.isMuted;
    audio.muted = AppState.isMuted;
    if (muteIcon) muteIcon.textContent = AppState.isMuted ? "🔇" : "🔊";
  });

  minimizeBtn?.addEventListener("click", () => {
    const isMin = widget?.classList.toggle("is-minimized");
    minimizeBtn.setAttribute("aria-expanded", String(!isMin));
    if (minimizeIcon) {
      minimizeIcon.textContent = isMin ? "🎵 Musik" : "▾";
    }
  });
}

/**
 * Mengubah link Share Spotify biasa (track, playlist, atau album)
 * menjadi URL Embed resmi secara otomatis.
 */
function convertToSpotifyEmbedUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") return "";
  const trimmed = rawUrl.trim();
  if (!trimmed) return "";

  if (trimmed.includes("open.spotify.com/embed/")) {
    return trimmed;
  }

  const match = trimmed.match(
    /open\.spotify\.com\/(?:intl-[a-zA-Z-]+\/)?(track|playlist|album)\/([a-zA-Z0-9]+)/
  );
  if (match && match[1] && match[2]) {
    return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator`;
  }

  return "";
}

function startAudioPlaybackAfterInteraction() {
  if (AppState.isAudioPlaying) return;
  toggleAudioPlayback(true);
}

function toggleAudioPlayback(forcePlay = false) {
  const audio = document.getElementById("birthday-audio");
  const playIcon = document.getElementById("music-play-icon");
  const vinylDisc = document.getElementById("vinyl-disc");
  const soundwave = document.getElementById("soundwave-indicator");
  const fallbackNotice = document.getElementById("music-fallback-notice");

  const setPlayingVisuals = (playing) => {
    AppState.isAudioPlaying = playing;
    if (playIcon) playIcon.textContent = playing ? "⏸" : "▶";
    vinylDisc?.classList.toggle("is-spinning", playing);
    soundwave?.classList.toggle("is-playing", playing);
  };

  if (AppState.isAudioPlaying && !forcePlay) {
    audio?.pause();
    stopDreamyMusicBoxSynth();
    setPlayingVisuals(false);
    return;
  }

  if (audio && !AppState.usingSynthFallback) {
    audio
      .play()
      .then(() => {
        setPlayingVisuals(true);
      })
      .catch(() => {
        // Jika file tidak ditemukan atau gagal dimuat, gunakan melodi kotak musik lembut
        AppState.usingSynthFallback = true;
        if (fallbackNotice) fallbackNotice.hidden = false;
        if (BIRTHDAY_CONFIG.audio.enableSynthFallback) {
          startDreamyMusicBoxSynth();
          setPlayingVisuals(true);
        }
      });
  } else if (BIRTHDAY_CONFIG.audio.enableSynthFallback) {
    startDreamyMusicBoxSynth();
    setPlayingVisuals(true);
  }
}

/**
 * Melodi Kotak Musik Impian (Web Audio API) — aktif secara ramah jika MP3 belum dipasang
 */
function startDreamyMusicBoxSynth() {
  stopDreamyMusicBoxSynth();
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  if (!AppState.audioCtx) {
    AppState.audioCtx = new AudioContextClass();
  }
  if (AppState.audioCtx.state === "suspended") {
    AppState.audioCtx.resume();
  }

  // Progresi nada manis bergaya musik kotak impian (C5, E5, G5, B5, A5, F5, D5, G5)
  const melodyNotes = [523.25, 659.25, 783.99, 987.77, 880.0, 698.46, 587.33, 783.99];
  let step = 0;

  const playNote = () => {
    if (AppState.isMuted || !AppState.audioCtx) return;
    const now = AppState.audioCtx.currentTime;
    const osc = AppState.audioCtx.createOscillator();
    const gain = AppState.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(melodyNotes[step % melodyNotes.length], now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.9);

    osc.connect(gain);
    gain.connect(AppState.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.95);
    step += 1;
  };

  playNote();
  AppState.synthInterval = setInterval(playNote, 750);
}

function stopDreamyMusicBoxSynth() {
  if (AppState.synthInterval) {
    clearInterval(AppState.synthInterval);
    AppState.synthInterval = null;
  }
}

/**
 * Efek suara kilauan lembut ketika membuka kejutan atau meniup lilin
 */
function playSparkleChime() {
  if (AppState.isMuted) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  if (!AppState.audioCtx) {
    AppState.audioCtx = new AudioContextClass();
  }
  const ctx = AppState.audioCtx;
  if (ctx.state === "suspended") ctx.resume();

  const notes = [587.33, 783.99, 987.77, 1174.66];
  notes.forEach((freq, i) => {
    const now = ctx.currentTime + i * 0.07;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.38);
  });
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/**
 * ============================================================================
 * PARTIKEL KANVAS: KELOPAK BUNGA JATUH & LEDAKAN CONFETTI
 * ============================================================================
 */
function initCanvasCelebration() {
  const canvas = document.getElementById("celebration-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  // Kelopak bunga pastel yang jatuh perlahan (jumlah dibatasi agar ringan di HP)
  const petalCount = window.innerWidth < 640 ? 12 : 22;
  const petalColors = ["#ffc2d4", "#ffe5ec", "#f3e8ff", "#ffd8c4", "#ffacc5"];

  for (let i = 0; i < petalCount; i += 1) {
    AppState.particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 4 + Math.random() * 5,
      vy: 0.45 + Math.random() * 0.65,
      vx: -0.3 + Math.random() * 0.6,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      color: petalColors[i % petalColors.length]
    });
  }

  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!AppState.reducedMotion) {
      // Gambar kelopak bunga latar
      AppState.particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.angle) * 0.3;
        p.angle += p.spin;

        if (p.y > canvas.height + 20) {
          p.y = -15;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Gambar partikel ledakan confetti
      for (let i = AppState.confettiBurstQueue.length - 1; i >= 0; i -= 1) {
        const c = AppState.confettiBurstQueue[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.14; // Gravitasi lembut
        c.alpha -= 0.014;
        c.angle += c.spin;

        if (c.alpha <= 0) {
          AppState.confettiBurstQueue.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.translate(c.x, c.y);
        ctx.rotate(c.angle);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.65);
        ctx.restore();
      }
    }

    requestAnimationFrame(renderFrame);
  }

  requestAnimationFrame(renderFrame);
}

function triggerConfettiBurst(originX, originY, count = 40) {
  if (AppState.reducedMotion) return;
  const colors = ["#ff5d8f", "#ffacc5", "#e09f3e", "#cdb4db", "#ffc8dd", "#a2d2ff"];

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6.5;
    AppState.confettiBurstQueue.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.5,
      size: 6 + Math.random() * 6,
      color: colors[i % colors.length],
      alpha: 1,
      angle: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.15
    });
  }
}

/**
 * ============================================================================
 * HATI MELAYANG SAAT LAYAR DIKLIK & KILAUAN KURSOR DESKTOP
 * ============================================================================
 */
function initGlobalClickHeartsAndCursorSparkles() {
  // Hati melayang saat pengguna mengeklik atau menyentuh layar
  document.addEventListener("pointerdown", (e) => {
    if (AppState.reducedMotion) return;
    spawnFloatingHeart(e.clientX, e.clientY);
  });

  // Efek kilauan mengikuti kursor khusus untuk perangkat desktop (pointer: fine)
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return;

  let lastSparkleTime = 0;
  document.addEventListener("pointermove", (e) => {
    if (AppState.reducedMotion) return;
    const now = performance.now();
    if (now - lastSparkleTime < 95) return;
    lastSparkleTime = now;

    const layer = document.getElementById("floating-effects-layer");
    if (!layer) return;

    const dot = document.createElement("span");
    dot.className = "cursor-sparkle-dot";
    const symbols = ["✨", "✦", "♡", "⋆"];
    dot.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    dot.style.color = "#ff7aa2";

    layer.appendChild(dot);
    setTimeout(() => dot.remove(), 750);
  });
}

function spawnFloatingHeart(x, y) {
  const layer = document.getElementById("floating-effects-layer");
  if (!layer) return;

  const heart = document.createElement("span");
  heart.className = "click-floating-heart";
  const icons = ["♡", "💖", "🎀", "✨", "🌸"];
  heart.textContent = icons[Math.floor(Math.random() * icons.length)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.color = "#ff5d8f";

  layer.appendChild(heart);
  setTimeout(() => heart.remove(), 1200);
}

function spawnMultipleFloatingHearts(x, y, total = 8) {
  if (AppState.reducedMotion) return;
  for (let i = 0; i < total; i += 1) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 90;
      const offsetY = (Math.random() - 0.5) * 50;
      spawnFloatingHeart(x + offsetX, y + offsetY);
    }, i * 65);
  }
}

/**
 * Helper keamanan teks HTML
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}