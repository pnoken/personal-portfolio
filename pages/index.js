import dynamic from "next/dynamic";
//import Banner from "../components/Section/Banner";
import MidSection from "../components/Section/MidSection";
import Newsletter from "../components/Section/Newsletter";

const Banner = dynamic(() => import("../components/Section/Banner"), {
  loading: () => (
    <div class="spinner-border m-5" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Banner />
      <MidSection />
      <Newsletter />
    </>
  );
}
