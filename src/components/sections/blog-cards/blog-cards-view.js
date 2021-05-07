import { Wrapper } from "./blog-cards-style";
import BlogCard from "../../constructs/blog-card-full-hero";

const BlogCards = ({ blogs }) => {
  return (
    <Wrapper>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          hero={blog.hero}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </Wrapper>
  );
};

export default BlogCards;
