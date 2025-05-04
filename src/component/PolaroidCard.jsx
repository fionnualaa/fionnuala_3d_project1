"use client";

export default function PolaroidCard({ src, alt, caption, rotate = "-rotate-2" }) {
  return (
    <div className={`bg-white p-4 pt-6 rounded-lg shadow-lg w-60 text-center relative transform ${rotate}`}>
      <div className="overflow-hidden rounded-sm border border-gray-200 shadow-inner">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-60"
        />
      </div>
      <p className="text-sm text-gray-600 italic mt-2">{caption}</p>
    </div>
  );
}
