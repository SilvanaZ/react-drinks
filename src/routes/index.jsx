import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProtectedRoute } from "./ProtectedRoute";
import SignUp from "../pages/user/SignUp";
import SignIn from "../pages/user/SignIn";


export default function AppRoutes () {
    return (
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute/>}>
                    <Route path="/" element={<Home />} />
                    
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
    )
}