import Section from "./Section";

export default function Tech() {
  return (
    <Section>
      
<h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
<div className="grid md:grid-cols-3 gap-8">
  {Object.entries({
    Frontend: ["React", "Next.js"],
    Backend: ["Golang", "Node.js"],
    Databases: ["MySQL", "MongoDB"],
    Payments: ["Stripe", "MyFatoorah"],
    DevOps: ["AWS", "Docker", "Kubernetes", "GCP"]
  }).map(([k,v]) => (
    <div key={k} className="bg-neutral-900/80 backdrop-blur p-6 rounded">
      <h3 className="font-semibold mb-2">{k}</h3>
      <ul className="text-gray-400 space-y-1">
        {v.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  ))}
</div>

    </Section>
  );
}