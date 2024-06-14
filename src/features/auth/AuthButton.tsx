import { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type?: any;
    disabled?: boolean
  }
  

function AuthButton({ onClick, children, type, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="btn-green btn bg-colorPrimary py-4 rounded-[10px] text-white font-semibold"
    >
    {children}
    </button>
  );
}

export default AuthButton;
