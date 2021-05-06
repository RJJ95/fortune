import {
  Wrapper,
  HeroImage,
  TextContainer,
  Title,
  Description,
} from "./blog-card-style";

const BlogCard = ({ hero, title, description }) => {
  return (
    <Wrapper background={hero}>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Wrapper>
  );
};

export default BlogCard;
