import React from 'react'
import { Header, Modal, Icon } from 'semantic-ui-react'

const WarningModal = (props) => (
  <Modal
      open={props.isWarningModalOpen}
      onClose={props.closeWarningModal}
      size={'mini'}
      >
    <Modal.Header><Icon name='arrow up'/>Please Select An Event<Icon name='arrow up'/></Modal.Header>
  </Modal>
)

export default WarningModal;
