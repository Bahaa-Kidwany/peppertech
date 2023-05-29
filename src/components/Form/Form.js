import styled from "styled-components";
import SendBtn from "./../../assets/send.png";
import DeleteBtn from "./../../assets/delete.png";
import CallImage from "./../../assets/Layer29.png";
import MessageImage from "./../../assets/Layer26.png";
import PhoneImage from "./../../assets/layer31.png";
import { useState } from "react";
function Form() {
  const [contactInfo, setContactInfo] = useState({
    user: "",
    email: "",
    message: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const clearFormData = () => {
    setContactInfo({ user: "", email: "", message: "" });
  };
  const forwardedContactInfo = `mailto:contact@hafedk.org?subject=contactInformation&body=from ${contactInfo.user}  \n  ${contactInfo.message}`;

  return (
    <Wrapper id="contact">
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>تواصل معنا </h2>
      <Content>
        <LeftSide>
          <FormArea>
            <InputWrapper>
              <input
                name="email"
                type="email"
                value={contactInfo.email}
                onChange={inputHandler}
                placeholder="إيميلك الإلكترونى"
              />
              <input
                name="user"
                type="text"
                value={contactInfo.user}
                onChange={inputHandler}
                placeholder="الإسم"
              />
            </InputWrapper>
            <textarea
              name="message"
              value={contactInfo.message}
              onChange={inputHandler}
              placeholder="الرسالة"
            ></textarea>
            <ButtonsGroup>
              <a
                href={
                  contactInfo.user &&
                  contactInfo.email &&
                  contactInfo.message &&
                  forwardedContactInfo
                }
              >
                <img src={SendBtn} alt="Send Button" />
              </a>
              <button type="button" onClick={() => clearFormData()}>
                <img src={DeleteBtn} alt="Delete Button" />
              </button>
            </ButtonsGroup>
          </FormArea>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <img src={PhoneImage} alt="Phone screen" />
          </ImageWrapper>
        </RightSide>
      </Content>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div`
  padding: 64px;

  h2 {
    font-size: 3rem;
    font-family: "Tajawal", sans-serif;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 24px;
  }
`;
const Content = styled.div`
  position: relative;
  display: flex;
  gap: 40px;
  background-color: #dfba7c;
  border-radius: 40px;
  padding: 48px 100px 0 40px;
  &::before {
    content: "";
    background-image: url(${MessageImage});
    background-repeat: no-repeat;
    background-size: contain;
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -32px;
    left: 32px;
  }
  &::after {
    content: "";
    background-image: url(${CallImage});
    background-repeat: no-repeat;
    background-size: contain;
    width: 80px;
    height: 80px;
    position: absolute;
    top: -32px;
    right: 32px;
  }
`;

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 0 48px 0 48px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  input {
    flex: 1;
    background-color: #ead6b4;
    border: none;
    border-radius: 24px;
    outline: none;
    padding: 12px 8px;
    text-align: right;

    &::placeholder {
      color: black;
      font-weight: bold;
    }
  }
  textarea {
    background-color: #ead6b4;
    width: 100%;
    border-radius: 32px;
    outline: 0;
    border: none;
    text-align: right;
    padding: 12px 8px;
    flex-basis: 40%;

    &::placeholder {
      color: black;
      font-weight: bold;
    }
  }
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
const ButtonsGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  button {
    cursor: pointer;
  }
`;
const RightSide = styled.div`
  padding-inline: 40px;
`;

const ImageWrapper = styled.div`
  /* margin-inline: 56px; */

  img {
    min-width: 150px;
  }
`;
