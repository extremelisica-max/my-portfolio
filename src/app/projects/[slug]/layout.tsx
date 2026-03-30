import ProjectNav from "@/components/sections/ProjectNav";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectNav />
      <div className="content-area min-h-screen bg-cream">
        <main data-testid="project-main">{children}</main>
      </div>
    </>
  );
}
