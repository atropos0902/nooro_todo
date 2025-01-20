import Image from "next/image";

const Header: React.FC =  () => {
  return (
    <div className="grid items-center justify-items-center w-full h-200 bg-header fixed">
      <Image
        src="/img/Logo.png"
        alt="TodoApp Logo"
        width={226}
        height={48}
      ></Image>
    </div>
  );
}

export default Header;
