import React from 'react';
import { connect } from 'react-redux';


const Altar = () => {
    return (
        <div className="altar-wrapper">

        </div>
    )
}

const mapStateToProps = (state) => ({
    shelf: state.shelf,
})

export default connect(mapStateToProps)(Altar)