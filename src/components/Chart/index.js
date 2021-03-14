import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Charts = ({ expenses }) => {
    return expenses.list.length !== 0 ? (
        <div id="chart">
            <ResponsiveContainer width="100%" minWidth={600} height={600}>
                <BarChart data={expenses.list} layout="vertical">
                    <YAxis dataKey="category" type="category" width={160} />
                    <XAxis type="number" />
                    <Bar dataKey="amount" fill="#8884d8"> 
                        <LabelList dataKey="amount" position="right" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>  
    ) : (<h2 id="notfound">Expenses not found</h2>)
}

export default compose(
    connect(({ expenses }) => ({ expenses }), { })
)(Charts);