export default function Banner() {
  return (
    <section className="container p-3">
      <div className="row">
        <div className="col-lg-6">
          <img className="rounded" src="/images/profile.jpg" height="100%" width="100%" />
        </div>
        <div className="col-lg-6">
          <h1><code>
            I'm Peter Nortey
          </code>
          </h1>
          <h2><code>JavaScript Developer</code></h2>
          <h3><code>I love developing JavaScript web applications</code></h3>
          <h3><code>2+ years experience developing React applications</code></h3>
          <h3><code>1+ years experience with NodeJS</code></h3>
          <a href="mailto:norteypeter@gmail.com"><button className="btn btn-lg btn-primary">Contact Me</button></a>
        </div>
      </div>
    </section>
  );
}
