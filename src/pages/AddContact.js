import { Link, Outlet } from "react-router-dom";

const AddContact = () => {
    return(
        <>
 <Link to="/contact">AddContact</Link>
        <Outlet/>
        </>
    );
};
export default AddContact;