
import ReactDOM from "react-dom";
function Footer() {
    return ReactDOM.createPortal(<footer>
        <p className="text-sm">Challenge by Frontend Mentor. Coded by <a href="https://github.com/SirotkinaAnna">Anna Sirotkina</a>.</p>
    </footer>, document.body)
}
export default Footer;