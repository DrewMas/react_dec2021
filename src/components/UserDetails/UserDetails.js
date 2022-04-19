import './UserDetails.css';

function UserDetails({user}) {
    const {
        id,
        name,
        username,
        email,
        // address: {city, suite, zipcode, geo: {lat, lng}, street},
        phone,
        website,
        // company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div className={'userDetails-wrapper'}>
            <div className={'userDetails'}>
                <h3>{id} - {name}</h3>
                <p>Username - {username}, email address - {email}</p>
                <h4>Address:</h4>
                {/*<p>Street: {street}</p>*/}
                {/*<p>Suite: {suite}</p>*/}
                {/*<p>City: {city}</p>*/}
                {/*<p>Zipcode: {zipcode}</p>*/}
                {/*<h5>Geo: {lat} - {lng}</h5>*/}
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h5>Company:</h5>
                {/*<p>Name: {companyName}</p>*/}
                {/*<p>Catch phrase: {catchPhrase}</p>*/}
                {/*<p>BS: {bs}</p>*/}
            </div>
            <div>
                <button className={'userDetails-btn'}>Get Posts</button>
            </div>
        </div>
    );
}

export {UserDetails};
