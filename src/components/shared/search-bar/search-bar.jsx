import styles from "./search-bar.module.scss";
import { getAllCollections, getAllPaintings } from "@/lib/contentful";
import { useEffect, useState } from "react";
import MagnifyingGlass from "../svg/magnifying-glass";
import Link from "next/link";

export default function SearchBar({ setSearchBarView }) {
const [ searchList, setSearchList ] = useState([]);
const [ searchMatch, setSearchMatch ] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const searchResult = searchList.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

    if (inputValue === '') {
      setSearchMatch([])
    } else {
      setSearchMatch(searchResult);
    }
  }

  useEffect(() => {
    const fetchAllPaintingsAndCollections = async () => {
      const collectionsResponse = await getAllCollections();
      const paintingsResponse = await getAllPaintings();
      const combineResponsesInArray = [...collectionsResponse, ...paintingsResponse];
      setSearchList(combineResponsesInArray);
    }
    
    fetchAllPaintingsAndCollections();
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.spacing}>
        <input className={styles.input} autoFocus placeholder="Search for a painting or collection" onChange={(e) => handleChange(e)} />
        <div className={styles.magnifyingGlass}>
          <MagnifyingGlass />
        </div>
        {
          searchMatch.length > 0 && (
            <ul className={styles.ul}>
              {
                searchMatch.map(({__typename, name}) => {
                  return (
                    <li className={styles.li} onClick={() => setSearchBarView(false)}>
                      <Link className={styles.link} href={__typename === 'Collection' ? `/paintings?collection=${name}` : `/painting/${name}`}>
                      {name}
                      <p className={styles.typeText}>{__typename}</p>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </div> 
    </div>
  );
}
