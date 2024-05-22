"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [input, setInput] = useState("");
  const [{result, duration}, set] = useState({result: [""], duration: 0} );

useEffect(()=>{
const fetchData = async () => {
  if (!input) return;

  try{
  const response = await fetch(`/api/search?q=${input}`);
  const json = await response.json();

  set(json);
  } catch (error) {
    console.error("Error fetching data", error);
  

  }

}

fetchData();

},[input]);

  return (
<div>
  <input value={input}  onChange={(e)=>setInput(e.target.value)} type="text"></input>
</div>
  );
}
