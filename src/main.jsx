import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from './context/productContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>,
)
