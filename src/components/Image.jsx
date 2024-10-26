export const Image = ({ img, sources }) => (
  <picture>
    {Object.entries(sources).map(([format, srcSet]) => (
      <source key={format} srcSet={srcSet} type={`image/${format}`} />
    ))}
    <img src={img.src} alt='Example' width={img.w} height={img.h} />
  </picture>
);
