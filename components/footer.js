import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from "./_child/newsletter";

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
          <Link href={"/"}>
              <ImFacebook className="text-blue-500" />
            </Link>
            <Link href={"/"}>
              <ImTwitter className="text-blue-500" />
            </Link>
            <Link href={"/"}>
              <ImYoutube className="text-red-500" />
            </Link>
          </div>

          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved | This website & blogs owned by
            Edu-Blogs.
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
