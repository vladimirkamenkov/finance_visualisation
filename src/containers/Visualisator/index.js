import React from 'react';
import { Container } from 'react-bootstrap';

import FormFilter from '../../components/FormFilter';
import Charts from '../../components/Chart';

export const Visualisator = () => {
    return (
        <div className="main">
            <Container>
                <FormFilter />
                <Charts />
            </Container>
        </div>
    )
};