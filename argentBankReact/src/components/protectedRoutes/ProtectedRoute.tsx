import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthentificated } from "../../reducers/auth/authSelector";
import { Navigate, Outlet } from "react-router-dom";



export const ProtectedRoute: React.FC = () => {

const isAuthenticated = useSelector(selectIsAuthentificated);




return isAuthenticated ? < Outlet /> : < Navigate to= "/signIn" /> 





}