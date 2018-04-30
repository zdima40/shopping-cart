import React from "react";

import Graph from "react-graph-vis";

const graph = {
  nodes: [
    { id: 5, label: "ButtonPaginationContainer" },
    { id: 6, label: "ButtonsSelectViewContainer" },
    { id: 15, label: "CartContainer" },
    { id: 2, label: "ProductsContainer" },
    { id: 7, label: "ProductsGroupsContainer" },
    { id: 16, label: "SearchContainer" },
    { id: 14, label: "SidebarContainer" },
    { id: 8, label: "SpecialOffersContainer" },
    { id: 9, label: "SpecialOffersProductsContainer" },
    { id: 12, label: "AddToCartButton" },
    { id: 17, label: "Cart" },
    { id: 1, label: "Layout" },
    { id: 13, label: "Product" },
    { id: 3, label: "ProductItem" },
    { id: 4, label: "ProductsList" },
    { id: 10, label: "SpecialOffersProduct" },
    { id: 11, label: "SpecialOffersTimer" }
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 4, to: 3 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 4, to: 8 },
    { from: 8, to: 9 },
    { from: 8, to: 10 },
    { from: 8, to: 11 },
    { from: 10, to: 12 },
    { from: 3, to: 13 },
    { from: 13, to: 12 },
    { from: 1, to: 14 },
    { from: 1, to: 15 },
    { from: 15, to: 17 },
    { from: 14, to: 16 },
    { from: 17, to: 13 }
  ]
};

const options = {
  layout: {
    hierarchical: 0
  },
  height: "900px",
  edges: {
    color: "#000000"
  }
};

const events = {
  select: function(event) {
    const { nodes, edges } = event;
  }
};

const GraphPage = () => (
  <Graph graph={graph} options={options} events={events} />
);

export default GraphPage;
