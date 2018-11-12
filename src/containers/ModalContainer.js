import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';



class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      player: null
    };
    // this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    return (
      <div>
        <Modal
          open={this.state.modalIsOpen}
          onClose={this.closeModal}
        >
        //below were examples of props put into modal
        // onAfterOpen={this.afterOpenModal}
        // contentLabel="Example Modal"
        // ariaHideApp={false}
        "Hello"
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  console.log(this.state)
  return {
    loading: state.loading,
    modal: state.modal
  };
})


export default connect(mapStateToProps, null)(ModalContainer)
