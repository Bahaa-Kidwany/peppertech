import Members from "./../../assets/table.png";
import Logo from "./../../assets/eelu-logo.png";
import styled from "styled-components";
function Team() {
  return (
    <Wrapper id="team">
      <h2 className="wrapper-title" style={{ textAlign: "center" }}>
        فريق العمل
      </h2>
      <Content>
        <MembersWrapper>
          <img src={Members} alt="Members Screen" />
        </MembersWrapper>
        <ContentWrapper>
          <p>
            هذا التطبيق تم تنفيذه من ضمن مشروع التخرج الخاص بالفرقه الرابعه كليه
            حاسبات وتكنولوجيا المعلومات
          </p>
          <h2>الجامعة المصرية للتعلم الإلكترونى الأهلية</h2>
          <img className="contact-logo" src={Logo} alt="University Logo" />
          <p>يمكنكم التواصل مع الفريق عبر الإيميل الإلكترونى</p>
          <a href="mailto:contact@hafedk.org" className="contact-email">
            Contact@Hafedk.org
          </a>
          <p className="copyrights-contact">
            All Copyrights Reserved©2022-2023
          </p>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}

export default Team;

const Wrapper = styled.div`
  padding: 80px 32px;

  .wrapper-title {
    font-size: 3rem;
    font-family: "Tajawal", sans-serif;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 24px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  flex-wrap: wrap;
  gap: 32px;
`;

const MembersWrapper = styled.div`
  flex-basis: 35%;

  img {
    min-width: 430px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  gap: 8px;
  p {
    font-family: "Tajawal", sans-serif;
    font-size: 1.4rem;
    text-align: right;
    font-weight: bold;
    line-height: 1.3;

    &:first-of-type {
      max-width: 85%;
      text-align: center;
    }
    &:nth-of-type(2) {
      text-align: center;
    }
  }
  .contact-email {
    color: hsl(223.8deg 58.14% 33.73%);
    font-size: 1.3rem;
    margin-bottom: 8px;
    font-weight: bold;
  }
  .copyrights-contact {
    font-size: 1.4rem;
  }
  .contact-logo {
    min-width: 350px;
    max-width: 400px;
  }
  h2 {
    font-family: "Tajawal", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: hsl(223.8deg 58.14% 33.73%);
  }
`;
