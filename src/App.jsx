import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import NavComponent from "./components/Nav";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import BlogsPage from "./pages/BlogsPage";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      {/* /login => loginPage.jsx */}
      {/* /signup => signupPage.jsx */}

      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<Authentication />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/blog/" element={<BlogsPage />}>
            <Route path="first" element={<p>first blog</p>} />
            <Route path="second" element={<p>second blog</p>} />
          </Route>

          <Route path="*" element={<h1>404 | page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
