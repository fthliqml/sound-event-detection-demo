import Image from "next/image";
import { Github, Instagram } from "lucide-react";

interface TeamMemberProps {
  name: string;
  nim: string;
  role: string;
  image: string;
  description: string;
  github?: string;
  instagram?: string;
}

export default function TeamMember({
  name,
  nim,
  role,
  image,
  description,
  github,
  instagram,
}: TeamMemberProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_#8b5cf6] hover:border-purple-600 transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover mix-blend-overlay opacity-80"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-xl font-bold text-white">{name}</h4>
          <p className="text-xs font-mono px-2 py-1 border-2 border-purple-500 text-purple-300 bg-slate-900 rounded-md shadow-sm">
            {nim}
          </p>
        </div>
        <p className="text-blue-400 text-sm mb-2">{role}</p>
        <p className="text-slate-400 text-sm mb-4">{description}</p>
        <div className="flex space-x-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
              aria-label={`${name}'s GitHub profile`}
            >
              <Github size={18} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
              aria-label={`${name}'s Instagram profile`}
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
