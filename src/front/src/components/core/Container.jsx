import Styled from "styled-components";
import { Media } from 'Utilities/style'

const Container = Styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;

    ${Media.xl`
      max-width: 1400px;
    `}
    
    ${Media.lg`
      max-width: 960px;
    `} 
    
    ${Media.md`
      max-width: 720px;
    `}
    
     ${Media.sm`
      max-width: 540px;
    `}  
`;

export default Container;