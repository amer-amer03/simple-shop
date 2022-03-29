import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IOption } from "../../interfaces/options";
import { IProps } from "../../interfaces/props";
import BaseButton from "../BaseButton";
import BaseSelect from "../BaseSelect";
import BaseSwitch from "../BaseSwitch";
import CatalogContent from "../CatalogContent";
import styles from "./index.module.scss";

interface Props extends IProps {
  catalog: ICatalogDataResults[];
}

let catalogArray: ICatalogDataResults[] = [];

const itemsPerPage = 20;

const Catalog: FC<Props> = ({ catalog }): JSX.Element => {
  const { t } = useTranslation();
  const [itemsToShow, setItemsToShow] = useState<ICatalogDataResults[]>([]);
  const [next, setNext] = useState<number>(itemsPerPage);
  const [sortOrder, setSortOrder] = useState<string>("priceAsc");
  const [orderedCatalog, setOrderedCatalog] = useState<ICatalogDataResults[]>(
    []
  );
  const [checkedSwitch, setCheckedSwitch] = useState<boolean>(false);
  const loopWithSlice = useCallback(
    (start: number, end: number) => {
      const slicedCatalog = orderedCatalog.slice(start, end);
      catalogArray = [...catalogArray, ...slicedCatalog];
      setItemsToShow(catalogArray);
    },
    [orderedCatalog]
  );

  const sortByOptions: IOption[] = [
    {
      value: "priceAsc",
      label: t<string>("catalog.sortBy.priceAsc"),
    },
    {
      value: "priceDes",
      label: t<string>("catalog.sortBy.priceDes"),
    },
    {
      value: "ratingAsc",
      label: t<string>("catalog.sortBy.ratingAsc"),
    },
    {
      value: "ratingDes",
      label: t<string>("catalog.sortBy.ratingDes"),
    },
  ];

  useEffect(() => {
    loopWithSlice(0, itemsPerPage);
  }, [orderedCatalog, loopWithSlice]);

  useEffect(() => {
    catalogArray = [];
    if (sortOrder === "priceAsc") {
      const orderedCatalog = catalog.sort((a, b) => a.priceSale - b.priceSale);
      setOrderedCatalog(orderedCatalog);
    }
    if (sortOrder === "priceDes") {
      const orderedCatalog = catalog.sort((a, b) => b.priceSale - a.priceSale);
      setOrderedCatalog(orderedCatalog);
    }
    if (sortOrder === "ratingAsc") {
      const orderedCatalog = catalog.sort((a, b) => a.rating - b.rating);
      setOrderedCatalog(orderedCatalog);
    }
    if (sortOrder === "ratingDes") {
      const orderedCatalog = catalog.sort((a, b) => b.rating - a.price);
      setOrderedCatalog(orderedCatalog);
    }
    loopWithSlice(0, itemsPerPage);
  }, [sortOrder, catalog, loopWithSlice]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + itemsPerPage);
    setNext(next + itemsPerPage);
  };

  const handleChange = (e: FormEvent<HTMLSelectElement>) => {
    let value = e.currentTarget.value;
    setSortOrder(value);
  };
  const handleViewSwitch = () => {
    setCheckedSwitch(!checkedSwitch);
  };

  const catalogContent = itemsToShow.map((item) => {
    return (
      <CatalogContent key={item.id} item={item} checkedSwitch={checkedSwitch} />
    );
  });
  return (
    <div className={styles.root}>
      <div className={styles.switches}>
        <BaseSelect options={sortByOptions} onChange={handleChange} />
        <div className={styles.toggle}>
          <BaseSwitch
            label={t<string>("catalog.toggleView")}
            checked={checkedSwitch}
            onChange={handleViewSwitch}
          />
        </div>
      </div>
      <div className={styles.catalog}>{catalogContent}</div>

      {itemsToShow.length + itemsPerPage <= catalog.length && (
        <BaseButton
          className={styles.loadMoreButton}
          onClick={handleShowMorePosts}
          type="button"
          value={t<string>("catalog.loadMore")}
        />
      )}
    </div>
  );
};

export default Catalog;
