import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Profile from './pages/Profile';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Homepage from './pages/Homepage';

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </Router>
            </Provider>
        </Fragment>
    );
}

export default App;
