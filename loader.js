"use client"

export default function myImageLoader({
  src, width, quality
}){
  if(src.startsWith('https://images.pexels.com')) return src
  return `https://https://portfolionext14.netlify.app/${src}?w={width}&q={quality || 75}`
}