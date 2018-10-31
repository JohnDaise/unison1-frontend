import React from 'react'
import { Modal, Icon } from 'semantic-ui-react'

const PlayerAddedModal = (props) => (
  <Modal
      open={props.isPlayerAddedModalOpen}
      onClose={props.closePlayerAddedModal}
      size={'mini'}
      >
    <Modal.Header>Player Added<Icon name='check circle outline'/></Modal.Header>
  </Modal>
)

export default PlayerAddedModal ;
