import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <FaChevronLeft size={22} />
    </button>
  );
}

export default GoBackBtn;
