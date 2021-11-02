import React from 'react';

const Table: React.FC = () => {

    return (
        <table className="o-table">
            <tr className="o-table__row">
                <th className="o-table__title" colSpan={1}>Name</th>
                <th className="o-table__title" colSpan={1}>webpages</th>
                <th className="o-table__title" colSpan={2}>country</th>
            </tr>
        </table>
    )
}

export default Table