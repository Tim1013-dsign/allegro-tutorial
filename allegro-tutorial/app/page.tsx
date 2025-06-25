"use client"

import { useState } from "react"
import {
  ChevronRight,
  Home,
  Download,
  Monitor,
  FileText,
  Layers,
  Zap,
  Settings,
  Shield,
  AlertTriangle,
  Gauge,
} from "lucide-react"

type ContentType =
  | "download-install"
  | "basic-interface"
  | "circuit-drawing"
  | "pcb-layout"
  | "high-speed-design"
  | "differential-pairs"
  | "power-planes"
  | "install-issues"
  | "license-management"
  | "performance-optimization"

export default function AllegroTutorial() {
  const [activeContent, setActiveContent] = useState<ContentType>("download-install")

  const menuItems = [
    {
      category: "Allegro PCB 設計",
      items: [
        { id: "download-install" as ContentType, title: "Allegro/OrCad 下載安裝教學", icon: Download },
        { id: "basic-interface" as ContentType, title: "基本介面操作指南", icon: Monitor },
        { id: "circuit-drawing" as ContentType, title: "電路圖繪製基礎", icon: FileText },
        { id: "pcb-layout" as ContentType, title: "PCB 佈局設計流程", icon: Layers },
      ],
    },
    {
      category: "進階功能",
      items: [
        { id: "high-speed-design" as ContentType, title: "高速信號設計", icon: Zap },
        { id: "differential-pairs" as ContentType, title: "差分對設計技巧", icon: Settings },
        { id: "power-planes" as ContentType, title: "電源平面設計", icon: Shield },
      ],
    },
    {
      category: "疑難排解",
      items: [
        { id: "install-issues" as ContentType, title: "常見安裝問題解決", icon: AlertTriangle },
        { id: "license-management" as ContentType, title: "授權管理問題", icon: FileText },
        { id: "performance-optimization" as ContentType, title: "效能優化設定", icon: Gauge },
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

  const renderContent = () => {
    switch (activeContent) {
      case "download-install":
        return <DownloadInstallContent />
      case "basic-interface":
        return <BasicInterfaceContent />
      case "circuit-drawing":
        return <CircuitDrawingContent />
      case "pcb-layout":
        return <PCBLayoutContent />
      case "high-speed-design":
        return <HighSpeedDesignContent />
      case "differential-pairs":
        return <DifferentialPairsContent />
      case "power-planes":
        return <PowerPlanesContent />
      case "install-issues":
        return <InstallIssuesContent />
      case "license-management":
        return <LicenseManagementContent />
      case "performance-optimization":
        return <PerformanceOptimizationContent />
      default:
        return <DownloadInstallContent />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <div className="p-6">
            {/* ASRock Logo */}
            <div className="flex justify-center mb-6 pb-4 border-b border-gray-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASROCK-2rrjXm6EfQsmnXQC0s7XgVayHcLgjv.png"
                alt="ASRock Logo"
                className="h-8 w-auto"
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-6">目錄</h2>

            <nav className="space-y-1">
              {menuItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">{category.category}</h3>
                  <ul className="space-y-1 ml-4">
                    {category.items.map((item) => {
                      const Icon = item.icon
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
                            ) : (
                              <Icon className="w-4 h-4 mr-3" />
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
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>PCB 設計教學</span>
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

// Content Components
function DownloadInstallContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Allegro/OrCad 完整下載安裝教學指南</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Cadence Allegro 和 OrCad 是業界領先的 PCB 設計軟體套件，廣泛應用於電子產品開發。
          本教學將詳細介紹如何下載、安裝及初始設定這套強大的設計工具。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Download className="w-5 h-5 text-blue-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">重要提醒</h3>
              <p className="mt-1 text-sm text-blue-700">
                請確保您擁有合法的軟體授權，並從官方網站下載軟體以確保安全性。
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">系統需求檢查</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">最低系統需求</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              作業系統：Windows 10/11 (64-bit) 或 Linux RHEL/CentOS 7+
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              記憶體：最少 8GB RAM（建議 16GB 以上）
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              硬碟空間：至少 10GB 可用空間
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              顯示卡：支援 OpenGL 3.0 以上
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function BasicInterfaceContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">基本介面操作指南</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          熟悉 Allegro/OrCad 的使用者介面是成功進行 PCB 設計的第一步。
          本指南將帶您了解軟體的主要介面元素、工具列、選單系統以及基本操作方式。
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Monitor className="w-5 h-5 text-green-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">學習目標</h3>
              <p className="mt-1 text-sm text-green-700">
                完成本章節後，您將能夠熟練操作 Allegro/OrCad 的基本介面功能。
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">主要介面區域</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
              <Monitor className="w-5 h-5 mr-2 text-blue-500" />
              設計視窗
            </h3>
            <p className="text-gray-600 text-sm">
              主要的設計工作區域，顯示電路圖或 PCB 佈局。支援縮放、平移和多視窗顯示。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-green-500" />
              工具面板
            </h3>
            <p className="text-gray-600 text-sm">包含各種繪圖工具、選取工具和編輯功能，可自訂工具列配置。</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">基本操作技巧</h2>

        <div className="space-y-4 mb-6">
          {[
            {
              title: "視窗導航",
              description: "使用滑鼠滾輪縮放，按住中鍵拖曳平移視窗，雙擊可自動縮放至適合大小。",
            },
            {
              title: "物件選取",
              description: "單擊選取單一物件，拖曳框選多個物件，按住 Ctrl 鍵可多重選取。",
            },
            {
              title: "快速鍵使用",
              description: "熟記常用快速鍵可大幅提升工作效率，如 Ctrl+Z 復原、Ctrl+S 儲存等。",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CircuitDrawingContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">電路圖繪製基礎</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          電路圖是 PCB 設計的基礎，正確的電路圖繪製是確保最終產品功能正常的關鍵。 本章節將介紹如何在 OrCad Capture
          中建立和編輯電路圖。
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FileText className="w-5 h-5 text-purple-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-purple-800">開始之前</h3>
              <p className="mt-1 text-sm text-purple-700">確保您已經熟悉基本介面操作，並準備好元件庫檔案。</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">建立新專案</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">專案設定步驟</h3>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                1
              </span>
              開啟 OrCad Capture CIS
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                2
              </span>
              選擇 File → New → Project
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                3
              </span>
              選擇專案類型（建議選擇 Analog or Mixed A/D）
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                4
              </span>
              設定專案名稱和儲存位置
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                5
              </span>
              建立第一個電路圖頁面
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

function PCBLayoutContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">PCB 佈局設計流程</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          PCB 佈局設計是將電路圖轉換為實際電路板的關鍵步驟。 良好的佈局設計不僅影響電路性能，也關係到製造成本和可靠性。
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">佈局設計原則</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Layers, title: "層次規劃", description: "合理規劃信號層、電源層和地層的配置", color: "indigo" },
            { icon: Zap, title: "信號完整性", description: "考慮高速信號的傳輸特性和干擾問題", color: "yellow" },
            { icon: Shield, title: "EMC 設計", description: "電磁相容性考量和屏蔽設計", color: "green" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className={`w-8 h-8 text-${item.color}-500 mx-auto mb-3`} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function HighSpeedDesignContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">高速信號設計</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          隨著電子產品工作頻率不斷提高，高速信號設計變得越來越重要。 本章節將介紹高速 PCB 設計的基本原理和實作技巧。
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Zap className="w-5 h-5 text-yellow-400 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">高速信號定義</h3>
              <p className="mt-1 text-sm text-yellow-700">
                當信號的上升時間小於傳輸延遲時間的 6 倍時，就需要考慮高速設計問題。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DifferentialPairsContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">差分對設計技巧</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          差分信號傳輸在高速數位設計中扮演重要角色，能有效降低電磁干擾並提高信號品質。
        </p>
      </div>
    </div>
  )
}

function PowerPlanesContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">電源平面設計</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          良好的電源平面設計是確保電路穩定工作的基礎，影響整體系統的性能和可靠性。
        </p>
      </div>
    </div>
  )
}

function InstallIssuesContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">常見安裝問題解決</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          在安裝 Allegro/OrCad 過程中可能遇到各種問題，本章節整理了常見問題及解決方案。
        </p>
      </div>
    </div>
  )
}

function LicenseManagementContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">授權管理問題</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Cadence 軟體需要有效的授權才能正常運作，本章節說明授權管理的相關問題和解決方法。
        </p>
      </div>
    </div>
  )
}

function PerformanceOptimizationContent() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">效能優化設定</h1>
        <p className="text-gray-600">2025年6月25日</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          透過適當的設定調整，可以顯著提升 Allegro/OrCad 的執行效能和使用體驗。
        </p>
      </div>
    </div>
  )
}
