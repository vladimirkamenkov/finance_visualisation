import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';

import { renderField } from '../../helpers/render';

const FORM_NAME = 'editFilterExpenses';

const validate = values => {
    const errors = {};

    if (!values.start) {
        errors.start = 'Поле обязательно для заполнения.';
    }
    if (!values.end) {
        errors.end = 'Поле обязательно для заполнения.';
    }

    // if (values.repeatNewPassword && values.repeatNewPassword !== values.newPassword) {
    //     errors.repeatNewPassword = 'Пароли не совпадают!';
    // }
    return errors;
};

const FilterForm = ({ handleSubmit, submitting, errors }) => {
    const onSubmit = values => {
        console.log(values);
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
                <Col>
                    <Field
                        type="datepicker"
                        name="start"
                        label="Start date"
                        backError={errors.start}
                        component={renderField}
                    />
                </Col>
                <Col>
                    <Field
                        type="datepicker"
                        name="end"
                        label="End date"
                        backError={errors.end}
                        component={renderField}
                    />
                </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Start date" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="End date" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Visualise It!
            </Button>
        </Form>
    )
}

export default compose(
    connect(null, {  }),
    reduxForm({
        form: FORM_NAME,
        enableReinitialize: true,
        validate
    })
)(FilterForm);