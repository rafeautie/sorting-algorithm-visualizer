export const initialState = { nodes: [] };

export const updateNodes = nodes => newNodes => {
  nodes.setState({ nodes: newNodes });
}

export const randomizeNodes = nodes => () => {
  //invoke randomizer function that 
  nodes.setState({ nodes: /* result of randomizer function*/ });
}