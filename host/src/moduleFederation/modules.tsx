import React, {Suspense, useEffect, useRef} from "react";
import {ErrorBoundary} from "./ErrorBoundary";

const RemoteApp = React.lazy(async () => await import('app/App')); // указываем тот путь который задеклалировали

const RemoteFactory = (JSX:JSX.Element):JSX.Element => (
    <ErrorBoundary>
        <Suspense fallback={'Load'}>{JSX}</Suspense>
    </ErrorBoundary>
)

export const RemoteAppWithErrorBoundary = (props:any) => RemoteFactory(<RemoteApp {...props}/>)
