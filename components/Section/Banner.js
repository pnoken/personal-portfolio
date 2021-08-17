import Image from "next/image";

export default function Banner() {
  return (
    <section className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="rounded"
            src="https://ecex.s3.eu-west-2.amazonaws.com/peter/personal-photos/mtipet.png"
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-lg-6">
          <h1>
            <code>I'm Peter Nortey</code>
          </h1>
          <h2>
            <code>Software Developer</code>
          </h2>
          <h3>
            <code>I love developing JavaScript web applications</code>
          </h3>
          <h3>
            <code>2+ years experience developing React applications</code>
          </h3>
          <h3>
            <code>1+ years experience with NodeJS</code>
          </h3>
          <h3>
            <code>
              Recently interested in Blockchain Application Development with
              Solidity
            </code>
          </h3>
          <a href="mailto:norteypeter@gmail.com">
            <button className="btn btn-lg btn-primary">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}
