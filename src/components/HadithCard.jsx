const materials = [
  {
    number: "01",
    category: "ADAB BELAJAR",
    title: "Menuntut ilmu dengan sumber yang jelas",
    description:
      "Biasakan memeriksa dalil, memahami konteks, dan merujuk kepada sumber yang tepercaya.",
    reference: "Shahih Muslim 2699a",
    link: "https://sunnah.com/muslim:2699a",
  },
  {
    number: "02",
    category: "KONSISTENSI",
    title: "Menjaga amalan yang berkelanjutan",
    description:
      "Pelajari hadis tentang keutamaan amalan yang dilakukan secara rutin meskipun jumlahnya sedikit.",
    reference: "Shahih al-Bukhari 6464",
    link: "https://sunnah.com/bukhari:6464",
  },
  {
    number: "03",
    category: "PENGEMBANGAN DIRI",
    title: "Membangun kebiasaan belajar",
    description:
      "Jadikan belajar sebagai proses bertahap. Mulai dari dasar, praktikkan, lalu evaluasi hasilnya.",
    reference: "Catatan pengembangan diri",
    link: null,
  },
];

export default function HadithCard() {
  return (
    <section className="learning-section" id="learning">
      <div className="section-heading" id="about">
        <div>
          <span className="eyebrow">RUANG BELAJAR</span>
          <h2>Mulai dari hal yang mendasar.</h2>
        </div>

        <p>
          Materi ringkas sebagai pintu masuk untuk
          belajar, membaca referensi, dan memperdalam ilmu.
        </p>
      </div>

      <div className="learning-grid">
        {materials.map((item) => (
          <article className="learning-card" key={item.number}>
            <div className="card-top">
              <span className="card-number">{item.number}</span>
              <span className="card-category">{item.category}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="card-footer">
              <span className="card-reference">
                {item.reference}
              </span>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka referensi ${item.reference}`}
                >
                  ↗
                </a>
              ) : (
                <span aria-hidden="true">↗</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}