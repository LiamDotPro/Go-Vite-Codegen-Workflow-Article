import {FC} from 'react';
import {useDummyServiceDummyEndpoint} from './lib/client/queries'; // adjust the path to point to your generated API client

const App: FC = () => {
    const {data, isLoading, error} = useDummyServiceDummyEndpoint({id: 123});

    if (isLoading) return 'Loading...';
    if (error) return `An error occurred: ${error}`;

    return <div>Data: {JSON.stringify(data)}</div>;
}

export default App;