"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-20 pt-[140px] md:pb-32 md:pt-[180px] lg:pb-40 lg:pt-[200px]"
        style={{ backgroundColor: '#070B17' }}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, #4F7CFF 1px, transparent 1px),
              linear-gradient(to bottom, #4F7CFF 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Large Gradient Orb */}
        <div className="absolute right-0 top-0 z-0 translate-x-1/3 -translate-y-1/4 opacity-20 blur-3xl">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6]"></div>
        </div>

        {/* Secondary Glow Orb */}
        <div className="absolute left-0 bottom-0 z-0 -translate-x-1/4 translate-y-1/4 opacity-10 blur-3xl">
          <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#4F7CFF]"></div>
        </div>

        {/* Glow Lines */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#4F7CFF]/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/10 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* LEFT SIDE */}
            <div className="w-full px-4 lg:w-1/2">
              <div className={`max-w-[640px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Badge */}
                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <span className="mr-2">🚀</span>
                  <span className="text-sm font-medium text-white/80">AI Product Engineering Studio</span>
                </div>

                {/* Headline */}
                <h1 className="mb-6 font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Transform Ideas into<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6]">
                    Powerful AI Products.
                  </span>
                </h1>

                {/* Subheading */}
                <p className="mb-8 text-lg leading-relaxed text-white/60 md:text-xl" style={{ maxWidth: '520px' }}>
                  We help startups and businesses automate operations, build AI-powered software, AI agents, and scalable SaaS products that drive measurable business growth.
                </p>

                {/* Trust Row */}
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-white/60">
                    <span className="mr-2 text-[#4F7CFF]">✓</span>
                    <span>AI Automation</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <span className="mr-2 text-[#4F7CFF]">✓</span>
                    <span>AI Agents</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <span className="mr-2 text-[#4F7CFF]">✓</span>
                    <span>Vertical AI SaaS</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <span className="mr-2 text-[#4F7CFF]">✓</span>
                    <span>Enterprise Software</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
                  <Link
                    href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[14px] bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,124,255,0.3)] hover:-translate-y-0.5"
                  >
                    Book Free Strategy Call
                  </Link>
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-[14px] border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:border-white/25"
                  >
                    View Our Work
                  </Link>
                </div>

                {/* Trusted By */}
                <div className="mb-6">
                  <p className="mb-4 text-sm text-white/40">Trusted by startups across</p>
                  <div className="flex gap-3 text-2xl">
                    <span>🇺🇸</span>
                    <span>🇬🇧</span>
                    <span>🇦🇺</span>
                    <span>🇮🇳</span>
                  </div>
                </div>

                {/* Company Logos (Grayscale) */}
                <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale">
                  <div className="text-sm font-semibold text-white">Stripe</div>
                  <div className="text-sm font-semibold text-white">Vercel</div>
                  <div className="text-sm font-semibold text-white">Linear</div>
                  <div className="text-sm font-semibold text-white">OpenAI</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Dashboard Mockup */}
            <div className="w-full px-4 lg:w-1/2">
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Glassmorphism Card */}
                <div className="relative mx-auto max-w-[480px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl" style={{
                  boxShadow: '0 0 60px rgba(79,124,255,0.15), 0 0 100px rgba(139,92,246,0.1)',
                  animation: 'glowPulse 4s ease-in-out infinite'
                }}>
                  {/* Card Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6]">
                        <span className="text-white font-bold text-sm">&lt;/&gt;</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">CodeCEF</div>
                        <div className="flex items-center text-xs text-white/50">
                          <div className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></div>
                          Online
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-white/40">v2.4.1</div>
                  </div>

                  {/* Card Title */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white">Build With Confidence</h3>
                    <p className="text-sm text-white/50">Real-time system status</p>
                  </div>

                  {/* Status Sections */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                      <div className="flex items-center">
                        <div className="mr-3 h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <span className="text-sm">⚡</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">AI Automation</div>
                          <div className="text-xs text-white/40">Running</div>
                        </div>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                      <div className="flex items-center">
                        <div className="mr-3 h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">AI Agent</div>
                          <div className="text-xs text-white/40">Connected</div>
                        </div>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                      <div className="flex items-center">
                        <div className="mr-3 h-8 w-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-sm">☁️</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Cloud</div>
                          <div className="text-xs text-white/40">Healthy</div>
                        </div>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                      <div className="flex items-center">
                        <div className="mr-3 h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <span className="text-sm">🛡️</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Support</div>
                          <div className="text-xs text-white/40">24/7</div>
                        </div>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-white/40">Uptime</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">Enterprise Ready</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">ISO Ready</span>
                    </div>
                  </div>
                </div>

                {/* Floating AI Icons */}
                <div className="absolute -left-8 top-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                    💬
                  </div>
                </div>
                <div className="absolute -right-6 top-1/3 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                    🗄️
                  </div>
                </div>
                <div className="absolute -left-4 bottom-1/4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                    🔌
                  </div>
                </div>
                <div className="absolute -right-8 bottom-1/3 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                    ⚙️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="container relative z-10 mt-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-5">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-white/50">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-white/50">On-time Delivery</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/50">Support</div>
              </div>
              <div className="text-center hidden md:block">
                <div className="mb-2 text-3xl font-bold text-white">5.0</div>
                <div className="text-sm text-white/50">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div 
            className={`absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            Chat with us now!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
          <Link
            href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20help%20with%20my%20software"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
            style={{
              animation: 'pulse 2s infinite',
              backgroundColor: '#25D366'
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 60px rgba(79,124,255,0.15), 0 0 100px rgba(139,92,246,0.1);
          }
          50% {
            box-shadow: 0 0 80px rgba(79,124,255,0.25), 0 0 120px rgba(139,92,246,0.15);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
