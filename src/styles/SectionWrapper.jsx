import styled, { css } from 'styled-components'

const SectionWrapper = styled.section`
  h2 {
    color: #413d4b;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
    span {
      text-transform: uppercase;
    }
    &&:hover {
      color: palegoldenrod;
    }

    ${(props) =>
      props.about &&
      css`
        color: red;
      `}
  }
  p {
    color: #716e78;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 0 !important;
    padding-bottom: 30px;
  }
`

export default SectionWrapper
