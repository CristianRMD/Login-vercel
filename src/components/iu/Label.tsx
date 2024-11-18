interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}

function Label ({children,...props}: Props){

    return(<label htmlFor="email" 
        className="block text-sm/6 font-medium
     text-gray-900"
    {...props}    >
        {children}
      </label>)
}
export default Label