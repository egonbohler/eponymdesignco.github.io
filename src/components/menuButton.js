import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default () => (
  <div css={css`justify-self: end; margin-right: ${rhythm(2)}; @media (max-width: 600px) {margin-right: ${rhythm(0.75)};}`}>
    <div css={css`height: ${rhythm(0.125)}; width: ${rhythm(2.25)}; background-color: #000000; margin-left: ${rhythm(2)}; margin-top: ${rhythm(2.5)}; @media (max-width: 600px) {width: ${rhythm(1.25)};}`}></div>
    <div css={css`height: ${rhythm(0.125)}; width: ${rhythm(2.25)}; background-color: #000000; margin-left: ${rhythm(2)}; margin-top: ${rhythm(0.25)}; @media (max-width: 600px) {width: ${rhythm(1.25)};}`}></div>
  </div>
)
