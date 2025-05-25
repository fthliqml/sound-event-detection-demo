"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import {
  AudioWaveform,
  Layers,
  Zap,
  BarChart3,
  Cpu,
  Headphones,
  Mic,
  Volume2,
  Play,
  Pause,
  ChevronRight,
  Check,
  Server,
  Code,
  Database,
  Brain,
  Smartphone,
} from "lucide-react";
import TeamMember from "@/components/TeamMember";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDemo, setActiveDemo] = useState("urban");

  // Simulated audio visualization effect
  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        setIsPlaying(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%)]"></div>
      </div>

      <Navbar>
        <NavItem href="/#features" label="Features" />
        <NavItem href="/#technology" label="Technology" />
        <NavItem href="/#use-cases" label="Use Cases" />
        <NavItem href="/about" label="About Us" />
        <div className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/demo"
            className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent rounded-xl hover:from-blue-700 hover:to-purple-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            role="button"
          >
            Try Demo
          </Link>
        </div>
      </Navbar>

      {/* 1. Visual Hero Section with Demo */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium leading-5 text-purple-200 uppercase bg-purple-900/30 rounded-full">
              Sound Recognition Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intelligent Audio{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Analysis
              </span>{" "}
              Platform
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Our deep learning technology transforms sound into actionable
              insights, enabling real-time audio event detection and
              classification with unprecedented accuracy.
            </p>
          </div>

          {/* Interactive Demo Animation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-1">
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-slate-400">SoundTag Demo</div>
                    <div className="w-20"></div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-slate-800 rounded-xl p-4">
                      <h3 className="text-lg font-medium mb-4">
                        Sample Sounds
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            id: "urban",
                            name: "Urban Environment",
                            icon: <Volume2 size={16} />,
                          },
                          {
                            id: "machine",
                            name: "Machine Sounds",
                            icon: <Cpu size={16} />,
                          },
                          {
                            id: "speech",
                            name: "Human Speech",
                            icon: <Mic size={16} />,
                          },
                          {
                            id: "nature",
                            name: "Nature Sounds",
                            icon: <Headphones size={16} />,
                          },
                        ].map((sample) => (
                          <button
                            key={sample.id}
                            onClick={() => {
                              setActiveDemo(sample.id);
                              setIsPlaying(true);
                            }}
                            className={`w-full flex items-center justify-between p-3 rounded-lg text-left ${
                              activeDemo === sample.id
                                ? "bg-blue-900/30 border border-blue-700/50"
                                : "bg-slate-800 border border-slate-700 hover:bg-slate-700/50"
                            }`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`mr-3 ${
                                  activeDemo === sample.id
                                    ? "text-blue-400"
                                    : "text-slate-400"
                                }`}
                              >
                                {sample.icon}
                              </div>
                              <span
                                className={
                                  activeDemo === sample.id
                                    ? "text-blue-300"
                                    : "text-slate-300"
                                }
                              >
                                {sample.name}
                              </span>
                            </div>
                            {activeDemo === sample.id && isPlaying ? (
                              <div className="flex space-x-1 items-center">
                                <span className="animate-pulse text-blue-400">
                                  <span className="sr-only">Playing</span>
                                  <Pause size={16} />
                                </span>
                              </div>
                            ) : (
                              <Play size={16} className="text-slate-400" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="bg-slate-800 rounded-xl p-4 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">
                            Real-time Analysis
                          </h3>
                          <div className="px-2 py-1 text-xs bg-blue-900/40 text-blue-300 rounded-full flex items-center">
                            {isPlaying ? "Analyzing..." : "Ready"}
                          </div>
                        </div>

                        {/* Audio Visualization */}
                        <div className="flex-grow flex items-center justify-center mb-4">
                          <div className="w-full h-32 relative">
                            <div className="flex items-center justify-center h-full space-x-1">
                              {[...Array(40)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full ${
                                    isPlaying ? "animate-sound-wave" : ""
                                  }`}
                                  style={{
                                    height: isPlaying
                                      ? `${
                                          Math.sin(
                                            i * 0.4 + Date.now() * 0.005
                                          ) *
                                            50 +
                                          50
                                        }%`
                                      : "10%",
                                    animationDelay: `${i * 0.05}s`,
                                  }}
                                ></div>
                              ))}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                          </div>
                        </div>

                        {/* Detection Results */}
                        <div className="bg-slate-900 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm font-medium text-slate-300">
                              Detected Events:
                            </div>
                            <div className="text-xs text-slate-500">
                              Confidence
                            </div>
                          </div>

                          <div className="space-y-3">
                            {isPlaying &&
                              {
                                urban: [
                                  { name: "Traffic Noise", confidence: 92 },
                                  { name: "Car Horn", confidence: 87 },
                                  { name: "Crowd Talking", confidence: 76 },
                                ],
                                machine: [
                                  { name: "Motor Running", confidence: 95 },
                                  {
                                    name: "Mechanical Whirring",
                                    confidence: 88,
                                  },
                                  { name: "Metal Impact", confidence: 72 },
                                ],
                                speech: [
                                  { name: "Male Voice", confidence: 94 },
                                  { name: "Multiple Speakers", confidence: 86 },
                                  { name: "English Language", confidence: 91 },
                                ],
                                nature: [
                                  { name: "Bird Chirping", confidence: 93 },
                                  { name: "Wind Rustling", confidence: 89 },
                                  { name: "Water Flowing", confidence: 84 },
                                ],
                              }[activeDemo]?.map((result, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={`w-2 h-2 rounded-full mr-2 ${
                                        index === 0
                                          ? "bg-green-500"
                                          : index === 1
                                          ? "bg-blue-500"
                                          : "bg-purple-500"
                                      }`}
                                    ></div>
                                    <span className="text-sm">
                                      {result.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-24 h-2 bg-slate-700 rounded-full mr-2 overflow-hidden">
                                      <div
                                        className={`h-full rounded-full ${
                                          result.confidence > 90
                                            ? "bg-green-500"
                                            : result.confidence > 80
                                            ? "bg-blue-500"
                                            : "bg-purple-500"
                                        }`}
                                        style={{
                                          width: `${result.confidence}%`,
                                        }}
                                      ></div>
                                    </div>
                                    <span className="text-xs text-slate-400">
                                      {result.confidence}%
                                    </span>
                                  </div>
                                </div>
                              ))}

                            {!isPlaying && (
                              <div className="text-center py-6 text-slate-500">
                                Select a sample and press play to see detection
                                results
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Fitur Unggulan (Key Features) */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Teknologi sound tagging kami menawarkan kemampuan canggih untuk
              analisis audio yang presisi dan efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AudioWaveform className="w-10 h-10 text-blue-400" />,
                title: "Deteksi Real-time",
                description:
                  "Analisis audio secara instan dengan latensi minimal, memberikan hasil dalam milidetik.",
              },
              {
                icon: <Brain className="w-10 h-10 text-purple-400" />,
                title: "Deep Learning Model",
                description:
                  "Model neural network canggih yang dilatih dengan jutaan sampel audio untuk akurasi tinggi.",
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-400" />,
                title: "Akurasi Tinggi",
                description:
                  "Tingkat akurasi hingga 95% bahkan dalam lingkungan dengan noise tinggi.",
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-green-400" />,
                title: "Analitik Lanjutan",
                description:
                  "Dapatkan wawasan mendalam melalui visualisasi dan analisis pola suara.",
              },
              {
                icon: <Cpu className="w-10 h-10 text-red-400" />,
                title: "Edge Computing",
                description:
                  "Proses data di perangkat lokal tanpa perlu koneksi internet konstan.",
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-400" />,
                title: "Integrasi Multi-platform",
                description:
                  "Bekerja di berbagai perangkat dari smartphone hingga sistem industri.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="bg-slate-900 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Demo Interaktif (Interactive Demo) */}
      <section className="py-16 md:py-24 bg-slate-900/50 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Demo Interaktif
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Lihat bagaimana teknologi kami bekerja dengan simulasi interaktif
              deteksi suara.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4">
                      Simulasi Deteksi Suara
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Aplikasi kami dapat mendeteksi dan mengklasifikasikan
                      berbagai jenis suara dalam waktu nyata. Berikut adalah
                      simulasi dari proses deteksi.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">
                          Sensitivitas Deteksi
                        </span>
                        <span className="text-xs text-blue-400">Tinggi</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">
                          Filter Noise
                        </span>
                        <span className="text-xs text-blue-400">Medium</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300"
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      <span>
                        {isPlaying ? "Stop Simulation" : "Start Simulation"}
                      </span>
                    </button>
                  </div>

                  <div className="md:w-1/2 bg-slate-900 rounded-xl p-4">
                    <h3 className="text-lg font-medium mb-4">
                      Live Detection Results
                    </h3>

                    {isPlaying ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-sm text-green-300">
                            Recording and analyzing audio...
                          </span>
                        </div>

                        <div className="h-32 flex items-center justify-center mb-4">
                          <div className="relative w-full h-full">
                            <div className="flex items-center justify-center h-full space-x-1">
                              {[...Array(30)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-1.5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-sound-wave"
                                  style={{
                                    height: `${
                                      Math.sin(i * 0.4 + Date.now() * 0.003) *
                                        50 +
                                      50
                                    }%`,
                                    animationDelay: `${i * 0.05}s`,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-slate-800 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm font-medium">
                                  Human Speech
                                </span>
                              </div>
                              <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full">
                                94% confidence
                              </span>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-sm font-medium">
                                  Background Music
                                </span>
                              </div>
                              <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full">
                                87% confidence
                              </span>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="text-sm font-medium">
                                  Door Closing
                                </span>
                              </div>
                              <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full">
                                76% confidence
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-64 text-slate-500">
                        <Mic size={48} className="mb-4 opacity-50" />
                        <p>Click &quot;Start Simulation&quot; to begin</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manfaat dan Solusi (Benefits and Solutions) */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Manfaat dan Solusi
              </h2>
              <p className="text-slate-300 mb-8">
                Teknologi sound tagging kami mengatasi berbagai tantangan dalam
                analisis audio dan memberikan solusi yang dapat diterapkan di
                berbagai industri.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Mengatasi Noise Lingkungan",
                    description:
                      "Algoritma kami dapat memfilter noise lingkungan dan fokus pada suara yang relevan, meningkatkan akurasi deteksi.",
                  },
                  {
                    title: "Analisis Real-time",
                    description:
                      "Tidak perlu menunggu proses analisis yang panjang. Dapatkan hasil dalam hitungan milidetik untuk pengambilan keputusan cepat.",
                  },
                  {
                    title: "Skalabilitas Tinggi",
                    description:
                      "Sistem kami dapat menangani volume data audio yang besar dan beradaptasi dengan kebutuhan yang berkembang.",
                  },
                  {
                    title: "Integrasi Mudah",
                    description:
                      "API yang komprehensif memungkinkan integrasi mudah dengan sistem dan aplikasi yang sudah ada.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      Industri dan Aplikasi
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          icon: <Volume2 size={24} className="text-blue-400" />,
                          title: "Smart Cities",
                          description:
                            "Monitoring kebisingan dan deteksi suara darurat di lingkungan perkotaan",
                        },
                        {
                          icon: <Cpu size={24} className="text-purple-400" />,
                          title: "Industri Manufaktur",
                          description:
                            "Deteksi anomali mesin melalui analisis suara untuk pemeliharaan prediktif",
                        },
                        {
                          icon: (
                            <Headphones size={24} className="text-green-400" />
                          ),
                          title: "Keamanan",
                          description:
                            "Identifikasi suara mencurigakan seperti kaca pecah atau tembakan",
                        },
                        {
                          icon: <Mic size={24} className="text-yellow-400" />,
                          title: "Healthcare",
                          description:
                            "Monitoring kesehatan melalui analisis pola pernapasan dan batuk",
                        },
                      ].map((industry, index) => (
                        <div
                          key={index}
                          className="bg-slate-900 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                          <div className="flex items-center mb-3">
                            <div className="mr-3">{industry.icon}</div>
                            <h4 className="font-medium">{industry.title}</h4>
                          </div>
                          <p className="text-slate-400 text-sm">
                            {industry.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack dan Kontribusi Tim */}
      <section className="py-16 md:py-24 bg-slate-900/50 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack & Tim Pengembang
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Teknologi canggih dan tim ahli di balik platform sound tagging
              kami.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Brain size={32} className="text-purple-400" />,
                  name: "TensorFlow",
                  description:
                    "Deep learning framework untuk model neural network",
                },
                {
                  icon: <Code size={32} className="text-blue-400" />,
                  name: "Python",
                  description:
                    "Bahasa pemrograman utama untuk pengembangan model",
                },
                {
                  icon: <Server size={32} className="text-green-400" />,
                  name: "AWS",
                  description:
                    "Infrastruktur cloud untuk deployment dan scaling",
                },
                {
                  icon: <Database size={32} className="text-yellow-400" />,
                  name: "MongoDB",
                  description: "Database untuk penyimpanan dan analisis data",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-colors"
                >
                  <div className="flex justify-center mb-4">{tech.icon}</div>
                  <h4 className="text-lg font-medium mb-2">{tech.name}</h4>
                  <p className="text-slate-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tim Pengembang
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Muhammad Fatihul Iqmal"
              nim="11221065"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/fthliqml"
              instagram="https://www.instagram.com/fthliqml/"
            />
            <TeamMember
              name="Azhari Rambe"
              nim="11221019"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/Aozora09"
              instagram="https://www.instagram.com/azhari_aozora"
            />
            <TeamMember
              name="Fhiqi Maulana As-Sddiq"
              nim="11221003"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/alexjohnson"
              instagram="https://www.instagram.com/fhiqi_maulana/"
            />
            <TeamMember
              name="Nabila Chairunnisa"
              nim="11221005"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/alcynx"
              instagram="https://linkedin.com/in/alexjohnson"
            />
            <TeamMember
              name="Ahmad Fakhrurrozi"
              nim="11221011"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/Fakhrurroz11"
              instagram="https://linkedin.com/in/alexjohnson"
            />
            <TeamMember
              name="Dilla Ayu"
              nim="11221031"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Alex has over 10 years of experience in software architecture and leads our technical strategy."
              github="https://github.com/Dillaayh"
              instagram="https://www.instagram.com/dillaayu.16/"
            />
          </div>
        </div>
      </section>

      {/* 6. Mobile Mockup (3D) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile Experience
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Prototype Aplikasi Audio Tagging di perangkat mobile dengan
              antarmuka yang intuitif dan fitur lengkap.
            </p>
          </div>

          <div className="relative">
            {/* 3D Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl transform rotate-3 scale-105"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Phone Mockup 1 */}
              <div className="relative w-64 h-[500px] perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] transform rotate-y-10 shadow-xl"></div>
                <div className="absolute inset-[3px] bg-black rounded-[38px] transform rotate-y-10">
                  <div className="absolute inset-0 overflow-hidden rounded-[36px]">
                    {/* Screen Content */}
                    <div className="h-full bg-slate-900">
                      {/* Status Bar */}
                      <div className="h-6 bg-black flex justify-between items-center px-4">
                        <div className="text-white text-xs">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="bg-slate-800 p-4">
                        <div className="text-white font-bold text-lg mb-1">
                          SoundTag
                        </div>
                        <div className="text-slate-400 text-xs">
                          Audio Detection
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-3 space-y-3">
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-white text-sm font-medium">
                              Live Detection
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="h-20 flex items-center justify-center">
                            <div className="flex items-center space-x-1">
                              {[...Array(15)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                                  style={{
                                    height: `${Math.sin(i * 0.8) * 30 + 40}%`,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-white text-sm font-medium mb-2">
                            Detected Sounds
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="text-slate-300 text-xs">
                                Car Horn
                              </div>
                              <div className="text-blue-400 text-xs">89%</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-slate-300 text-xs">
                                Traffic
                              </div>
                              <div className="text-blue-400 text-xs">76%</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-white text-sm font-medium mb-2">
                            Settings
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="text-slate-300 text-xs">
                                Sensitivity
                              </div>
                              <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-slate-300 text-xs">
                                Notifications
                              </div>
                              <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                                <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full shadow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 h-14 flex justify-around items-center px-4">
                        <div className="text-blue-500">
                          <AudioWaveform size={20} />
                        </div>
                        <div className="text-slate-500">
                          <BarChart3 size={20} />
                        </div>
                        <div className="text-slate-500">
                          <Cpu size={20} />
                        </div>
                        <div className="text-slate-500">
                          <Layers size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Phone Details */}
                <div className="absolute top-8 left-1/2 w-32 h-4 bg-black rounded-full transform -translate-x-1/2 rotate-y-10"></div>
              </div>

              {/* Phone Mockup 2 */}
              <div className="relative w-64 h-[500px] perspective-1000 mt-8 md:mt-16">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[40px] transform -rotate-y-10 shadow-xl"></div>
                <div className="absolute inset-[3px] bg-black rounded-[38px] transform -rotate-y-10">
                  <div className="absolute inset-0 overflow-hidden rounded-[36px]">
                    {/* Screen Content */}
                    <div className="h-full bg-slate-900">
                      {/* Status Bar */}
                      <div className="h-6 bg-black flex justify-between items-center px-4">
                        <div className="text-white text-xs">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="bg-slate-800 p-4">
                        <div className="text-white font-bold text-lg mb-1">
                          Analytics
                        </div>
                        <div className="text-slate-400 text-xs">
                          Sound Patterns
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-3 space-y-3">
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-white text-sm font-medium mb-3">
                            Sound Distribution
                          </div>
                          <div className="h-32 flex items-end justify-around">
                            {[65, 40, 80, 30, 55, 45].map((height, i) => (
                              <div
                                key={i}
                                className="w-6 rounded-t-sm relative"
                                style={{ height: `${height}%` }}
                              >
                                <div
                                  className={`absolute inset-0 rounded-t-sm ${
                                    i % 2 === 0
                                      ? "bg-blue-500"
                                      : "bg-purple-500"
                                  }`}
                                ></div>
                                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-transparent to-white opacity-20 rounded-t-sm"></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between mt-2">
                            <div className="text-slate-400 text-xs">Mon</div>
                            <div className="text-slate-400 text-xs">Tue</div>
                            <div className="text-slate-400 text-xs">Wed</div>
                            <div className="text-slate-400 text-xs">Thu</div>
                            <div className="text-slate-400 text-xs">Fri</div>
                            <div className="text-slate-400 text-xs">Sat</div>
                          </div>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-white text-sm font-medium mb-2">
                            Top Categories
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="text-slate-300 text-xs">
                                Urban Sounds
                              </div>
                              <div className="text-purple-400 text-xs">42%</div>
                            </div>
                            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full w-[42%] bg-purple-500 rounded-full"></div>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <div className="text-slate-300 text-xs">
                                Human Speech
                              </div>
                              <div className="text-blue-400 text-xs">28%</div>
                            </div>
                            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full w-[28%] bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 h-14 flex justify-around items-center px-4">
                        <div className="text-slate-500">
                          <AudioWaveform size={20} />
                        </div>
                        <div className="text-blue-500">
                          <BarChart3 size={20} />
                        </div>
                        <div className="text-slate-500">
                          <Cpu size={20} />
                        </div>
                        <div className="text-slate-500">
                          <Layers size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Phone Details */}
                <div className="absolute top-8 left-1/2 w-32 h-4 bg-black rounded-full transform -translate-x-1/2 -rotate-y-10"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-600/20"
              role="button"
            >
              <span>Let&#39;s Try Demo</span>
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">
                Sound<span className="text-blue-500">Tag</span>
              </div>
              <p className="text-slate-400 text-sm">
                Advanced Sound Detection & Classification
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Product
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2025 SoundTag. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
