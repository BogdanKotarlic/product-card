import { ProductCard } from "./components/ProductCard";
import orangeImg from "./assets/shirts/orange.jpg";
import orangeSecondaryImg from "./assets/shirts/orange-secondary.jpg";
import greenImg from "./assets/shirts/green.jpg";
import greenSecondaryImg from "./assets/shirts/green-secondary.jpg";
import blueImg from "./assets/shirts/blue.jpg";
import blueSecondaryImg from "./assets/shirts/blue-secondary.jpg";
import yellowImg from "./assets/shirts/yellow.jpg";
import yellowSecondaryImg from "./assets/shirts/yellow-secondary.jpg";
import pinkImg from "./assets/shirts/pink.jpg";
import pinkSecondaryImg from "./assets/shirts/pink-secondary.jpg";
import navyImg from "./assets/shirts/navy.jpg";
import navySecondaryImg from "./assets/shirts/navy-secondary.jpg";

const mockProduct = {
  brand: "Good Brand Company",
  title: "Plain T-shirt",
  originalPrice: 29.5,
  salePrice: 20.0,
  variants: [
    {
      color: "orange",
      hex: "#FF6633",
      image: orangeImg,
      secondaryImage: orangeSecondaryImg,
    },
    {
      color: "green",
      hex: "#006600",
      image: greenImg,
      secondaryImage: greenSecondaryImg,
    },
    {
      color: "blue",
      hex: "#00639C",
      image: blueImg,
      secondaryImage: blueSecondaryImg,
    },
    {
      color: "yellow",
      hex: "#FCE78D",
      image: yellowImg,
      secondaryImage: yellowSecondaryImg,
    },
    {
      color: "pink",
      hex: "#FFCCFF",
      image: pinkImg,
      secondaryImage: pinkSecondaryImg,
    },
    {
      color: "navy",
      hex: "#19264B",
      image: navyImg,
      secondaryImage: navySecondaryImg,
    },
  ],
};

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-8">
      <ProductCard product={mockProduct} />
    </div>
  );
}

export default App;
