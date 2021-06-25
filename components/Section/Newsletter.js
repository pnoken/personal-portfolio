export default function Newsletter() {
  return (
    <section style={{ backgroundColor: "#f7fff7" }}>
      <div className="container p-5">
        <div className="row">
        
          <div className="col-lg-6">
          <img src="/images/email.png" />
          </div>
          <div className="col-lg-6">
            <h3>Let's Interact</h3>
            <p>
              Subscribe to my newsletter and receive updates about trending
              technologies relating to web development
            </p>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="subscribe"
                placeholder="Please Enter Email"
                aria-label="Subscribe"
              />
              <button className="btn btn-outline-success" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
