import { useState } from "react";
import { useForm } from "react-hook-form";
import Validation from "../Validations";
import { AlreadySubscribed } from "./AlreadySubscribed";
import { Subscribed } from "./Subscribed";

export default function Newsletter() {
  const [subscribe, setSubscribe] = useState("Unsubscribed");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const dat = await res.json();
    if (dat.duplicate) {
      setSubscribe("Already Subscribed");
    } else if (dat.message) {
      setSubscribe("Success");
    }

    console.log(dat);
  };

  // const subscriptionStatus = "Unsubscribed";

  switch (subscribe) {
    // case "Already Subscribed":
    //   return <AlreadySubscribed />;
    case "Success":
      return <Subscribed />;
    default:
      return (
        <section>
          <div className="container p-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="/images/subscribe.svg"
                  style={{ maxHeight: "90%", maxWidth: "90%" }}
                />
              </div>
              <div
                className="col-lg-6 mx-auto"
                style={{
                  boxSizing: "border-box",
                  paddingTop: "6%",
                }}
              >
                <h3 className="fw-bold">Let's Interact</h3>
                <p>
                  Subscribe to my newsletter and receive updates about trending
                  technologies relating to web development
                </p>

                <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-control me-2"
                    style={{ borderRadius: "25px" }}
                    type="subscribe"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                    placeholder="Please Enter Email"
                    aria-label="Subscribe"
                  />
                  <button
                    style={{ borderRadius: "25px" }}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
                {errors.email && (
                  <Validation variant="danger">
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" && "Email is not valid"}
                    {Subscribed === "Already Subscirbed" &&
                      "Already Subscribed"}
                  </Validation>
                )}
              </div>
            </div>
          </div>
        </section>
      );
  }
}
