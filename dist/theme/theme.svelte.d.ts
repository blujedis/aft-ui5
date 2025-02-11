import { type Theme } from './types.js';
declare const currentTheme: Theme;
export declare function updateTheme<T extends Theme>(theme?: Partial<T>): Theme;
export default currentTheme;
