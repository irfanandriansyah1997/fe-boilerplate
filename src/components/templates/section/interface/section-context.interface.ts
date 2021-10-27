/**
 * Section Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export interface ISectionContextState {
  markdownURL?: string;
}

/**
 * Section Context Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export interface ISectionContextAction {
  setMarkdownURL(string: string | undefined): void;
}

/**
 * Section Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export interface ISectionContext {
  action: ISectionContextAction;
  state: ISectionContextState;
}
