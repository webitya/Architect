// import { HomeOutlined, TeamOutlined, EnvironmentOutlined, SlackSquareOutlined } from "@ant-design/icons";
// import "./Homecards.css";

// const HomeCards = () => {
//   // Array storing the icon, title, and subtitle data
//   const cardData = [
//     {
//       icon: <HomeOutlined className="text-5xl" />,
//       title: "Luxury Homes",
//       subtitle: "Explore our range of premium luxury homes designed for modern living.",
//     },
//     {
//       icon: <SlackSquareOutlined className="text-5xl" />,
//       title: "Commercial Spaces",
//       subtitle: "Innovative commercial spaces tailored to your business needs.",
//     },
//     {
//       icon: <TeamOutlined className="text-5xl" />,
//       title: "Collaborative Design",
//       subtitle: "Our architects work closely with clients to create stunning spaces.",
//     },
//     {
//       icon: <EnvironmentOutlined className="text-5xl" />,
//       title: "Eco-Friendly Architecture",
//       subtitle: "We focus on sustainable building practices for long-term growth.",
//     },
//   ];

//   return (
//     <>
//       <div className="grid md:grid-cols-4 gap-8 p-8 homeCardSection">
//         {cardData.map((card, index) => (
//           <div key={index} className="shadow-xl p-6 singleCard hover:shadow-2xl transition-all duration-300">
//             <div className="cardsIcon bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//               {card.icon}
//             </div>
//             <h4 className="text-xl font-semibold text-gray-800">{card.title}</h4>
//             <p className="text-gray-600 text-center">{card.subtitle}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default HomeCards;
import { HomeOutlined, TeamOutlined, EnvironmentOutlined, SlackSquareOutlined } from "@ant-design/icons";
import "./Homecards.css";

const HomeCards = () => {
  // Array storing the icon, title, and subtitle data
  const cardData = [
    {
      icon: <HomeOutlined className="text-5xl" />,
      title: "Luxury Homes",
      subtitle: "Explore our range of premium luxury homes designed for modern living.",
    },
    {
      icon: <SlackSquareOutlined className="text-5xl" />,
      title: "Commercial Spaces",
      subtitle: "Innovative commercial spaces tailored to your business needs.",
    },
    {
      icon: <TeamOutlined className="text-5xl" />,
      title: "Collaborative Design",
      subtitle: "Our architects work closely with clients to create stunning spaces.",
    },
    {
      icon: <EnvironmentOutlined className="text-5xl" />,
      title: "Eco-Friendly Architecture",
      subtitle: "We focus on sustainable building practices for long-term growth.",
    },
  ];

  return (
    <div className="p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 homeCardSection">
        {cardData.map((card, index) => (
          <div key={index} className="shadow-xl p-6 singleCard hover:shadow-2xl transition-all duration-300">
            <div className="cardsIcon bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
              {card.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-800">{card.title}</h4>
            <p className="text-gray-600 text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
