import { Provider } from 'react-redux';
import store from '../src/store/store';
import { MemoryRouter } from 'react-router-dom';

const TestWrapper = ({ children }: any) => {
    return (
        <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>
    )
}

export default TestWrapper