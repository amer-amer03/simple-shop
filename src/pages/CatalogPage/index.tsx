import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog";
import { loadingCatalogData } from "../../store/actions/catalog";
import { catalogDataSelector } from "../../store/selectors/catalog";

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const catalog = useSelector(catalogDataSelector);

  useEffect(() => {
    dispatch(loadingCatalogData());
  }, [dispatch]);

  return <Catalog catalog={catalog} />;
};

export default CatalogPage;
