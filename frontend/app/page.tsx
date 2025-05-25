import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const groupMembers = [
    {
      name: "Fhiqi Maulana As Sddiq",
      nim: "11221003",
      photo: "/images/fhiqi.jpg",
      role: "Anggota",
    },
    {
      name: "Muhammad Fatihul Iqmal",
      nim: "11221065",
      photo: "/images/iqmal.jpg",
      role: "Ketua Kelompok",
    },
    {
      name: "Nabila Chairunnisa",
      nim: "11221005",
      photo: "/images/nabila.jpg",
      role: "Anggota",
    },
    {
      name: "Ahmad Fakhrurrozi",
      nim: "11221011",
      photo: "/images/oji.jpg",
      role: "Anggota Beban",
    },
    {
      name: "Azhari Rambe",
      nim: "11221019",
      photo: "/images/azhari.jpg",
      role: "Anggota",
    },
    {
      name: "Dilla Ayu Puspitasari",
      nim: "11221031",
      photo: "/images/dilla.jpg",
      role: "Anggota",
    },
  ];

  const features = [
    {
      title: "Fast Inference",
      description:
        "Memproses dan mengenali berbagai jenis suara dalam waktu singkat menggunakan model AI yang ringan dan efisien",
      icon: "⚡",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Multiple Sound Types",
      description:
        "Dapat mengenali berbagai jenis suara seperti musik, percakapan, alarm, dan suara lingkungan",
      icon: "🔊",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "AI-Powered by Deep Learning",
      description:
        "Ditenagai deep learning dan neural networks dari data berskala besar untuk klasifikasi suara yang presisi dan adaptif",
      icon: "🤖",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      title: "Pretrained & Ready-to-Use",
      description:
        "Model yang sudah dilatih pada jutaan data, bisa langsung digunakan tanpa perlu pelatihan ulang",
      icon: "📊",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const stats = [
    { number: "95%", label: "Akurasi Detection" },
    { number: "< 100ms", label: "Response Time" },
    { number: "50+", label: "Sound Categories" },
    { number: "24/7", label: "Real-time Monitor" },
  ];

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute overflow-hidden h-full w-full opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <Navbar>
        <NavItem href="#about" label="About" />
        <NavItem href="#features" label="Features" />
        <NavItem href="#team" label="Team" />
        <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/demo"
            className="px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
            role="button"
          >
            Try Demo ✨
          </Link>
        </button>
      </Navbar>

      {/* Hero Section */}
      <section className="relative mx-auto overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center pt-24 pb-32">
            {/* Floating badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-purple-700 bg-purple-100 rounded-full border border-purple-200 animate-bounce">
              🚀 New AI Technology
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight">
              Audio Tagging
            </h1>

            <p className="max-w-3xl text-2xl text-gray-400 mb-12 leading-relaxed font-light">
              Kenali suara dalam rekaman audio secara{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                otomatis
              </span>{" "}
              dengan teknologi audio tagging yang
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {" "}
                cerdas dan efisien
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link
                href="/demo"
                className="group px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Coba Sekarang
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  🚀
                </span>
              </Link>
              <Link
                href="#about"
                className="px-10 py-5 text-xl font-bold text-purple-600 border-3 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-100 dark:bg-white/20 backdrop-blur-sm 
                 rounded-2xl border border-gray-300 dark:border-white/30 
                 hover:bg-gray-200 dark:hover:bg-white/30 
                 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-purple-600 dark:text-purple-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 dark:text-white font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Apa itu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Audio Tagging
                </span>
                ?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">🔖</span>
                    Mengenali dan Melabeli Suara
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Audio tagging adalah proses otomatis untuk memberi label
                    pada potongan audio berdasarkan jenis suara yang
                    dikandungnya, seperti suara manusia, musik, atau bunyi
                    lingkungan.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-3">💡</span>
                    Kenapa Audio Tagging Penting?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Audio tagging membantu mengelola data suara secara otomatis,
                    sehingga mempercepat proses pencarian dan analisis.
                    Teknologi ini penting untuk berbagai bidang seperti
                    keamanan, riset, dan pengembangan asisten suara.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    "Pelabelan Otomatis",
                    "Deteksi Multi Suara",
                    "Tahan Suara Bising",
                    "Integrasi Mudah",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-10 rounded-3xl shadow-2xl text-white">
                  <h3 className="text-3xl font-bold mb-8 text-center">
                    Pengaplikasian Audio Tagging
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: "🔫",
                        title: "Keamanan Publik",
                        desc: "Deteksi suara tembakan, ledakan, sirene",
                      },
                      {
                        icon: "🏙️",
                        title: "Smart city & IoT",
                        desc: "Pengawasan lingkungan audio",
                      },
                      {
                        icon: "🎬",
                        title: "Multimedia Indexing",
                        desc: "Pencarian suara dalam video/audio",
                      },
                      {
                        icon: "🦯",
                        title: "Aplikasi Aksesibilitas",
                        desc: "Membantu tunanetra dengan deskripsi suara sekitar",
                      },
                    ].map((app, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
                      >
                        <span className="text-3xl mr-4">{app.icon}</span>
                        <div>
                          <div className="font-bold text-lg">{app.title}</div>
                          <div className="text-blue-100">{app.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Fitur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Unggulan
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Teknologi berbasis PANN (Pretrained Audio Neural Networks) dengan
              model CNN14 dan dataset AudioSet untuk solusi deteksi suara yang
              akurat, cepat, dan mudah digunakan.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur from-purple-400 to-pink-400"></div>
                <div
                  className={`relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-transparent hover:border-white group-hover:bg-gradient-to-br group-hover:${feature.gradient} group-hover:text-white`}
                >
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-24 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Tim{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Pengembang
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Dikembangkan oleh Kelompok 4 – Kelas Deep Learning A, sebagai
              implementasi pembelajaran dalam mata kuliah terkait deteksi sound
              event
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {groupMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-gray-100 group-hover:border-transparent">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover rounded-full border-4 border-purple-100 group-hover:border-purple-300 transition-all duration-300"
                      />
                    </div>

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ✨
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-2 px-3 py-1 bg-purple-100 rounded-full text-sm inline-block">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm font-mono bg-gray-50 px-3 py-1 rounded-full inline-block">
                      NIM: {member.nim}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Audio Tagging
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Terima kasih telah mengunjungi proyek Audio Tagging kami.
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <span className="text-lg">© 2025 Kelompok 4 - Deep Learning A</span>
            <div className="flex space-x-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
