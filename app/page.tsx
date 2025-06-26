"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, Home, AlertTriangle, CheckCircle, ArrowRight, Menu } from "lucide-react"

type ContentType =
  | "overview"
  | "download-install"
  | "basic-interface"
  | "circuit-drawing"
  | "high-speed-design"
  | "power-planes"
  | "odbc-setup"
  | "orcad-config"

export default function AllegroTutorial() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeContent, setActiveContent] = useState<ContentType>("overview")
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const menuItems = [
    {
      category: "概覽",
      items: [{ id: "overview" as ContentType, title: "安裝指南概覽", number: 0 }],
    },
    {
      category: "License 申請",
      items: [
        { id: "download-install" as ContentType, title: "至EIP申請權限開通", number: 1 },
        { id: "basic-interface" as ContentType, title: "至FIP系統申請WebDB system使用權限", number: 2 },
        { id: "circuit-drawing" as ContentType, title: "至RM系統申請Allegro/OrCAD license", number: 3 },
      ],
    },
    {
      category: "安裝步驟",
      items: [
        { id: "high-speed-design" as ContentType, title: "Allegro/OrCAD 17.4 安裝", number: 4 },
        { id: "power-planes" as ContentType, title: "ISR 安裝", number: 5 },
        { id: "odbc-setup" as ContentType, title: "ODBC 設定", number: 6 },
        { id: "orcad-config" as ContentType, title: "OrCAD 17.4 相關設定", number: 7 },
      ],
    },
  ]

  const getContentTitle = (contentId: ContentType) => {
    for (const category of menuItems) {
      const item = category.items.find((item) => item.id === contentId)
      if (item) return item.title
    }
    return ""
  }

  const getCategoryTitle = (contentId: ContentType) => {
    for (const category of menuItems) {
      const item = category.items.find((item) => item.id === contentId)
      if (item) {
        return category.category
      }
    }
    return "PCB 設計教學"
  }

  const renderContent = () => {
    switch (activeContent) {
      case "overview":
        return <OverviewContent onNavigate={setActiveContent} />
      case "download-install":
        return <DownloadInstallContent />
      case "basic-interface":
        return <BasicInterfaceContent />
      case "circuit-drawing":
        return <CircuitDrawingContent />
      case "high-speed-design":
        return <HighSpeedDesignContent />
      case "power-planes":
        return <PowerPlanesContent />
      case "odbc-setup":
        return <OdbcSetupContent />
      case "orcad-config":
        return <OrcadConfigContent />
      default:
        return <OverviewContent onNavigate={setActiveContent} />
    }
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "3515") {
      setIsAuthenticated(true)
    } else {
      alert("密碼錯誤，請重新輸入")
      setPassword("")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <div className="text-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASROCK-2rrjXm6EfQsmnXQC0s7XgVayHcLgjv.png"
              alt="ASRock Logo"
              className="h-12 w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Allegro/OrCAD 安裝指南</h1>
            <p className="text-gray-600">請輸入密碼以訪問教學內容</p>
          </div>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                密碼
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                placeholder="請輸入密碼"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-colors"
            >
              進入
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div
          className={`${
            sidebarExpanded ? "w-80" : "w-16"
          } bg-white shadow-sm border-r border-gray-200 min-h-screen transition-all duration-300 ease-in-out relative z-10`}
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
        >
          <div className="p-6">
            {/* Toggle Button */}
            <div className="flex justify-center mb-6">
              {sidebarExpanded ? (
                <div className="flex flex-col items-center pb-4 border-b border-gray-100">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASROCK-2rrjXm6EfQsmnXQC0s7XgVayHcLgjv.png"
                    alt="ASRock Logo"
                    className="h-8 w-auto mb-2"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Menu className="w-6 h-6 text-gray-600 mb-2" />
                  <div className="w-8 h-1 bg-lime-500 rounded"></div>
                </div>
              )}
            </div>

            {sidebarExpanded && (
              <div className="animate-fadeIn">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Allegro/OrCAD 17.4 安裝指南</h2>

                <nav className="space-y-1">
                  {menuItems.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-4">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">{category.category}</h3>
                      <ul className="space-y-1 ml-4">
                        {category.items.map((item) => {
                          const isActive = activeContent === item.id
                          return (
                            <li key={item.id}>
                              <button
                                onClick={() => setActiveContent(item.id)}
                                className={`flex items-center text-sm px-3 py-2 rounded-md w-full text-left transition-all duration-200 ${
                                  isActive
                                    ? "bg-lime-50 text-lime-600 border-l-2 border-lime-500"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                              >
                                {isActive ? (
                                  <span className="w-2 h-2 rounded-full mr-3 bg-lime-600"></span>
                                ) : item.number === 0 ? (
                                  <Home className="w-4 h-4 mr-3" />
                                ) : (
                                  <span className="w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                                    {item.number}
                                  </span>
                                )}
                                {item.title}
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            )}

            {!sidebarExpanded && (
              <div className="space-y-3">
                {menuItems.map((category) =>
                  category.items.map((item) => {
                    const isActive = activeContent === item.id
                    return (
                      <div key={item.id} className="flex justify-center">
                        <button
                          onClick={() => setActiveContent(item.id)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                            isActive
                              ? "bg-lime-100 text-lime-600 border-2 border-lime-500"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                          title={item.title}
                        >
                          {item.number === 0 ? (
                            <Home className="w-5 h-5" />
                          ) : (
                            <span className="text-sm font-medium">{item.number}</span>
                          )}
                        </button>
                      </div>
                    )
                  }),
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 relative">
          {/* Company Logo - Top Right */}
          <div className="absolute top-4 right-4 z-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASROCK-V4Wi9xhIVrHRLhYuVcQgOSYI4EBtlu.png"
              alt="ASRock Logo"
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>{getCategoryTitle(activeContent)}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{getContentTitle(activeContent)}</span>
          </nav>

          {/* Dynamic Content Area */}
          <div className="transition-all duration-300 ease-in-out">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

// Overview Content Component
function OverviewContent({ onNavigate }: { onNavigate: (content: ContentType) => void }) {
  const handleNavigation = (contentId: ContentType) => {
    onNavigate(contentId)
    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const installationSteps = [
    {
      id: "download-install" as ContentType,
      number: 1,
      title: "至EIP申請權限開通",
      description: "申請系統權限，建立必要的資料夾存取權限",
      category: "License 申請",
    },
    {
      id: "basic-interface" as ContentType,
      number: 2,
      title: "至FIP系統申請WebDB system使用權限",
      description: "申請WebDB系統使用權限，用於OrCAD認證",
      category: "License 申請",
    },
    {
      id: "circuit-drawing" as ContentType,
      number: 3,
      title: "至RM系統申請Allegro/OrCAD license",
      description: "申請軟體授權，分別申請OrCAD和Allegro兩個授權",
      category: "License 申請",
    },
    {
      id: "high-speed-design" as ContentType,
      number: 4,
      title: "Allegro/OrCAD 17.4 安裝",
      description: "執行主要軟體安裝程序，包含完整的安裝步驟",
      category: "安裝步驟",
    },
    {
      id: "power-planes" as ContentType,
      number: 5,
      title: "ISR 安裝",
      description: "安裝軟體更新補丁，確保軟體穩定性",
      category: "安裝步驟",
    },
    {
      id: "odbc-setup" as ContentType,
      number: 6,
      title: "ODBC 設定",
      description: "設定資料庫連接和環境變數",
      category: "安裝步驟",
    },
    {
      id: "orcad-config" as ContentType,
      number: 7,
      title: "OrCAD 17.4 相關設定",
      description: "完成OrCAD的初始設定和零件庫配置",
      category: "安裝步驟",
    },
  ]

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Allegro/OrCAD 17.4 安裝指南</h1>
        <p className="text-xl text-gray-600">完整的軟體安裝與設定流程</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">歡迎使用安裝指南</h2>
          <p className="text-blue-800 mb-4">
            本指南將引導您完成 Allegro/OrCAD 17.4
            的完整安裝流程。請按照以下順序進行操作，確保每個步驟都正確完成後再進行下一步。
          </p>
          <p className="text-blue-700">整個安裝過程包含授權申請和軟體安裝兩個主要階段，預計需要 2-3 個工作天完成。</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">安裝順序</h2>

        <div className="space-y-4 mb-8">
          {installationSteps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="w-10 h-10 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center text-lg font-semibold">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{step.category}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <button
                    onClick={() => handleNavigation(step.id)}
                    className="inline-flex items-center text-lime-600 hover:text-lime-700 font-medium text-sm"
                  >
                    查看詳細步驟
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              {index < installationSteps.length - 1 && <div className="mt-4 ml-5 border-l-2 border-gray-200 h-4"></div>}
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800 mb-3">重要注意事項</h3>
              <div className="text-red-700 space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p>請License 申請並簽核通過後，再進行軟體安裝，否則將視為違法安裝。</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p>License 是和您的賬號以及電腦名稱綁定的，更換OA 請重新申請。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-900 mb-3">開始安裝</h3>
          <p className="text-green-800 mb-4">
            準備好開始安裝了嗎？點擊左側選單中的第一個步驟「至EIP申請權限開通」開始您的安裝之旅。
          </p>
          <button
            onClick={() => handleNavigation("download-install")}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            開始第一步
          </button>
        </div>
      </div>
    </div>
  )
}

// Content Components
function DownloadInstallContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">至EIP申請權限開通</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-red-800">安裝前的說明</h3>
              <div className="mt-1 text-base text-red-700 space-y-2">
                <p>請License 申請並簽核通過後，再進行軟體安裝，否則將視為違法安裝。</p>
                <p>License 是和您的賬號以及電腦名稱綁定的，更換OA 請重新申請。</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">申請license流程</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-blue-900 mb-4">至EIP申請權限開通</h3>
          <div className="space-y-3">
            <p className="text-blue-800">
              <a href="http://eip.asrock.com.tw/WebAgenda/" className="text-blue-600 hover:underline font-medium">
                http://eip.asrock.com.tw/WebAgenda/
              </a>
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium mb-2">操作步驟：</p>
              <div className="text-blue-700 space-y-1">
                <p>表單申請 → 啟動表單 → 內部聯絡單 → 執行快速啟動</p>
              </div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ivkh2UuDP1Qkq0y3DAho3ZGze2IlXS.png"
              alt="EIP表單選擇介面"
              className="max-w-2xl mx-auto mt-4 rounded-lg border border-blue-200 w-8/12"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5kYFkmsNk7Kud6XxDX1ZlMU1Fv8i8D.png"
              alt="內部聯絡單表單"
              className="max-w-4xl mx-auto mt-4 rounded-lg border border-blue-200 w-10/12"
            />
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <p className="text-gray-700 mb-4 font-medium">請複製貼上，並把Tim改成自己名字：</p>

          <div className="relative">
            <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">讀取：</p>
                  <div className="space-y-1 ml-2">
                    <p>\\ar-file-01\\採購部料件通知</p>
                    <p>\\Ar-ebios-03\\BIOS</p>
                    <p>\\Asrr-qt-01\\QT</p>
                    <p>\\ar-file-01\\Users\\PM_Team</p>
                    <p>\\asrr-qt-01\\BIOS_Verify\\ASRock</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">讀寫：</p>
                  <div className="ml-2">
                    <div className="space-y-2">
                      <p>
                        \\ar-erd-01 ，另外需要建立<span className="text-red-600 font-medium">Tim</span>的資料夾
                      </p>
                      <p className="">
                        https://rm.pegatroncorp.com/ RM網站WebDB使用者權限for申請OrCAD &amp;Allegro License
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const textToCopy = `讀取：
\\\\ar-file-01\\採購部料件通知
\\\\Ar-ebios-03\\BIOS
\\\\Asrr-qt-01\\QT
\\\\ar-file-01\\Users\\PM_Team
\\\\asrr-qt-01\\BIOS_Verify\\ASRock

讀寫：
\\\\ar-erd-01 ，另外需要建立Tim的資料夾
https://rm.pegatroncorp.com/ RM網站WebDB使用者權限for申請OrCAD &amp;Allegro License`
                navigator.clipboard.writeText(textToCopy)
                alert("已複製到剪貼簿！")
              }}
              className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              複製
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-yellow-900 mb-3">重要提醒</h3>
          <p className="text-yellow-800 mb-2">填完後按送出並且發mail通知Oscar Lin</p>
          <p className="text-yellow-700 font-mono text-sm">Oscar_Lin@asrock.com.tw</p>
        </div>
      </div>
    </div>
  )
}

function BasicInterfaceContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">至FIP系統申請WebDB system使用權限</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-gray-700 leading-relaxed mb-6">等人資建立完資料即可上去申請</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-blue-900 mb-4">申請步驟</h3>
          <div className="space-y-3">
            <p className="text-blue-800">
              <a href="https://fip.pegatroncorp.com/FIP2/Apply" className="text-blue-600 hover:underline font-medium">
                https://fip.pegatroncorp.com/FIP2/Apply
              </a>
            </p>
            <p className="text-blue-700">搜尋 RRF → RRF - WebDB system權限申請單</p>
          </div>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-6fhUbmjSLHnyAGK1GHglLP9LtB72bm.png"
          alt="FIP系統搜尋RRF介面"
          className="max-w-4xl mx-auto mt-4 mb-6 rounded-lg border border-gray-200 w-full"
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-green-900 mb-3">提交申請</h3>
          <div className="text-green-800">
            <p>申請項目:WebDB system使用權限申請</p>
            <p>申請原因:需要使用OrCAD並進行認證</p>
            <p className="mt-2">填完單後確定送出</p>
          </div>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-B50KCESa0k21FA7WH6svLQQzaJeGe0.png"
          alt="申請表單詳細資訊"
          className="max-w-4xl mx-auto mt-4 rounded-lg border border-gray-200 w-full"
        />
      </div>
    </div>
  )
}

function CircuitDrawingContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">至RM系統申請Allegro/OrCAD license</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-blue-900 mb-4">申請步驟</h3>
          <div className="space-y-3">
            <p className="text-blue-800">
              <a href="https://rm.pegatroncorp.com/" className="text-blue-600 hover:underline font-medium">
                https://rm.pegatroncorp.com/
              </a>
            </p>
            <p className="text-blue-700">點選 新增</p>
          </div>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-gGbWjVRewzS2QusxwrSUrYuaM7w8gt.png"
          alt="RM系統新增按鈕"
          className="max-w-4xl mx-auto mt-4 mb-6 rounded-lg border border-gray-200 w-full"
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-yellow-900 mb-3">請注意以下3點:</h3>
          <div className="text-yellow-800">
            <p>1. Allegro和OrCAD 分開申請，所以共申請2單。</p>
            <p>2. 電腦名稱為自己裝置名稱</p>
            <p>3. 希望完成日請延後1~2天，防止過期無法簽核。</p>
          </div>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-TWWY7t3NtqyPgHWhbeCamSgxOKj0GQ.png"
          alt="電腦名稱設定"
          className="max-w-2xl mx-auto mt-4 mb-6 rounded-lg border border-gray-200"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">OrCAD申請單:</h2>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-BPaJYgenw7ulV7ddaLK6nkGSpXnqIf.png"
          alt="OrCAD申請單"
          className="max-w-3xl mx-auto mt-4 mb-6 rounded-lg border border-gray-200"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Allegro申請單:</h2>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-P7xr13hHK207oJWYPKe2xcX3TizYq2.png"
          alt="Allegro申請單"
          className="max-w-3xl mx-auto mt-4 mb-6 rounded-lg border border-gray-200"
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-green-900 mb-3">重要提醒</h3>
          <p className="text-green-800">申請需要時間，建議可以先做安裝的第1步和第2步，轉移檔案而已不用license。</p>
        </div>
      </div>
    </div>
  )
}

function HighSpeedDesignContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Allegro/OrCAD 17.4 安裝</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-red-800">重要提醒</h3>
              <p className="mt-1 text-base text-red-700">
                請License 申請並簽核通過後，再進行軟體安裝，否則將視為違法安裝!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">1. 建立T槽</h3>
            <p className="text-blue-800 mb-4">將\\asr-cis-01\PEGATRON_PART 建立T槽</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-CUbevrVZFtVVk7eviQb9NNOiZ287nh.png"
              alt="建立T槽"
              className="max-w-2xl mx-auto rounded-lg border border-blue-200"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">2. 複製檔案</h3>
            <p className="text-gray-700 mb-2">將以下兩個資料夾複製到C槽 (需要一天時間):</p>
            <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm space-y-1">
              <p>T:\Tools\SPB17.4</p>
              <p>T:\Tools\SPB17.4_ISR\Hotfix_SPB17.40.040_wint</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-900 mb-3">
              3. 執行安裝程式 <span className="text-red-600 font-bold">(要有license才可以執行第三步!)</span>
            </h3>
            <p className="text-yellow-800 mb-4">
              {"複製到C槽後，點開SPB17.4，右鍵->以系統管理員身份執行setup.exe，檔案比較大，需要等待5-10"}
              分鐘
            </p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-9i1gUBSCAn9QPCiE9uXuxsuECWh2bK.png"
              alt="以系統管理員身份執行"
              className="max-w-xl mx-auto rounded-lg border border-yellow-200"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-900 mb-3">4. 選擇安裝選項</h3>
            <p className="text-green-800 mb-2">點擊OrCAD and Allegro Products Installation，執行安裝檔案</p>
            <p className="text-red-600 font-medium mb-4">
              PS:不要點License Manager，如果點錯，取消終止無用，需請MIS
              卸掉，不然會被稽核。需要等待一段時間以搜集電腦信息
            </p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-KyUN4Y3VJvgIEKT9Coazm19FzSGO3p.png"
              alt="選擇安裝選項"
              className="max-w-3xl mx-auto rounded-lg border border-green-200"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">5. 接受授權協議</h3>
            <p className="text-blue-800 mb-4">選擇I Accept，再按Next</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-1fzdKRw4kC3y4qtN1W6JbomegnwwX1.png"
              alt="接受授權協議"
              className="max-w-3xl mx-auto rounded-lg border border-blue-200"
            />
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-3">6. 安裝設定</h3>
            <div className="text-purple-800 space-y-2 mb-4">
              <p>選擇：Only for me；設定安裝路徑C:\Cadence\SPB_17.4</p>
              <p>Working Directrory 設定Home 路徑，請改為D:\pro.174 (此為預設值，可變更為實際安裝的Utility 路徑)。</p>
              <p>按Custom Installation 繼續下一步</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-fshQys1nn00Xrniof3zLplMp4KG2eV.png"
              alt="安裝設定"
              className="max-w-3xl mx-auto rounded-lg border border-purple-200"
            />
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-900 mb-3">7. 選擇安裝項目</h3>
            <p className="text-indigo-800 mb-4">{"請依所申請License 選擇安裝項目->按Next 鈕"}</p>
            <p className="text-indigo-700 mb-4">
              （1）若申請OrCAD License 及Allegro License並都已簽核通過，請選擇OrCAD Capture CIS &amp; Allegro PCB Editor
              Router and SI 進行安裝
            </p>

            <div className="space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-cSe3xB5FgClhptYa1aUQlXqv1lkBVO.png"
                alt="OrCAD選項"
                className="max-w-3xl mx-auto rounded-lg border border-indigo-200"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p8-XCv3ZlkCb46OF3iUh73ggMNoWbJnmp.png"
                alt="Allegro選項"
                className="max-w-3xl mx-auto rounded-lg border border-indigo-200"
              />
            </div>

            <p className="text-indigo-700 mt-4">
              （2）Allow programs to connect through Windows firewall勾選或不勾選都可
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-teal-900 mb-3">8. 繼續安裝</h3>
            <p className="text-teal-800 mb-4">按Next 繼續</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p9-y4L801E9AqQifEK3biPpHVVFlE4Lxy.png"
              alt="繼續安裝"
              className="max-w-3xl mx-auto rounded-lg border border-teal-200"
            />
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-orange-900 mb-3">9. License Server 設定</h3>
            <div className="text-orange-800 space-y-2 mb-4">
              <p>Port Number 填入5280</p>
              <p>Host name 填入cadcam (for 台北同仁) psz-cadcam-01v (for 大陸同仁)</p>
              <p>按Install 確定執行安裝</p>
              <p className="font-medium">安裝過程中不能關閉安裝程序，必須等安裝完成以後自動退出</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p10-nQb4wAPqOJeMiMB7wHQl3yQ8jFYsqV.png"
              alt="License Server設定"
              className="max-w-3xl mx-auto rounded-lg border border-orange-200"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-900 mb-3">10. 完成安裝</h3>
            <p className="text-green-800 mb-4">出現此畫面代表，已完成安裝主體程序，下圖無需勾選，點擊Finish</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p11-I8Grl3VW5wDdjVb5K6kYkpJgDtdDOq.png"
              alt="完成安裝"
              className="max-w-3xl mx-auto rounded-lg border border-green-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function PowerPlanesContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ISR 安裝</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">1. 執行ISR安裝程式</h3>
            <p className="text-blue-800 mb-4">
              {"點開C槽的Hotfix_SPB17.40.040_wint，右鍵->以系統管理員身份執行setup.exe"}
            </p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-ELM1j7GN8ybzGzHGZnnbO8w5jFLcuZ.png"
              alt="執行ISR安裝程式"
              className="max-w-2xl mx-auto rounded-lg border border-blue-200"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-900 mb-3">2. 接受授權協議</h3>
            <p className="text-green-800 mb-4">選擇接受項目，再按Next</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-C3kTh2dhDanHFPhCRzXKWyGbuJ1YE1.png"
              alt="接受授權協議"
              className="max-w-3xl mx-auto rounded-lg border border-green-200"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-900 mb-3">3. 確認安裝項目</h3>
            <p className="text-yellow-800 mb-4">顯示所更新的產品，按Install 確定執行安裝</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-2fxmB8zoasKGn4DIwPHI4UOmU0UXrn.png"
              alt="確認安裝項目"
              className="max-w-3xl mx-auto rounded-lg border border-yellow-200"
            />
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-3">4. 完成安裝</h3>
            <p className="text-purple-800 mb-4">點擊Finish 完成安裝</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-8SwpVBXKKTrVKauEahs9InEC8WW3JK.png"
              alt="完成安裝"
              className="max-w-3xl mx-auto rounded-lg border border-purple-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function OdbcSetupContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ODBC 設定</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">1. 下載ODBC設定檔案</h3>
            <p className="text-blue-800 mb-4">
              去C:\SPB17.4\Allegro OrCAD 17.4 Q&A\ODBC設定 下載 win10 64位元 並照著Word 檔案ODBC_sop上的步驟操作即可
            </p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-YfHzdHAsLWiTFXCt0HhAGbGv9zmRZO.png"
              alt="ODBC設定檔案位置"
              className="max-w-3xl mx-auto rounded-lg border border-blue-200"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-900 mb-3">2. 環境變數設定</h3>
            <div className="text-green-800 space-y-3 mb-4">
              <p>ODBC_sop操作完後進入環境變數設定(控制台&gt; 使用者賬戶&gt; 使用者賬戶&gt; 變更我的環境變數)</p>
              <p>請確認系統變數或使用者變數是否有CDS_LIC_FILE 的參數</p>
              <p className="font-medium">若無請新增，其值須設定為5280@asr-cae-01;5280@cadcam</p>
              <p className="font-medium">另外並新增參數IGNORE_PROP，其值設定為DEVICE</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-5YQlQukar5RkJOAaL33ETS8tsNVMfR.png"
              alt="環境變數設定"
              className="max-w-3xl mx-auto rounded-lg border border-green-200"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-900 mb-3">3. 安裝Utility</h3>
            <p className="text-yellow-800 mb-4">到 T:\Allegro_patch\UTILITY\17.4 點擊安裝</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-BCmH06L79nMO1fv8fT8MxG6oVyU7li.png"
              alt="Utility安裝檔案"
              className="max-w-2xl mx-auto rounded-lg border border-yellow-200 mb-4"
            />
            <p className="text-yellow-800 mb-4">Utility 的安裝路徑默認D:\</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-2mdjrBtc0eBR7d9GyqAHXfADDK6H4a.png"
              alt="Utility安裝路徑"
              className="max-w-3xl mx-auto rounded-lg border border-yellow-200"
            />
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-3">4. HOME環境變數設定</h3>
            <div className="text-purple-800 space-y-2 mb-4">
              <p>環境變數中的HOME 的值需要改為D:\pro.174</p>
              <p className="text-sm text-purple-600">此外，如果您不使用公司的Utility 菜單功能，那麼請忽略這一步</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-bieScC8Mg18sWJVgz8FBe6Zr1injqb.png"
              alt="HOME環境變數設定"
              className="max-w-3xl mx-auto rounded-lg border border-purple-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function OrcadConfigContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">OrCAD 17.4 相關設定</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <div className="space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">1. 啟動OrCAD 17.4</h3>
            <p className="text-blue-800 mb-4">啟動OrCAD 17.4，選擇前兩項中任1項</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-50glaOFw7mVMLQyU0KNDLuocRhUEhS.png"
              alt="OrCAD產品選擇"
              className="max-w-2xl mx-auto rounded-lg border border-blue-200 mb-4"
            />
            <p className="text-blue-800 mb-4">改善計劃選擇：否</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-74kLRghAdO8b8o4MEDSUDpaQ3Ef1yf.png"
              alt="客戶體驗改善計劃"
              className="max-w-3xl mx-auto rounded-lg border border-blue-200 mb-4"
            />
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
              <p className="text-yellow-800 text-sm">
                如果開啟時Start Page 出現錯誤提示，請點擊"否"忽略它。這個是OrCAD
                要連接官網，但是公司網路把它擋住了。你可以勾選Start Page 左下角的選項，來禁用Start Page 功能
              </p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-E6FJHEFtM5aSYP0HALLkvBdVnwEUp8.png"
              alt="禁用Start Page選項"
              className="max-w-xs mx-auto rounded-lg border border-blue-200 mt-4"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-900 mb-3">2. CIS Configuration設定</h3>
            <p className="text-green-800 mb-4">
              執行File &gt; New &gt; Design 後，再選擇Options &gt; CIS Configuration
            </p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-gjJFl3YeLKwo8NsKxyEi0TIlMuUJvH.png"
              alt="CIS Configuration選單"
              className="max-w-4xl mx-auto rounded-lg border border-green-200"
            />
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-3">3. 選擇資料庫檔案</h3>
            <div className="text-purple-800 space-y-2 mb-4">
              <p>進入設定畫面中請點擊Browse 鍵，默認選擇T:\ASROCK_CIS98_ORCAD163.DBC</p>
              <p className="text-sm">有部分部門有自己的零件庫，請根據實際情況選擇，位於T:\ODBC 目錄下</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-w5U6qWuIM5y4RWkychyURtUJ5WDFa8.png"
              alt="CIS Configuration檔案選擇"
              className="max-w-2xl mx-auto rounded-lg border border-purple-200"
            />
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-orange-900 mb-3">4. 輸入登入資訊</h3>
            <p className="text-orange-800 mb-4">請輸入識別碼orcad_guest ，密碼為guest</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-IGPrEnGoc3mEsgJ07B6rdzib4UzoXn.png"
              alt="SQL Server登入"
              className="max-w-xl mx-auto rounded-lg border border-orange-200"
            />
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-teal-900 mb-3">5. 放置零件</h3>
            <p className="text-teal-800 mb-4">回到剛剛新開啟一張設計圖，點選Place &gt; Part</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p7-sb3dxCYi4uIG50vkvmjMzu2UCeXYsF.png"
              alt="Place Part選單"
              className="max-w-2xl mx-auto rounded-lg border border-teal-200"
            />
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-900 mb-3">6. 移除現有Libraries</h3>
            <p className="text-indigo-800 mb-4">移除Design Cache 以外的所有Libraries</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p8-dqDvFFauc4QqzDOxC9633kZYQ24By5.png"
              alt="移除Libraries"
              className="max-w-xs mx-auto rounded-lg border border-indigo-200"
            />
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-pink-900 mb-3">7. 新增Library檔案</h3>
            <div className="text-pink-800 space-y-2 mb-4">
              <p>點選Add Library，選取T:\parts 目錄內的所有檔案</p>
              <p className="text-sm text-pink-600">因為網絡問題，需要花費1-2 分鐘(建議使用有線網絡)</p>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p9-JtLO36zNoIt4nAq5lopGCEjhezv2kP.png"
              alt="新增Library檔案"
              className="max-w-4xl mx-auto rounded-lg border border-pink-200"
            />
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-cyan-900 mb-3">8. 測試零件放置</h3>
            <p className="text-cyan-800 mb-4">請於Part List 任意選擇一零件擺至圖面上，最後不存檔關閉OrCAD</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p10-ZGzjqIsvlBQHZakulvovedQNyECeyK.png"
              alt="零件放置測試"
              className="max-w-4xl mx-auto rounded-lg border border-cyan-200"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">9. 關閉設定</h3>
            <div className="text-gray-800 space-y-2">
              <p>關閉OrCAD 時會顯示對話視窗,請勾選"Do not show this box again"項目後點選No All 鈕</p>
              <p className="mt-4 font-medium">
                重新開啟OrCAD。此時需要把剛剛設定的零件庫重新載入，因此需要花費1-2 分鐘
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
