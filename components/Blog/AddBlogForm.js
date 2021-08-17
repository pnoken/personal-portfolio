export const AddBlogForm = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="blog-title" class="form-label">
          Blog Title
        </label>
        <input
          type="text"
          className="form-control"
          id="blog-title"
          placeholder="New Blog"
        />
      </div>
      <div class="mb-3">
        <label for="blog-image" class="form-label">
          Blog Title
        </label>
        <input
          type="url"
          className="form-control"
          id="blog-image"
          placeholder="New Blog"
        />
      </div>
      <div class="mb-3">
        <label for="blog-category" class="form-label">
          Blog Title
        </label>
        <input
          type="text"
          className="form-control"
          id="blog-category"
          placeholder="Blog Category"
        />
      </div>
      <div class="mb-3">
        <label for="blog-content" class="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="blog-content"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
};
