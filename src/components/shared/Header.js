function Header(props){
    const {title, filter, buttonBar} = props;
    return(
        <div className='row content-header'>
            <div className='col-2 title'>
                {title}
            </div>
            
            <div className='col-6 filter'>
                {filter}
            </div>

            <div className='col-2'>
                {buttonBar}
            </div>
        </div>
    );
}

export default Header;