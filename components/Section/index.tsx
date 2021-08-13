import { Section as Cmp } from './Section';
import { SectionItem } from './SectionItem';

/**
 * I'm using this approach because I wanted to use the dot notation,
 * and typescript has some issues when it's implemented directly as
 * this example:
 * Section.Item = SectionItem
 */
export const Section = Object.assign(Cmp, {
  Item: SectionItem,
});
