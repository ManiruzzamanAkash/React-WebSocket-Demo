import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { checkLoginAction } from '../../redux/actions/AuthAction';
import { Spinner } from 'react-bootstrap';
import Layout from '../Layout';
import { toast } from 'react-toastify';


export default function Login({ setToken }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const access_token = useSelector((state) => state.auth.access_token);
    const userData = useSelector((state) => state.auth.userData);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        dispatch(checkLoginAction(data));
    }

    useEffect(() => {
        if (loggedIn && access_token.length > 0) {
            setToken(access_token);
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [loggedIn, access_token]);

    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card card-body p-3">
                        <h3 className="text-center pb-3 pt-3">Login Now</h3>
                        <div className="text-right mt-1">
                            <button className="btn btn-info btn-sm mb-2" onClick={() => {
                                setEmail('admin@test.com');
                                setPassword('12345678');
                            }}>
                                Fill With Dummy Login
                                </button>

                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mt-2">
                                {
                                    isLoading ?
                                        <button type="button" disabled className="btn btn-primary btn-block">
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            {' '} Logging in...
                                        </button> :
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Login
                                        </button>
                                }

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}