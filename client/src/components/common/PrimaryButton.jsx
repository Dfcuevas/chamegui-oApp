/* eslint-disable react/prop-types */
const PrimaryButton = ({ data, openModal }) => {
  return (
    <button
      onClick={openModal}
      className="rounded-lg bg-indigo500 py-2 font-OpenSans text-md font-bold sm:col-start-1 sm:col-span-1 sm:row-span-1"
    >
      {data}
    </button>
  );
};

export default PrimaryButton;
