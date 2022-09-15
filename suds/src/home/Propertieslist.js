import Button from 'react-bootstrap/Button';



export const PropertiesList = () => {




return <>
<h2> My Properties </h2>
<section className="allProperties">
    <div>
        <ul>
            <li> property's Image</li>
            <li> Cleaning Status</li>
            <li> Property's address</li>
            <li> Date needed</li>
        </ul>
        <Button variant="secondary">Delete</Button>{' '}
        <Button variant="secondary">Edit</Button>{' '}
        Delete button
        Edit button
    </div>
</section>

</>

} //closing bracket