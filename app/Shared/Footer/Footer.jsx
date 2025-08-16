import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="Container">
          <div className="py-3 flex items-center justify-between flex-wrap">
            <div>
              <p className="font-Brandon text-DarkText-0 uppercase text-xs font-medium">
                &copy; Black Tomato {new Date().getFullYear()}
              </p>
            </div>
            <div>
              <ul className="flex items-center gap-[30px]">
                <li>
                  <Link
                    href={"/"}
                    className="font-Brandon text-DarkText-0 transition-all duration-500 uppercase text-xs font-medium hover:underline"
                  >
                    Epic Tomato
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-Brandon text-DarkText-0 transition-all duration-500 uppercase text-xs font-medium hover:underline"
                  >
                    SØster Agency
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-Brandon text-DarkText-0 transition-all duration-500 uppercase text-xs font-medium hover:underline"
                  >
                    Black Tomato US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
