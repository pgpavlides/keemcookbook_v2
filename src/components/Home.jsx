import "./Home.css";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <>
      <div className="max-w-full">
        <div className="animate-zoomin2 px-78 pt-10 max-w-full text-xl text-center font-semibold leading-normal text-gray-900 dark:text-white xl:px-8 xl:text-2xl ">
          Καλώς Ήρθατε στην web έκδοση του Βιλίου Μαγειρικής του ΚΕΕΜ 3ου
          Τάγματος.
        </div>
        <a href="/recipes">
          <img
            className="animate-zoomin2 mx-auto h-13 pt-5 xl:h-13 xl:pt-20"
            src="/Book_Front.png"
            alt=""
          />
        </a>
        <div className="animate-zoomin2 absolute bottom-3 left-7 right-0 space-x-2 xl:right-auto  ">
          <a href="" className="">
            Created by Broccoli 🥦
          </a>
          <SocialIcon url="https://www.linkedin.com/in/pgpavlides/" />
          <SocialIcon url="https://github.com/pgpavlides" />
          <SocialIcon url="https://discord.gg/XaKwWNPvrt" />
        </div>
      </div>
    </>
  );
}
