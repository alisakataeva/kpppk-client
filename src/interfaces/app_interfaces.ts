export interface AppLink {
  url: string;
  title: string;
}

export type SideMenu = {
  [key: string] : SideMenuItem[]
}

export interface SideMenuItem {
  group: string;
  group_name?: string;
  code: string;
  url: string;
  title: string;
  order: number;
  content?: string;
}
