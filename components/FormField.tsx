
type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  setState: (value: string) => void;
  isTextArea?: boolean;
}

const FormField = ({ type, title, state, placeholder, setState, isTextArea }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>

      {isTextArea ? (
        <textarea 
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
        ): (
        <input 
          type={type || 'text'}
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
      
    </div>
  )
}

export default FormField