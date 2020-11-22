import SingleContactCardView from './singleContactCard/SingleContactCardView';
import PropTypes from 'prop-types';
import './ContactView.scss'

const contactView = (props) => {
  
  const displayContactCard = contacts => (
    contacts.map(contact =>
      <SingleContactCardView
        key={contact.email}
        name={contact.name}
        email={contact.email}
        phoneNo={contact.phoneNo}
      />)
  )
  
  console.log('contacts=', JSON.stringify(props.contacts))
  return(
    <div>
      <div className="contact-header">
        <span className="profile">
          <img src={props.user.image} alt="contact" />
        </span>
        <span className="user-name"> {props.user.name} </span><br></br>
        <span className="user-email"> {props.user.email} </span>
      </div>
      <div>
        <span className="contact">Contacts({props.totalContact})</span>
      </div>
      {displayContactCard(props.contacts)}
    </div>
  );
}

contactView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNo: PropTypes.string
  })),
  totalContact: PropTypes.number,
}

contactView.defaultProps = {
  contacts: [],
  totalContact: 0
}

export default contactView;
