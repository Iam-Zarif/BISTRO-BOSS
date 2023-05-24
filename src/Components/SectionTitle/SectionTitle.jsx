/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className="text-center">
        <p>---{subHeading}---</p>
        <hr className="w-1/4 mx-auto my-4  bg-slate-100" />
        <p className="text-3xl font-bold">{heading}</p>
        <hr className="w-1/4 mx-auto my-4  bg-slate-100" />
      </div>
    );
};

export default SectionTitle;