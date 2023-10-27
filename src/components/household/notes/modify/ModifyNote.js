import { useNavigate } from "react-router-dom";

export default function ModifyNote(props) {
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate('/AddNotePage');
    };

    return(
    <>
        <button 
            className="text-hh hover:text-hh font-semibold"
            onClick={handleClick}
            >
            Ändra
        </button>
    </>
    )  
}