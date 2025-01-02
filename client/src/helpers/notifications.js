import { toast } from "react-toastify";
import MyToast from "../components/Toast";

export const makeToast = ({ msg, type }) => {
  return toast(<MyToast />, {
    closeButton: false,
    data: { msg, status: type },
  });
};
