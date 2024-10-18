export function Image({ img, sources }) {
  return (
    <picture>
      {Object.entries(sources).map(([format, srcSet]) => (
        <source key={format} srcSet={srcSet} type={`image/${format}`} />
      ))}
      <img src={img.src} alt='Example' />
    </picture>
  );
}
