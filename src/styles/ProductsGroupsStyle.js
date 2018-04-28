import style from "styled-components";
import { Link } from "react-router";

export const GroupProducts = style(Link)`
    display: block;
    height: 40px;
    width: 100px;
    background: ${props => (props.activegroup ? "#004c8e" : "#3077bf")};
    border: 1px solid #3077bf;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 40px;
    color: #fff;
`;
