import { Link } from "react-router-dom";
import HeroImage from "./../../assets/Screens.png";
import styled from "styled-components";
function Hero() {
  return (
    <Wrapper>
      <LeftSide>
        <ImageWrapper>
          <img src={HeroImage} alt="Hero Screen" />
        </ImageWrapper>
      </LeftSide>
      <RightSide>
        <h2>حافظ على </h2>
        <h2> صحة محاصيلك</h2>
        <p>التطبيق الاول للتعرف على أمراض الفلفل مبكرا بالذكاء الاصطناعى</p>
        <ButtonGroup>
          <a
            className="hrefButton"
            href="https://expo.dev/artifacts/eas/tS59w8TZxjqhb5jWhxHzGD.apk"
          >
            احصل على التطبيق
          </a>
          <a className="hrefButton" href="https://pepperscan.herokuapp.com/">
            افحص محصولك الان
          </a>
        </ButtonGroup>
      </RightSide>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  flex: 1;
`;
const ImageWrapper = styled.div`
  /* max-width: 80%; */
`;
const RightSide = styled.div`
  padding-inline: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  h2 {
    text-align: right;
    width: max-content;
    font-size: 4rem;
    font-family: "Tajawal", sans-serif;
    font-weight: 900;
    line-height: 1.2;
  }
  p {
    text-align: right;
    color: hsl(223.8deg 58.14% 33.73%);
    font-family: "Tajawal", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    width: max-content;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 32px;
  margin-top: 16px;

  .hrefButton {
    padding: 16px;
    border-radius: 32px;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.2rem;

    &:first-of-type {
      border: 2px solid hsl(40deg 62.5% 71.76%);
      color: black;
    }
    &:last-of-type {
      background-color: hsl(40deg 62.5% 71.76%);
      color: white;
    }
  }
`;
