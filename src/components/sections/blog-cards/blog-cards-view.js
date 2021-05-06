import { Wrapper, BlogColumn } from "./blog-cards-style";
import BlogCard from "../../constructs/blog-card-full-hero";

const BlogCards = ({ blogs }) => {
  return (
    <Wrapper>
      {blogs.map((blogs, index) => (
        <BlogColumn key={index}>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              hero={blog.hero}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </BlogColumn>
      ))}
    </Wrapper>
  );
};

export default BlogCards;
