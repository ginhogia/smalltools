export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-stone-400 via-neutral-500 to-zinc-400 bg-clip-text text-transparent">
        歡迎來到 SmallTools
      </h1>
      <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
        一個簡潔實用的小工具集合，幫助你提升日常效率
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {['工具一', '工具二', '工具三'].map((tool, i) => (
          <div 
            key={i}
            className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm hover:bg-neutral-700/50 hover:border-neutral-600 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-500 to-zinc-600 mb-4 mx-auto group-hover:scale-110 transition-transform opacity-70 group-hover:opacity-90" />
            <h3 className="text-lg font-semibold text-stone-300">{tool}</h3>
            <p className="text-neutral-600 text-sm mt-2">即將推出...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
