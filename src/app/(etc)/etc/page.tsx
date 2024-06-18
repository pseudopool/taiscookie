import RandomFacts from "@/components/etc/random-facts";

const EtcPage = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 4rem)",
      }}
    >
      <RandomFacts />
    </section>
  );
};

export default EtcPage;
