import { useNavigate } from "react-router-dom";
import { NavigateBackWrapper, PaddedArrowBackIcon } from "./NavigateBack.styling";

function NavigateBack({label} : {label: string}) {
    const navigate = useNavigate();

    return (
        <NavigateBackWrapper
        variant='body1'
        onClick={() => 
            navigate(-1)
        }
        >
            <PaddedArrowBackIcon />
            {label}
        </NavigateBackWrapper>
    )
}

export default NavigateBack;