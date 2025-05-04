"use client";

import Image from "next/image";

const projects = [
  {
    title: "飛行員與星球的孩子",
    description: "他們一起坐著，望著不說話的天空。",
    image: "/photo.jpg",
    link: "https://example.com/3d-space",
  },
  {
    title: "午後的威尼斯",
    description: "運河輕輕的說：「放慢一點，享受這裡的美」。",
    image: "/photo2.jpg",
    link: "https://example.com/candy-ui",
  },
  {
    title: " 柔光下的市場岸邊",
    description: "在光影與寧靜之中感受到城市的節奏與浪漫。",
    image: "/photo3.jpg",
    link: "https://example.com/animated-site",
  },
  {
    title: "和海的約定",
    description: "我們沒有目的，只是想靠近自由一點。",
    image: "/photo5.jpg",
    link: "https://example.com/animated-site",
  },
  {
    title: "禁止進入的幽默",
    description: "有時候街頭像一場靜默的表演。",
    image: "/photo6.jpg",
    link: "https://example.com/animated-site",
  },
  {
    title: "失焦的記憶",
    description: "我們的光灑得太多了",
    image: "/photo7.jpg",
    link: "https://example.com/animated-site",
  },
];

export default function WorksPage() {
  return (
    <div className="w-full h-full bg-pink-50 px-6 py-12 overflow-y-auto">
      <h1 className="text-4xl text-center font-bold text-rose-400 mb-12">
      🍬 我的休閒娛樂 🍬
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-pink-300 transition duration-300 hover:scale-105 border border-pink-200"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
