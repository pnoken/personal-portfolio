export default function MidSection() {
  return (
    <div>
      <section>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6">
              <h3>Technical Stack</h3>
              <img className="p-2" src="/images/js.svg" />{" "}
              <img className="p-2" src="/images/react.svg" />
              <img className="p-2" src="/images/node.svg" />
            </div>
            <div className="col-lg-6">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <code>State Management with MobX, Redux or UseContext</code>
                </li>
                <li>
                  <code>React with TypeScript</code>
                </li>
                <li>
                  <code>Next JS / Gatsby React framework</code>
                </li>
                <li>
                  <code>Testing with Jest / Jasmine / Mocha</code>
                </li>
                <li>
                  <code>Bootstrap / SCSS / Material UI / Tailwind CSS</code>
                </li>
                <li>
                  <code>NodeJS with Express & MongoDB / GraphQl </code>
                </li>
                <li>
                  <code>Devops with Azure</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
