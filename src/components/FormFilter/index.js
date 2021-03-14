import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';

import { renderField } from '../../helpers/render';
import { getExpenses } from '../../actions/expenses';

const FORM_NAME = 'editFilterExpenses';

const validate = values => {
    const errors = {};

    if (!values.start) {
        errors.start = 'Поле обязательно для заполнения.';
    }
    if (!values.end) {
        errors.end = 'Поле обязательно для заполнения.';
    }

    return errors;
};

const FilterForm = ({ handleSubmit, submitting, getExpenses }) => {
    const onSubmit = values => {
        getExpenses(values);
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
                <Col>
                    <Field
                        type="datepicker"
                        name="start"
                        label="Start date"
                        component={renderField}
                    />
                </Col>
                <Col>
                    <Field
                        type="datepicker"
                        name="end"
                        label="End date"
                        component={renderField}
                    />
                </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={submitting}>
                Visualise It!
            </Button>
        </Form>
    )
}

export default compose(
    connect(null, { getExpenses }),
    reduxForm({
        form: FORM_NAME,
        enableReinitialize: true,
        validate
    })
)(FilterForm);