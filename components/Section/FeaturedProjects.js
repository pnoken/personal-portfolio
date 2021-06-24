export default function FeaturedProjects() {
  return (
    <>
      <main>
      {/* <!-- ***************  ABOUT / PROFILE  **************** --> */}
      <header>
        <div class="content-wrap">

        <h1>Peter Nortey</h1>
        <h2>Front-end Web Developer</h2>

        <p>I am a freelance front-end web developer and I love to build stunning websites for businesses.</p>
        <p>I’m also exploring more creative pursuits building e-commerce websites for <a href="https://ecex.tech" target="_blank">Ecex Technologies</a>, an online store I’m running.</p>
        </div>
      </header>

      {/* <!-- ************ PROJECTS / PORTFOLIO  ************** --> */}
      <section class="projects">
        <div class="content-wrap divider">
        <h2>Featured Projects</h2>
        <p>View selected projects below. More information can be found at <a href="http://peternortey.com">peternortey.com</a>.</p>

        {/* <!-- Project 1 --> */}
        <section class="project-item">
          <img src="images/pnokn.png" alt="Pnokn Project" />
          <h3>The Professional-Non Professional Network</h3>
          <p>Developed a networking platform that enables students during their long vacation in Accra Connect to Professional in industry to have a live virtual tour of what they do at work. Pnokn has a tagline Connect, Discover & Achieve; We don't only connect students to the right professionals but help them discover their careers and achieve their dreams. Want to learn more about The Pnokn Network? Follow the link below.</p>
          <a class="btn" href="https://www.facebook.com/pnokn" target="_blank">Pnokn Project</a>
          <a class="btn" href="https://www.linkedin.com/pnokn">Pnokn.org</a>
        </section>

        {/* <!-- Project 2 --> */}
        <section class="project-item">
          <img src="images/thecoinpeople.png" alt="The Coin People" />
          <h3>The Coin People</h3>
          <p>The Coin people was in 2012 to provide cryptocurrency tools and Resources to cryptocurrency users to help them maximize their returns. I started this when I realized my friends were getting scammed and making loses whilst engaging in crypto-related activities. I later built a simple website where they can access all the needed tools. Tools include Trading Analysis & Scam advisor, Deep Coin Markets Analysis, Crypto Airdrops. Click on the button below to learn more.</p>
          <a class="btn" href="https://www.thecoinpeople.com/" target="_blank">Visit our website</a>
        </section>

        {/* <!-- Project 3 --> */}
        <section class="project-item">
          <img src="images/ecexshop.png" alt="Ecex Technologies" />
          <h3>Ecex Technogies</h3>
          <p>After learning more about crypto-currency and its potentials, I decided to create something just for fun. I built and E-commerce and Exchange Platform called Ecexshop and Ecexchange, which were subsidiaries of Ecex Technologies. Ecex Technologies was a startup formed as a result of my affinity for technological gadgets and tools combined with cryptocurrency.</p>
          <a class="btn" href="https://ecex.tech" target="_blank">View live site</a>
        </section>
        </div>
      </section>

      {/* <!-- ***************  WORK EXPERIENCE  ***************** --> */}
      <section class="work-experience">
        <div class="content-wrap item-details divider">
        <h2>Work Experience</h2>
        <p>See my complete work history on <a href="https://www.linkedin.com/in/pnokn/">LinkedIn</a>.</p>

        {/* <!-- Job 1 --> */}
        <section class="job-item">
          <div class="job-details">
            <h3>Front-end Developer & Educator</h3>
          <p>Freelance</p>
          <p>July 2018-Present</p>
          </div>
          <div class="job-summary">
            <p>Provides various front-end related services ranging from development work, speaking engagements, instructor training, workshops, and curriculum development. See more at  <a href="https://peternortey.com">peternortey.com</a>.</p>
          </div>  
        </section>

        {/* <!-- Job 2 --> */}
        <section class="job-item">
          <div class="job details">
            <h3>Blockchain Consultant</h3>
          <p>The Coin People</p>
          <p>September 2019 - Present 2016</p>
          </div>
          <div class="job-summary">
            <p>Created a platform where cryptocurrency enthusiats can access all the tools needed to maximise returns when dealing with cryptocurrency</p>
          <p>Key contributions:</p>
          <ul>
            <li>Built a website for The Coin People. Added tools including:
              <ul>
                <li>Coin Market Analytics & Price Predictions</li>
                <li>Live Bitcoin Automated Trading.</li>
                <li>Free Crypto-airdrops and tokens.</li>
                <li>Crypto Mining tools.</li>
              </ul>
            </li>
            <li>Started an interactive blog that covers the latest news relating to crypto-currency.</li>
            <li>Frequently updated thecoinpeople.com to improve user experience.</li>
            <li>Volunteer to regualarly give live coaching virtually to all subscribers.</li>
          </ul>
          </div>
        </section>

        {/* <!-- Job 3 --> */}
        <section class="job-item">
          <div class="job-details">
          <h3>Lead Front-End Developer</h3>
          <p>Ecex Technologies</p>
          <p>March 2013 - February 2014</p>
          </div>
          <div class="job-summary">
          <p>Lead the front-end development of Ecexshop and Ecexchange</p>
          <ul>
            <li>Responsible for setting code standards for the front-end development.</li>
            <li>Created a fully customized front-end framework, including the UI/UX design.</li>
            <li>Standardized the site architecture and design.</li>
          </ul>
          </div>
        </section>
          </div>
      </section>

      {/* <!-- ******************  EDUCATION & CERTIFICATIONS ****************** --> */}
      <section class="education">
        <div class="content-wrap item-details">
        <h2>Education</h2>

        <section>
          <h3>Azubi Africa Fellow</h3>
          <p>Software Engineering Track</p>
          <p>Three of intensive training towards the website development path, 2020-Date</p>
        </section>

        <section>
          <h3>University of Ghana</h3>
          <p>Bachelor of Science in Earth Sciences, 2014-2018</p>
          <p>Major in Engineering Geology.</p>
        </section>

        <section>
          <h3>Presbyterian Boys' Secondary School, Legon</h3>
          <p>General Science, 2014</p>
        </section>
        </div>
      </section>

      {/* <!-- *****************  CONTACT INFO / SOCIAL MEDIA  ***************** --> */}
      <footer>
        <div class="content-wrap">
        <h2>Let's Keep in Touch!</h2>

        {/* <!-- Social media and contact links. Add or remove any networks. --> */}
        <ul class="contact-list">
          <li><a href="mailto:peter@ecex.tech">peter@ecex.tech</a></li>
          <li><a href="http://pnortey.com" target="_blank">pnortey.com</a></li>
          <li><a href="http://twitter.com/pnoken" target="_blank">Twitter</a></li>
          <li><a href="https://linkedin.com/in/pnokn" target="_blank">LinkedIn</a></li>
        </ul>
        </div>
      </footer>
    </main>
    </>
  );
}
