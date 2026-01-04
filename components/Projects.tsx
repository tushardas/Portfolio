
import Animate from "./Animate";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Animate>
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
      </Animate>

      <div className="space-y-12 text-gray-300">

        <Animate>
          <div>
            <h3 className="text-xl text-white font-semibold">Workflow Automation Platform</h3>
            <p>Drag-and-drop workflow automation with scalable backend APIs.</p>
            <p className="text-sm mt-1">Golang, MongoDB, AWS, Kubernetes, Kafka</p>
          </div>
        </Animate>

        <Animate>
          <div>
            <h3 className="text-xl text-white font-semibold">E-Commerce Platform (Frontend Project)</h3>
            <p>End-to-end ecommerce website, admin dashboards and payment integrations</p>
            <p className="text-sm mt-1">React.js, Next.js</p>
          </div>
        </Animate>

        <Animate>
          <div>
            <h3 className="text-xl text-white font-semibold">Golang Application Framework</h3>
            <p>Config-driven framework with DBs, pub-sub, logging and metrics.</p>
            <p className="text-sm mt-1">Golang, MySQL, Kafka, Cassandra</p>
          </div>
        </Animate>

        <Animate>
          <div>
            <h3 className="text-xl text-white font-semibold">RightHands (Freelance Project)</h3>
            <p>
              Service-booking platform like Urban Company, powering real production
              Android & iOS apps.
            </p>
            <p className="text-sm mt-1">Node.js, MongoDB, AWS, GitHub Actions</p>

            <div className="flex gap-6 mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.righthands&hl=en_IN"
                target="_blank"
                className="text-accent underline"
              >
                Android App
              </a>
              <a
                href="https://apps.apple.com/in/app/right-hands/id1641289996"
                target="_blank"
                className="text-accent underline"
              >
                iOS App
              </a>
            </div>
          </div>
        </Animate>

      </div>
    </section>
  );
}
