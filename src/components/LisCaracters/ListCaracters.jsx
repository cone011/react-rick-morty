import { Fragment, useEffect, useRef, useState } from "react";
import { getAllCaracters, getSearchCaracter } from "../../Api/Caracters";
import CardCaracters from "../CardCaracters/CardCaracters";
import SearchBar from "../UI/SearchBar/SearchBar";
import Pagination from "../Paginations/Paginations";
import Spinner from "../UI/Spinner/Spinner";

const ListCaracters = () => {
  const [listCaracters, setListCaracters] = useState([]);
  const [infoPagination, setInfoPagination] = useState({});
  const containerRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getAllCaracters();
      setListCaracters(result.results);
      setInfoPagination(result.info);
      setTimeout(() => {
        setIsLoading(isLoading);
      }, 1000);
    })();
  }, []);

  const onSearchDataCaracters = async (data) => {
    setIsLoading(true);
    const result = await getSearchCaracter(data);
    setListCaracters(result.results);
    setInfoPagination(result.info);
    setTimeout(() => {
      setIsLoading(isLoading);
    }, 1000);
  };

  const onPaginationCall = async (data) => {
    setIsLoading(true);
    let currentCall =
      data === "next" ? infoPagination.next : infoPagination.prev;
    const result = await getAllCaracters(currentCall);
    setListCaracters(result.results);
    setInfoPagination(result.info);
    setTimeout(() => {
      setIsLoading(isLoading);
    }, 1000);
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      {!isLoading && <SearchBar onSearchHandler={onSearchDataCaracters} />}
      {!isLoading && (
        <div
          ref={containerRef}
          className="container grid grid--3-cols margin-bottom-md"
        >
          {listCaracters.map((item) => (
            <CardCaracters key={item.id} caracterData={item} />
          ))}
        </div>
      )}
      {!isLoading && infoPagination.next && (
        <Pagination
          hasNext={!infoPagination.next === false}
          hasPrevios={!infoPagination.prev === false}
          goToNextPage={onPaginationCall}
          goToPrevPage={onPaginationCall}
        />
      )}
    </Fragment>
  );
};

export default ListCaracters;
