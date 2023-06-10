import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201!" />
      <div className="container">
        <div className="col-lg-8 offset-lg-5 my-5">
          <p className="lead">
            Аз съм и ад и рай,
            <br />
            Господар съм и съм бог,
            <br />
            Начало съм и съм край,
            <br />
            Демон твой съм и твой съм бог,
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
