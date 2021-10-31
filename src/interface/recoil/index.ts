import { SerializableParam } from 'recoil';

/**
 * Generate Recoil Type Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export type GenRecoilType<T> = T & SerializableParam;
