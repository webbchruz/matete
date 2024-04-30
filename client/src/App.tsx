import { sampleProducts } from "./data"
import './App.css'

function App() {
  

  return (
    <div>
      <header>Ts matete</header>
      <main>
        <ul>
        {
          sampleProducts.map((product) =>
          <li>
            <img src={product.image} alt={product.name} className="product-image"/>
            <h2>{product.name}</h2>
          </li>)
        }
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  )
}

export default App
