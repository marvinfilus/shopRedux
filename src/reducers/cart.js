export default (state = [], payload ) => {
  switch(payload.type){
    case "add":
    console.log(payload.item.id);
      return [...state, payload.item];

    case "delete":
    const index = state.indexOf(payload.item);
    console.log(index,payload.idx, state.length);
      if(index > -1){
        state.splice(index, 1);
        return [...state];
      }
     default:
      return state;
  }
}
