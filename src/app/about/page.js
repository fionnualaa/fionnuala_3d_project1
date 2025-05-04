"use client";

import FallingText from "@/component/FallingText";
import Image from "next/image";
import CandyImg from "@/../public/lolipop.png";

export default function AboutPage() {
  return (
    <div className="w-full h-full bg-pink-50 rounded-2xl overflow-hidden">
      {/* 上方動畫空間 */}
      {/* 第一段 FallingText */}
      <div className="relative h-[150px] w-full flex justify-center">
        <FallingText
          text="Hello! This is Fionnuala."
          highlightWords={["Hello!", "Fionnuala"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>

      {/* 第二段 FallingText */}
      <div className="relative h-[150px] w-full flex justify-center">
        <FallingText
          text="Welcome to my little world."
          highlightWords={["little" ,"world"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>

      {/* 下方內容可捲動 */}
      <div className="h-[calc(100%-320px)] overflow-y-auto px-8 py-12 flex flex-col items-center text-center space-y-10">
        {/* 自我介紹 */}
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          還沒什麼厲害的地方，只是很多事情都想試試看。
          <br />
          正在嘗試把我的想像變成真實，像是糖果一樣，讓人上癮。
        </p>

        <Image
          src={CandyImg}
          alt="Candy"
          width={60}
          height={60}
          className="animate-bounce"
        />
        <p className="text-sm" style={{ color: "#b0c4de" }}>要來一顆糖果嗎？</p>

        {/* 技能區塊 */}
        <div className="w-full max-w-xl space-y-6">
          <SkillBar label="UIUX" percent={85} color="bg-rose-200" />
          <SkillBar label="3D建模" percent={65} color="bg-violet-200" />
          <SkillBar label="前端開發" percent={70} color="bg-blue-200" />
          <SkillBar label="影像處理" percent={80} color="bg-lime-200" />
        </div>

        {/* 時間軸區塊 */}
        <div className="w-full max-w-xl space-y-8 text-left mt-12">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2 text-center">
            創作旅程
          </h2>

          <TimelineItem
            year="2023"
            title="開始接觸 UI/UX 設計"
            icon="🎨"
          />
          <TimelineItem
            year="2024"
            title="製作第一個 3D 互動網站專案"
            icon="🧊"
          />
          <TimelineItem
            year="2025"
            title="策展《諧波》數位內容畢業展"
            icon="🎪"
          />
        </div>
      </div>
    </div>
  );
}

// 技能條元件
function SkillBar({ label, percent, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1 text-gray-600">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

// 時間軸元件（進階版）
function TimelineItem({ year, title, icon }) {
  return (
    <div className="relative flex items-start gap-4 pl-6">
      {/* 左側圓點與垂直線 */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-200"></div>
        <div className="w-[2px] h-full bg-rose-200 mt-1"></div>
      </div>

      {/* 右側內容 */}
      <div className="text-left">
        <div className="flex items-center gap-2">
          <span className="text-sm text-sky-400 font-semibold">{year}</span>
          <span className="text-xl">{icon}</span>
        </div>
        <p className="text-base text-gray-700 font-medium">{title}</p>
      </div>
    </div>
  );
}
