import { forwardRef } from 'react';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, placeholder, error, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label className="text-black">{label}</label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="bg-[#F4F4F4] text-black 2xl:h-[60px] placeholder:text-gray-600 h-[50px] pl-5 w-full rounded-md"
          {...rest}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

export default InputText;
