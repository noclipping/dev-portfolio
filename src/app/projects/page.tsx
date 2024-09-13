// app/projects/page.tsx
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProjectListing from '../components/ProjectListing'
export default function Projects() {
    return (
      <div className="text-white jacquard-12-regular text-left">
        <div className="text-left absolute text-xl"> 
        <Link href="/">
            {'<< '}Back
        </Link>
            </div>
        <h1 className="text-4xl mb-4 text-red-500 pt-8  text-center">Projects</h1>
        <div className="text-xl">
            <ul className="font-mono">
                <ProjectListing title="Instaclone"/>
                <ProjectListing title="TNW Clone"/>
                <ProjectListing title="Nebula Academy"/>
            </ul>
        </div>
      </div>
    );
  }
  