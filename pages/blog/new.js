import { AddBlogForm } from "../../components/Blog/AddBlogForm";

function NewBlog() {
  async function addBlogHandler(blogdata) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(blogdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }
  return <AddBlogForm onAddBlog={addBlogHandler} />;
}
