export default function Footer() {
  return (
    <footer>
      <section>
        <div className="container">
          <h3 className="fw-bold">Let's Connect</h3>
          <a href="https://www.github.com/pnoken" target="_blank">
            <img
              className="p-2"
              src="/images/github.png"
              height="50px"
              width="50px"
            />
          </a>
          <a href="https://www.twitter.com/pnoken" target="_blank">
            <img
              className="p-2"
              src="/images/twitter.png"
              height="50px"
              width="50px"
            />
          </a>
          <a href="https://www.linkedin.com/in/pnokn" target="_blank">
            <img
              className="p-2"
              src="/images/lnkdin.svg"
              height="50px"
              width="50px"
            />
          </a>
        </div>
      </section>
      {/* <section className="bg-dark text-light">
        <div className="">
          <p>Copyright © 2021 by Peter Nortey. All rights reserved.</p>
        </div>
      </section> */}
    </footer>
  );
}
