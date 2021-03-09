import { Form } from 'react-bootstrap';

export const renderField = ({
    fieldType, input, backError, label, loading, meta: { asyncValidating, touched, error }, className, ...rest
}) => {
    const inputName = input.name;
    const isError = (touched && error) || backError;
    const errorMessage = error || backError;

    return (
        <Form.Group controlId={inputName}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder="End date" />

            {isError && (
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
};