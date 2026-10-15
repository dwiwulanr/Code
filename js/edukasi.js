// ==============================
// SIDEBAR MOBILE
// ==============================

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function openSidebar() {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.innerHTML = '<i class="ri-close-line"></i>';
}

function closeSidebar() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
}

menuToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

sidebarOverlay.addEventListener("click", closeSidebar);

// Tutup sidebar setelah memilih menu di HP
sidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeSidebar);
});

// Tutup sidebar saat layar kembali ke desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeSidebar();
    }
});


// ==============================
// DATA ARTIKEL
// ==============================

const articles = {
    kompos: {
        category: "PANDUAN SAMPAH ORGANIK",
        title: "Cara Mengolah Sampah Organik Menjadi Kompos",
        content: `
            <p>
                Sampah organik berasal dari bahan alami yang dapat
                terurai, seperti sisa sayuran, kulit buah, dan daun kering.
                Bahan tersebut dapat diolah menjadi kompos untuk membantu
                menyuburkan tanah.
            </p>

            <h3>Alat dan bahan</h3>
            <ul>
                <li>Wadah kompos dengan ventilasi.</li>
                <li>Sisa sayuran dan kulit buah yang belum tercampur minyak.</li>
                <li>Daun kering atau bahan organik kering.</li>
                <li>Tanah atau kompos matang sebagai starter jika tersedia.</li>
            </ul>

            <h3>Langkah pengolahan</h3>
            <ol>
                <li>Pisahkan sampah organik dari plastik, logam, dan sampah lainnya.</li>
                <li>Potong bahan organik menjadi bagian yang lebih kecil.</li>
                <li>Masukkan bahan basah dan daun kering secara bergantian.</li>
                <li>Jaga kelembapan agar bahan tidak terlalu kering atau terlalu basah.</li>
                <li>Aduk secara berkala agar udara masuk ke dalam tumpukan.</li>
                <li>Tunggu hingga bahan berubah menjadi kompos berwarna gelap dengan aroma seperti tanah.</li>
            </ol>

            <h3>Hal yang perlu diperhatikan</h3>
            <p>
                Hindari memasukkan plastik, bahan kimia, serta daging dan
                produk susu ke dalam kompos rumahan biasa. Waktu penguraian
                bergantung pada bahan, kelembapan, udara, dan metode yang digunakan.
            </p>
        `
    },

    organik: {
        category: "PENGETAHUAN DASAR",
        title: "Mengenal Sampah Organik dan Cara Mengolahnya",
        content: `
            <p>
                Sampah organik merupakan sampah dari makhluk hidup yang
                dapat mengalami penguraian secara biologis. Contohnya
                sisa sayuran, kulit buah, daun, dan sisa tanaman.
            </p>

            <h3>Contoh sampah organik</h3>
            <ul>
                <li>Sisa sayuran dan buah.</li>
                <li>Daun kering dan potongan rumput.</li>
                <li>Ampas kopi dan teh tanpa bahan tambahan yang mengganggu proses penguraian.</li>
            </ul>

            <h3>Bagaimana cara mengolahnya?</h3>
            <p>
                Sampah organik dapat diolah melalui pengomposan atau
                metode pengolahan lain yang sesuai dengan jenis bahan.
                Pemilahan sejak awal membantu mengurangi kontaminasi
                dan mempermudah proses pengolahan.
            </p>

            <h3>Manfaat pengolahan</h3>
            <p>
                Pengolahan yang tepat dapat mengurangi sampah yang dibuang
                ke tempat pemrosesan akhir serta menghasilkan kompos yang
                bermanfaat untuk tanaman.
            </p>
        `
    },

    plastik: {
        category: "LINGKUNGAN",
        title: "Mengapa Sampah Plastik Perlu Dikurangi?",
        content: `
            <p>
                Plastik banyak digunakan karena ringan dan praktis.
                Namun, sebagian jenis plastik membutuhkan waktu sangat
                lama untuk terurai dan dapat menjadi sumber pencemaran
                ketika tidak dikelola dengan baik.
            </p>

            <h3>Dampak sampah plastik</h3>
            <ul>
                <li>Mencemari sungai, tanah, dan lingkungan pesisir.</li>
                <li>Membahayakan satwa yang menelan atau terjerat plastik.</li>
                <li>Dapat terpecah menjadi partikel plastik berukuran kecil.</li>
                <li>Menambah volume sampah yang harus dikelola.</li>
            </ul>

            <h3>Cara mengurangi sampah plastik</h3>
            <ol>
                <li>Bawa botol minum dan tas belanja yang dapat digunakan kembali.</li>
                <li>Hindari barang sekali pakai jika tersedia pilihan yang lebih baik.</li>
                <li>Pilih produk dengan kemasan yang dapat digunakan kembali atau didaur ulang.</li>
                <li>Pisahkan plastik yang bersih sesuai jenisnya dan aturan pengumpulan setempat.</li>
            </ol>
        `
    },

    pilah: {
        category: "PANDUAN PENGELOLAAN",
        title: "Panduan Memilah Sampah Rumah Tangga",
        content: `
            <p>
                Pemilahan sampah membantu menentukan cara pengolahan
                yang tepat. Lakukan pemilahan sebelum sampah tercampur
                agar bahan yang masih bernilai dapat dimanfaatkan.
            </p>

            <h3>Kelompok sampah yang bisa dipisahkan</h3>
            <ul>
                <li><strong>Organik:</strong> sisa sayuran, kulit buah, dan daun.</li>
                <li><strong>Anorganik yang dapat didaur ulang:</strong> botol plastik, kardus, kertas, dan kaleng sesuai ketentuan penerima.</li>
                <li><strong>Residu:</strong> sampah yang tidak dapat diproses melalui fasilitas pengolahan yang tersedia.</li>
                <li><strong>Limbah khusus:</strong> baterai, lampu tertentu, dan limbah elektronik yang memerlukan penanganan terpisah.</li>
            </ul>

            <h3>Langkah pemilahan</h3>
            <ol>
                <li>Sediakan wadah terpisah dan beri label yang jelas.</li>
                <li>Pisahkan sampah organik dari bahan kering yang bisa didaur ulang.</li>
                <li>Kosongkan dan bersihkan kemasan jika diperlukan.</li>
                <li>Simpan bahan daur ulang dalam keadaan kering.</li>
                <li>Salurkan bahan yang terkumpul ke bank sampah atau fasilitas yang menerimanya.</li>
            </ol>
        `
    },

    "daur-ulang": {
        category: "KREATIVITAS",
        title: "Mengenal Daur Ulang dan Manfaatnya",
        content: `
            <p>
                Daur ulang merupakan proses mengolah bahan bekas menjadi
                bahan baku atau produk baru. Prosesnya bergantung pada
                jenis material dan fasilitas yang tersedia.
            </p>

            <h3>Contoh bahan yang dapat didaur ulang</h3>
            <ul>
                <li>Kertas dan kardus yang bersih dan kering.</li>
                <li>Botol plastik tertentu yang diterima fasilitas daur ulang.</li>
                <li>Kaleng logam.</li>
                <li>Kaca yang dikumpulkan sesuai ketentuan setempat.</li>
            </ul>

            <h3>Apakah semua barang bekas harus didaur ulang?</h3>
            <p>
                Tidak selalu. Mengurangi penggunaan barang dan memakai
                kembali barang yang masih layak dapat menjadi pilihan
                sebelum mendaur ulang. Kerajinan dari barang bekas juga
                dapat menjadi alternatif jika hasilnya benar-benar
                digunakan dan tidak menambah sampah baru.
            </p>
        `
    },

    "bank-sampah": {
        category: "MASYARAKAT",
        title: "Mengenal Bank Sampah dan Cara Kerjanya",
        content: `
            <p>
                Bank sampah merupakan fasilitas pengelolaan sampah yang
                mendorong masyarakat memilah dan mengumpulkan sampah
                yang memiliki nilai ekonomi.
            </p>

            <h3>Bagaimana cara kerjanya?</h3>
            <ol>
                <li>Masyarakat memilah sampah dari rumah.</li>
                <li>Sampah yang diterima dikumpulkan sesuai jadwal.</li>
                <li>Petugas memeriksa dan menimbang sampah.</li>
                <li>Nilai sampah dicatat sesuai kebijakan bank sampah.</li>
                <li>Sampah disalurkan kepada pihak yang dapat memanfaatkannya.</li>
            </ol>

            <h3>Manfaat bank sampah</h3>
            <p>
                Bank sampah dapat membantu meningkatkan kebiasaan
                memilah sampah, memperpanjang pemanfaatan material,
                dan membuka peluang nilai ekonomi dari bahan yang
                sebelumnya dibuang.
            </p>

            <p>
                Jenis sampah yang diterima, jadwal, dan sistem pencatatan
                dapat berbeda di setiap bank sampah.
            </p>
        `
    },

    kebiasaan: {
        category: "TIPS HARIAN",
        title: "5 Kebiasaan Sederhana untuk Mengurangi Sampah",
        content: `
            <p>
                Mengurangi sampah bisa dimulai dari kebiasaan sehari-hari.
                Pilih langkah yang sesuai dengan kebutuhan dan fasilitas
                yang tersedia di lingkunganmu.
            </p>

            <h3>Lima kebiasaan yang bisa diterapkan</h3>
            <ol>
                <li><strong>Bawa tas belanja sendiri.</strong> Kurangi penggunaan kantong sekali pakai.</li>
                <li><strong>Gunakan botol minum isi ulang.</strong> Pilih wadah yang bisa digunakan kembali.</li>
                <li><strong>Rencanakan belanja makanan.</strong> Beli sesuai kebutuhan agar makanan tidak terbuang.</li>
                <li><strong>Pilah sampah.</strong> Pisahkan bahan organik, bahan daur ulang, dan residu.</li>
                <li><strong>Gunakan kembali barang yang masih layak.</strong> Perbaiki atau manfaatkan kembali sebelum membuangnya.</li>
            </ol>

            <p>
                Lakukan perubahan secara bertahap dan pertahankan
                kebiasaan yang paling mudah diterapkan.
            </p>
        `
    }
};


// ==============================
// MODAL ARTIKEL
// ==============================

const articleModal = document.getElementById("article-modal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalBody = document.getElementById("modal-body");

function openArticle(articleId) {
    const article = articles[articleId];

    if (!article) {
        return;
    }

    modalTitle.textContent = article.title;
    modalCategory.textContent = article.category;
    modalBody.innerHTML = article.content;

    articleModal.hidden = false;
    document.body.style.overflow = "hidden";

    articleModal.querySelector(".modal-content").scrollTop = 0;
}

function closeArticleModal() {
    articleModal.hidden = true;
    restorePageScroll();
}

// Semua tombol baca artikel
document.querySelectorAll(".read-article").forEach(button => {
    button.addEventListener("click", () => {
        const articleId = button.dataset.article;
        openArticle(articleId);
    });
});


// ==============================
// DATA VIDEO YOUTUBE
// ==============================

// Ganti VIDEO_ID dengan ID video YouTube yang sesuai.
// Contoh ID: dQw4w9WgXcQ
// ID merupakan bagian setelah "v=" pada URL YouTube.

const videos = {
    kompos: {
        title: "Cara Membuat Kompos dari Sampah Dapur",
        description: "Pelajari cara mengolah sisa organik menjadi kompos.",
        id: "VIDEO_ID"
    },

    pilah: {
        title: "Belajar Memilah Sampah dari Rumah",
        description: "Kenali cara memisahkan sampah berdasarkan jenisnya.",
        id: "VIDEO_ID"
    },

    kerajinan: {
        title: "Membuat Kerajinan dari Barang Bekas",
        description: "Pelajari ide pemanfaatan barang bekas menjadi produk kreatif.",
        id: "VIDEO_ID"
    }
};


// ==============================
// MODAL VIDEO
// ==============================

const videoModal = document.getElementById("video-modal");
const videoModalTitle = document.getElementById("video-modal-title");
const videoModalDescription = document.getElementById("video-modal-description");
const videoPlayer = document.getElementById("video-player");

function openVideo(videoId) {
    const video = videos[videoId];

    if (!video) {
        return;
    }

    videoModalTitle.textContent = video.title;
    videoModalDescription.textContent = video.description;

    videoPlayer.innerHTML = "";

    if (video.id && video.id !== "VIDEO_ID") {
        const iframe = document.createElement("iframe");

        iframe.src =
            "https://www.youtube-nocookie.com/embed/" +
            encodeURIComponent(video.id);

        iframe.title = video.title;
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";

        videoPlayer.appendChild(iframe);
    } else {
        const message = document.createElement("div");

        message.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            height: 100%;
            min-height: 220px;
            padding: 20px;
            color: #ffffff;
            text-align: center;
        `;

        message.innerHTML = `
            <i class="ri-video-line" style="font-size: 40px;"></i>
            <strong>Video belum ditambahkan</strong>
            <span style="font-size: 13px;">
                Tambahkan ID video YouTube pada data videos di edukasi.js.
            </span>
        `;

        videoPlayer.appendChild(message);
    }

    videoModal.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeVideoModal() {
    videoModal.hidden = true;

    // Menghapus iframe akan menghentikan video yang sedang diputar.
    videoPlayer.innerHTML = "";

    restorePageScroll();
}

document.querySelectorAll(".watch-video, .video-thumbnail").forEach(button => {
    button.addEventListener("click", () => {
        openVideo(button.dataset.video);
    });
});


// ==============================
// TUTUP MODAL
// ==============================

function restorePageScroll() {
    const articleIsOpen = !articleModal.hidden;
    const videoIsOpen = !videoModal.hidden;

    if (!articleIsOpen && !videoIsOpen) {
        document.body.style.overflow = "";
    }
}

document.querySelectorAll("[data-close-modal]").forEach(button => {
    button.addEventListener("click", () => {
        if (articleModal.contains(button)) {
            closeArticleModal();
        }

        if (videoModal.contains(button)) {
            closeVideoModal();
        }
    });
});

// Tutup modal ketika area gelap diklik
articleModal.addEventListener("click", event => {
    if (event.target === articleModal) {
        closeArticleModal();
    }
});

videoModal.addEventListener("click", event => {
    if (event.target === videoModal) {
        closeVideoModal();
    }
});

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (!articleModal.hidden) {
            closeArticleModal();
        }

        if (!videoModal.hidden) {
            closeVideoModal();
        }

        if (sidebar.classList.contains("active")) {
            closeSidebar();
        }
    }
});


// ==============================
// PENCARIAN DAN FILTER
// ==============================

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".category-card");

const articleCards = document.querySelectorAll(".article-card");
const videoCards = document.querySelectorAll(".video-card");

const articleCount = document.getElementById("article-count");
const emptyState = document.getElementById("empty-state");
const articleGrid = document.getElementById("article-grid");
const resetSearch = document.getElementById("reset-search");

let selectedCategory = "semua";

function filterContent() {
    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    let visibleArticles = 0;
    let visibleVideos = 0;

    // Filter artikel
    articleCards.forEach(card => {
        const category = card.dataset.category;
        const searchableText =
            (card.dataset.search || "") + " " + card.textContent;

        const matchesCategory =
            selectedCategory === "semua" ||
            category === selectedCategory;

        const matchesSearch =
            searchableText.toLowerCase().includes(keyword);

        const isVisible = matchesCategory && matchesSearch;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleArticles++;
        }
    });

    // Filter video berdasarkan kategori dan pencarian
    videoCards.forEach(card => {
        const category = card.dataset.category;
        const searchableText =
            (card.dataset.search || "") + " " + card.textContent;

        const matchesCategory =
            selectedCategory === "semua" ||
            category === selectedCategory;

        const matchesSearch =
            searchableText.toLowerCase().includes(keyword);

        const isVisible = matchesCategory && matchesSearch;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleVideos++;
        }
    });

    articleCount.textContent =
        `${visibleArticles} Artikel`;

    articleGrid.hidden = visibleArticles === 0;
    emptyState.hidden = visibleArticles > 0 || visibleVideos > 0;

    // Jika pencarian hanya menemukan video, tampilkan bagian video.
    const videoSection = document.getElementById("video");

    videoSection.hidden = visibleVideos === 0;

    // Jika tidak ada artikel dan video, tampilkan pesan.
    if (visibleArticles === 0 && visibleVideos === 0) {
        emptyState.hidden = false;
    }
}


// Pencarian langsung saat pengguna mengetik
searchInput.addEventListener("input", filterContent);

// Mencegah form melakukan reload halaman
searchForm.addEventListener("submit", event => {
    event.preventDefault();
    filterContent();
});

// Filter kategori
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(categoryButton => {
            categoryButton.classList.remove("active");
        });

        button.classList.add("active");

        filterContent();
    });
});

// Reset pencarian dan kategori
resetSearch.addEventListener("click", () => {
    searchInput.value = "";
    selectedCategory = "semua";

    categoryButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === "semua"
        );
    });

    filterContent();
});


// ==============================
// MENU SIDEBAR KE BAGIAN HALAMAN
// ==============================

document.querySelectorAll('.sidebar-menu a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ==============================
// ANIMASI KARTU
// ==============================

const animatedCards = document.querySelectorAll(
    ".article-card, .video-card, .category-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08
        }
    );

    animatedCards.forEach(card => {
        observer.observe(card);
    });
}


// ==============================
// INISIALISASI
// ==============================

filterContent();
