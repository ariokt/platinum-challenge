import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const RegisterError = ({message, setError}) => {
    return (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
            {message}
        </Alert>
      );
}    

export default RegisterError