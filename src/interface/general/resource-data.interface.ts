/**
 * Resource Data Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IResourcePayload<T> {
  read(): T;
}
