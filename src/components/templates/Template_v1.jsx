import classes from './Template_v1.module.css';
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";


function TemplateV1() {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.card1}>
          <div className={classes.circle}>
            <img src='' />
          </div>
        </div>
        <div className={classes.card2}>
          <div className={classes.name}>
            <FaRegUser />
            <p>Full Name</p>
          </div>
          <div className={classes.jobProfile}>
            <PiHandbagFill />
            <p>Job Designation</p>
          </div>
          <div className={classes.contact}>
            <CiPhone />
            <p>111 222 333 | 111 222 333</p>
          </div>
          <div className={classes.location}>
            <MdLocationPin />
            <p>Line 1</p>
          </div>
          <div className={classes.email}>
            <MdOutlineEmail />
            <a href='email@signature.com'>email@signature.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateV1;
