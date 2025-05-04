"use client";

import PolaroidCard from "@/component/PolaroidCard";

export default function AboutSoulPage() {
  return (
    <div className="w-full h-full px-6 py-12 bg-rose-50 rounded-2xl overflow-y-auto flex flex-col items-center text-center">
      {/* 頁面標題 */}
     

      {/* 🎀 個性標籤區 */}
      <h2 className="text-xl font-semibold text-rose-400 mb-4">我的標籤詞 🏷️</h2>
      <div className="flex flex-wrap justify-center gap-3 text-sm mb-10">
        <span className="bg-pink-300 px-3 py-1 rounded-full shadow">感性創作者</span>
        <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full shadow">色彩控</span>
        <span className="bg-blue-200 text-gray-800 px-3 py-1 rounded-full shadow">想太多但可愛</span>
        <span className="bg-rose-200 text-gray-800 px-3 py-1 rounded-full shadow">總是拖拖拉拉</span>
        <span className="bg-violet-200 text-gray-800 px-3 py-1 rounded-full shadow">用光記憶心情</span>
      </div>

      {/* 🎧 音樂卡片區（放大版） */}
      <h2 className="text-xl font-semibold text-rose-400 mb-4">最近在聽的歌 🎶</h2>
      <a
        href="https://youtu.be/tWRVbxggwNM?si=1niSw_aw673X-0wp"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-pink-200 shadow-md hover:shadow-pink-300 p-6 rounded-2xl max-w-lg mx-auto transition transform hover:scale-105 mb-6"
      >
        <div className="flex items-center gap-6">
          <img
            src="/cover.png"
            alt="Song cover"
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div className="text-left">
            <h3 className="text-xl font-bold text-pink-500">她</h3>
            <h5 className="text-sm font-medium text-pink-300 mb-1">Andr</h5>
            <p className="text-sm text-gray-500">點我去聽 🎧</p>
          </div>
        </div>
      </a>

      <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-10">
        有時候靈感來得太慢，就讓音樂先提醒我——
        <br />
        生活可以慢慢來，感受比完成重要一點點。
      </p>

      {/* 🧸 拍立得風格照區（多張） */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <PolaroidCard
          src="/me.jpg"
          alt="My photo"
          caption="午後偷光"
          rotate="-rotate-2"
        />
        <PolaroidCard
          src="/me3.jpg"
          alt="Surf"
          caption="海上玩耍的日子"
          rotate="rotate-1"
        />
        <PolaroidCard
          src="/me4.jpg"
          alt="Coffee"
          caption="又在吃"
          rotate="-rotate-3"
        />
      </div>

      {/* 🌿 小語貼紙 */}
      <div className="bg-yellow-100 text-yellow-900 text-sm px-4 py-3 rounded-xl shadow-inner max-w-sm mb-10 italic">
        “有些喜歡無需解釋，有些創作只是想留下當下的心情。”
      </div>

      {/* 🥰 喜歡的東西 */}
      <h2 className="text-xl font-semibold text-rose-400 mb-4">喜歡的日常 ✨</h2>
      <ul className="text-sm text-gray-600 mb-10 leading-relaxed">
        <li>手帳、乾燥花、紙膠帶</li>
        <li>曝光過頭的底片照</li>
        <li>有奶霜的甜飲</li>
        <li>下雨天配小燈泡的房間</li>
      </ul>

      {/* 🎨 色彩靈感色卡 */}
      <h2 className="text-xl font-semibold text-rose-400 mb-4">靈感色卡 🎨</h2>
      <div className="flex justify-center gap-2 mb-12">
        <div className="w-8 h-8 bg-rose-200 rounded-full shadow" />
        <div className="w-8 h-8 bg-yellow-200 rounded-full shadow" />
        <div className="w-8 h-8 bg-blue-200 rounded-full shadow" />
        <div className="w-8 h-8 bg-violet-200 rounded-full shadow" />
        <div className="w-8 h-8 bg-pink-300 rounded-full shadow" />
      </div>
    </div>
  );
}
