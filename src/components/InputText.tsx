

interface InputProps{
    label: string
    type: string
    placeholder: string;
}

function InputText({label, type, placeholder,}:InputProps) {
  return (
    <div className="w-full">
        <label className="text-black">{label}</label>
      <input
        type={type ? type : 'text'}
        placeholder={placeholder}
        className="bg-[#F4F4F4] text-black 2xl:h-[60px] placeholder:text-gray-600 h-[50px] pl-5 w-full rounded-md"
      />
    </div>
  );
}

export default InputText;
