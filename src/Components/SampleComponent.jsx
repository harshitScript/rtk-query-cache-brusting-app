import "styled-components/macro";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useGetNasaImageQuery } from "../app/store";
const SampleComponent = ({ displayLabel, onClose, ...props }) => {
  const { data, error, isLoading } = useGetNasaImageQuery(
    "rHQw8DtPmdvNTR24nHhKYyaehWMUz6aIrKt28cEk",
    { skip: false } // skip<BOOLEAN> DEFINES WHEN THE QUERY REQUEST IS TO BE SKIPPED.
  ); // HOOKS PROVIDE SUBSCRIPTION TO THE COMPONENT FROM THE STORE. JUST LIKE  useSelector hook.

  return (
    <div
      css={`
        height: 30px; 
      `}
      {...props}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <h1>{`The ${displayLabel}`}</h1>
        <AiOutlineCloseCircle onClick={onClose} />
      </div>
      <div>
        {data && JSON.stringify(data)}
        {error && JSON.stringify(error)}
        {isLoading && JSON.stringify(isLoading)}
      </div>
    </div>
  );
};
export default SampleComponent;
