export const Headline = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          className="w-32 h-32"
        />
      </div>
      <h2 className="text-2xl font-semibold">{name}</h2>
    </div>
  );
};
