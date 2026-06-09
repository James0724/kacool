import { specialties } from "@/lib/data";

export function SpecialtyStrip() {
  // two passes so the -50% marquee loops seamlessly
  const items = [...specialties, ...specialties];

  return (
    <div className="ed-strip">
      <div className="row">
        {items.map((sp, i) => (
          <span key={`${sp}-${i}`} className="contents">
            <span className={`item${i % 2 === 1 ? " ghost" : ""}`}>{sp}</span>
            <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
