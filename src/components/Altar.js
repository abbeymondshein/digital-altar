import React from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf'


const Altar = () => {
    return (
        <div className="altar-wrapper">
            <Shelf />
        </div>
    )
}

const mapStateToProps = (state) => ({
    shelf: state.shelf,
    items: state.items
})

export default connect(mapStateToProps)(Altar)