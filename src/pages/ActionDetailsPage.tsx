import { useParams } from 'react-router-dom';

const ActionDetailsPage = () => {
  const { actionId } = useParams();
  return <div>ActionDetailsPage {actionId}</div>;
};
export default ActionDetailsPage;
