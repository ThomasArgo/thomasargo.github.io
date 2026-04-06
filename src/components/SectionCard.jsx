export default function SectionCard({ children, className = "" }) {
  const classes = ["glass-card", className].filter(Boolean).join(" ");

  return <section className={classes}>{children}</section>;
}
