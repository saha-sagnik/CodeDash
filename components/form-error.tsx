import { FaExclamationTriangle } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

interface FormErrorProps {
  message?: string;
}

interface FormSucessProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if(!message)
        return null;
    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <FaExclamationTriangle
            className="h-4 w-4"/>
            <p>
            {message}
            </p>

        </div>
    )
};

export const FormSucess = ({ message }: FormSucessProps) => {
    if(!message)
        return null;
    return (
        <div className="bg-green-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-black-200">
            <FcApproval
            className="h-4 w-4"/>
            <p>
            {message}
            </p>

        </div>
    )
};
