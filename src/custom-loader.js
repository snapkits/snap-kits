function normalizeSrc(src) {
  return src[0] === "/" ? src.slice(1) : src;
}

export default function myImageLoader(param) {
  const { src, width, quality } = param
  const configEnv = process.env.__NEXT_IMAGE_OPTS;
  const normalized_src = normalizeSrc(src);
  return `${configEnv.path}${normalized_src}`
}