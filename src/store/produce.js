// don't use as keyword, just name it in the import
import produceData from ".././mockData/produce.json";

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  // need to wrap in return statement
  return {
    type: POPULATE,
  };
};
