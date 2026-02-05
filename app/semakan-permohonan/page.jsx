export const metadata = {
  title: "Semakan Permohonan | Portal eMasjid Selangor",
  description: "Semak status permohonan eMasjid anda secara atas talian. Masukkan No. Kad Pengenalan untuk keputusan terkini.",
  alternates: { canonical: "/semakan-permohonan" },
};

export default function SemakanPermohonanPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#164776] mb-6 border-b-4 border-green-500 pb-2">
        Semakan Status Permohonan
      </h1>

      <section className="bg-gray-50 p-8 rounded-xl shadow-inner mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sila masukkan maklumat di bawah untuk menyemak status terkini permohonan anda.
          Sistem kami dikemaskini secara masa nyata (real-time) bagi memastikan anda mendapat maklumat yang tepat.
        </p>
        {/* Placeholder for your search form */}
        <div className="mt-8 p-10 border-2 border-dashed border-gray-300 text-center rounded-lg text-gray-400">
          [ RUANGAN BORANG SEMAKAN DI SINI ]
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-green-600 mb-3">Langkah Semakan</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Masukkan Nombor Kad Pengenalan (tanpa '-')</li>
            <li>Masukkan Nombor Rujukan Permohonan</li>
            <li>Klik butang "Carian"</li>
            <li>Status akan dipaparkan di bawah borang</li>
          </ul>
        </div>
        <div className="bg-white p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-blue-600 mb-3">Info Status</h2>
          <p className="text-sm text-gray-600 mb-2"><strong>Diterima:</strong> Permohonan sedang diproses.</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Dokumen Tidak Lengkap:</strong> Sila muat naik semula dokumen.</p>
          <p className="text-sm text-gray-600"><strong>Lulus:</strong> Sila hubungi Pejabat Agama Daerah.</p>
        </div>
      </div>
    </main>
  );
}