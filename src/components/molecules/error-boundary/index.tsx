import { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import styles from './style/style.module.scss';
import { IErrorBoundaryProps, IErrorFallbackProps } from './interface';
/**
 * Error Fallback Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const ErrorFallback: FC<IErrorFallbackProps> = ({
  canReset,
  error,
  resetErrorBoundary
}) => (
  <div role="alert" className={styles[`error-apps`]}>
    <h1>🚨 There was an error:</h1>
    <pre style={{ whiteSpace: `normal` }}>{error.message}</pre>
    {canReset && (
      <button type="button" onClick={resetErrorBoundary}>
        <span className="material-icons">refresh</span>
        Try again
      </button>
    )}
  </div>
);

/**
 * Error Boundary
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const AppsError: FC<IErrorBoundaryProps> = ({
  onReset,
  resetKeys,
  ...parentProps
}) => {
  const canReset = Boolean(onReset || resetKeys);

  return (
    <ErrorBoundary
      {...parentProps}
      onReset={onReset}
      resetKeys={resetKeys}
      fallbackRender={(props: FallbackProps) => (
        <ErrorFallback {...props} canReset={canReset} />
      )}
    />
  );
};

export default AppsError;
