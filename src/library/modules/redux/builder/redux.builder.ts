import { applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, IModule, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { LogEntryObject } from 'redux-logger';

import { bind, VerifiedIsNotEmpty } from '@/helper';
import { BaseReducerModule } from '@/library/store/base';

/**
 * Redux Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.03.01
 */
class ReduxBuilder {
  private static store: IModuleStore<any>;

  /**
   * Getter Enhancers
   * @returns {StoreEnhancer}
   */
  getEnhancers(): StoreEnhancer[] {
    if (process.env.NODE_ENV !== `production`) {
      const { createLogger } = require(`redux-logger`);
      const logger = createLogger({
        collapsed: (_: () => any, __: any, logEntry: LogEntryObject) =>
          !logEntry.error,
        level: {
          action: () => `log`
        }
      });

      return [applyMiddleware(logger)];
    }

    return [];
  }

  /**
   * Get Base Modules
   * @returns {IModule<any>[]}
   */
  getModules(): IModule<any>[] {
    return [BaseReducerModule()];
  }

  /**
   * Execute
   * @description
   */
  @bind
  execute(): IModuleStore<any> {
    const { getEnhancers, getModules } = this;

    return createStore(
      {
        advancedComposeEnhancers: composeWithDevTools({
          maxAge: 200,
          trace: true
        }),
        enhancers: [...getEnhancers()],
        extensions: [getSagaExtension()]
      },
      ...getModules()
    );
  }

  /**
   * Singleton
   * @description singleton create store instance
   * @returns {IModuleStore<any>}
   */
  public static singleton(): IModuleStore<any> {
    if (!VerifiedIsNotEmpty(ReduxBuilder.store)) {
      ReduxBuilder.store = new ReduxBuilder().execute();
    }

    return ReduxBuilder.store;
  }
}

export default ReduxBuilder;
