export const Subscribed = () => {
  return (
    <section style={{ backgroundColor: "#f7fff7" }}>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/images/subscribed.svg"
              style={{ maxHeight: "90%", maxWidth: "90%" }}
            />
          </div>
          <div className="col-lg-6">
            <h3>Successfully Subscribed</h3>
            <p>Thanks for joining my mailing list!.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
