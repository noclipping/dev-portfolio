"use client"

import { FaFolderOpen } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
  <div className="text-white border-solid jacquard-12-regular whitespace-nowrap max-w-full text-4xl" >
    Devon Selvaggi
    <p className="text-red-600">
    Software Engineer
    </p>
    <p className="text-white">
    Pennsylvania
    </p>
    <div className="text-lg md:text-2xl pt-4 max-w-full text-nowrap">
    <ul className="links">
          <li>
            <Link href="/projects">
              <FaFolderOpen className="inline" /> Projects
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="inline" /> LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="inline" /> Github
            </Link>
          </li>
          <li>
            <Link href="/about">
              <FaQuestionCircle className="inline" /> About
            </Link>
          </li>
        </ul>
    </div>

  </div>
  );
}
