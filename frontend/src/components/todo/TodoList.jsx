import React from 'react'
import IconButton from '../template/IconButton'
import Todo from './Todo';

export default props => {
    const list = props.list || [];
    return (
        <div className='table-responsive'>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows(props, list)}
                </tbody>
            </table>
        </div>
    )
}

const renderRows = (props, list) => (
    list.map((row, key) => (
        <tr key={key}>
            <td className={row.done ? 'markedAsDone' : ''}>{row.description}</td>
            <td>
                <IconButton css='success' icon='check' hide={row.done} onClick={() => props.handleMarkAsDone(row)} />
                <IconButton css='warning color-white' icon='undo' hide={!row.done} onClick={() => props.handleMarkAsPending(row)} />
                <IconButton css='danger' icon='trash-o' hide={!row.done} onClick={() => props.handleRemove(row)} />
            </td>
        </tr>
    ))
)