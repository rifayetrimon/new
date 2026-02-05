import Soalan from "../../components/home/Soalan";

export const metadata = {
  title: "Soalan Lazim (FAQ) | Portal eMasjid Selangor",
  description: "Dapatkan jawapan bagi soalan lazim mengenai permohonan, proses perakuan, dan bantuan teknikal sistem eMasjid Selangor.",
  alternates: {
    canonical: "/soalan-lazim",
  },
};

export default function SoalanLazimPage() {
  // Enhanced FAQ Schema with more items to show "Authority" to Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah itu Portal eMasjid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Portal eMasjid ialah sistem pengurusan pintar masjid di bawah seliaan Jabatan Agama Islam Selangor (JAIS) untuk urusan permohonan dan pelantikan jawatankuasa."
        }
      },
      {
        "@type": "Question",
        "name": "Siapakah yang boleh memohon melalui eMasjid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mana-mana individu yang memenuhi kriteria kelayakan yang ditetapkan oleh Majlis Agama Islam Selangor (MAIS) boleh membuat permohonan."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana jika saya menghadapi masalah teknikal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anda boleh menghubungi meja bantuan kami melalui e-mel tauliah@abc.gov.my atau talian bantuan yang tertera di bahagian bawah portal."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Header Section to add Content Weight */}
        <section className="pt-32 pb-12 px-6 bg-[#164776] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Pusat Bantuan & FAQ</h1>
            <p className="text-blue-100 text-lg">
              Cari jawapan pantas bagi persoalan anda mengenai sistem eMasjid.
              Kami telah mengumpulkan soalan-soalan lazim bagi memudahkan urusan anda.
            </p>
          </div>
        </section>

        {/* Your Original Questions Component */}
        <div className="py-12">
          <Soalan />
        </div>

        {/* Support Section to increase Page Length */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white border-2 border-dashed border-green-500 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Masih perlukan bantuan?</h2>
              <p className="text-gray-600 mt-2">
                Jika soalan anda tidak tersenarai di atas, sila hubungi pihak pentadbiran kami untuk bantuan lanjut.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#0C9F77] text-white rounded-lg font-semibold hover:bg-[#0a8a68] transition-colors">
                Hubungi Kami
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Manual Pengguna
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}