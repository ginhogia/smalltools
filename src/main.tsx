import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 引入元件
import App from './App'
import Home from './pages/Home'
import About from './pages/About'

// 定義路由表
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 使用 App 作為外框 (Layout)
    children: [
      {
        path: "", // 當網址是 "/" 時顯示 Home
        element: <Home />,
      },
      {
        path: "about", // 當網址是 "/about" 時顯示 About
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 注入 RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)