import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="Container">
        <div className="bg-black py-3 flex items-center justify-between flex-wrap">
          <div>
            <p className="font-Brandon text-DarkText-0">
              &copy; Black Tomato {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-[30px]">
              <li>
                <Link
                  href={"/"}
                  className="font-Brandon text-DarkText-0 transition-all duration-500 hover:underline"
                >
                  Epic Tomato
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-Brandon text-DarkText-0 transition-all duration-500 hover:underline"
                >
                  SØster Agency{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-Brandon text-DarkText-0 transition-all duration-500 hover:underline"
                >
                  Black Tomato US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
