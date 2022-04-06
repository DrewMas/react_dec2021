const spaceX = `https://api.spacexdata.com/v3/launches/`;

let getLaunchInfo = () => {
    return fetch(spaceX).then(value => value.json());
}

export {getLaunchInfo};
