import { Modal } from 'react-bootstrap';

import { Carta } from '../../components';

export default function SiraModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Carta />
    </Modal>
  );
}
