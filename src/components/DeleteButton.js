import React from "react";

import { connect } from "react-redux";

import { Modal, Button } from 'semantic-ui-react'


const DeleteButton = (props) => (
  <Modal
    trigger={<Button circular icon={'minus'}></Button>}
    header='Delete'
    content="Are you sure you would like to delete this event?"
    actions={['No', { key: 'yes', content: 'Yes', positive: true }]}
  />
)
const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(DeleteButton);

//
// <Modal trigger={<Button circular size='mini' icon='minus'/>}>
//     <Modal.Header>
//
//     </Modal.Header>
//     <div className='ui two buttons'>
//         <Button basic color='green'>
//           YES
//         </Button>
//         <Button basic color='red'>
//           NO
//         </Button>
//       </div>
// </Modal>
