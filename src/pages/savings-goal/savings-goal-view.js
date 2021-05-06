import {
  Wrapper,
  ChartsContainer,
  DataContainer,
  AreaChartContainer,
  SavingsGoalCardContainer,
  ResultCardContainer,
  BodyContainer,
  AmountToGoContainer,
  BlogContainer,
} from "./savings-goal-style";
import SavingsGoalCard from "../../components/constructs/savings-goal-card";
import ResultCard from "../../components/constructs/result-card";
import AreaLineChart from "../../components/constructs/area-line-chart";
import BlogCards from "../../components/sections/blog-cards";
import heroImage from "../../assets/images/hero-image.jpg";
import AmountToGoCard from "../../components/constructs/amount-to-go-card";

const data = [
  {
    name: "1",
    uv: 0,
  },
  {
    name: "2",
    uv: 100,
  },
  {
    name: "3",
    uv: 200,
  },
  {
    name: "4",
    uv: 300,
  },
  {
    name: "5",
    uv: 400,
  },
  {
    name: "6",
    uv: 500,
  },
  {
    name: "7",
    uv: 650,
  },
];

const blogs = [
  [
    {
      hero: heroImage,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
    {
      hero: null,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
    {
      hero: heroImage,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
  ],
  [
    {
      hero: null,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
    {
      hero: null,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
    {
      hero: heroImage,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
    {
      hero: heroImage,
      title: "New: Thé Review",
      description:
        "Whatever it is you want, you should wait until you've read this.",
    },
  ],
];

const SavingsGoal = () => {
  return (
    <Wrapper>
      <h1>Your savings goal</h1>
      <BodyContainer>
        <ChartsContainer>
          <DataContainer>
            <SavingsGoalCardContainer>
              <SavingsGoalCard
                color="green"
                title="PS5"
                description="My savings goal"
                Icon={null}
                progress={69}
              />
            </SavingsGoalCardContainer>
            <ResultCardContainer>
              <ResultCard difference="+$200" />
            </ResultCardContainer>
            <AmountToGoContainer>
              <AmountToGoCard difference="$400" />
            </AmountToGoContainer>
          </DataContainer>
          <AreaChartContainer>
            <AreaLineChart data={data} />
          </AreaChartContainer>
        </ChartsContainer>
        <BlogContainer>
          <BlogCards blogs={blogs} />
        </BlogContainer>
      </BodyContainer>
    </Wrapper>
  );
};

export default SavingsGoal;
