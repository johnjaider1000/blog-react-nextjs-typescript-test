import Swal, { SweetAlertResult } from "sweetalert2";
import { get } from "object-path";
import moment from "moment";

interface ConfirmProps {
  title?: string;
  message?: string;
}
export const confirm = ({
  title = "Confirmar",
  message = "¿Desea continuar con esta operación?",
}: ConfirmProps): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: title,
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  });
};

export const getProp = (object: any, path: string, defaultValue?: any) => {
  if (!object) {
    return;
  }
  return get(object, path, defaultValue);
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const parseDate = (date: moment.MomentInput) => {
  return moment(date).format("ll");
};
