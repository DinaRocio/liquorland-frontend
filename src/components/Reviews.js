import styled from "@emotion/styled";
import { colors } from "../ui";
import { SubTitleStyled, TextS, TextXS } from "../UI/Text";
import { Stars } from "./Stars";

export default function Reviews({ data }) {
  return (
    <ReviewsContainer>
      {data.map((review) => (
        <ReviewItem key={review.id}>
          <ReviewHeader>
            <Profile src={review.user.avatar_url} alt="User photo" />
            <ReviewHeaderText>
              <SubTitleStyled>{review.user.name}</SubTitleStyled>
              <TextXS>{review.updated_at.slice(0, 10)}</TextXS>
            </ReviewHeaderText>
            <Stars rating={review.rating} />
          </ReviewHeader>
          <TextS>{review.comment}</TextS>
        </ReviewItem>
      ))}
    </ReviewsContainer>
  );
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewItem = styled.div`
  padding: 12px 0;
  border-top: 1px solid ${colors.gray4};
`;

const ReviewHeader = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`;
const ReviewHeaderText = styled.div`
  flex-grow: 1;
`;

const Profile = styled.img`
  flex-shrink: 0;
  flex-grow: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
