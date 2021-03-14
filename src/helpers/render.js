import { Form } from 'react-bootstrap';

export const renderField = ({
    fieldType, input, backError, label, loading, meta: { asyncValidating, touched, error, warning }, className, ...rest
}) => {
    const inputName = input.name;
    const isError = touched && (error || warning);

    return (
        <Form.Group controlId={inputName}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="date" placeholder={label} {...input} />

            {isError && (
                <Form.Control.Feedback type="invalid">
                    {isError}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
};