import Styled from "styled-components";
import { Media } from 'Utilities/style'

const ContentBox = Styled.div`
    //font-size: 1.25rem;
    padding: 40px 80px;
    font-weight: 400;

    & b, strong {
      font-weight: 600;
    }

    & h1,
      h2,
      h3,
      h4 {
      font-weight: 400;
    }
    
    ${Media.xs`
        padding: 40px 15px;
    `} 
    
    ${Media.sm`
        padding: 40px 15px;
    `} 
    
    ${Media.md`
        padding: 40px 30px;
    `} 
    
`;

export default ContentBox;