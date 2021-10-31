
import React, {useState} from 'react';

const Search = (props) => {
  const {data} = props

  const [filtered, setFiltered] = useState([data])
  const [query, setQuery] = useState("")

const searchData = (searchInput) =>  {
setQuery(searchInput)
  const filteredData = data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
    setFiltered(filteredData)
}


  return (
    <div className="search_container">
      <div className="search_bar">
      <h3>Search Team by Name</h3>
        <input type='text' onChange={(e) => searchData(e.target.value)}  className="search_bar" placeholder='Enter  Name' />
        </div>
          <div className="content_container">
         {
           query.length > 1 ? (
             filtered.map((item, idx) => {
                return (
                  <div className="user_card" key={idx}>
              {" "}
              <h3 className="user_name">
                {item.name.first} {item.name.last}
              </h3>
            </div>
                )
             })

           ) :(
           data.map((item, idx) => {
          return (
            <div className="user_card" key={idx}>
              {" "}
              <h3 className="user_name">
                {item.name.first} {item.name.last}
              </h3>
            </div>
          );
        }))}
      </div>
      </div>
  )
}

export default Search