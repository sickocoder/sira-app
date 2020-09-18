import { Modal } from 'react-bootstrap';

import { Carta } from '../../components';

export default function SiraModal({ form = null, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {form}
    </Modal>
  );
}
