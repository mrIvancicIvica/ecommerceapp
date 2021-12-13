import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContetxtProvider from "./context/CartContext";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <CartContetxtProvider>
      <App />
    </CartContetxtProvider>
  </QueryClientProvider>,

  document.getElementById("root")
);
