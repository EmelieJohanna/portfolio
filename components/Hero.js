import Avatar from "./Avatar";
import Button from "./Button";

function Hero() {
  return (
    <section className="bg-background text-text items-center py-12">
      <div className="grid md:grid-cols-2 ">
        <div className="flex justify-center place-content-center items-center mb-10 md:mb-0">
          <Avatar />
        </div>
        <div>
          {/* <div xs={12} md={6} xl={7}> */}
          <div className="font-xl ">
            <h1 className="font-bold text-4xl block my-4">
              <span className="block text-accent text-sm my-4">
                Hi, my name is
              </span>{" "}
              Emelie Lundberg.
            </h1>
            <p className="wrap">
              A Curious Fullstack Dev Student With Too Many Hobbies.
            </p>
            <p className="my-4">
              This website was built with React. Visit my <span>Github</span>
              page to see the source code and other projects.
            </p>
            <Button className="" onClick={() => console.log("connect")}>
              Lets connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
