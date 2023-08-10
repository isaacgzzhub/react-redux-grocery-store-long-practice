// don't use as keyword, just name it in the import
import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  // need to wrap in return statement
  return {
    type: POPULATE,
    produce: produceData
  };
}

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    default:
      return state;
  }
}
