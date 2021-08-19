function SearchBar(props){
    const { labelName, onChange, ...rest } = props;
    return(
        <div>
            <span>{labelName}</span>
            <input
                onChange={onChange}
                {...rest}
            />
        </div>
    );
}

export default SearchBar;