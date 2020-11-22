import React from 'react';
import './SingleContactCard.scss';
import PropTypes from 'prop-types';

const singleContactCardView = (props) => {
  return (
    <div className="card single-contact-card container-fluid">
      <div className="row card-body">
        <span className="col-md-4">
          {props.name}
        </span>
        <span className="col-md-4">
          {props.email}
        </span>
        <span className="col-md-4">
          {props.phoneNo}
        </span>
      </div>
    </div>
  )
}

singleContactCardView.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNo: PropTypes.string,
}

singleContactCardView.defaultProps = {
  name: '',
  email: '',
  phoneNo: ''
}

export default singleContactCardView;
