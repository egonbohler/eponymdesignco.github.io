import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import logo from "../img/logo_main.svg"
import MenuButton from "../components/menuButton.js"

export default () => (
  <div css={css`grid-area: a; display: grid; grid-template-columns: repeat(3, 1fr);`}>
    <Link to={`/`} css={css`grid-column: 2; justify-self: center;`}>
      <img alt="logo" src={logo} css={css`height: ${rhythm(6)}; width: ${rhythm(6)};`}/>
    </Link>
    <MenuButton
      css={css`height: ${rhythm(6)}; width: ${rhythm(6)}; grid-column: 3; justify-self: end;`}
    />
  </div>
)
