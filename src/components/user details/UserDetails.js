import './UserDetails.css'

function UserDetails({user, getUserPosts}) {

    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;


    return (
        <div className={'userDetails-box'}>
            <div className={'userDetails'}>
                <h3>{id} - {name}</h3>
                <p>Username - {username}, email address - {email}</p>
                <h4>Address:</h4>
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zipcode: {zipcode}</p>
                <h5>Geo: {lat} - {lng}</h5>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h5>Company:</h5>
                <p>Name: {companyName}</p>
                <p>Catch phrase: {catchPhrase}</p>
                <p>BS: {bs}</p>
            </div>
            <div className={'btn-box'}>
                <button className={'userDetails-btn'} onClick={() => getUserPosts(id)}>Get posts</button>
            </div>
        </div>
    );
}

export {UserDetails}
