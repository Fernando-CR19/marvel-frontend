export const CharacterHeadline = ({ name, description, thumbnail = {} }) => {
  const img = `${thumbnail.path}.${thumbnail.extension}`;

  console.log(img);

  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="rounded-full w-64 h-64 mb-4 grayscale hover:grayscale-0"
      />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="max-w-xl">{description}</p>
    </div>
  );
};
