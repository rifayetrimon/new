import { assetPath } from "../../lib/assetPath";

export default function About() {
  return (
    <section className="py-16 px-6 bg-white" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assetPath("/images/about/about.png")}
            alt="Informasi Mengenai Portal eMasjid Selangor"
            className="w-[350px] h-[250px] rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 id="about-heading" className="text-2xl font-bold mb-4 text-[#21536E]">
            Makluman Penting eMasjid
          </h2>
          <p className="text-gray-700 text-xl mb-12">
            MAKLUMAN: Berkuat kuasa mulai 1 SEPTEMBER 2024, permohonan baharu eMasjid MAIS akan dilaksanakan berdasarkan Peraturan-Peraturan berpandukan Majlis Agama Islam (Negeri Selangor) 2025.
          </p>
          <button className="px-6 py-2 border border-[#0C9F77] rounded text-[#0C9F77] hover:bg-[#0C9F77] hover:text-white transition duration-200">
            Lihat Selanjutnya
          </button>
        </div>
      </div>
    </section>
  );
}