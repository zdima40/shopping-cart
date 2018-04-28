import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { getGroupsProducts, getActiveGroupId } from "selectors";

import { GroupProducts } from "styles/ProductsGroupsStyle";

const renderGroup = (group, activeGroupId) => {
  const activeGroup = activeGroupId === group.id ? "activeGroup" : "";
  return (
    <GroupProducts
      activegroup={activeGroup}
      to={`/groups/${group.id}`}
      key={group.id}
    >
      {group.name}
    </GroupProducts>
  );
};

const renderAllGroups = activeGroupId => {
  const activeGroup = activeGroupId ? "" : "activeGroup";
  return (
    <GroupProducts to="/" activegroup={activeGroup}>
      All products
    </GroupProducts>
  );
};

const ProductsGroupsContainer = ({ groups, activeGroupId }) => (
  <div>
    <div>Groups</div>
    {renderAllGroups(activeGroupId)}
    {groups.map(group => renderGroup(group, activeGroupId))}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  groups: getGroupsProducts(state),
  activeGroupId: getActiveGroupId(ownProps)
});

export default compose(withRouter, connect(mapStateToProps, null))(
  ProductsGroupsContainer
);
