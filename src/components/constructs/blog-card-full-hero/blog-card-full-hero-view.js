import { Wrapper, TextContainer, Title, Description, ReadMore } from "./blog-card-full-hero-style";

const BlogCardFullHero = ({ hero, title, description }) => {
  return (
    <Wrapper background={hero}>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMore>Read more</ReadMore>
      </TextContainer>
    </Wrapper>
  );
};

export default BlogCardFullHero;
