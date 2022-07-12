import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
