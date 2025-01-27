import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Pikachu, PikachuAlerts } from "@/Constant";
import { pikachuAlertData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const PikachuAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "A wild Pikachu appeared! What do you want to do?", showCancelButton: true, cancelButtonText: "Run away!", confirmButtonText: "Throw Pokeball!", confirmButtonColor: "#5C61F2", denyButtonText: "Defeat", denyButtonColor: "#5C61F2", showDenyButton: true }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ icon: "success", title: "Yeah!", text: "Pikachu was caught!", confirmButtonColor: "#5C61F2" });
      } else if (result.dismiss) {
        SweetAlert.fire({ text: "Got away safely!", confirmButtonColor: "#5C61F2" });
      } else if (result.isDenied) {
        SweetAlert.fire({ text: "Pikachu fainted! You gained 500 XP!", confirmButtonColor: "#5C61F2" });
      }
    });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={PikachuAlerts} span={pikachuAlertData} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-12" onClick={displayAlert}>{Pikachu}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PikachuAlert;