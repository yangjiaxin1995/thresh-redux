function bindActionCreator(creator, dispatch) {
  return (...arg) => dispatch(creator(...arg));
}

export default function bindActionCreators(creators, dispatch) {
  let obj = {};

  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }

  return obj;
}
