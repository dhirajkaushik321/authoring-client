const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm "
type Props ={
  handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
  value:string,
  labelText:string,
  labelFor:string,
  id:string,
  name:string,
  type:string,
  placeholder:string,
  customClass?:string
}

export default function Input({
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  placeholder,
  customClass,
  handleChange,
}:Props){
  console.log("type",type)
    return(
        <div className="!my-5">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
          </div>
    )
}