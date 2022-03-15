import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Catalog from "../../components/Catalog"
import { loadingCatalogData } from "../../store/actions/catalog"
import { catalogDataSelector } from "../../store/selectors/catalog"

const CatalogPage = () => {
    const dispatch = useDispatch()
    const catalog = useSelector(catalogDataSelector);

    useEffect(() => {
        dispatch(loadingCatalogData())
    }, [])

    return (
        <>
            <Catalog catalog={catalog} />
        </>
    )
}

export default CatalogPage