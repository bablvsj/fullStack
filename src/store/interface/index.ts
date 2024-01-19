import { theme } from "ant-design-vue";

const { defaultAlgorithm, darkAlgorithm } = theme;
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
  theme?: string;
}

export interface GlobalState {
  token: string;
  userInfo: any;
  assemblySize: string;
  language?: string;
  themeConfig: ThemeConfigProps;
  theme: string;
}

export const themeColor = {
  light: defaultAlgorithm,
  dark: defaultAlgorithm,
} as const;
export type ThemeColor = keyof typeof themeColor;
