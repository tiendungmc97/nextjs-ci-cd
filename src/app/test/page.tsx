import Image from "next/image";

function Test() {
  return (
    <div>
      Test success
      <Image src="/test.svg" alt="test" height={10} width={10} />
    </div>
  );
}

export default Test;
