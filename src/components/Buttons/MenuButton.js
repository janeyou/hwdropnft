import React from "react"
import styled from "styled-components"
import { Caption } from "../styles/TextStyles"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem hasTitle={!item.title ? false : true}>
        <img src={item.icon} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled(Caption)`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.hasTitle ? "10px" : "0px")};
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
