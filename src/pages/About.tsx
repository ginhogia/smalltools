export default function About() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-stone-300">
        關於 <span className="bg-gradient-to-r from-stone-400 to-zinc-500 bg-clip-text text-transparent">SmallTools</span>
      </h1>
      <div className="space-y-4 text-neutral-500 leading-relaxed">
        <p>
          SmallTools 是一個開源的小工具集合專案，旨在提供簡單、實用的線上工具。
        </p>
        <p>
          我們相信好的工具應該是簡潔且易於使用的，不需要複雜的設定或學習曲線。
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50">
        <h2 className="text-xl font-semibold text-stone-300 mb-4">技術棧</h2>
        <div className="flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-full bg-neutral-700/50 border border-neutral-600/50 text-neutral-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
