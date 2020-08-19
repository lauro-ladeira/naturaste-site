import React from "react"
import { Wrapper, Logo, BuildingImage, Hello, Description } from "./Home.styled"
import logo from "../../images/logo-naturaste.png"
import building from "../../images/building.png"

function Home() {
  return (
    <Wrapper>
      <Logo src={logo} alt="" />
      <BuildingImage src={building} alt="" />
      <Hello>Olá!</Hello>
      <Description>Estamos construindo essa página,<br /> volte em breve para conferir!</Description>
    </Wrapper>
  )
}

export default Home
