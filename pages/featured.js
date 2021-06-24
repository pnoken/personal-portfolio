import Image from "next/image";
import MainLayout from "../components/Layout";
import FeaturedProjects from "../components/Section/FeaturedProjects";

export default function Featured() {
  return (
    <MainLayout title="featured">
      <FeaturedProjects />
    </MainLayout>
  );
}
