import { skillGroups } from "@/data/skills";
import { skills as skillsContent } from "@/data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label={skillsContent.sectionLabel}
      data-testid="section-skills"
      data-ai-action="view-skills"
      className="section pt-2 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-near-black border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">04</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          {skillsContent.sectionTitle}
        </div>
      </div>

      {/* ── Skill groups grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            data-testid={`skill-group-${groupIndex + 1}`}
            data-ai-action="view-skill-group"
            className="bg-white rounded-3xl p-6 border border-near-black/10"
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="heading-1 text-near-black">
                {group.category}
              </h2>
              <span
                className="text-xs font-mono border border-near-black/20 rounded-full px-3 py-1 shrink-0 ml-4"
                aria-hidden="true"
              >
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="list-none" aria-label={`Навыки: ${group.category}`}>
              {group.items.map((item, i) => (
                <li key={item.name}>
                  {i > 0 && (
                    <div className="border-t border-near-black/10 my-3" aria-hidden="true" />
                  )}
                  <p className="text-near-black text-sm font-semibold">{item.name}</p>
                  <p className="text-near-black/50 text-xs mt-1">{item.context}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
