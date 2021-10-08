export default function MidSection() {
  return (
    <div>
      <section style={{ border: "2px solid black" }}>
        <div className="container p-5">
          <h3>Technical Stack</h3>
          <div className="row">
            <div className="col-lg-6">
              <img className="p-2" src="/images/js.svg" />{" "}
              <img className="p-2" src="/images/react.svg" />
              <img className="p-2" src="/images/node.svg" />
            </div>
            <div className="col-lg-6">
              <ul>
                <li>State Management with Redux or Context Hooks</li>
                <li>React with TypeScript</li>
                <li>Next JS React framework</li>
                <li>Testing with Jest/ Jasmine / Mocha</li>
                <li>Bootstrap CSS/SCSS</li>
                <li>NodeJS with Express & MongoDB </li>
                <li>Devops with Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
