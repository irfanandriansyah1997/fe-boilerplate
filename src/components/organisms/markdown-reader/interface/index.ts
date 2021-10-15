/**
 * Markdown Content Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IMarkdownContentProps {
  content: string;
}

/**
 * Markdown Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IMarkdownHooks {
  content?: string;
  status: number;
  url: string;
}

/**
 * Markdown Reader Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IMarkdownReaderProps {
  markdownUrl: string;
}
