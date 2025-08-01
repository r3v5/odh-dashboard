import * as React from 'react';
import { UserSettings, ConfigSettings } from 'mod-arch-shared';
type AppContextProps = {
    config: ConfigSettings;
    user: UserSettings;
};
export declare const AppContext: React.Context<AppContextProps>;
export declare const useAppContext: () => AppContextProps;
export {};
