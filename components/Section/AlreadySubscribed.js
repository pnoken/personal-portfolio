export const AlreadySubscribed = () => {
  return (
    <section style={{ backgroundColor: "#F79C9D" }}>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/images/already_subscribed.svg"
              style={{ maxHeight: "90%", maxWidth: "90%" }}
            />
          </div>
          <div className="col-lg-6">
            <h3>Already Subscribed</h3>
            <p>Sorry, but you are already subscribed to this email list.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
