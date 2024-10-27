import PropTypes from "prop-types";

const SinglePlayers = ({ singleMan, handleDeletePlayer }) => {
    console.log(singleMan)
    const { name, image, role, id } = singleMan;
    return (
        <div className="flex justify-between items-center p-4 rounded-xl border">
            <div className="flex gap-6 items-center">
                <div className="w-16 h-16">
                    <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-400">{role}</p>
                </div>
            </div>
            <button className="p-4 btn" onClick={() => handleDeletePlayer(id)}>Delete</button>
        </div>
    );
};
SinglePlayers.propTypes = {
    handleDeletePlayer: PropTypes.func.isRequired,
    singleMan: PropTypes.object.isRequired,
}
export default SinglePlayers;