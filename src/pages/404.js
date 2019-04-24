import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
    <div css={css`
      grid-area: b;
      justify-self: center;
      margin-top: ${rhythm(6)};
      `}>
    <p>Oh no ya done broke it </p>
    </div>
    </Layout>
  )
}
