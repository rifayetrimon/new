export const metadata = {
  title: "Info eMasjid | Mengenai Sistem Pengurusan Masjid",
  description: "Ketahui lebih lanjut mengenai fungsi Portal eMasjid Selangor dan bagaimana ia membantu pengurusan masjid secara digital.",
  alternates: { canonical: "/info-emasjid" },
};

export default function InfoEmasjidPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#164776] mb-8 text-center">Informasi Mengenai eMasjid</h1>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p className="text-xl leading-relaxed italic text-center text-blue-900 bg-blue-50 p-6 rounded-lg">
          "Transformasi Digital untuk Pengurusan Masjid yang Lebih Telus dan Efisyen di Negeri Selangor."
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Objektif Utama</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Memudahkan proses pendaftaran dan permohonan jawatankuasa masjid.</li>
              <li>Menyediakan pangkalan data berpusat bagi aktiviti dan profil masjid.</li>
              <li>Meningkatkan penyampaian maklumat JAIS kepada masyarakat setempat.</li>
              <li>Memastikan pengurusan kewangan dan pentadbiran masjid lebih teratur.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Faedah Kepada Pengguna</h2>
            <p>
              Portal ini direka dengan antaramuka yang mesra pengguna, membolehkan anda mengakses perkhidmatan kami
              secara 24/7 dari mana-mana peranti digital seperti komputer riba, tablet, atau telefon pintar.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}