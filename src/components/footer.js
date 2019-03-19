import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default () => (
  <div css={css`
    background-color: #000000;
    grid-area: c;
    margin-top: ${rhythm(1)};
    height: ${rhythm(4)};
    width: 100%;
  `}>
  </div>
)
