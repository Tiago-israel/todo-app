import React from 'react';
import If from '../../directives/If'

export default props => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.css}`} onClick={props.onClick}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)




