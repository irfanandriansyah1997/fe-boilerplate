/**
 * The main purpose for mapping action reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.24
 */
export type GenActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        payload?: M[Key];
        type: Key;
      }
    : {
        payload: M[Key];
        type: Key;
      };
};

/**
 * Generate Reducer Contract Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export type GenReducer<S, A> = (state: S, action: A) => S;
