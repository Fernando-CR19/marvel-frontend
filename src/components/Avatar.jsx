import { EditAvatarButton } from "./EditAvatarButton";

export const Avatar = ({ src = "", onChange }) => {

  const url = `${process.env.REACT_APP_API_BASE}${src}`

  return (
    <div className="flex w-56 h-56 rounded-full relative bg-gray-200">
      <div
        style={{
          "--bg-src": `url(${url})`,
        }}
        className="border border-gray-200 w-56 h-56 relative rounded-full bg-[image:var(--bg-src)] bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0"
      />

      <div className=" absolute top-5 right-0">
        <EditAvatarButton onChange={onChange} />
      </div>
    </div>
  );
};
