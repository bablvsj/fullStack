export interface ThemeConfigProps {
  layout: string;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isCollapse: boolean;
  isWeak: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
  maximize: boolean;
}

export interface GlobalState {
  token: string;
  userInfo: any;
  assemblySize: string;
  language?: string;
  themeConfig: ThemeConfigProps;
}
