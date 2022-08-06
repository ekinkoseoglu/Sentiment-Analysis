import logo1 from '../../../assets/1.png'; // So Angry
import logo2 from '../../../assets/2.png'; // Angry
import logo3 from '../../../assets/3.png'; // eslint-disable-next-line react/prop-types
import logo4 from '../../../assets/4.png'; // eslint-disable-next-line react/prop-types
import logo5 from '../../../assets/5.png'; // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const Emoji = ({ result ,loading }) => {
  return (
    <div className="emoji-desc">
      {loading == true ? <div className="flex gap-4 p-4 bg-white radius shadow-sm">
        <div className="anim anim-700 spin-loader w-10 h-10 border-4 border-navy-75 border-t-green-400 radius-full"></div>
      </div> :
        result == 5 ? <img src={logo5}/> : result == 4 ? <img src={logo4}/> : result == 3 ? <img src={logo3}/> : result == 2 ? <img src={logo2}/> : result == 1 ? <img src={logo1}/> :  null}
    </div>
  );
};

export default Emoji;
