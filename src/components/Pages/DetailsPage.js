import { useLocation, useNavigate } from "react-router-dom";
function DetailsPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }
    return <div>
        {state.item.name.common}
        <button onClick={handleBack}>Go back</button>
    </div>
}
export default DetailsPage;