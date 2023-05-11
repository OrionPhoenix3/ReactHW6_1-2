import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Form from "../component/task1/custom/Form";
import FormikForm from "../component/task1/formik/FormikForm";
import ReactHookForm from "../component/task1/reactHookForm/ReactHookForm";
import Redux from "../component/task2/Redux";
import Header from "./Header";

export default class RouterApp extends Component {
    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="*" element={<Form/>}/>
                    <Route path="/custom" element={<Form/>}/>
                    <Route path="/formik" element={<FormikForm/>}/>
                    <Route path="/react-hook" element={<ReactHookForm/>}/>
                    <Route path="/redux" element={<Redux/>}/>
                </Routes>
            </>
        )
    }
}