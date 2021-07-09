import MainLayout from "../components/Layout";
import Banner from "../components/Section/Banner";
import MidSection from "../components/Section/MidSection";
import Newsletter from "../components/Section/Newsletter";
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "af3dbd5c89b7198f7ed1b0a662424d92-us6",
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
