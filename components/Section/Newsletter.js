const mailchimp = require("@mailchimp/mailchimp_marketing");
import { useState } from "react";

export default function Newsletter() {
  const [ email, setEmail ] = useState('')
  const listId = process.env.listId;
  const subscribingUser = {
    // firstName: "Prudence",
    // lastName: "McVankab",
    email: email,
  };

  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      // merge_fields: {
      //   FNAME: subscribingUser.firstName,
      //   LNAME: subscribingUser.lastName,
      // },
    });

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.id}.`
    );
  }

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
            <form className="d-flex" onSubmit={(e) => { e.preventDefault(); run()}}>
              <input
                className="form-control me-2"
                type="subscribe"
                placeholder="Please Enter Email"
                aria-label="Subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
