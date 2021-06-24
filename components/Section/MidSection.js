export default function MidSection() {
  return (
    <div>
      <section className="bg-secondary text-light">
        <div className="container p-3">
          <h3>Technical Stack</h3>
          <div className="row">
            <div className="col-lg-6"><img src="/images/js.svg" /> <img src="/images/react.svg" /><img src="/images/node.svg" /></div>
            <div className="col-lg-6">
              <ul>
                <li>Redux</li>
                <li>React Hooks</li>
                <li>Next JS React framework</li>
                <li>Testing with Jest</li>
                <li>Bootstrap</li>
                <li>NodeJS</li>
                <li>Devops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
