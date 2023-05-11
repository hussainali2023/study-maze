import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const BrowseByCategory = () => {

  // const categories = [
  //     {
  //         name: "Agriculture & Forestry",
  //         icon: "https://i.ibb.co/vvVx9LQ/agriculture.png",
  //         alt: "https://i.ibb.co/pwh38N5/agriculture-alt.png"
  //     },
  //     {
  //         name: "Applied Sciences & Professions",
  //         icon: "https://i.ibb.co/MGmj4gg/applied-science.png",
  //         alt: "https://i.ibb.co/zXRsy9G/applied-science-alt.png"
  //     },
  //     {
  //         name: "Arts, Design & Architecture",
  //         icon: "https://i.ibb.co/44T95ZW/art.png",
  //         alt: "https://i.ibb.co/Bjtz6Qd/art-alt.png"
  //     },
  //     {
  //         name: "Business & Management",
  //         icon: "https://i.ibb.co/T26GHBN/business.png",
  //         alt: "https://i.ibb.co/L6NC8r1/business-alt.png"
  //     },
  //     {
  //         name: "Computer Science & IT",
  //         icon: "https://i.ibb.co/x1nK9Qr/command-line.png",
  //         alt: "https://i.ibb.co/Tk7SDX3/command-line-lat.png"
  //     },
  //     {
  //         name: "Education & Training",
  //         icon: "https://i.ibb.co/V2JWPWH/education.png",
  //         alt: "https://i.ibb.co/x2MSQF5/education-alt.png"
  //     },
  //     {
  //         name: "Engineering & Technology",
  //         icon: "https://i.ibb.co/ZzzcW0n/engineering.png",
  //         alt: "https://i.ibb.co/JcCmJzv/engineering-alt.png"
  //     },
  //     {
  //         name: "Environmental Studies & Earth Sciences",
  //         icon: "https://i.ibb.co/VqDY0pg/earth.png",
  //         alt: "https://i.ibb.co/TPLwtk1/earth-alt.png"
  //     },
  //     {
  //         name: "Hospitality, Leisure & Sports",
  //         icon: "https://i.ibb.co/nD3nMF0/sports.png",
  //         alt: "https://i.ibb.co/ZTFyv7t/sports-alt.png"
  //     },
  //     {
  //         name: "Humanities",
  //         icon: "https://i.ibb.co/tm48TFV/humanities.png",
  //         alt: "https://i.ibb.co/q0Mffh2/humanities-alt.png"
  //     },
  //     {
  //         name: "Journalism & Media",
  //         icon: "https://i.ibb.co/VgLBwG2/journalism.png",
  //         alt: "https://i.ibb.co/GVnFD08/journalism-alt.png"
  //     },
  //     {
  //         name: "Law",
  //         icon: "https://i.ibb.co/7QKZnbK/law.png",
  //         alt: "https://i.ibb.co/1JjtsV6/law-alt.png"
  //     },
  //     {
  //         name: "Medicine & Health",
  //         icon: "https://i.ibb.co/nMjTVvV/medicine.png",
  //         alt: "https://i.ibb.co/sKvG2Cw/medicine-alt.png"
  //     },
  //     {
  //         name: "Natural Sciences & Mathematics",
  //         icon: "https://i.ibb.co/zs3kZtJ/science.png",
  //         alt: "https://i.ibb.co/71jffqx/science-alt.png"
  //     },
  //     {
  //         name: "Social Sciences",
  //         icon: "https://i.ibb.co/T4w0GX2/social.png",
  //         alt: "https://i.ibb.co/PmS4VRF/social-alt.png"
  //     },
  // ]

  const [userData, setUserData] = useState()

  useEffect(() => {
    fetch('https://study-maze-server.vercel.app/categories')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(userData)

  return (
    <div className="p-20">
      <h1 className="text-[#05293C] text-5xl font-bold mb-10">Browse by Categories</h1>
      {/* #edf3f6 */}
      <div className="grid grid-cols-5 gap-[2px]">
        {
          (userData as unknown as any)?.map((category: any) => <CategoryCard key={category._id} category={category}></CategoryCard>)

        }
      </div>
    </div>
  );
};

export default BrowseByCategory;