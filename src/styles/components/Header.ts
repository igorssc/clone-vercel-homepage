import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import Avatar from '../../assets/avatar.svg'
import SpecialButton from '../../assets/special-button.svg'

/* @ts-ignore:disable-next-line */
export const LogoStyle = styled(Logo)`
  width: 100px !important;
  height: auto;
  filter: invert(1);
`
/* @ts-ignore:disable-next-line */
export const AvatarStyle = styled(Avatar)`
  width: 40px !important;
  height: auto;

  & :hover {
    border-radius: 100%;
  }
`
/* @ts-ignore:disable-next-line */
export const SpecialButtonStyle = styled(SpecialButton)`
  width: 100px !important;
  height: auto;
`

export const HeaderContent = styled.header`
  max-width: 1048px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1rem 2rem;
  margin: auto;

  .left {
    height: 2rem;
  }

  .left img {
    height: 100%;
  }

  .middle ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    list-style: none;
  }

  .middle ul li a {
    font-size: 0.85rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    color: #808080;
    text-decoration: none;
  }

  .middle ul li a:hover {
    color: #4b4b4b;
  }

  .middle ul li a + a {
    margin-left: 1rem;
  }

  .right {
    margin-left: 0.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .right .conf {
    position: relative;
  }

  .right .conf span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    font-size: 0.8rem;
    font-weight: 300;
    color: gray;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }

  .itens {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
  }
`
