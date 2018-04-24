import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import styled from "styled-components";

// import material-ui
import Button from "material-ui/Button";
import Badge from "material-ui/Badge";

import Search from "components/Search";

import { getCountAddedIds } from "selectors";

import lang from "constants/lang";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const menus = [
  {
    id: 1,
    link: "/",
    name: lang.PRODUCTS_SIDEBAR
  },
  {
    id: 2,
    link: "/cart",
    name: lang.CART_SIDEBAR
  }
];

const renderMenuButton = (menu, count) => {
  return (
    <StyledLink to={menu.link} key={menu.id}>
      {menu.id === 2 ? (
        <Badge color="primary" badgeContent={count}>
          <Button>{menu.name}</Button>
        </Badge>
      ) : (
        <Button>{menu.name}</Button>
      )}
    </StyledLink>
  );
};

const SidebarContainer = props => {
  const { count } = props;
  return (
    <div>
      {menus.map(menu => renderMenuButton(menu, count))}
      <Search />
    </div>
  );
};

const mapStateToProps = state => ({
  count: getCountAddedIds(state)
});

export default connect(mapStateToProps, null)(SidebarContainer);
