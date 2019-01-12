import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton'

export default props => {
    const keyHandler = (event) => {
        const { key, shiftKey } = event;
        if (key === 'Enter') {
            shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (key === 'Escape') {
            props.handleClear();
        }
    }
    return (
        <div role='form' className='todoForm'>
            <div className='row'>
                <Grid cols={[12, 9, 10]}>
                    <input
                        type='text'
                        className='form-control'
                        value={props.description}
                        placeholder='Adicione uma tarefa'
                        onKeyUp={keyHandler}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid cols={[12, 3, 2]}>
                    <IconButton css='primary' hide={false} icon='plus' onClick={props.handleAdd} />
                    <IconButton css='info' hide={false} icon='search' onClick={props.handleSearch} />
                    <IconButton css='default btn-clear' hide={false} icon='close' onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    )
}

