const SelectInput = ({options}) => {
  const hide = ()=>{

return
}


    return (
      <>
        <select name="" id="" className="p-2 rounded-3">
          {options.map((option, index) => (
            <option key={index} value="">
              {option}
            </option>
          ))}
        </select>
      </>
    );
}
export default SelectInput