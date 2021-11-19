/**
 * Graphql Response Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export interface IGraphqlResponse<T> {
  data?: T;
  errors?: Error[];
}

/**
 * Grapqhl Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export type IGraphqlPayload<T> =
  | IGraphqlResponse<T>
  | Promise<IGraphqlResponse<T>>;
