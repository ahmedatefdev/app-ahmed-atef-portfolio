const ConvertObjectToModel = (myObject: any) => {
  let newModel: any = {};
  const currentObjet = Array.isArray(myObject) ? myObject[0] : myObject;
  for (const key in currentObjet) {
    const element = currentObjet[key];
    newModel[key] = Array.isArray(element)
      ? ConvertObjectToModel(element)
      : element !== null && typeof element === "object"
      ? ConvertObjectToModel(element)
      : typeof element;
  }
  return newModel;
};
export default ConvertObjectToModel;
