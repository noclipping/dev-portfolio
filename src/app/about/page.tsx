"use client";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import meImage from "../assets/me.png"; 
import transparent from '../assets/asdf.png'
const About = () => {
  return (
    <div className="text-white jacquard-12-regular text-left">
      <div className="text-left absolute text-xl">
        <Link href="/">
          {"<< "}Back
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl  text-red-500 text-center">About</h1>
        <div>
          <div className="flex items-center mt-4">
            <div className="w-1/3 flex justify-center">
            <Image
                src={transparent}
                alt="Portrait of me"
                width={160} // Adjust dimensions based on your requirement
                height={160}
                className="object-cover border-l-2 border-b-2 border-red-500  mr-5"
              />
            </div>
            <div className="w-2/3">
              <h1 className="text-2xl">Devon Selvaggi</h1>
              <p className="mt-2 text-sm font-sourceCode">
                This is some text about you. It can include details such as your
                profession, hobbies, and any other personal info you'd like to
                share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
