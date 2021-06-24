import Image from "next/image";
import Navbar from "../components/Layout/Navbar";

export default function About() {
  return (
    <div className="container">
      <Navbar title={"About"} />
      <div className="row vh-100">
        <section className="col-4">
          <Image src={"/images/profile.jpg"} width="600px" height="500px" />
          
        </section>
        <section className="col-8">
          <h4>The Professional-Non Professional Network</h4>
          <p>
            Developed a networking platform that enables students during their
            long vacation in Accra Connect to Professional in industry to have a
            live virtual tour of what they do at work. Pnokn has a tagline
            Connect, Discover & Achieve; We don't only connect students to the
            right professionals but help them discover their careers and achieve
            their dreams. Want to learn more about The Pnokn Network? Follow the
            link below.
          </p>
        </section>
        <section className="col-4">
          <Image src={"/images/profile.jpg"} width="600px" height="500px" />
          
        </section>
        <section className="col-8">
          <h4>The Professional-Non Professional Network</h4>
          <p>
            Developed a networking platform that enables students during their
            long vacation in Accra Connect to Professional in industry to have a
            live virtual tour of what they do at work. Pnokn has a tagline
            Connect, Discover & Achieve; We don't only connect students to the
            right professionals but help them discover their careers and achieve
            their dreams. Want to learn more about The Pnokn Network? Follow the
            link below.
          </p>
        </section>
        <section className="col-4">
          <Image src={"/images/profile.jpg"} width="600px" height="500px" />
          
        </section>
        <section className="col-8">
          <h4>The Professional-Non Professional Network</h4>
          <p>
            Developed a networking platform that enables students during their
            long vacation in Accra Connect to Professional in industry to have a
            live virtual tour of what they do at work. Pnokn has a tagline
            Connect, Discover & Achieve; We don't only connect students to the
            right professionals but help them discover their careers and achieve
            their dreams. Want to learn more about The Pnokn Network? Follow the
            link below.
          </p>
        </section>
        <section className="col-4">
          <Image src={"/images/profile.jpg"} width="600px" height="500px" />
          
        </section>
        <section className="col-8">
          <h4>The Professional-Non Professional Network</h4>
          <p>
            Developed a networking platform that enables students during their
            long vacation in Accra Connect to Professional in industry to have a
            live virtual tour of what they do at work. Pnokn has a tagline
            Connect, Discover & Achieve; We don't only connect students to the
            right professionals but help them discover their careers and achieve
            their dreams. Want to learn more about The Pnokn Network? Follow the
            link below.
          </p>
        </section>
      </div>
    </div>
  );
}
