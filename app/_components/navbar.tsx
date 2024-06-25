import Image from "next/image";

function Navbar() {
  return (
    <div className="h-[5rem] w-screen flex">
      <div className="w-56 flex gap-4 justify-center items-center h-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="fill-white"
        />
        <p className="font-medium">MindTasker.</p>
      </div>
    </div>
  );
}

export default Navbar;
