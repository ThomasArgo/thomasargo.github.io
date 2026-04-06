export default function MediaGallery({ title, media, compact = false }) {
  return (
    <div className={`media-grid${compact ? " media-grid--compact" : ""}`}>
      {media.map((source, index) => (
        <img
          key={source}
          alt={`${title} preview ${index + 1}`}
          className="media-item"
          loading="lazy"
          src={source}
        />
      ))}
    </div>
  );
}
