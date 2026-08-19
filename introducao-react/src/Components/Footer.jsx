const Footer = (props) =>{

    const footerStyle = {
        background: '#BEBEBE',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #696969' 
    }

    return (
        <footer style={footerStyle}>
            <p>{props.title}</p>
        </footer>
        
    )
}

export default Footer;