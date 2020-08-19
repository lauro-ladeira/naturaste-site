import React from "react"
import PropTypes from "prop-types"
import { Main, GlobalStyle } from "./layout.styled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
