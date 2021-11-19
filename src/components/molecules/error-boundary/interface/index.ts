import {
  ErrorBoundaryPropsWithRender,
  FallbackProps
} from 'react-error-boundary';

/**
 * Error Boundary Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export type IErrorBoundaryProps = Omit<
  ErrorBoundaryPropsWithRender,
  'fallbackRender'
>;

/**
 * Error Fallback Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IErrorFallbackProps extends FallbackProps {
  canReset?: boolean;
}
