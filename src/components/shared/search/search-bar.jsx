import styles from "./search-bar.module.scss";
import { getAllCollections, getAllPaintings } from "@/lib/contentful";
import { useEffect, useState } from "react";
import MagnifyingGlass from "../svg/magnifying-glass";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBar({ setSearchBarView }) {
const [ searchList, setSearchList ] = useState([{}]);
const [ searchMatch, setSearchMatch ] = useState([]);
const {asPath} = useRouter();
console.log(asPath)

  const submitSearch = e => {
    e.preventDefault();
  };

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
      <form className={styles.form} onSubmit={e => submitSearch(e)}>
        <input autoFocus placeholder="Search for a painting or collection" onChange={(e) => handleChange(e)} />
        <button className={styles.button} type="submit">
          <MagnifyingGlass />
        </button>
        {
          searchMatch.length > 0 && (
            <ul className={styles.ul}>
              {
                searchMatch.map(({__typename, name}) => {
                  return (
                    <li className={styles.li} onClick={() => setSearchBarView(false)}>
                      <Link href={__typename === 'Collection' ? `/paintings?collection=${name}` : `/painting/${name}`}>
                      {name}
                      <p>{__typename}</p>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </form> 
    </div>
  );
}

// URL IS DUPLICATING WHEN SEARCHING FOR SOME REASON
