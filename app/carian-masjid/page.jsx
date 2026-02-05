export const metadata = {
  title: "Carian Masjid Selangor | Lokasi & Info Terkini",
  description: "Cari lokasi masjid dan surau di seluruh negeri Selangor. Dapatkan maklumat kemudahan, koordinat, dan aktiviti komuniti.",
  alternates: { canonical: "/carian-masjid" },
};

export default function CarianMasjidPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#164776] mb-4">Direktori & Carian Masjid</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cari masjid berdekatan anda dengan mudah. Kami menyediakan maklumat lengkap mengenai lebih daripada 400 masjid di bawah pentadbiran JAIS.
        </p>
      </div>

      {/* Feature Grid adds keyword density for SEO */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {['Lokasi GPS', 'Waktu Solat', 'Kemudahan OKU'].map((feature) => (
          <div key={feature} className="p-4 bg-green-50 rounded-lg text-center border border-green-200 font-medium text-green-800">
            {feature}
          </div>
        ))}
      </div>

      <div className="bg-white border rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Cari Mengikut Daerah</h2>
        <div className="flex flex-wrap gap-3">
          {['Petaling', 'Hulu Langat', 'Klang', 'Gombak', 'Sepang', 'Kuala Langat'].map(daerah => (
            <button key={daerah} className="px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-all">
              {daerah}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}