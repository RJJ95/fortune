import { Wrapper } from "./blog-cards-style";
import BlogCard from "../../constructs/blog-card";

const BlogCards = ({ blogs }) => {
  return (
    <Wrapper>
      {blogs.map((blogs, index) => (
        <BlogCard
          key={index}
          hero={blogs.hero}
          title={blogs.title}
          description={blogs.description}
        />
      ))}
    </Wrapper>
  );
};

export default BlogCards;
