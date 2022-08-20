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

export default Menus;
export type { IMenu };
