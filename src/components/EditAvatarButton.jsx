import PencilIcon from "@heroicons/react/24/solid/PencilIcon";

export const EditAvatarButton = ({ onChange, disabled = false }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden  relative cursor-pointer">
      <div className="flex items-center p-2">
        <PencilIcon className="w-4 h-4 mr-1" />
        <span className="text-sm">Edit</span>
      </div>
      <input
        type="file"
        multiple={false}
        disabled={disabled}
        onChange={onChange}
        className="opacity-0 w-full h-full absolute top-0 left-0 file:h-full file:w-full file:cursor-pointer"
      />
    </div>
  );
};
