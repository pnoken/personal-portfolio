import { getSortedPostsData } from "../lib/posts";

export default function Blog({ allPostsData }){
    return(
    <div>
  <section>…</section>
  <section
  // className={`${} ${}`}
  >
    <h2>Blog</h2>
    <ul>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </ul>
  </section>
</div>)
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
