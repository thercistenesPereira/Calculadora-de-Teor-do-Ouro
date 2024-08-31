import react_icon from '../../assets/React-Development.png';

function Footer () {
    return (
        <footer className='content_footer'>
            <p>💻</p>
            <a href="https://github.com/thercistenesPereira" className='link_style'>Thercístenes | WebDeveloper</a>
            <img src={react_icon} alt="" className='icon_react'/>
        </footer>
    )
}

export default Footer;
