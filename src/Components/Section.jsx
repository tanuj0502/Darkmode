import React from 'react'
import ProductCard from './ProductCard'
import viteLogo from "/vite.svg";
import carLogo1 from "/229737.jpg"
import carLogo2 from "/02.jpg"
import carLogo3 from "/03.jpg"
import carLogo4 from "/04.jpg"
const Section = () => {
  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap',justifyContent:"space-evenly" }}>
      <ProductCard
        title={"Car Model A"}
        price={"₹20,00,000"}
        category={"Sedan"}
        desc={"A luxurious and comfortable sedan."}
        image={carLogo1}
      />
      <ProductCard
        title={"Car Model B"}
        price={"₹15,00,000"}
        category={"SUV"}
        desc={"A spacious and powerful SUV."}
        image={carLogo2}
      />
      <ProductCard
        title={"Car Model C"}
        price={"₹10,00,000"}
        category={"Hatchback"}
        desc={"A compact and efficient hatchback."}
        image={carLogo3}
      />
      <ProductCard
        title={"Car Model D"}
        price={"₹12,00,000"}
        category={"Convertible"}
        desc={"A stylish and sporty convertible."}
        image={carLogo4}
      />
      <ProductCard
        title={"Car Model A"}
        price={"₹20,00,000"}
        category={"Sedan"}
        desc={"A luxurious and comfortable sedan."}
        image={carLogo1}
      />
      <ProductCard
        title={"Car Model B"}
        price={"₹15,00,000"}
        category={"SUV"}
        desc={"A spacious and powerful SUV."}
        image={carLogo2}
      />
      <ProductCard
        title={"Car Model C"}
        price={"₹10,00,000"}
        category={"Hatchback"}
        desc={"A compact and efficient hatchback."}
        image={carLogo3}
      />
      <ProductCard
        title={"Car Model D"}
        price={"₹12,00,000"}
        category={"Convertible"}
        desc={"A stylish and sporty convertible."}
        image={carLogo4}
      />
    </div>
  )
}

export default Section
