import styled from "styled-components"
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin: 40px 0;
  width: 318px;
  height: 103.5px;

  ${media.lessThan("425px")`
    width: 244.6px;
    height: 79.61px;
  `}
`

export const BuildingImage = styled.img`
  width: 223.1;
  height: 166.9px;
  ${media.lessThan("425px")`
    width: 171.61px;
    height: 128.38px;
  `}
`

export const Hello = styled.h1`
  font-family: Baloo;
  font-size: 62px;
  font-weight: normal;
  line-height: 62px;
  margin: 55px 0 5px;
  text-align: center;
  color: #FF8C25;
  ${media.lessThan("425px")`
    font-size: 48px;
    margin: 35px 0 2px;
  `}
`

export const Description = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 19px;
  margin: 0;
  line-height: 23px;
  text-align: center;
  color: #FF8C25;
  ${media.lessThan("425px")`
    font-size: 16px;
  `}
`