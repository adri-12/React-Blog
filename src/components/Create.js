import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const categories = ["Fitness", "Nutrition", "Physiology", "Other"];
  const [category, setCategory] = useState(categories[0]);

  const articleDate = new Date().toISOString(); // get current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // indexul lunii începe de la 0
  const day = currentDate.getDate();
  const date = `${year}-${month}-${day}`;

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author, category, date }; // create new post objects

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength="10"
        />
        <label>Post author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Post content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Post category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {!isPending && (
          <button className="btn-submit">
            <span>Add Post</span>
            <i></i>
          </button>
        )}
        {isPending && <button disabled>Adding post...</button>}
      </form>
    </div>
  );
};

export default Create;
