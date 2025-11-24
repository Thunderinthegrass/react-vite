import styled, {css} from "styled-components";

const stylesText = {
  variant1: {
    color: "#13e2c7ff",
    fontSize: "15px",
  },
  variant2: {
    color: "#e213aeff",
    fontSize: "35px",
  },
  variant3: {
    color: "#025a07ff",
    fontSize: "25px",
  },
}

export const Texts = styled.p`
  padding: 20px;
  color: ${(props) => stylesText[props.$style]?.color || stylesText.variant1.color};
  font-size: ${(props) => stylesText[props.$style]?.fontSize || stylesText.variant2.fontSize};
`;

export const Button = styled.button`
  background: #36a4e4ff;
  border: none;
  padding: 10px 27px;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: .3s;

  background: ${(props) => (props.$green ? "#3ce436ff" : "")};
  &:hover{
    background: #1397e4ff;

    background: ${(props) => (props.$green ? "#15d80eff" : "")};
  }
  &:active{
    background: #22a6f3ff;

    background: ${(props) => (props.$green ? "#38f531ff" : "")};
  }

   ${(props) => props.disabled && 
    css`
      background: #084106ff;
      width: 100px;
      padding: 12px;
      display: block;
      margin: 0 auto;
      color: #ffffffff;
      &:hover{
        background: #035e0fff;
  }
    `
  }
`;

export const Button3 = styled(Button)`
  background-color: #df1591ff;
  &:hover{
    background-color: #9e0a65ff;
  }
`

export const Text = styled.p`
  color: #110d0eff;
  padding: 20px;
  transition: all .3s;
  
  color: ${(props) => ( props.$textTwo ? "#770f29ff" : "")};

  &:hover{
    background: #1397e4ff;

    background: ${(props) => (props.$textTwo ? "#15d80eff" : "")};
  }
`;

export const TextsTwo = styled.p`
  color: ${(props) => {
    switch (props.$variant) {
      case 'variant1':
        return '#3af168ff';
      case 'variant2':
        return '#77cf12ff';
      case 'variant3':
        return '#080f30ff';
      default: return '#0ae6c1ff';
    }
  }};
  font-size: ${(props) => {
    switch (props.$variant) {
      case 'variant1':
        return '25px';
      case 'variant2':
        return '35px';
      case 'variant3':
        return '30px';
      default: return '15px';
    }
  }};
`

export const DivItem = styled.div`
/* background: #000; */
  ${(props) => props.$isdiv && 
    css`
      background: #13b40eff;
      width: 100px;
      height: 100px;
      display: block;
    `
  }
`