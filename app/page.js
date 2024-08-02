import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import SearchAndFilter from "./Components/SearchAndFilter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mt-8">
        <SearchAndFilter />
      </div>
    </Layout>
  );
}
