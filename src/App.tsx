import { Outlet, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-zinc-800 to-neutral-900">
      {/* 導覽列 */}
      <nav className="backdrop-blur-md bg-neutral-900/60 border-b border-neutral-700/50 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-stone-400 to-zinc-500 bg-clip-text text-transparent">
            SmallTools
          </Link>
          <div className="flex gap-6">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `text-lg transition-all duration-300 hover:text-stone-300 ${isActive ? 'text-stone-300 font-semibold' : 'text-neutral-500'}`
              }
            >
              首頁
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `text-lg transition-all duration-300 hover:text-stone-300 ${isActive ? 'text-stone-300 font-semibold' : 'text-neutral-500'}`
              }
            >
              關於
            </NavLink>
          </div>
        </div>
      </nav>

      {/* 路由內容渲染區 */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
