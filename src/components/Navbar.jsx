export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>Penyebar Sunnah</span>
      </a>

      <nav className="nav-links" aria-label="Navigasi utama">
        <a href="#about">Tentang</a>
        <a href="#learning">Belajar</a>
        <a href="#references">Referensi</a>
      </nav>

      <a className="nav-cta" href="#learning">
        Mulai Belajar <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}