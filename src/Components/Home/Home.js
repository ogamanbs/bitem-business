import React,{useState, useEffect} from 'react';
import OwnerCard from '../OwnerCard';

const getOwner = async (email) => {
  try {
    const response = await fetch('https://business-server.vercel.app/owner/getOwner', {
    // const response = await fetch('http://localhost:8000/owner/getOwner', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email})
    });
    if(!response.ok) {
      return { message: "Error fetchning owner details" };
    } else {
      const data = await response.json();
      return data;
    }
  } catch(err) {
    return { message: "Error fetchning owner details" };
  }
}

export default function Home({email}) {
  const [owner, setOwner] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const data = await getOwner(email);
      if(data.owner){
        setOwner(data.owner);
        setProducts(data.owner.products);
      }
    }
    callApi();
  }, [setOwner, setProducts, email]);

  return (
    <div className="px-10">
      {owner && products && <OwnerCard owner={owner} products={products} />}
      {(!owner || !products) && <h1 className="">Loading owner details....</h1>}
    </div>
  )
}
