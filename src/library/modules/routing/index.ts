import { RoutingAPPAbstract } from './abstract';
import { RoutingModulesDecorator, RoutingSubModulesDecorator } from './helper';
import { IRouteConstruct } from './interface';

export type IConstruct = IRouteConstruct;
export const Routing = RoutingAPPAbstract;
export const modules = RoutingModulesDecorator;
export const subModules = RoutingSubModulesDecorator;
