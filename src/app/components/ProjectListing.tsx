"use client"
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

interface ProjectListing {
    title: string;
  }

const ProjectListing: React.FC<ProjectListing> = ({ title }) => {
    return(
        <li className="hover:text-red-500 hover:underline hover:cursor-pointer"><FaAngleDoubleRight className="inline" /> <span>{title}</span> <FaUserFriends className="inline"/>  423
</li>

    )
}

export default ProjectListing