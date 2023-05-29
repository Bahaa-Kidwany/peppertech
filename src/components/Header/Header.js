import Logo from "./../../assets/bell-pepper.png";
import styled from "styled-components";
function Header() {
  return (
    <NavHeader>
      <NavList>
        <li>
          <a href="https://pepperscan.herokuapp.com/">افحص محصولك الان</a>
        </li>
        <li>
          <a href="#contact">تواصل معنا</a>
        </li>
        <li>
          <a href="#team">فريق العمل</a>
        </li>
        <li>
          <a href="#adv">المميزات</a>
        </li>
        <li>
          <a href="#info">عن التطبيق</a>
        </li>
        <li>
          <a href="/">الرئيسية</a>
        </li>
        <li>
          <a href="/">
            <Icon src={Logo} alt="bell pepper" />
          </a>
        </li>
      </NavList>
    </NavHeader>
  );
}

export default Header;

const NavHeader = styled.nav`
  padding: 32px;
  display: flex;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 4px;
  flex: 1;

  li a {
    font-size: 1rem;
    color: black;
    font-weight: bold;
  }

  li:first-of-type {
    background-color: black;
    padding: 16px;
    border-radius: 32px;

    a {
      color: white;
    }
  }
  li:last-of-type {
    margin-left: auto;
  }
`;
const Icon = styled.img`
  width: 70px;
  min-width: 70px;
`;
