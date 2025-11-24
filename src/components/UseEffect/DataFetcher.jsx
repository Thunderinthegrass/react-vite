import React, { useEffect, useState } from 'react'

const DataFetcher = () => {

  let isMounted = true;

  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const counterHandler = () => {
    setCounter(counter => counter + 1);
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const responce = await fetch(
        // "https://jsonplaceholder.typicode.com/posts?_limit=10"
        "http://localhost:3000/users"
      )

      let result = await responce.json();
      result = result.data;
      console.log(result)

      setData(result);
      console.log("Запрос отправлен")
    }
    catch (error) {
      console.log("Ошибка", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {

    if (isMounted) {
      fetchData();
      // counterHandler()
    }
    
    // setCounter(counter + 1)

    return () => {
      isMounted = false;
    }
  }, [counter])

  // fetchData()

  if (isLoading) {
    return <div>Загрузка происходит...</div>
  }
  
  return (
    <div>
      {data.map((item) => (
        // <p key={item.id}>{item.id}. {item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
        <p key={item.id}>{item.id}. {item.name}</p>
      ))}
      <button disabled={isLoading} onClick={() => counterHandler()}>Кнопка</button>
      {counter}
    </div>
  )
}

export default DataFetcher;