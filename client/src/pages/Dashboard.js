import { Button, Row } from "react-bootstrap";
import PageLayout from "../components/PageLayout";

const Dashboard = () => {
  return (
    <PageLayout>
      <Row>
        <Button
          className="text-decoration-none my-2 col-3"
          href="/template/create"
          variant="secondary"
        >
          Create Template
        </Button>
      </Row>
    </PageLayout>
  );
};
export default Dashboard;
