import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        {/* Spline 3D cover (full-bleed) */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Dark depth base gradient (doesn't block Spline) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />

        {/* Subtle vignette for cinematic feel */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.65)_100%)]" />

        {/* Floating particles layer */}
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60">
          <div className="absolute inset-0 particle-field" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
          <div className="text-center select-none">
            {/* Holographic glow backdrop under text */}
            <div className="mx-auto mb-8 h-28 w-[60vw] max-w-3xl min-w-[260px] blur-3xl bg-[radial-gradient(40%_40%_at_50%_50%,rgba(56,189,248,0.28)_0%,rgba(37,99,235,0.18)_40%,rgba(2,6,23,0)_70%)]" />

            <h1
              className="text-[8vw] leading-none font-black tracking-[-0.02em] md:text-7xl lg:text-8xl xl:text-9xl"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
            >
              <span className="neon-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-300 bg-clip-text text-transparent">
                Jyoshika Barathimogan
              </span>
            </h1>

            {/* Underline beam */}
            <div className="mx-auto mt-6 h-[2px] w-40 md:w-56 lg:w-64 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />
          </div>
        </div>

        {/* Bottom flowing dot-waves */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[36vh]">
          <div className="absolute inset-x-0 bottom-0 h-full dot-wave opacity-80" />
          <div className="absolute inset-x-0 bottom-0 h-full dot-wave delay-2 opacity-60" />
          <div className="absolute inset-x-0 bottom-0 h-full dot-wave delay-4 opacity-40" />

          {/* Soft horizon gradient to blend */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Corner accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)] blur-2xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-28 w-28 bg-[radial-gradient(closest-side,rgba(96,165,250,0.22),transparent)] blur-2xl" />
      </section>

      {/* Footer (minimal) */}
      <footer className="relative z-10 w-full px-6 py-6 text-center text-sm text-white/50">
        <span className="align-middle">© {year} • Cinematic portfolio surface</span>
      </footer>
    </div>
  )
}

export default App
