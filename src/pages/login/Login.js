import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpeg';
import './Login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from './Login.validate';
import { useStore } from '../../hooks/Session-Storage.hook';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useStore('data', null);

    const handleSubmit = (values, {setSubmitting}) => {
        console.log('Username:', values.username);
        console.log('Password:', values.password);

        this.setData(values);
        setSubmitting(false);
    };

    return (
        <div className='container-login'>
            <div className='container-form'>
                <h1 className='text-center'>Bienvenido</h1>
                <div className='text-center'>
                    <img src={logo} alt="DrClin Logo" className='logo' />
                </div>

                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting, isValid, dirty}) => (
                        <Form className='form'>
                            <div>
                                <Field className="form-control" type="text" name="username" placeholder="Username" />
                                <ErrorMessage className="form-control error-text" name="username" component="div" />
                            </div>
                            <div>
                                <Field className="form-control" type="password" name="password" placeholder="Password" />
                                <ErrorMessage className="form-control error-text" name="password" component="div" />
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting ||isLoading || !isValid || !dirty}
                                    className='btn'
                                >Iniciar</button>
                            </div>
                        </Form>
                    )}
                    
                </Formik>
            </div>
            
        </div>
    );
};

export default Login;