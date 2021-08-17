const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
    </>
  );

  export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            slug: "first-blog",
          },
        },
        {
          params: {
            slug: "first-blog",
          },
        },
      ],
    };
  }

  export async function getStaticProps(context) {
    //Fetch Data from API
    const blog_id = context.params.slug;
    const BLOG_DATA = await fetch("/api/blog/");
    return {
      props: {
        blogData: BLOG_DATA,
      },
      revalidate: 3600,
    };
  }
};

export default Blog;
