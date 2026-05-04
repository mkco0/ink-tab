import React from 'react';
import { type BoxProps, Text } from 'ink';
type ExtractFCProps<T> = T extends React.FunctionComponent<infer P> ? P : never;
/**
 * Represent props of a <Tab>
 */
export interface TabProps {
  name: string;
  children: React.ReactNode;
}
/**
 * A <Tab> component
 */
export declare const Tab: React.FunctionComponent<TabProps>;
/**
 * Declare how does the keyboard interacts with ink-tab here
 */
interface KeyMapProps {
  useNumbers?: boolean;
  useTab?: boolean;
  previous?: string[];
  next?: string[];
}
/**
 * Props for the <Tabs> component
 */
export interface TabsProps {
  /**
   * A function called whenever a tab is changing.
   * @param {string} name the name of the tab passed in the `name` prop
   * @param {React.Component<TabProps>} activeTab the current active tab component
   */
  onChange: (name: string, activeTab: React.ReactElement<typeof Tab>) => void;
  children: Array<React.ReactElement<typeof Tab>>;
  flexDirection?: BoxProps['flexDirection'];
  width?: BoxProps['width'];
  keyMap?: KeyMapProps;
  isFocused?: boolean;
  defaultValue?: string;
  showIndex?: boolean;
  colors?: {
    activeTab?: {
      color?: ExtractFCProps<typeof Text>['color'];
      backgroundColor?: ExtractFCProps<typeof Text>['backgroundColor'];
    };
  };
}
/**
 * The <Tabs> component
 */
export declare const Tabs: React.FunctionComponent<TabsProps>;
export {};
