import AntiqueDetails from "../../components/AntiqueDetails/AntiqueDetails"
import NavigationBar from "../../components/NavigationBar/NavigationBar"

const Details = () => {
    return (
        <>
            <NavigationBar nonGalleryView={true} />
            <AntiqueDetails />
        </>
    )
}

export default Details;