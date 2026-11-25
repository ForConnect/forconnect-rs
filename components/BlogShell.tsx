import NeuralNet from '@/components/NeuralNet';

export default function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0C1528] text-white">
      <NeuralNet />
      <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00F0FF33]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00F0FF22]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-5">
        <header className="flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00F0FF55] shadow-[0_0_20px_#00F0FF66]">
              <span className="text-xl font-bold text-[#00F0FF]">F</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">ForConnect</div>
              <div className="text-xs text-[#9CA3AF]">AI Voice Agent</div>
            </div>
          </a>
          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="/" className="transition hover:text-[#00F0FF]">Početna</a>
            <a href="/blog" className="transition hover:text-[#00F0FF]">Blog</a>
            <a href="/#demo" className="transition hover:text-[#00F0FF]">Kontakt</a>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p className="mb-1 font-semibold text-white">ForConnect</p>
          <p>AI telefonski asistent za firme u Srbiji.</p>
          <p className="mt-4">&copy; 2026 ForConnect. Sva prava zadržana.</p>
        </footer>
      </div>
    </div>
  );
}
