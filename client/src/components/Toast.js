import Toast from "react-bootstrap/Toast";

const title = { danger: "Error", success: "Success!" };
const MyToast = ({ closeToast, toastProps }) => {
  return (
    <Toast
      bg={toastProps.data.status}
      className="text-light"
      onClose={closeToast}
    >
      <Toast.Header
        className={`d-flex justify-content-end bg-${toastProps.data.status}`}
      >
        <strong className="me-auto text-light">
          {title[toastProps.data.status]}
        </strong>
      </Toast.Header>
      <Toast.Body>
        <strong>{toastProps.data.msg}</strong>
      </Toast.Body>
    </Toast>
  );
};

export default MyToast;
