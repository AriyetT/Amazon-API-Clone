import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment/Payment";
import Auth from "./pages/Auth/Auth";
import Orders from "./pages/Orders/Orders";
import Landing from "./pages/Landing/Landing";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51OjVr7AqRkdmXrioEAL4peAQ54wUCZBpfh8Ptk1MCkJwN7ItsCkyLgLwAUUIL373Mf6YMNjLT94ptStjOq7oQSdf00LGzI2MTy"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log-in to pay first"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log-in first to access your orders "}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
