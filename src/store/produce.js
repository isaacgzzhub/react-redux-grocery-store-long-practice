import { produce.json } as produceData from ".././mockData/produce.json"

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
  type: POPULATE
}
