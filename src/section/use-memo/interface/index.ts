/**
 * City Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export interface ICity {
  country: string;
  id: string;
  lat: string;
  lng: string;
  name: string;
}

/**
 * City V2 Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export interface ICityV2 extends ICity {
  isActive?: boolean;
}
