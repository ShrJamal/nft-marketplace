import { FaGithub, FaTwitterSquare } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <div className="flex justify-center mt-4 md:mt-0">
      <a
        className="btn btn-square bg-white hover:bg-white mx-1"
        href="https://github.com/weweb3"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="h-full w-full text-blue-800" />
      </a>

      <a
        className="btn btn-square bg-white hover:bg-white mx-1"
        href="https://twitter.com/shrjamal"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare className="h-full w-full text-blue-800" />
      </a>
    </div>
  )
}
