import MainLayout from "../components/Layout";
import Banner from "../components/Section/Banner";
import MidSection from "../components/Section/MidSection";
import Newsletter from "../components/Section/Newsletter";

export default function Home() {
  return (
    <MainLayout title={"Peter Nortey"}>
      <Banner />
      <MidSection />
      <Newsletter />
    </MainLayout>
  );
}
