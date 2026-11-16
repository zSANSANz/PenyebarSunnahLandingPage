export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          ILMU · ADAB · AMAL
        </span>

        <h1>
          Belajar sedikit.
          <br />
          <span>Amalkan dengan baik.</span>
        </h1>

        <p className="hero-description">
          Ruang belajar untuk mengenal ilmu dan adab
          berdasarkan Al-Qur'an dan Sunnah dengan
          referensi yang jelas dan mudah ditelusuri.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#learning">
            Jelajahi Materi <span aria-hidden="true">→</span>
          </a>

          <a className="text-link" href="#references">
            Lihat Referensi
          </a>
        </div>

        <div className="hero-note">
          <span className="note-dot" />
          Belajar dengan sumber yang dapat diperiksa
        </div>
      </div>

      <div className="hero-visual" aria-label="Kartu kutipan hadis">
        <div className="visual-top">
          <span className="visual-label">CATATAN ILMU</span>
          <span className="visual-number">01 / 03</span>
        </div>

        <div className="visual-symbol" aria-hidden="true">✳</div>

        <p className="visual-quote">
          Konsisten dalam kebaikan,
          meskipun sedikit.
        </p>

        <div className="visual-divider" />

        <div className="visual-bottom">
          <div>
            <strong>Shahih al-Bukhari</strong>
            <span>Hadis 6464</span>
          </div>
          <span className="visual-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </section>
  );
}