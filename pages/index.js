import Layout from "../components/Layout";
import Mainpage from "../components/Mainpage";

const IndexPage = ({ data }) => (
  <Layout>
    <Mainpage featured={data} />
  </Layout>
);

export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch(`https://.../data`)
  const data = [
    {
      title: "Guardians of the Galaxy",
      image: "/images/pic1.jpg",
      likes: 3.548,
      rating: 4,
    },
    {
      title: "Guardians of the Galaxy 2",
      image: "/images/pic2.jpg",
      likes: 3.333,
      rating: 4,
    },
  ];
  //const data = JSON.parse(res)
  // Pass data to the page via props
  return { props: { data } };
}

export default IndexPage;
