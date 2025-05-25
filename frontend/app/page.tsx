import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import Link from "next/link";
import {
  AudioWaveformIcon as Waveform,
  Layers,
  Zap,
  BarChart3,
  Cpu,
  Headphones,
  Mic,
  Volume2,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%)]"></div>
      </div>

      <Navbar>
        <NavItem href="#features" label="Features" />
        <NavItem href="#technology" label="Technology" />
        <NavItem href="#use-cases" label="Use Cases" />
        <NavItem href="/TimDevelop" label="About Us" />
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

      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium leading-5 text-purple-200 uppercase bg-purple-900/30 rounded-full">
                Advanced AI Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Intelligent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Sound Tagging
                </span>{" "}
                & Detection
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Harness the power of deep learning to identify, classify, and
                tag audio events with unprecedented accuracy in real-time.
              </p>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Memanfaatkan kekuatan Deep Learning untuk mengidentifikasi,
                mengklasifikasikan, dan menandai peristiwa audio dengan akurasi
                yang belum pernah terjadi sebelumnya secara real-time.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/demo"
                  className="px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-600/20"
                  role="button"
                >
                  Try Demo
                </Link>
                <Link
                  href="#technology"
                  className="px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  role="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-1">
                    <div className="bg-slate-900 rounded-xl p-4">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 text-xs text-slate-400">
                          Sound Analyzer
                        </div>
                      </div>
                      <div className="h-64 flex items-center justify-center">
                        <div className="relative w-full h-32">
                          {/* Audio waveform visualization */}
                          <div className="flex items-center justify-center h-full space-x-1">
                            {[...Array(40)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
                                style={{
                                  height: `${Math.sin(i * 0.4) * 50 + 50}%`,
                                  animationDelay: `${i * 0.05}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                        </div>
                      </div>
                      <div className="mt-4 bg-slate-800 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-slate-300">
                            Detected:{" "}
                            <span className="text-blue-400 font-medium">
                              Car Horn (89%)
                            </span>
                          </div>
                          <div className="text-xs text-slate-500">00:12</div>
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <span className="px-2 py-1 text-xs bg-blue-900/40 text-blue-300 rounded-full">
                            Traffic
                          </span>
                          <span className="px-2 py-1 text-xs bg-purple-900/40 text-purple-300 rounded-full">
                            Urban
                          </span>
                          <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 border border-slate-700 rounded-full">
                            +3 more
                          </span>
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

      <section id="features" className="py-16 md:py-24 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Sound Recognition Features
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our deep learning models are trained on diverse audio datasets to
              deliver exceptional sound tagging performance across various
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Waveform className="w-10 h-10 text-blue-400" />,
                title: "Real-time Analysis",
                description:
                  "Process and analyze audio streams in real-time with minimal latency for immediate insights.",
              },
              {
                icon: <Layers className="w-10 h-10 text-purple-400" />,
                title: "Multi-layer Classification",
                description:
                  "Identify multiple sound events simultaneously with hierarchical classification.",
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-400" />,
                title: "High Accuracy",
                description:
                  "Achieve up to 95% accuracy in sound event detection even in noisy environments.",
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-green-400" />,
                title: "Advanced Analytics",
                description:
                  "Gain insights through detailed audio event analytics and visualization tools.",
              },
              {
                icon: <Cpu className="w-10 h-10 text-red-400" />,
                title: "Edge Computing",
                description:
                  "Deploy models on edge devices for offline processing and reduced bandwidth usage.",
              },
              {
                icon: <Headphones className="w-10 h-10 text-blue-400" />,
                title: "Custom Training",
                description:
                  "Train models on your specific audio data for specialized sound recognition tasks.",
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

      <section
        id="technology"
        className="py-16 md:py-24 bg-slate-900/50 relative"
      >
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powered by Deep Learning
              </h2>
              <p className="text-slate-300 mb-6">
                Teknologi Audio Tagging yang kami manfaatkan ini menggunakan
                jaringan saraf konvolusi yang canggih dan transformer untuk
                menganalisis spektogram audio dan mengekstrak pola yang
                bermakna. Dengan model PANNs (Pretrained Audio Neural Networks)
                yang dirancang untuk tugas audio tagging dan sound event
                detection, kemudian dengan beberapa model utama seperti Cnn6 (6
                convolutional layers, ringan dan cepat), Cnn10 (10 layers,
                performa lebih tinggi), Cnn14 (14 layers, arsitektur unggulan),
                ResNet22 (ResNet ringan untuk audio), Wavegram-Logmel-Cnn14
                (gabungan wavegram dan log-mel spectrogram untuk hasil terbaik),
                serta Cnn14_16k (versi 16kHz untuk aplikasi real-time).
                Model-model ini telah dilatih dengan dataset AudioSet dan
                tersedia dalam format .pth untuk inferensi atau fine-tuning.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 rounded-full p-1 mr-4 mt-1">
                    <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300">
                      Spectrogram Analysis
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Converts audio signals into visual representations for
                      neural network processing
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-900/30 rounded-full p-1 mr-4 mt-1">
                    <div className="bg-purple-500 rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-300">
                      Transfer Learning
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Adapts pre-trained models to specific audio domains for
                      improved accuracy
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-900/30 rounded-full p-1 mr-4 mt-1">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-300">
                      Attention Mechanisms
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Focuses on relevant audio features while ignoring
                      background noise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl p-6">
                  <h3 className="text-lg font-medium mb-4">
                    Neural Network Architecture
                  </h3>

                  <div className="h-64 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Input Layer */}
                      <div className="absolute left-0 flex flex-col space-y-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                          >
                            <div className="w-4 h-4 rounded-full bg-blue-300"></div>
                          </div>
                        ))}
                      </div>

                      {[...Array(3)].map((_, layerIndex) => (
                        <div
                          key={layerIndex}
                          className="absolute flex flex-col space-y-2"
                          style={{ left: `${25 + layerIndex * 25}%` }}
                        >
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center"
                            >
                              <div className="w-3 h-3 rounded-full bg-purple-300"></div>
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Output Layer */}
                      <div className="absolute right-0 flex flex-col space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                          >
                            <div className="w-4 h-4 rounded-full bg-green-300"></div>
                          </div>
                        ))}
                      </div>

                      {/* Connections */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: -1 }}
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                        {/* Simplified connections visualization */}
                        {[...Array(20)].map((_, i) => (
                          <path
                            key={i}
                            d={`M ${10 + Math.random() * 20},${
                              30 + Math.random() * 150
                            } C ${50 + Math.random() * 50},${
                              Math.random() * 200
                            } ${150 + Math.random() * 50},${
                              Math.random() * 200
                            } ${280 + Math.random() * 20},${
                              30 + Math.random() * 150
                            }`}
                            stroke="url(#gradient)"
                            strokeWidth="0.5"
                            fill="none"
                            opacity="0.3"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-slate-400 text-center">
                    Convolutional Neural Network with Attention Layers for Audio
                    Classification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sound Tagging Applications
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our technology enables a wide range of applications across
              multiple industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Volume2 className="w-8 h-8" />,
                title: "Urban Sound Monitoring",
                description:
                  "Monitor urban environments for noise pollution, emergency sounds, and city planning.",
                tags: ["Smart Cities", "Environmental", "Public Safety"],
              },
              {
                icon: <Mic className="w-8 h-8" />,
                title: "Industrial Maintenance",
                description:
                  "Detect machine anomalies through sound analysis for predictive maintenance.",
                tags: ["Manufacturing", "IoT", "Automation"],
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Security & Surveillance",
                description:
                  "Identify security threats through audio detection of breaking glass, alarms, or gunshots.",
                tags: ["Security", "Monitoring", "Alert Systems"],
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Healthcare Applications",
                description:
                  "Monitor patient health through sound analysis of breathing, coughing, or speech patterns.",
                tags: ["Medical", "Remote Monitoring", "Diagnostics"],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container px-4 mx-auto max-w-4xl relative">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Sound Tagging?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Try our demo to see how our deep learning technology can
                identify and classify sounds in real-time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/demo"
                className="px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-600/20"
                role="button"
              >
                Try Interactive Demo
              </Link>
            </div>
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
                href="https://github.com/qiuqiangkong/audioset_tagging_cnn"
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
