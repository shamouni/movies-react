import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SinglePost from './components/SinglePost';

import './Shared/assets/scss/main.scss';
import './Shared/assets/scss/slider.scss';
import './Shared/assets/css/font-awesome.css';
import 'react-loading-skeleton/dist/skeleton.css';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/category" element={<Home />} exact />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
