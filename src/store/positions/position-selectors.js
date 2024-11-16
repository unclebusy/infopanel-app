export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions;
  }

  return state.positions.filter(position => {
    const positionsFilters = [].concat(position.role, position.level, ...position.languages, ...position.tools);

    return filters.every(filter => positionsFilters.includes(filter));
  });
};
