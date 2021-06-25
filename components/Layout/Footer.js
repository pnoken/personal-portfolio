export default function Footer() {
  return (
    <footer>
      <section className="p-5">
      <div className="container">
        <h3>Let's Connect</h3>
        <a href="https://www.facebook.com/norteypeter" target="_blank"><img className="p-2" src="/images/fb.svg" height="5%" width="5%" /></a>
        <a href="https://www.instagram.com/pnoken" target="_blank"><img className="p-2" src="/images/ig.svg" height="5%" width="5%" /></a>
        <a href="https://www.linkedin.com/in/pnokn" target="_blank"><img className="p-2" src="/images/lnkdin.svg" height="5%" width="5%" /></a>
      </div>
      </section>
      <section className="bg-dark text-light">
      <div className="container">
        <p>Copyright © 2021 by Peter Nortey. All rights reserved.</p>
      </div>
      </section>
    </footer>
  );
}
