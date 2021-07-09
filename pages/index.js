import MainLayout from "../components/Layout";
import Banner from "../components/Section/Banner";
import MidSection from "../components/Section/MidSection";
import Newsletter from "../components/Section/Newsletter";
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.apiKey,
  server: "us6",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();

export default function Home() {
  return (
    <MainLayout title={"Peter Nortey"}>
      <Banner />
      <MidSection />
      <Newsletter />
    </MainLayout>
  );
}
