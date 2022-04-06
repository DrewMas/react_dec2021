export default function Launch({launch}) {
    let {mission_name, launch_year, links:{mission_patch_small}} = launch;

    return (
        <div className={`launch`}>
            <h3>{mission_name}</h3>
            <p>Launch year - {launch_year}</p>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
}
