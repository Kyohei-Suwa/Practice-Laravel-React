type IMenu = {
  name : string,
  url : string,
  childs? : IMenu[]
}

const topMenu:IMenu = {
  name: 'TopPage',
  url: '/top',
};

const privateMenu:IMenu = {
  name: 'Private',
  url: '/private',
  childs: [{ name: 'Family', url: '/private/family', childs: [] }],
};

const Menus: IMenu[] = [topMenu, privateMenu];

// decomp name and url
// TODO decomp by using js object... understanding typescript using
const traverseMenu = (array:string[][], menus:IMenu[]) => {
  menus.forEach((element) => {
    const nameUrlArray = new Array<string>();
    nameUrlArray.push(element.name);
    nameUrlArray.push(element.url);
    array.push(nameUrlArray);
    if (element.childs !== undefined && element.childs?.length > 0) {
      traverseMenu(array, element.childs);
    }
  });
  return array;
};

const menuArray = new Array<string[]>();
const locationMap = traverseMenu(menuArray, Menus);
export default Menus;
export type { IMenu };
export { locationMap };
