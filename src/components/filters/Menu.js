function Menu(props){
    const { labelName, data, onChange, ...rest } = props;
    return(
        <div>
            <span>{labelName}</span>
            <select onChange={onChange} {...rest}>
                <option>Choose {labelName}</option>
                {data.map((item) => <option key={item.key}>{item.value}</option>)}
            </select>
        </div>
    )
}

export default Menu;