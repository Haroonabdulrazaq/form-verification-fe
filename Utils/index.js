
export const findByData =(component, attr)=>{
  let wrapper =  component.find(`[data-test='${attr}']`);
  return wrapper;
}
