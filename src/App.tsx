import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* 導覽列 */}
      <nav style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>首頁</Link>
        <Link to="/about">關於</Link>
      </nav>

      {/* 路由內容渲染區：根據網址變化的內容會出現在這裡 */}
      <Outlet />
    </div>
  );
}

export default App;