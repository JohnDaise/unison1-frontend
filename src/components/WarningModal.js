import React from 'react'
import { Header, Modal, Icon, Container } from 'semantic-ui-react'

const WarningModal = (props) => (
  <Modal
      open={props.isWarningModalOpen}
      onClose={props.closeWarningModal}
      size={'mini'}
      >
      <Container>
        <h1><Icon name='arrow up'/>Please Select An Event<Icon name='arrow up'/></h1>
      </Container>
  </Modal>
)

export default WarningModal;
