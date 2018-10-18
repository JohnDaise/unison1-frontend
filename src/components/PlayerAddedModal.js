import React from 'react'
import { Header, Modal, Icon } from 'semantic-ui-react'

const PlayerAddedModal = (props) => (
  <Modal
      open={props.isModalOpen}
      onClose={props.closeWarningModal}
      size={'mini'}
      >
    <Modal.Header>Player Added<Icon name='check circle outline'/></Modal.Header>
  </Modal>
)

export default PlayerAddedModal ;
