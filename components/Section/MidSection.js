export default function MidSection() {
  return (
    <div>
      <section>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="fw-bold">Technical Stack</h3>
              <img className="p-2" src="/images/js.svg" />{" "}
              <img className="p-2" src="/images/react.svg" />
              <img className="p-2" src="/images/node.svg" />
            </div>
            <div className="col-lg-6">
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <p>State Management with MobX, Redux or UseContext</p>
                </li>
                <li>
                  <p>React with TypeScript</p>
                </li>
                <li>
                  <p>Next JS / Gatsby React framework</p>
                </li>
                <li>
                  <p>Testing with Jest / Jasmine / Mocha</p>
                </li>
                <li>
                  <p>Bootstrap / SCSS / Material UI / Tailwind CSS</p>
                </li>
                <li>
                  <p>NodeJS with Express & MongoDB / GraphQl </p>
                </li>
                <li>
                  <p>Devops with Azure</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
