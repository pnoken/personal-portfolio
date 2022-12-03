export default function Banner() {
  return (
    <section className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="rounded"
            src="/images/profile.png"
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bolder">I'm Peter Nortey</h1>
          <h4 className="fw-bold">Software Engineer</h4>
          <div className="mt-3">
            <p>
              Self taught JavaScript Developer with 4+ years experience
              developing applications with React & NodeJS. Recently I have
              developed interest in Blockchain Application Development with
              Solidity. I also offer free crypto advice and strategy at Coinly.
            </p>
          </div>

          <a href="mailto:norteypeter@gmail.com">
            <button
              style={{ borderRadius: "25px" }}
              className="btn btn-lg btn-primary mt-3"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
