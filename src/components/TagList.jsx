export default function TagList({ tags = [], className = "" }) {
  if (!tags.length) {
    return null;
  }

  return (
    <div className={`tag-list ${className}`.trim()}>
      {tags.map((tag) => (
        <span className="tag-pill" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
