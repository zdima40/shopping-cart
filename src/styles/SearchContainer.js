import style from "styled-components";
import TextField from "material-ui/TextField";

export const StyledForm = style.form`
    display: inline-block;
`;

export const StyledTextField = style(TextField)`
    margin: -10px !important;
`;
