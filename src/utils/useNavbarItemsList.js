import SushiProduct from "@/assets/img/icons/familymart.svg";
import Domino from "@/assets/img/icons/dominos.svg";
import Walmart from "@/assets/img/icons/walmart.svg";

const useNavbarItemsList = () => {
  const navbarItemsList = [
    {
      path: "/pizzas",
      Icon: Domino,
      text: "Dominos",
    },
    {
      path: "/sushi",
      Icon: SushiProduct,
      text: "Family Mart",
    },
    {
      path: "/drinks",
      Icon: Walmart,
      text: "Walmart",
    },
  ];

  return navbarItemsList;
};

export { useNavbarItemsList };
