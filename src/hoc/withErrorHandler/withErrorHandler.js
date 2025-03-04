import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  const WithErrorHandler = (props) => {
    const [error, setError] = useState(null);
    const requestInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
        console.log('WithErrorHandler: ', error);
        return Promise.reject(error);
      }
    );
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);
    return (
      <React.Fragment>
        <Modal show={error !== null} modalClosed={() => setError(null)}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
  return WithErrorHandler;
};
export default withErrorHandler;
