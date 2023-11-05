import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Fragment } from 'react';

function App() {
    return (
        <Fragment>
        <Provider store={store}> 
            <Router>
                <Routes>
                    <Route path="/" element={<Profile />} />
                </Routes>
            </Router>
            </Provider>
        </Fragment>
    );
}

export default App;
